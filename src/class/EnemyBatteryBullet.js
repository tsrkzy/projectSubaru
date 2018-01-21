"use strict";
import EnemyBullet from "./EnemyBullet";

const WIDTH  = 10;
const HEIGHT = 5;
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
    this.clock.onTick(() => {
      this.x -= 5;
      this.updatePos();
      this.getOutHandler();
    })
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.updatePos();
    this.shape.graphics.setStrokeStyle(1).beginStroke('salmonpink').drawRect(0 - WIDTH / 2, 0 - HEIGHT / 2, WIDTH, HEIGHT);
    this.text.text = 'enemyBatteryBullet';
    this.assignTickListener();
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
  }
}

export default EnemyBatteryBullet;