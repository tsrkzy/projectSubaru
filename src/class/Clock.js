'use strict';

class Clock {
  constructor(instance) {
    this.instance = instance;
    this.handlers = [];
  }

  getTick() {
    const tick = createjs.Ticker.getTicks();
    return tick;
  }

  static getTick() {
    return this.instance.getTick();
  }

  onTick(fn) {
    if (typeof fn !== 'function') {
      throw new Error('fn must be a function');
    }
    const handler = fn.bind(this.instance);
    createjs.Ticker.addEventListener('tick', handler);
    this.handlers.push(handler);
    const index = this.handlers.length;
    return index;
  }

  allOff() {
    this.handlers.forEach((handler) => {
      createjs.Ticker.removeEventListener('tick', handler);
    });
    this.instance = null;
    this.handlers = null;
  }
}

export default Clock;
