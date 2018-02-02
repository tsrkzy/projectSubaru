"use strict";
import Enemy from "./Enemy";
import {NOISE_WIDTH, NOISE_HEIGHT} from "./Constant";

/**
 * Enemy "Noise" class.
 * he use ecm(electrical counter measure).
 * its slows your aircraft.
 */
class Noise extends Enemy {
  
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
      this.text.text = `noise:{hp: ${this.hitPoint}`;
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
    this.shape.graphics.beginFill('darkgray').drawRect(0 - NOISE_WIDTH / 2, 0 - NOISE_HEIGHT / 2, NOISE_WIDTH, NOISE_HEIGHT);
    
    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-NOISE_WIDTH / 2, -NOISE_HEIGHT / 2, NOISE_WIDTH, NOISE_HEIGHT);
    
    this.text = new createjs.Text('noise', 'bold 9px Arial', 'black');
    
    this.updatePos();
    
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Noise;