import { JSX, DOMAttributes } from "jsx-dom";
import morphdom from "morphdom";


type FunctionalHandler<S extends JSX.Element> = { ( state: S, event: Event ): S | [S, Event] };


type ImperativeHandler = { ( event: Event ): void };


type FunctionalEvents<S extends JSX.Element> = Partial<{
    [event in keyof DOMAttributes<S>]: FunctionalHandler<S>
}>;

type ImperativeEvents<S extends JSX.Element, E extends FunctionalEvents<S>> = {
    [event in keyof E]: ImperativeHandler
};

const handleEvent = <S extends JSX.Element>( handler: FunctionalHandler<S>, event: Event ) => {
    const container = event.target as HTMLElement;
    const oldState = container.children[0] as S;
    const result = handler( oldState, event );
    if ( Array.isArray( result ) && 2 === result.length &&
        ( result[1] instanceof Event ) ) {
        const [ newState, event ] = result;
        if ( newState !== oldState ) {
            morphdom( oldState, newState );
        }
        container.dispatchEvent( event );
    }
    else {
        const newState = result as S;
        if ( newState !== oldState ) {
            morphdom( oldState, newState );
        }
    }
}

const map = <S extends JSX.Element, FE extends FunctionalEvents<S>>( events: FE ): ImperativeEvents<S, FE> =>
    Object.fromEntries( Object.entries( events ).map(
        ([event, handler]) => [
            event,
            ( event: Event ) => handleEvent( handler, event ) ]
    ) ) as ImperativeEvents<S, FE>;


const make = <S extends JSX.Element, FE extends FunctionalEvents<S>>(
{ children, ... props }: {
    children: S
} & FE ): JSX.Element =>
    //@ts-ignore
    <div { ... map<S, FE>( props ) }>
        { children }
    </div>;

export { make as Element, FunctionalEvents as ElementEvents };