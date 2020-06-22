import xs from 'xstream';
import { run } from '@cycle/run';
import { makeDOMDriver } from '@cycle/dom';
import { html } from "snabbdom-jsx";

function main ({ DOM }) {
  return {
    DOM: xs.of(<h1>Hello, world!</h1>)
  }
}

run(main, {
  DOM: makeDOMDriver('#app'),
});
