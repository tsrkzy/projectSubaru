"use strict";

import VirtualPad from "./VirtualPad.js";
import BulletTime from "./BulletTime.js";
import Emitter from "./Emitter.js";

const sqrt2 = Math.sqrt(2);

/**
 * Your AirCraft Class.
 * moves inertial, equip weapons.
 */
class AirCraft {
  
  /*
   * getter and setter
   */
  get ACCELERATION() {
    return BulletTime.active ? 0.25 : 1;
  }
  
  get DIAGONAL_ACCELERATION() {
    return this.ACCELERATION * (1 / sqrt2);
  }
  
  get FRICTION() {
    return BulletTime.active ? 1 : 0.85;
  }
  
  get aY() {
    return this._aY;
  }
  
  set aY(value) {
    this._aY = value;
  }
  
  get aX() {
    return this._aX;
  }
  
  set aX(value) {
    this._aX = value;
  }
  
  get vY() {
    return this._vY;
  }
  
  set vY(value) {
    this._vY = value;
  }
  
  get vX() {
    return this._vX;
  }
  
  set vX(value) {
    this._vX = value;
  }
  
  get y() {
    return this._y || 0;
  }
  
  set y(value) {
    this._y = value;
  }
  
  get x() {
    return this._x || 0;
  }
  
  set x(value) {
    this._x = value;
  }
  
  /**
   * initialize parameters, set listeners
   * @constructor
   */
  constructor() {
    this.stage = new createjs.Stage('demoCanvas');
    this.vp    = new VirtualPad();
    BulletTime.init();
    
    /*
     * position, velocity, acceleration, frictional damping
     */
    this._x  = 0;
    this._y  = 0;
    this._vX = 0;
    this._vY = 0;
    this._aX = 0;
    this._aY = 0;
    
    this.assignTickListener();
    this.deploy();
  
    Emitter.on('bulletTimeStateChange', (status) => {
      this.vX = this.vX * (status ? 0.5 : 2);
      this.vY = this.vY * (status ? 0.5 : 2);
    })
  }
  
  /**
   * set listeners
   * kicks every tick
   */
  assignTickListener() {
    createjs.Ticker.addEventListener('tick', () => {
      
      /*
       * moving control
       */
      this.aX = 0;
      this.aY = 0;
      if (this.vp.keyDown_Right && !this.vp.keyDown_Left) {
        this.aX = this.vp.keyDownOnly_Right ? this.ACCELERATION : this.DIAGONAL_ACCELERATION;
      }
      if (this.vp.keyDown_Left && !this.vp.keyDown_Right) {
        this.aX = -1 * (this.vp.keyDownOnly_Left ? this.ACCELERATION : this.DIAGONAL_ACCELERATION);
      }
      if (this.vp.keyDown_Down && !this.vp.keyDown_Up) {
        this.aY = this.vp.keyDownOnly_Down ? this.ACCELERATION : this.DIAGONAL_ACCELERATION;
      }
      if (this.vp.keyDown_Up && !this.vp.keyDown_Down) {
        this.aY = -1 * (this.vp.keyDownOnly_Up ? this.ACCELERATION : this.DIAGONAL_ACCELERATION);
      }
      this.vX += this.aX;
      this.vY += this.aY;
      this.vX *= this.FRICTION;
      this.vY *= this.FRICTION;
      this.x += this.vX;
      this.y += this.vY;
      this.shape.x = this.x;
      this.shape.y = this.y;
    });
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('lightgray').drawRect(this.x, this.y, 30, 10);
    this.stage.addChild(this.shape);
  
    createjs.Ticker.addEventListener('tick', this.stage)
  }
}

export default AirCraft;