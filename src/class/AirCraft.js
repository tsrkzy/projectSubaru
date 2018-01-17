"use strict";

import VirtualPad from "./VirtualPad.js";
import Gatling from "./Gatling";
import Enemy from "./Enemy";
import EnemyBullet from "./EnemyBullet";

const SQRT2    = Math.sqrt(2);
const WIDTH    = 30;
const HEIGHT   = 10;
const HIT_AREA = 2;


/**
 * Your AirCraft Class.
 * moves inertial, equip weapons.
 */
class AirCraft {
  
  /*
   * getter and setter
   */
  get ACCELERATION() {
    return 1
  }
  
  get DIAGONAL_ACCELERATION() {
    return this.ACCELERATION * (1 / SQRT2);
  }
  
  get FRICTION() {
    return 0.85;
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
   * @param {Object} args
   *   .stage: createjs.Stage
   */
  constructor(args) {
  
    this.stage = args.stage;
  
    this.vp    = new VirtualPad();
    
    /*
     * position, velocity, acceleration, frictional damping
     */
    this._x       = 0;
    this._y       = 0;
    this._vX      = 0;
    this._vY      = 0;
    this._aX      = 0;
    this._aY      = 0;
    this._gun     = new Gatling(this);
    this._missile = undefined;
    
    this.assignTickListener();
    this.deploy();
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
      if (this.x < 30) this.x = 30;
      if (this.y < 30) this.y = 30;
      if (this.x > 680) this.x = 680;
      if (this.y > 480) this.y = 480;
      this.shape.x = this.x;
      this.shape.y = this.y;
  
      this.text.x = this.shape.x;
      this.text.y = this.shape.y;
      this.text.text = `airCraft: {${Math.floor(this.x)},${Math.round(this.y)}}`;
      
      /*
       * firing weapons
       */
      this._gun.trigger(this);
  
      /*
       * hit area
       */
      this.hitArea.x = this.shape.x;
      this.hitArea.y = this.shape.y;
  
      /*
       * test hitting with enemies
       */
      for (let i = 0; i < Enemy.instances.length; i++) {
    
        /*
         * relative axes from enemy to hitArea(aircraft)-origin (zero-point)
         */
        let e       = Enemy.instances[i];
        let pos     = e.shape.localToLocal(0, 0, this.hitArea);
        let hitTest = e.shape.hitTest(pos.x, pos.y);
        if (hitTest) {
          console.log('hit!');
        }
      }
  
      /*
       * test hitting with enemyBullets
       */
      for (let i = 0; i < Object.keys(EnemyBullet.instances || {}).length; i++) {
    
        /*
         * relative axes from enemyBullets to hitArea(aircraft)-origin (zero-point)
         */
        let enemyBullets = EnemyBullet.instances[Object.keys(EnemyBullet.instances)[i]];
        for (let j = 0; j < enemyBullets.length; j++) {
          let enemyBullet = enemyBullets[j];
          let pos         = enemyBullet.shape.localToLocal(0, 0, this.hitArea);
          let hitTest     = enemyBullet.shape.hitTest(pos.x, pos.y);
          if (hitTest) {
            console.log('hit!');
          }
        }
      }
  
      Enemy.instances.forEach((e) => {
      })
    });
  }
  
  deploy() {
    /*
     * aircraft
     */
    this.shape = new createjs.Shape();
    this.shape.graphics.setStrokeStyle(1).beginStroke('lightgray').drawRect(this.x - WIDTH / 2, this.y - HEIGHT / 2, WIDTH, HEIGHT);
  
    /*
     * hit area
     */
    this.hitArea = new createjs.Shape();
    this.hitArea.graphics.beginFill('red').drawRect(this.x - HIT_AREA / 2, this.y - HIT_AREA / 2, HIT_AREA, HIT_AREA);
  
    /*
     * text label
     */
    this.text = new createjs.Text('airCraft', "bold 9px Arial", "black");
  
    /*
     * staging
     */
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default AirCraft;