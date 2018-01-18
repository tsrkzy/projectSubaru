"use strict";

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
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
  
    this.x     = args.x;
    this.y     = args.y;
    this.stage = args.stage;
    this.shape = undefined;
    this.text  = new createjs.Text('Bullet', '9px Arial', 'black');
    this._assignTickListener();
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
   * handle bullets got out of stage
   * @private
   */
  _assignTickListener() {
    createjs.Ticker.addEventListener('tick', () => {
  
      if (this.x > 750) {
        this.die();
      }
      if (this.x < -50) {
        this.die();
      }

    })
  }
  
  /**
   * remove bullets themselves got out of stage.
   */
  die() {
    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.text);
  
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