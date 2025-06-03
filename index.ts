import morphdom from "morphdom";
import { v4 as uuidv4 } from 'uuid';

type Render<State> = { ( s: State ): HTMLElement };
type EventHandler<State> = { ( s: State, e: Event ): State };
type EventHandlerRecord<State> = {
    handler: EventHandler<State>,
    options?: AddEventListenerOptions
}
type Events<State> = { [name: string]: EventHandler<State> | {
        handler: EventHandler<State>,
        target?: "local" | "window" | "document",
        options?: AddEventListenerOptions
    } };

type EmitPredicate<State> = { ( os: State, ns: State ): boolean };
type EventEmitter<State> = { ( s: State, os: State ): Event };
type EmitRecord<State> = { when: EmitPredicate<State>, emit: EventEmitter<State> | EventEmitter<State>[] };

type RequestPredicate<State> = { ( os: State | null, ns: State ): boolean };
type RequestEmitter<State> = { ( s: State ): Request };
type RequestResponse<State> = {
    request: RequestEmitter<State>,
    response?: { ( s: State, response: Response, body: string ): State },
    error?: { ( s: State, error: Error ): State },
    retry?: number
};
type RequestSettings<State> = RequestEmitter<State> | RequestResponse<State>;
type RequestRecord<State> = { when: RequestPredicate<State>, send: RequestSettings<State> | RequestSettings<State>[] };

type ResizeHandler<State> = { ( s: State, e: ResizeObserverEntry[] ): State };

class HTMLReactor extends HTMLElement { }
customElements.define( "reactor-viewport", HTMLReactor );

type DOMMode = "light" | "shadow";

type ValidateFunc<State> = { ( s: State ): [ValidityStateFlags, string] };
type Validation<State> = {
    validate: ValidateFunc<State>,
    internals: ElementInternals,
    formValue: { ( s: State ): string },
};

type Args<State> = {
    initialState: State,
    render: Render<State>,
    events?: Events<State>,
    onResize?: ResizeHandler<State>,
    emit?: EmitRecord<State>[],
    http?: RequestRecord<State>[],
    styles?: CSSStyleSheet,
    id?: string,
    debug?: boolean,
    validation?: Validation<State>,
    dommode?: DOMMode,
    container?: HTMLElement
};

class Core<State> {
    private _id: string;
    private _state: State;
    private _render: Render<State>;
    private _viewport: HTMLElement;
    private _container: HTMLElement;
    private _root: HTMLElement;
    private _emit: Map<EmitPredicate<State>, Set<EventEmitter<State>>> = new Map();
    private _http: Map<RequestPredicate<State>, Set<RequestSettings<State>>> = new Map();
    private _globalEvents: Map<string, EventHandlerRecord<State>> = new Map();
    private _localEvents: Map<string, EventHandlerRecord<State>> = new Map();
    private _documentEvents: Map<string, EventHandlerRecord<State>> = new Map();
    private _debug: boolean;
    private _resizeObserver?: ResizeObserver;
    private _resizeUserHandler?: ResizeHandler<State>;
    private _dommode: DOMMode;
    private _validation?: Validation<State>;

    private _deferredRedraw = false;

    public constructor( args: Args<State> ) {
        this._id = uuidv4();
        this._state = args.initialState;
        this._render = args.render;

        this._viewport = document.createElement( "reactor-viewport" );
        this._viewport.classList.add( "viewport" );
        this._viewport.dataset.id = this._id;
        if ( args.id ) {
            this._viewport.id = args.id;
        }
        this._dommode = args.dommode || "shadow";
        const parent = "shadow" === this._dommode
            ? this._viewport.attachShadow( {
                mode: "closed",
                //@ts-ignore
                clonable: true,
                delegatesFocus: true
            } )
            : this._viewport;
        this._container = args.container
            ? args.container
            : document.createElement( "div" );
        parent.appendChild( this._container );
        this._root = this._render( this._state );
        this._container.appendChild( this._root );
        if ( args.styles ) {
            if ( parent instanceof ShadowRoot ) {
                parent.adoptedStyleSheets.push(args.styles);
            } else {
                document.adoptedStyleSheets.push( args.styles );
            }
        }
        this._debug = !!(args.debug);

        this._globalEventHandler = this._globalEventHandler.bind( this );
        this._documentEventHandler = this._documentEventHandler.bind( this );
        this._localEventHandler = this._localEventHandler.bind( this );
        this._resizeHandler = this._resizeHandler.bind( this );

        if ( args.events ) {
            for ( const event in args.events ) {
                if ( Object.hasOwn( args.events, event ) ) {
                    const eventData = args.events[event];
                    if ( typeof eventData === "function" ) {
                        //@ts-ignore
                        this._localEvents.set( event, {
                            handler: eventData
                        } );
                    }
                    else {
                        if ( !Object.hasOwn( eventData, "target" ) || "local" === eventData.target ) {
                            this._localEvents.set( event, {
                                handler: eventData.handler,
                                options: eventData.options
                            } );
                        }
                        else if ( "window" === eventData.target ) {
                            //@ts-ignore
                            this._globalEvents.set(event, {
                                handler: eventData.handler,
                                options: eventData.options
                            });
                        }
                        else {
                            this._documentEvents.set(event, {
                                handler: eventData.handler,
                                options: eventData.options
                            });
                        }
                    }
                }
            }
        }

        if ( args.emit ) {
            for ( const record of args.emit ) {
                this._emit.set( record.when, new Set(
                    Array.isArray( record.emit )
                        ? record.emit
                        : [ record.emit ] ) );
            }
        }
        if ( args.http ) {
            for ( const record of args.http ) {
                this._http.set( record.when, new Set(
                    Array.isArray( record.send )
                        ? record.send
                        : [ record.send ] ) );
            }
        }
        for ( const eventName of this._localEvents.keys() ) {
            this._container.addEventListener( eventName, this._localEventHandler, this._localEvents.get( eventName )!.options || true )
        }
        for ( const eventName of this._globalEvents.keys() ) {
            window.addEventListener( eventName, this._globalEventHandler, this._globalEvents.get( eventName )!.options || true )
        }
        for ( const eventName of this._documentEvents.keys() ) {
            this._container.ownerDocument.addEventListener( eventName, this._documentEventHandler, this._documentEvents.get( eventName )!.options || true )
        }

        if ( args.onResize ) {
            this._resizeUserHandler = args.onResize;
            this._resizeObserver = new ResizeObserver( this._resizeHandler );
            this._resizeObserver.observe( this._viewport );
        }

        this._sendRequests( null );

        this._validation = args.validation;
        this._maybeValidate();
    }

