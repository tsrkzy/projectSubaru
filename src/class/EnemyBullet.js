"use strict";
import Bullet from "./Bullet";

/**
 * enemy bullet base class.
 */
class EnemyBullet extends Bullet {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    EnemyBullet.instances = EnemyBullet.instances || {};
  
    EnemyBullet.instances[this.constructor.name] = this.initStaticProperty();
  }
  
  
}

export default EnemyBullet;