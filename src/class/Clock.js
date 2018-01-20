"use strict";

class Clock {
  constructor(instance) {
    this.instance = instance;
    this.handlers = [];
  }
  
  onTick(fn) {
    if (typeof fn !== 'function') {
      throw new Error('fn must be a function');
    }
    let handler = fn.bind(this.instance);
    createjs.Ticker.addEventListener('tick', handler);
    this.handlers.push(handler);
    let index = this.handlers.length;
    return index
  }
  
  allOff() {
    this.handlers.forEach((handler) => {
      createjs.Ticker.removeEventListener('tick', handler);
    })
  }
}

export default Clock;