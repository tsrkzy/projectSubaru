"use strict";

const VirtualPad = require('./VirtualPad.js');

class AirCraft {
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
  
  constructor() {
    this.stage = new createjs.Stage('demoCanvas');
    this.vp    = new VirtualPad();
    
    /*
     * 座標、速度、加速度
     */
    this._x                    = 0;
    this._y                    = 0;
    this._vX                   = 0;
    this._vY                   = 0;
    this._aX                   = 0;
    this._aY                   = 0;
    this.ACCELERATION          = 0.12;
    this.DIAGONAL_ACCELERATION = this.ACCELERATION * (1 / Math.sqrt(2));
    this.FRICTION              = 0.96;
    this.assignTickListener();
    this.deploy();
  }
  
  assignTickListener() {
    createjs.Ticker.addEventListener('tick',
      () => {
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
    
    createjs.Ticker.addEventListener('tick', this.stage);
    
  }
}

module.exports = AirCraft;