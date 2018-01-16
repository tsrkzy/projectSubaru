"use strict";
import EnemyBullet from "./EnemyBullet";

/**
 * main weapon base bullet class.
 */
class EnemyBatteryBullet extends EnemyBullet {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.deploy();
  }
  
  assignTickListener() {
    createjs.Ticker.addEventListener('tick', () => {
      this.x -= 5;
      this.updatePos();
    })
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.updatePos();
    this.shape.graphics.setStrokeStyle(1).beginStroke('salmonpink').drawRect(0, 0, 10, 5);
    this.text.text = 'enemyBatteryBullet';
    this.assignTickListener();
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
  }
}

export default EnemyBatteryBullet;