"use strict";
import Enemy from "./Enemy";
import {BOMBER_WIDTH, BOMBER_HEIGHT} from "./Constant";

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