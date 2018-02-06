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
    Amplifier.instances = Amplifier.instances || [];
    this.enrage         = false;
    
    this.addInstance();
    this.deploy();
    this.assignTickListener();
    window.setTimeout(() => {
      this.rage()
    }, 1000)
  }
  
  rage() {
    if (!this.alive) {
      return false;
    }
    this.enrage = true;
    this.shape.graphics
      .endFill()
      .setStrokeStyle(1)
      .beginStroke('lightblue')
      .drawCircle(0, 0, 40);
  }
  
  /**
   * return bullet expand ratio.
   * returns 2 to the power of number of Amplifier enraged.
   * (if Amplifier enraged does not exist, return 1)
   *
   * @return {number} Math.power(2,n);
   */
  static getRatio() {
    let enraged = 0;
    
    for (let i = 0; i < Amplifier.instances.length; i++) {
      let amp = Amplifier.instances[i];
      if (amp.enrage === true) {
        enraged++;
      }
    }
    
    let amplify = Math.pow(2, enraged);
    
    return amplify;
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

export default Amplifier;