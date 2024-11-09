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
type EmitRecord<State> = { when: EmitPredicate<State>, emit: EventEmitter<State> | EventEmitter<State>[] }

class HTMLReactor extends HTMLElement { };
customElements.define( "reactor-viewport", HTMLReactor );

type Args<State> = {
    initialState: State,
    render: Render<State>,
    events?: Events<State>,
    emit?: EmitRecord<State>[],
    styles?: CSSStyleSheet,
    debug?: boolean
};

class Reactor<State> {
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
    
    private _deferredRedraw = false;
    
    private constructor( args: Args<State> ) {
        this._id = uuidv4();
        this._state = args.initialState;
        this._render = args.render;
        
        this._viewport = document.createElement( "reactor-viewport" );
        this._viewport.classList.add( "viewport" );
        this._viewport.dataset.id = this._id;
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
        
        if ( args.events ) {
            for ( const event in args.events ) {
                if ( Object.hasOwn( args.events, event ) ) {
                    if ( typeof args.events[event] === "function" ) {
                        this._localEvents.set( event, args.events[event] );
                    }
                    else {
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
                onBeforeNodeAdded: node =>
                    node instanceof HTMLReactor &&
                    node.classList.contains( "stub" )
                        //@ts-ignore
                        ? node.reference.deref()
                        : node,
                onBeforeElUpdated: ( fromEl, toEl ) =>
                    fromEl.isEqualNode( toEl )
                        ? false
                    : toEl instanceof HTMLReactor
                        ? toEl.classList.contains( "viewport" )
                            ? toEl
                            //@ts-ignore
                            : toEl.reference.deref()
                        : true
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
    
    private _start() {
        for ( const eventName of this._localEvents.keys() ) {
            this._shadowRoot.addEventListener( eventName, this._localEventHandler, true )
        };
        for ( const eventName of this._globalEvents.keys() ) {
            window.addEventListener( eventName, this._globalEventHandler, true )
        };
    }
    
    private _stop() {
        for ( const eventName of this._localEvents.keys() ) {
            this._shadowRoot.removeEventListener( eventName, this._localEventHandler, true )
        };
        for ( const eventName of this._globalEvents.keys() ) {
            window.removeEventListener( eventName, this._globalEventHandler, true )
        };
    }
}

const make = <T>( args: Args<T> ): Reactor<T> =>
    //@ts-ignore
    new Reactor( args );

const state = <T>( reactor: Reactor<T> ): T =>
    //@ts-ignore
    reactor._state;

const viewport = <T>( reactor: Reactor<T> ): HTMLElement => {
    //@ts-ignore
    if ( !reactor._viewport.isConnected ) {
        //@ts-ignore
        return reactor.viewport;
    }
    const stub = document.createElement( "reactor-viewport" );
    stub.classList.add( "stub" );
    //@ts-ignore
    stub.dataset.id = reactor._id;
    //@ts-ignore
    stub.reference = new WeakRef( reactor._viewport );
    return stub;
}

const start = <T>( reactor: Reactor<T> ): Reactor<T> => {
    //@ts-ignore
    reactor._start();
    return reactor;
};

const stop = <T>( reactor: Reactor<T> ): Reactor<T> => {
    //@ts-ignore
    reactor._stop();
    return reactor;
};

export { make, start, stop, state, viewport, Reactor as Type };
