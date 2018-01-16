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
  
    for (let i = 0; i < Bullet.instances.length; i++) {
      let bullet = Bullet.instances[i];
      if (bullet.id === this.id) {
        Bullet.instances.splice(i, 1);
        break;
      }
    }
    
  }
}

Bullet.id        = 0;
Bullet.instances = [];

export default Bullet;