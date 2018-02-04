"use strict";
import Enemy from "./Enemy";
import {BOMBER_HEIGHT, BOMBER_LAST_SHOT_COUNT, BOMBER_LAST_SHOT_DEPTH, BOMBER_SHOT_COUNT, BOMBER_SHOT_DEPTH, BOMBER_SPEED, BOMBER_WIDTH} from "./Constant";
import EnemyMarker from "./EnemyMarker";
import MathUtil from "./MathUtil";
import Sign from "./Sign";
import FireWorks from "./FireWorks";

/**
 * Enemy "Bomber" class.
 * he dies nasty.
 */
class Bomber extends Enemy {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.theta = 0;
    this.addInstance();
    this.deploy();
    this.assignTickListener();
  }
  
  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = `bomb:{hp: ${this.hitPoint}`;
    })
  }
  
  /**
   * firing control kicked every tick
   */
  trigger() {
  
  }
  
  /**
   * moving control kicked every tick
   */
  move() {
    let angle    = MathUtil.getAngleDegree(this.x, this.y, this.airCraft.x, this.airCraft.y)
    let sinTheta = 1 - Math.sin(this.theta);
    let speed    = BOMBER_SPEED;
    this.x -= speed * sinTheta * Math.cos(angle);
    this.y -= speed * sinTheta * Math.sin(angle);
    this.theta += MathUtil.d2r(1);
    this.updatePos();
  }
  
  /**
   * nasty lastShot
   */
  last() {
    FireWorks.sunFlower(
      this.x,
      this.y,
      BOMBER_LAST_SHOT_COUNT,
      BOMBER_LAST_SHOT_DEPTH,
    );
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('darkgray').drawRect(0 - BOMBER_WIDTH / 2, 0 - BOMBER_HEIGHT / 2, BOMBER_WIDTH, BOMBER_HEIGHT);
    
    this.hitArea       = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-BOMBER_WIDTH / 2, -BOMBER_HEIGHT / 2, BOMBER_WIDTH, BOMBER_HEIGHT);
    
    this.text = new createjs.Text('bomber', 'bold 9px Arial', 'black');
    
    this.updatePos();
    
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Bomber;