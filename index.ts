import morphdom from "morphdom";
import { v4 as uuidv4 } from 'uuid';

type Render<State> = { ( s: State ): HTMLElement };
type EventHandler<State> = { ( s: State, e: Event ): State };
type Events<State> = { [name: string]: EventHandler<State> | {
    handler: EventHandler<State>,
    target: "window"
} };

type EmitPredicate<State> = { ( os: State, ns: State ): boolean };
type EventEmitter<State> = { ( s: State ): Event };
type EmitRecord<State> = { when: EmitPredicate<State>, emit: EventEmitter<State> | EventEmitter<State>[] };

type ResizeHandler<State> = { ( s: State, e: ResizeObserverEntry[] ): State };

class HTMLReactor extends HTMLElement { };
customElements.define( "reactor-viewport", HTMLReactor );

type Args<State> = {
    initialState: State,
    render: Render<State>,
    events?: Events<State>,
    onResize?: ResizeHandler<State>,
    emit?: EmitRecord<State>[],
    styles?: CSSStyleSheet,
    id?: string,
    debug?: boolean
};

class Core<State> {
    private _id: string;
    private _state: State;
    private _render: Render<State>;
    private _viewport: HTMLElement;
    private _shadowRoot: ShadowRoot;
    private _root: HTMLElement;
    private _emit: Map<EmitPredicate<State>, Set<EventEmitter<State>>> = new Map();
    private _globalEvents: Map<string, EventHandler<State>> = new Map();
    private _localEvents: Map<string, EventHandler<State>> = new Map();
    private _debug: boolean;
    private _resizeObserver?: ResizeObserver;
    private _resizeUserHandler?: ResizeHandler<State>;
    
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
        this._shadowRoot = this._viewport.attachShadow( {
            mode: "closed",
            //@ts-ignore
            clonable: true,
            delegatesFocus: true
        } );
        this._root = this._render( this._state );
        this._shadowRoot.appendChild( this._root );
        if ( args.styles ) {
            this._shadowRoot.adoptedStyleSheets.push( args.styles );
        }
        this._debug = !!(args.debug);
        
        this._globalEventHandler = this._globalEventHandler.bind( this );
        this._localEventHandler = this._localEventHandler.bind( this );
        this._resizeHandler = this._resizeHandler.bind( this );
        
        if ( args.events ) {
            for ( const event in args.events ) {
                if ( Object.hasOwn( args.events, event ) ) {
                    if ( typeof args.events[event] === "function" ) {
                        //@ts-ignore
                        this._localEvents.set( event, args.events[event] );
                    }
                    else {
                        //@ts-ignore
                        this._globalEvents.set( event, args.events[event].handler );
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
        for ( const eventName of this._localEvents.keys() ) {
            this._shadowRoot.addEventListener( eventName, this._localEventHandler, true )
        }
        for ( const eventName of this._globalEvents.keys() ) {
            window.addEventListener( eventName, this._globalEventHandler, true )
        }
        
        if ( args.onResize ) {
            this._resizeUserHandler = args.onResize;
            this._resizeObserver = new ResizeObserver( this._resizeHandler );
            this._resizeObserver.observe( this._viewport );
        }
    }
    
    public destructor() {
        for ( const eventName of this._localEvents.keys() ) {
            this._shadowRoot.removeEventListener( eventName, this._localEventHandler, true )
        }
        for ( const eventName of this._globalEvents.keys() ) {
            window.removeEventListener( eventName, this._globalEventHandler, true )
        }
        if ( this._resizeObserver ) {
            this._resizeObserver.unobserve( this._viewport );
        }
    }
    
    private _resizeHandler( entries: ResizeObserverEntry[] ) {
        this._changeState(
        //@ts-ignore
        this._resizeUserHandler(
        this._state, entries ) );
    }
    
    private _localEventHandler( event: Event ) {
        if ( this._debug ) {
            console.log( "nikonov-components: local event catch", event );
        }
        
        if ( [ "submit" ].includes( event.type ) ) {
            event.preventDefault();
        }
        event.stopImmediatePropagation();

        const handler = this._localEvents.get(event.type) as EventHandler<State>;
        this._changeState( handler( this._state, event ) );
    }

    private _globalEventHandler( event: Event ) {
        if ( this._debug ) {
            console.log( "nikonov-components: global event catch", event );
        }
        const handler = this._globalEvents.get(event.type) as EventHandler<State>;
        this._changeState( handler( this._state, event ) );
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

    private _emitEvents( oldState: State ) {
        for ( let [when, emitters] of this._emit ) {
            if ( when( oldState, this._state ) ) {
                for ( let emitter of emitters ) {
                    this._viewport.dispatchEvent( emitter( this._state ) );
                }
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

export { make, state, viewport, Reactor as Type };
