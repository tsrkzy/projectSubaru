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
    this.assignTickListener();
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
  
    this.shape.graphics.setStrokeStyle(1).beginStroke('salmonpink').drawRect(0 - WIDTH / 2, 0 - HEIGHT / 2, WIDTH, HEIGHT);
    this.text.text = 'enemyBatteryBullet';
    this.stage.addChild(this.shape);
  
    this.hitArea       = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT);
    this.stage.addChild(this.hitArea);
    
    this.stage.addChild(this.text);
  }
}

export default EnemyBatteryBullet;