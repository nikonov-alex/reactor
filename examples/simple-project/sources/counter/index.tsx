import * as Reactor from "@nikonov-alex/reactor";
import styles from "./styles.sass"


const stylesheet = new CSSStyleSheet();
stylesheet.replace( styles );




type State = number;




const render = ( state: State ): HTMLElement =>
    <div>
        <div>Counter: { state }</div>
        <button id="increment"
                className="increment-button">Increment</button>
    </div> as HTMLElement;




const increment = ( state: State, event: Event ): State =>
    "increment" === (event.target as HTMLElement).id
        ? state + 1
        : state;




const make = (): Reactor.Type<State> =>
    Reactor.make( {
        initialState: 1,
        render,
        events: {
            click: increment
        },
        styles: stylesheet
    } );


export { make };