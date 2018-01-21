"use strict";
import Clock from "./Clock";

/**
 * main weapon base bullet class.
 */
class Bullet {
  get y() {
    return this._y;
  }
  
  set y(value) {
    this._y = value;
  }
  
  get x() {
    return this._x;
  }
  
  set x(value) {
    this._x = value;
  }
  
  /**
   * update bullets shape position with x,y
   */
  updatePos() {
    this.shape.x = this.x;
    this.shape.y = this.y;
    this.text.x  = this.x;
    this.text.y  = this.y;
  }
  
  getOutHandler() {
    if (this.x > 710) {
      this.die();
    }
    if (this.x < -10) {
      this.die();
    }
  }
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
  
    this.x     = args.x;
    this.y     = args.y;
    this.stage = args.stage;
    this.shape = undefined;
    this.clock = new Clock(this);
    this.text  = new createjs.Text('', '9px Arial', 'black');
  }
  
  /**
   * initialize static instances pool.
   * "this.constructor" means class function
   *  call it after super(); in constructor()
   *  eg.
   *    subclassExtendsBullet#initStaticProperty();
   *
   * @return {Array<Object>}
   */
  initStaticProperty() {
    if (typeof this.constructor.id === 'undefined') {
      this.constructor.id = 0;
    }
    if (!(this.constructor.instances instanceof Array)) {
      this.constructor.instances = [];
    }
    
    this.id = this.constructor.id;
    this.constructor.id++;
    this.constructor.instances.push(this);
    return this.constructor.instances;
  }
  
  /**
   * remove bullets themselves got out of stage.
   */
  die() {
    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.text);
    this.clock.allOff();
    this.text  = null;
    this.shape = null;
    this.stage = null;
  
    for (let i = 0; i < this.constructor.instances.length; i++) {
      let bullet = this.constructor.instances[i];
      if (bullet.id === this.id) {
        this.constructor.instances.splice(i, 1);
        break;
      }
    }
  }
}

export default Bullet;