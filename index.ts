import morphdom from "morphdom";
import { Constructs } from "@nikonov-alex/functional-library";
const { local } = Constructs;



type EventHandler<State> = { ( s: State, e: Event ): State };
type Events<State> = { [name: string]: EventHandler<State> };
type EventListener = { ( e: Event ): void };
type EventSubscriptions<State> = {
    local?: Events<State>,
    window?: Events<State>,
    document?: Events<State>
}

class HTMLReactor extends HTMLElement { };
customElements.define( "reactor-viewport", HTMLReactor );

type Reactor<State, Running extends boolean = boolean> = {
    data: {
        state: State,
        root: HTMLElement
    },
    id: symbol,
    viewport: HTMLReactor,
    shadowRoot: ShadowRoot,
    events?: EventSubscriptions<State>,
    localListener: EventListener,
    windowListener: EventListener,
    documentListener: EventListener,
    running: Running
};


type Render<State> = { ( s: State ): HTMLElement };

type Args<State> = {
    initialState: State,
    render: Render<State>,
    events?: EventSubscriptions<State>,
    styles?: CSSStyleSheet
};

const init = <T>(
    reactor: Reactor<T, false>,
    args: Args<T>
): Reactor<T, false> => {
    reactor.shadowRoot.appendChild( reactor.data.root );
    if ( args.styles ) {
        reactor.shadowRoot.adoptedStyleSheets.push( args.styles );
    }
    return reactor;
};

const make = <T>( args: Args<T> ): Reactor<T, false> =>
    local( {
        state: args.initialState,
        root: args.render( args.initialState )
    }, data =>
    local( ( newState: T ) => {
        if ( data.state !== newState ) {
            data.state = newState;
            const newRoot = args.render( data.state );
            if ( !data.root.isEqualNode( newRoot ) ) {
                if ( data.root.nodeName !== newRoot.nodeName ) {
                    data.root.replaceWith( newRoot );
                    data.root = newRoot;
                }
                else {
                    morphdom( data.root, newRoot, {
                        getNodeKey: node =>
                            node instanceof HTMLReactor
                                //@ts-ignore
                                ? node.reactor : node.id,
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
        }
    }, changeState =>
    local( document.createElement( "reactor-viewport" ),
    viewport => init( {
        data,
        id: Symbol( "id" ),
        viewport,
        shadowRoot: viewport.attachShadow( { mode: "open" } ),
        events: args.events,
        localListener: ( event: Event ) => {
            if ( [ "submit" ].includes( event.type ) ) {
                event.preventDefault();
            }
            event.stopImmediatePropagation();
            //@ts-ignore
            const eventHandler = args.events.local[event.type];
            changeState( eventHandler( data.state, event ) );
        },
        windowListener: ( event: Event ) => {
            //@ts-ignore
            const eventHandler = args.events.window[event.type];
            changeState( eventHandler( data.state, event ) );
        },
        documentListener: ( event: Event ) => {
            //@ts-ignore
            const eventHandler = args.events.document[event.type];
            changeState( eventHandler( data.state, event ) );
        },
        running: false
    }, args ))));

const state = <T>( reactor: Reactor<T> ): T =>
    reactor.data.state;

const viewport = <T>( reactor: Reactor<T> ): HTMLElement => {
    if ( !reactor.viewport.isConnected ) {
        reactor.viewport.classList.add( "viewport" );
        //@ts-ignore
        reactor.viewport.reactor = reactor.id;
        return reactor.viewport;
    }
    const stub = document.createElement( "reactor-viewport" );
    stub.classList.add( "stub" );
    //@ts-ignore
    stub.reactor = reactor.id;
    //@ts-ignore
    stub.reference = new WeakRef( reactor.viewport );
    return stub;
}


const bindEvents = <State>(
    events: Events<State>,
    target: EventTarget,
    eventsHandler: { (e: Event): void }
): void =>
    Object.keys( events ).forEach( ( eventName ) =>
            target.addEventListener( eventName, eventsHandler ));

const start = <T>( reactor: Reactor<T, false> ): Reactor<T, true> => {
    bindEvents( reactor.events?.local ?? { }, reactor.shadowRoot, reactor.localListener );
    bindEvents( reactor.events?.window ?? { }, window, reactor.windowListener );
    bindEvents( reactor.events?.document ?? { }, document, reactor.documentListener );
    return { ... reactor, running: true };
};

const unbindEvents = <State>(
    events: Events<State>,
    target: EventTarget,
    eventsHandler: { (e: Event): void }
): void =>
    Object.keys( events ).forEach( ( eventName ) =>
            target.removeEventListener( eventName, eventsHandler ));

const pause = <T>( reactor: Reactor<T, true> ): Reactor<T, false> => {
    unbindEvents( reactor.events?.local ?? { }, reactor.shadowRoot, reactor.localListener );
    unbindEvents( reactor.events?.window ?? { }, window, reactor.windowListener );
    unbindEvents( reactor.events?.document ?? { }, document, reactor.documentListener );
    return { ... reactor, running: false };
};

export { make, start, pause, state, viewport, Reactor as Type };