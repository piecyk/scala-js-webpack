import {RandomGen, Time} from 'lib/bundle/scala';

import { h, render, Component } from 'preact';

console.log('random number', RandomGen.getRandomNumber);
console.log('time:', Time.simple());

RandomGen.publicMethod();

class Clock extends Component {
  render() {
    let time = new Date().toLocaleTimeString();
    return h('h1', null, [
      Time.simple(),
      time
    ]);
  }
}

render(h(Clock), document.body);
