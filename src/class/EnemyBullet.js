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

    EnemyBullet.id = EnemyBullet.id || 0;
    this.id = EnemyBullet.id;
    EnemyBullet.id++;

    EnemyBullet.instances = EnemyBullet.instances;

    EnemyBullet.instances.push(this);
  }

  static get instances() {
    return EnemyBullet._instances || [];
  }

  static set instances(instance) {
    EnemyBullet._instances = instance;
  }

  static flush() {

    while (EnemyBullet.instances.length > 0) {
      for (let i_b = 0; i_b < EnemyBullet.instances.length; i_b++) {
        const enemyBullet = EnemyBullet.instances[i_b];
        enemyBullet.die();
      }
    }
  }

  removeFromInstances() {
    for (let i = 0; i < EnemyBullet.instances.length; i++) {
      const enemyBullet = EnemyBullet.instances[i];
      if (enemyBullet.id === this.id) {
        EnemyBullet.instances.splice(i, 1);
        break;
      }
    }
  }
}

export default EnemyBullet;
