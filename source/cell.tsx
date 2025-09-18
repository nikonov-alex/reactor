import * as Reactor from ".";
import { JSX } from "jsx-dom";


type State = string | JSX.Element;



const display = ( state: State ): JSX.Element =>
    typeof state === "string"
        ? <span>{ state }</span>
        : state;



const make = (
    initialState: State,
    args?: Partial<Reactor.Args<State>>
): Reactor.Type<State> =>
    Reactor.make( {
        initialState,
        display,
        ... args
    } );


export { State, make };