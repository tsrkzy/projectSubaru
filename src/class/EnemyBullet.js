"use strict";
import Bullet from "./Bullet";

/**
 * main weapon base bullet class.
 */
class EnemyBullet extends Bullet {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
  }
}

export default EnemyBullet;