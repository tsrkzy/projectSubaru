"use strict";

import FriendBullet from "./FriendBullet";
import {
  GATLING_BULLET_HEIGHT,
  GATLING_BULLET_SPEED,
  GATLING_BULLET_STOPPING_POWER,
  GATLING_BULLET_WIDTH
} from "./Constant";

/**
 * gatling gun bullet class.
 */
class GatlingBullet extends FriendBullet {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.stoppingPower = GATLING_BULLET_STOPPING_POWER;
    this.assignTickListener();
    this.deploy();
  }
  
  assignTickListener() {
    this.clock.onTick(() => {
      this.x += GATLING_BULLET_SPEED;
      this.updatePos();
      this.getOutHandler();
    })
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics
      .setStrokeStyle(1)
      .beginStroke('blue')
      .drawRect(-GATLING_BULLET_WIDTH / 2, -GATLING_BULLET_HEIGHT / 2, GATLING_BULLET_WIDTH, GATLING_BULLET_HEIGHT);
  
    this.hitArea       = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-GATLING_BULLET_WIDTH / 2, -GATLING_BULLET_HEIGHT / 2, GATLING_BULLET_WIDTH, GATLING_BULLET_HEIGHT);
  
    this.updatePos();
  
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default GatlingBullet;