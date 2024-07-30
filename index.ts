import morphdom from "morphdom";


type Render<State> = { ( s: State ): HTMLElement };

type EventHandler<State> = { ( s: State, e: Event ): State };
type LocalEventRecord<State> = EventHandler<State>;
type GlobalEventRecord<State> = { handler: EventHandler<State>, target: "window" | "document" };
type EventRecord<State> = LocalEventRecord<State> | GlobalEventRecord<State>;
type Events<State> = { [name: string]: EventRecord<State> };

type EmitPredicate<State> = { ( os: State, ns: State ): boolean };
type EventEmitter<State> = { ( s: State ): Event };
type EmitRecord<State> = {
    when: EmitPredicate<State>,
    emit: EventEmitter<State>,
    target?: "element" | "window"
}

type Reactor<State> = {
    state: State,
    render: Render<State>,
    events?: Events<State>,
    emit?: EmitRecord<State>[]

    wrapper: HTMLElement,
    eventHandler: { (e: Event): void }
}


const state = <T>( reactor: Reactor<T> ): T =>
    reactor.state;


const isGlobalEvent = <State>( record: EventRecord<State> ): record is GlobalEventRecord<State> =>
    typeof record !== "function";
const getHandler = <State>( record: EventRecord<State> ): EventHandler<State> =>
    isGlobalEvent( record ) ? record.handler : record;

const make = <T>( args: {
    initialState: T,
    render: Render<T>,
    events?: Events<T>,
    emit?: EmitRecord<T>[],
    redraw?: "refresh" | "merge",
    id?: string,
    className?: string,
} ): Reactor<T> => {
    //@ts-ignore
    const reactor: Reactor<T> = {
        state: args.initialState,
        render: args.render,
        events: args.events,
        emit: args.emit,
        wrapper: document.createElement( "div" )
    }
    function eventHandler( event: Event ) {
        //@ts-ignore
        const record = reactor.events[event.type];
        if ( !isGlobalEvent( record ) ) {
            if ( [ "submit" ].includes( event.type ) ) {
                event.preventDefault();
            }
            event.stopImmediatePropagation();
        }

        const handler = getHandler( record );
        changeState( handler( reactor.state, event ) );
    }
    reactor.eventHandler = eventHandler;
    if ( args.id ) {
        reactor.wrapper.id = args.id;
    }
    if ( args.className ) {
        reactor.wrapper.className = args.className;
    }
    let root = reactor.render( reactor.state );
    reactor.wrapper.appendChild( root );
    let deferredRedraw = false;

    function maybeEmitEvents( oldState: T ) {
        if ( reactor.emit ) {
            for ( const record of reactor.emit ) {
                if ( record.when( oldState, reactor.state ) ) {
                    const target = "window" === record.target
                        ? window
                        : reactor.wrapper;
                    target.dispatchEvent( record.emit( reactor.state ) );
                }
            }
        }
    }

    function redraw() {
        const rendered = reactor.render( reactor.state );
        if ( root.isEqualNode( rendered ) ) {
            return;
        }
        if ( args.redraw && "refresh" === args.redraw || root.nodeName !== rendered.nodeName ) {
            root.replaceWith( rendered );
            root = rendered;
        }
        else {
            morphdom( root, rendered, {
                onBeforeElUpdated: ( fromEl, toEl ) =>
                    !fromEl.isEqualNode( toEl )
            } );
        }
    }

    function changeState( newState: T ) {
        if ( reactor.state === newState ) {
            return;
        }
        const oldState = reactor.state;
        reactor.state = newState;
        if ( !deferredRedraw ) {
            setTimeout( () => {
                redraw();
                deferredRedraw = false;
            }, 0 );
            deferredRedraw = true;
        }
        maybeEmitEvents( oldState );
    }

    if ( reactor.events ) {
        Object.entries( reactor.events ).forEach( ([name, record]) => {
            const target = isGlobalEvent( record )
                ? "window" === record.target
                    ? window
                    : document
                : reactor.wrapper;
            target.addEventListener( name, eventHandler, true )
        } );
    }

    return reactor;
};


const run = <T>( props: { reactor: Reactor<T> } ): HTMLElement => {
    props.reactor.wrapper.remove();
    return props.reactor.wrapper;
}

const stop = <T>( reactor: Reactor<T> ): Reactor<T> => {
    reactor.wrapper.remove();
    return reactor;
}


export { Reactor, make, state, run, stop };