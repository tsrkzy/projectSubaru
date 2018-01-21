"use strict";
import FriendBullet from "./FriendBullet";
import Clock from "./Clock";

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
            this.beShot();
          }
          resolve();
        });
      })()
    }
  }
  
  beShot() {
    let radius = 40;
    
    this.explodeGraphics = new createjs.Graphics();
    this.explodeGraphics.beginFill('lightblue').drawCircle(0, 0, radius);
  
    this.explodeShape       = new createjs.Shape(this.explodeGraphics);
    this.explodeShape.x     = this.x;
    this.explodeShape.y     = this.y;
    this.explodeShape.alpha = 0;
    
    this.stage.addChild(this.explodeShape);
  
    createjs.Tween.get(this.explodeShape)
      .to({alpha: 0.6}, 40)
      .to({alpha: 0}, 240)
      .call(completeHandler.bind(this));
  
    function completeHandler() {
      /*
       * @fix leaking
       */
      // createjs.Tween.removeTweens(this.explodeShape);
      this.stage.removeChild(this.explodeShape);
      this.explodeShape    = null;
      this.explodeGraphics = null;
    }
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