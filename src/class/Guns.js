"use strict";

/**
 * main weapon abstract class.
 */
class Guns {
  get coolTime() {
    return this._coolTime;
  }
  
  set coolTime(value) {
    this._coolTime = value;
  }
  
  constructor() {
    this.coolTime  = 1000;
    this.prevFired = 0;
  }
  
  trigger() {
    throw new Error('not implemented.');
  }
}

export default Guns;