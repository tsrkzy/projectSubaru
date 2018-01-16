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
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    this.id = Bullet.id;
    Bullet.id++;
    Bullet.instances.push(this);
    
    this.x     = args.x;
    this.y     = args.y;
    this.stage = args.stage;
    this.shape = undefined;
    this.text  = new createjs.Text('Bullet', '9px Arial', 'black');
    this._assignTickListener();
  }
  
  _assignTickListener() {
    createjs.Ticker.addEventListener('tick', () => {
      
      if (this.x > 900) {
        this.die();
      }
    })
  }
  
  /**
   * remove bullets themselves goes outside of stage.
   */
  die() {
    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.text);
    let index = Bullet.instances.findIndex((i) => {
      return this.id === i.id;
    });
    Bullet.instances.splice(index, 1);
  }
}

Bullet.id        = 0;
Bullet.instances = [];

export default Bullet;