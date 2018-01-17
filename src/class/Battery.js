"use strict";
import Enemy from "./Enemy";
import EnemyBatteryBullet from "./EnemyBatteryBullet";

/**
 * Enemy "Battery" class.
 * does not runs.
 * shoot a bullet at you.
 */
class Battery extends Enemy {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.addInstance();
    this.deploy();
  }
  
  assignTickListener() {
    createjs.Ticker.addEventListener('tick', () => {
      this.updatePos();
    })
  }
  
  /**
   * firing control kicked every tick
   */
  trigger() {
    
    if (createjs.Ticker.getTicks() % 30 !== 0) {
      return;
    }
    
    let b = new EnemyBatteryBullet({
      x    : this.x,
      y    : this.y,
      stage: this.stage
    })
  }
  
  /**
   * moving control kicked every tick
   */
  move() {
  
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('darkgray').drawRect(0, 0, 30, 30);
    this.text = new createjs.Text('battery', 'bold 9px Arial', 'black');
    this.updatePos();
    this.assignTickListener();
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
  }
}

export default Battery;