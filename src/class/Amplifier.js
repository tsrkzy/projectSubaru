"use strict";
import Enemy from "./Enemy";
import {
  AMPLIFIER_HEIGHT,
  AMPLIFIER_WIDTH
} from "./Constant";

/**
 * Enemy "Amplifier" class.
 * He expand every enemy bullet hitArea.
 */
class Amplifier extends Enemy {
  
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
      this.text.text = `amp:{hp: ${this.hitPoint}`;
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
    this.shape.graphics.beginFill('blue')
      .drawRect(
        -AMPLIFIER_WIDTH / 2,
        -AMPLIFIER_HEIGHT / 2,
        AMPLIFIER_WIDTH,
        AMPLIFIER_HEIGHT);
    
    this.hitArea       = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(
        -AMPLIFIER_WIDTH / 2,
        -AMPLIFIER_HEIGHT / 2,
        AMPLIFIER_WIDTH,
        AMPLIFIER_HEIGHT);
    
    this.text = new createjs.Text('amp', 'bold 9px Arial', 'black');
    
    this.updatePos();
    
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Battery;