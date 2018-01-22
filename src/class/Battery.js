"use strict";
import Enemy from "./Enemy";
import EnemyBatteryBullet from "./EnemyBatteryBullet";

const WIDTH  = 30;
const HEIGHT = 30;

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
    this.assignTickListener();
  }
  
  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.updatePos();
      this.text.text = `battery:{hp: ${this.hitPoint}`;
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
    this.shape.graphics.beginFill('darkgray').drawRect(0 - WIDTH / 2, 0 - HEIGHT / 2, WIDTH, HEIGHT);
  
    this.hitArea       = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT);
  
    this.text = new createjs.Text('battery', 'bold 9px Arial', 'black');
  
    this.updatePos();
  
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Battery;