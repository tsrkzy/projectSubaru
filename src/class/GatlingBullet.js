"use strict";

import FriendBullet from "./FriendBullet";

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
    createjs.Ticker.addEventListener('tick', () => {
      this.x += 10;
      this.shape.x = this.x;
      this.shape.y = this.y;
      this.text.x  = this.x;
      this.text.y  = this.y;
    })
    
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.setStrokeStyle(1).beginStroke('blue').drawRect(0, 0, 20, 5);
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
  }
}

export default GatlingBullet;