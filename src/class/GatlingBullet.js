"use strict";

import FriendBullet from "./FriendBullet";

const WIDTH  = 10;
const HEIGHT = 2;

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
    this.assignTickListener();
    this.deploy();
  }
  
  assignTickListener() {
    this.clock.onTick(() => {
      this.x += 10;
      this.shape.x = this.x;
      this.shape.y = this.y;
      this.text.x  = this.x;
      this.text.y  = this.y;
      
      if (this.x > 710) {
        this.die();
      }
      if (this.x < -10) {
        this.die();
      }
    })
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.setStrokeStyle(1).beginStroke('blue').drawRect(-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT);
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
  }
}

export default GatlingBullet;