"use strict";

import {EventEmitter} from "events";

/**
 * Events#EventEmitter Wrapper.
 * At first, call #init.
 *
 * Use static.
 * eg. let g = require(...)
 *     g.init();
 *
 * "tick" on createjs.Ticker#tick
 *
 * @singleton
 */
class Emitter extends EventEmitter {
  
  /**
   *
   * @constructor
   * @returns {*}
   */
  constructor() {
    /*
     * @singleton
     */
    if (typeof Emitter.instance === 'object') {
      return Emitter.instance;
    }
    
    super();
    Emitter.instance = this;
  }
  
  emit(...args) {
    super.emit(...args);
  }
  
  on(...args) {
    super.on(...args)
  }
  
  static get() {
    return new Emitter();
  }
  
  static emit(...args) {
    Emitter.get().emit(...args);
  }
  
  static on(...args) {
    Emitter.get().on(...args);
  }
  
}

export default Emitter;