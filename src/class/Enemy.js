"use strict";

/**
 * Enemy base class.
 */
class Enemy {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    this.x     = args.x;
    this.y     = args.y;
    this.stage = args.stage;
    this.shape = undefined;
    this.text  = undefined;
    createjs.Ticker.addEventListener('tick', () => {
      this.trigger();
      this.move();
    })
  }
  
  updatePos() {
    this.shape.x = this.x;
    this.shape.y = this.y;
    this.text.x  = this.x;
    this.text.y  = this.y;
  }
  
  trigger() {
    throw new Error('implement abstract #trigger.')
  }
  
  move() {
    throw new Error('implement abstract #move.')
  }
}

Enemy.instances = [];

export default Enemy;