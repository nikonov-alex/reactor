import * as Reactor from "@nikonov-alex/reactor";
import * as Counter from "./counter";


window.counter = Counter.make();
document.body.appendChild( Reactor.viewport( window.counter ) );