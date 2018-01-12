"use strict";

import VirtualPad from "./VirtualPad.js";
import Emitter from "./Emitter.js";

/**
 * bullet time manager
 */
class BulletTime {
  set active(value) {
    this._active = value;
  }
  
  get active() {
    return this._active;
  }
  
  /**
   * @constructor
   */
  constructor() {
    if (typeof BulletTime.instance === 'object') {
      return BulletTime.instance;
    }
    BulletTime.instance = this;
    this.vp             = new VirtualPad();
    
    /*
     * fuel: remaining bullet time resource.
     */
    this.fuel = 0;
    /*
     * refuel: if true, fuel increases every tick.
     */
    this.refuel = true;
    /*
     * burn: if true, fuel decreases to extend bullet time.
     */
    this.burn = false;
    
    this._active = false;
    
    document.addEventListener('keydown', bulletTimeHandler);
    document.addEventListener('keyup', bulletTimeHandler);
    
    
    function bulletTimeHandler(e) {
      let keyCode   = e.keyCode;
      let press     = `${e.type}`.toLowerCase() === 'keydown';
      const KEY_TAB = 17;
      if (keyCode === KEY_TAB) {
        this.active = press;
        Emitter.emit('bulletTimeStateChange', press);
      }
    }
  }
  
  static init() {
    return new BulletTime();
  }
}

export default BulletTime;