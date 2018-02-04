"use strict";

import VirtualPad from "./VirtualPad.js";
import Gatling from "./Gatling";
import Enemy from "./Enemy";
import EnemyBullet from "./EnemyBullet";
import Blow from "./Blow";
import Clock from "./Clock";

import {
  AIRCRAFT_INITIAL_X,
  AIRCRAFT_INITIAL_Y,
  AIRCRAFT_WIDTH,
  AIRCRAFT_HEIGHT,
  AIRCRAFT_HIT_AREA,
  AIRCRAFT_VELOCITY,
  AIRCRAFT_DIAGONAL_VELOCITY,
  STAGE_EDGE_LEFT,
  STAGE_EDGE_RIGHT,
  STAGE_EDGE_TOP,
  STAGE_EDGE_BOTTOM,
} from "./Constant";
import Canvas from "./Canvas";

/**
 * Your AirCraft Class.
 */
class AirCraft {
  
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
  
  static getInstance() {
    return AirCraft.instance;
  }
  
  /**
   * initialize parameters, set listeners
   * @constructor
   */
  constructor() {
    if (AirCraft.instance === 'object') {
      return AirCraft.instance;
    }
    AirCraft.instance = this;
  
    this.stage = Canvas.getStage();
    this.vp    = new VirtualPad();
    this.clock = new Clock(this);
  
    this.x = AIRCRAFT_INITIAL_X;
    this.y = AIRCRAFT_INITIAL_Y;
  
    this._gun     = new Gatling({
      x    : this.x,
      y    : this.y,
    });
    
    this.assignTickListener();
    this.deploy();
  }
  
  /**
   * set listeners
   * kicks every tick
   */
  assignTickListener() {

    this.clock.onTick(() => {
      
      /*
       * moving control
       */
      let vX = 0;
      let vY = 0;
      if (this.vp.keyDown_Right && !this.vp.keyDown_Left) {
        vX = this.vp.keyDownOnly_Right ? AIRCRAFT_VELOCITY : AIRCRAFT_DIAGONAL_VELOCITY;
      }
      if (this.vp.keyDown_Left && !this.vp.keyDown_Right) {
        vX = -1 * (this.vp.keyDownOnly_Left ? AIRCRAFT_VELOCITY : AIRCRAFT_DIAGONAL_VELOCITY);
      }
      if (this.vp.keyDown_Down && !this.vp.keyDown_Up) {
        vY = this.vp.keyDownOnly_Down ? AIRCRAFT_VELOCITY : AIRCRAFT_DIAGONAL_VELOCITY;
      }
      if (this.vp.keyDown_Up && !this.vp.keyDown_Down) {
        vY = -1 * (this.vp.keyDownOnly_Up ? AIRCRAFT_VELOCITY : AIRCRAFT_DIAGONAL_VELOCITY);
      }
      this.x += vX;
      this.y += vY;
      if (this.x < STAGE_EDGE_LEFT) this.x = STAGE_EDGE_LEFT;
      if (this.x > STAGE_EDGE_RIGHT) this.x = STAGE_EDGE_RIGHT;
      if (this.y < STAGE_EDGE_TOP) this.y = STAGE_EDGE_TOP;
      if (this.y > STAGE_EDGE_BOTTOM) this.y = STAGE_EDGE_BOTTOM;
      this.updatePos();
      
      this.text.text = `airCraft: {${Math.floor(this.x)},${Math.round(this.y)}}`;
  
    });
  
    /*
     * fire control
     */
    this.clock.onTick(() => {
    
      this._gun.trigger(this.x, this.y);
    });
  
    /*
     * collision check with enemies and every kind of enemyBullets
     */
    this.clock.onTick(() => {
      this.collisionCheck(Enemy.instances);
    
      for (let i = 0; i < Object.keys(EnemyBullet.instances || {}).length; i++) {
      
        let enemyBulletInstances = EnemyBullet.instances[Object.keys(EnemyBullet.instances)[i]];
        this.collisionCheck(enemyBulletInstances);
      }
    })
  }
  
  /**
   * @param {number} x
   * @param {number} y
   */
  updatePos(x = this.x, y = this.y) {
    
    this.shape.x   = x;
    this.shape.y   = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x    = x;
    this.text.y    = y;
  }
  
  /**
   * collision test with your aircraft.
   * @param {Array<Object>} targetArray - Object must have #shape to hitTest
   */
  collisionCheck(targetArray) {
    
    for (let j = 0; j < targetArray.length; j++) {
      
      /*
       * relative axis from target to hitArea(aircraft)-origin (zero-point)
       */
      let target  = targetArray[j];
      let pos     = target.hitArea.localToLocal(0, 0, this.hitArea);
      let hitTest = target.hitArea.hitTest(pos.x, pos.y);
      if (hitTest) {
        this.beShot(pos.x, pos.y, target);
      }
    }
  }
  
  /**
   * kicked when your aircraft have been shot
   */
  beShot(x = 0, y = 0, target) {
    console.log(`${target.constructor.name} killed you.`);
    new Blow({
      x    : this.x - x,
      y    : this.y - y,
      color: 'red',
    });
  }
  
  deploy() {
    /*
     * aircraft
     */
    this.shape = new createjs.Shape();
    this.shape.graphics.setStrokeStyle(1).beginStroke('lightgray').drawRect(0 - AIRCRAFT_WIDTH / 2, 0 - AIRCRAFT_HEIGHT / 2, AIRCRAFT_WIDTH, AIRCRAFT_HEIGHT);
  
    /*
     * hit area
     */
    this.hitArea = new createjs.Shape();
    this.hitArea.graphics.beginFill('red').drawCircle(0, 0, AIRCRAFT_HIT_AREA);
  
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