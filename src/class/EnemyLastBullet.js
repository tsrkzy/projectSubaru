"use strict";
import EnemyBullet from "./EnemyBullet";
import {
  ENEMY_LAST_BULLET_WIDTH,
  ENEMY_LAST_BULLET_HEIGHT,
  ENEMY_LAST_BULLET_SPEED,
} from "./Constant";

/**
 * main weapon base bullet class.
 */
class EnemyLastBullet extends EnemyBullet {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.angle = args.angle;
    this.deploy();
    this.assignTickListener();
  }
  
  assignTickListener() {
    this.clock.onTick(() => {
      this.x -= ENEMY_LAST_BULLET_SPEED * Math.cos(this.angle);
      this.y -= ENEMY_LAST_BULLET_SPEED * Math.sin(this.angle);
      this.updatePos();
      this.getOutHandler();
    })
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics
      .setStrokeStyle(1)
      .beginStroke('black')
      .drawRect(
        -ENEMY_LAST_BULLET_WIDTH / 2,
        -ENEMY_LAST_BULLET_HEIGHT / 2,
        ENEMY_LAST_BULLET_WIDTH,
        ENEMY_LAST_BULLET_HEIGHT);
    
    this.text.text = '';
    
    this.hitArea       = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(
        -ENEMY_LAST_BULLET_WIDTH / 2,
        -ENEMY_LAST_BULLET_HEIGHT / 2,
        ENEMY_LAST_BULLET_WIDTH,
        ENEMY_LAST_BULLET_HEIGHT);
    
    this.updatePos();
    
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default EnemyLastBullet;