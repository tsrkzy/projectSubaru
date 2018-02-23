'use strict';
import Bullet from './Bullet';
import AirCraft from './AirCraft';

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
    this.airCraft = AirCraft.getInstance();
    EnemyBullet.instances = EnemyBullet.instances || {};

    EnemyBullet.instances[this.constructor.name] = this.initStaticProperty();
  }

  /**
   * remove reference to airCraft and kick super die.
   */
  die() {
    this.airCraft = null;
    super.die();
  }
}

export default EnemyBullet;
