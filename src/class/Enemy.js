"use strict";
import FriendBullet from "./FriendBullet";
import Clock from "./Clock";
import Blow from "./Blow";

/**
 * Enemy base class.
 */
class Enemy {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    this.x     = args.x;
    this.y     = args.y;
    this.stage = args.stage;
    this.clock = new Clock(this);
    this.shape = undefined;
    this.text  = undefined;
    this._assignTickListener();
  }
  
  addInstance(){
    Enemy.instances = Enemy.instances || [];
    Enemy.instances.push(this);
  }
  
  updatePos() {
    this.shape.x = this.x;
    this.shape.y = this.y;
    this.text.x  = this.x;
    this.text.y  = this.y;
  }
  
  _assignTickListener() {
    this.clock.onTick(() => {
      this.trigger();
      this.move();
      let gatlingBullets = ((FriendBullet.instances || {}).GatlingBullet || [])
      this.collisionCheck(gatlingBullets);
    });
  }
  
  /**
   * collision test with your bullets.
   * @param {Array<Object>} targetArray - Object must have #shape to hitTest
   */
  collisionCheck(targetArray) {
    
    for (let i = 0; i < targetArray.length; i++) {
      
      (() => {
        return new Promise((resolve) => {
          
          let target  = targetArray[i];
          let pos     = this.shape.localToLocal(0, 0, target.shape);
          let hitTest = this.shape.hitTest(pos.x, pos.y);
          if (hitTest) {
            this.beShot(pos.x, pos.y);
          }
          resolve();
        });
      })()
    }
  }
  
  /**
   * @param x - intercept bullet(base) to Enemy
   * @param y - intercept bullet(base) to Enemy
   */
  beShot(x = 0, y = 0) {
    
    new Blow({
      stage: this.stage,
      x    : this.x - x,
      y    : this.y - y,
      color: 'red',
    });
  }
  
  trigger() {
    throw new Error('implement abstract #trigger.')
  }
  
  move() {
    throw new Error('implement abstract #move.')
  }
  
}

Enemy.instances = [];

export default Enemy;