    public destructor() {
        for ( const eventName of this._localEvents.keys() ) {
            this._container.removeEventListener( eventName, this._localEventHandler, this._localEvents.get( eventName )!.options || true )
        }
        for ( const eventName of this._globalEvents.keys() ) {
            window.removeEventListener( eventName, this._globalEventHandler, this._globalEvents.get( eventName )!.options || true )
        }
        for ( const eventName of this._documentEvents.keys() ) {
            this._container.ownerDocument.removeEventListener( eventName, this._documentEventHandler, this._documentEvents.get( eventName )!.options || true )
        }
        if ( this._resizeObserver ) {
            this._resizeObserver.unobserve( this._viewport );
        }
    }

    private _maybeValidate() {
        if ( this._validation ) {
            const [ flags, message ] = this._validation.validate( this._state );
            if ( this._validityDiffers( flags ) ) {
                this._validation.internals.setValidity( flags, message );
            }
            this._validation.internals.setFormValue( this._validation.formValue( this._state ) );
        }
    }

    private _validityDiffers( flags: ValidityStateFlags ) {
        const validity = this._validation!.internals.validity;
        return validity.valueMissing !== ( flags.valueMissing ?? false ) ||
            validity.stepMismatch !== ( flags.stepMismatch ?? false ) ||
            validity.badInput !== ( flags.badInput ?? false ) ||
            validity.customError !== ( flags.customError ?? false ) ||
            validity.patternMismatch !== ( flags.patternMismatch ?? false ) ||
            validity.rangeOverflow !== ( flags.rangeOverflow ?? false ) ||
            validity.rangeUnderflow !== ( flags.rangeUnderflow ?? false ) ||
            validity.tooLong !== ( flags.tooLong ?? false ) ||
            validity.tooShort !== ( flags.tooShort ?? false ) ||
            validity.typeMismatch !== ( flags.typeMismatch ?? false );
    }

    private _resizeHandler( entries: ResizeObserverEntry[] ) {
        this._changeState(
            //@ts-ignore
            this._resizeUserHandler(
                this._state, entries ) );
    }

    private _handleEvent( event: Event, handler: EventHandler<State> ) {
        const result = handler( this._state, event );
        if ( Array.isArray( result ) && 2 === result.length && result[1] instanceof Event ) {
            this._changeState( result[0] );
            this._dispatchEvent( result[1] );
        }
        else {
            this._changeState( result as State );
        }
    }

    private _localEventHandler( event: Event ) {
        if ( this._debug ) {
            console.log( "nikonov-components: local event catch", event );
        }

        if ( [ "submit" ].includes( event.type ) ) {
            event.preventDefault();
        }
        event.stopImmediatePropagation();

        this._handleEvent(
            event,
            this._localEvents.get(event.type)!.handler as EventHandler<State>
        );
    }

    private _globalEventHandler( event: Event ) {
        if ( this._debug ) {
            console.log( "nikonov-components: global event catch", event );
        }
        this._handleEvent(
            event,
            this._globalEvents.get(event.type)!.handler as EventHandler<State>
        );
    }

    private _documentEventHandler( event: Event ) {
        if ( this._debug ) {
            console.log( "nikonov-components: document event catch", event );
        }
        this._handleEvent(
            event,
            this._documentEvents.get(event.type)!.handler as EventHandler<State>
        );
    }

    private _redraw() {
        const rendered = this._render( this._state );
        if ( this._debug ) {
            console.log( "nikonov-components: redraw", this._root.cloneNode( true ), rendered.cloneNode( true ) );
        }
        if ( this._root.isEqualNode( rendered ) ) {
            return;
        }
        if ( this._root.nodeName !== rendered.nodeName ) {
            this._root.replaceWith( rendered );
            this._root = rendered;
        }
        else {
            morphdom( this._root, rendered, {
                getNodeKey: node =>
                    node instanceof HTMLReactor
                        //@ts-ignore
                        ? node.dataset.id : node.id,
                onBeforeNodeAdded: node => {
                    if ( this._debug ) {
                        console.log(
                            "nikonov-components: element added",
                            node.cloneNode( true )
                        );
                    }
                    return node instanceof HTMLReactor &&
                    node.classList.contains( "stub" )
                        //@ts-ignore
                        ? node.reference.deref()
                        : node
                },
                //@ts-ignore
                onBeforeElUpdated: ( fromEl, toEl ) => {
                    if ( this._debug ) {
                        console.log(
                            "nikonov-components: element update",
                            fromEl.cloneNode( true ),
                            toEl.cloneNode( true )
                        );
                    }
                    if ( fromEl.isEqualNode( toEl ) ) {
                        return false;
                    }
                    if ( !(toEl instanceof HTMLReactor) ) {
                        return fromEl;
                    }
                    if ( toEl.dataset.id === fromEl.dataset.id ) {
                        return false;
                    }
                    if ( toEl.classList.contains( "viewport" ) ) {
                        return toEl;
                    }
                    //@ts-ignore
                    fromEl.replaceWith( toEl.reference.deref() );
                    return false;
                }
            } );
        }
    }

    private _dispatchEvent( event: Event ) {
        this._viewport.dispatchEvent( event );
    }

    private _emitEvents( oldState: State ) {
        for ( let [when, emitters] of this._emit ) {
            if ( when( oldState, this._state ) ) {
                for ( let emitter of emitters ) {
                    this._dispatchEvent( emitter( this._state, oldState ) );
                }
            }
        }
    }

    private async _sendRequest( record: RequestSettings<State> ) {
        const emitter = typeof record === "function"
            ? record
            : record.request;
        const request = emitter( this._state );
        const retry = "retry" in record && !!record.retry
            ? record.retry
            : 1;
        let response: Response | null = null;
        for ( let i = 0; i < retry; i++ ) {
            try {
                response = await fetch( request );
                break;
            }
            catch ( error ) {
                if ( i < retry - 1 ) {
                    continue;
                }
                else if ( "error" in record && !!record.error ) {
                    this._changeState( record.error( this._state, error as Error ) );
                }
                return;
            }
        }
        if ( "response" in record && !!record.response || "error" in record && !!record.error ) {
            response = response as Response;
            let body: string = "";
            try {
                if ( !response.ok ) {
                    throw new Error( response.statusText );
                }
                body = await response.text();
            }
            catch ( error ) {
                if ( "error" in record && !!record.error ) {
                    this._changeState( record.error( this._state, error as Error ) );
                }
                return;
            }
            if ( "response" in record && !!record.response ) {
                this._changeState(record.response( this._state, response, body ));
            }
        }
    }

    private _sendRequests( oldState: State | null ) {
        for ( let [when, settings] of this._http ) {
            if ( when( oldState, this._state ) ) {
                settings.forEach( record => {
                    this._sendRequest( record );
                } );
            }
        }
    }

    private _changeState( newState: State ) {
        if ( this._state === newState ) {
            return;
        }
        const oldState = this._state;
        this._state = newState;
        if ( !this._deferredRedraw ) {
            setTimeout( () => {
                this._redraw();
                this._deferredRedraw = false;
            }, 0 );
            this._deferredRedraw = true;
        }
        this._emitEvents( oldState );
        this._sendRequests( oldState );
        this._maybeValidate();
        if ( this._debug ) {
            console.log( "nikonov-components: transition from", oldState, "to", this._state );
        }
    }
}

const registry = new FinalizationRegistry( ( core: Core<any> ) => {
    //@ts-ignore
    if ( core._debug ) {
        //@ts-ignore
        console.log( "nikonov-components gc:", core._id, JSON.parse( JSON.stringify( core._state )));
    }
    core.destructor();
} );

class Reactor<State> {
    private _core: Core<State>;

    private constructor( args: Args<State> ) {
        this._core = new Core( args );
        registry.register( this, this._core );
    }
}

const make = <T>( args: Args<T> ): Reactor<T> =>
    //@ts-ignore
    new Reactor( args );

const state = <T>( reactor: Reactor<T> ): T =>
    //@ts-ignore
    reactor._core._state;

const viewport = <T>( reactor: Reactor<T> ): HTMLElement => {
    //@ts-ignore
    if ( !reactor._core._viewport.isConnected ) {
        //@ts-ignore
        return reactor._core._viewport;
    }
    const stub = document.createElement( "reactor-viewport" );
    stub.classList.add( "stub" );
    //@ts-ignore
    stub.dataset.id = reactor._core._id;
    //@ts-ignore
    stub.reference = new WeakRef( reactor._core._viewport );
    return stub;
}



export { make, state, viewport, Reactor as Type, Args };
