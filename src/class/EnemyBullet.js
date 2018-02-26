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

  static flush() {
    const kinds = Object.keys(EnemyBullet.instances);
    for (let i_k = 0; i_k < kinds.length; i_k++) {
      const kind = kinds[i_k];
      const enemyBullets = EnemyBullet.instances[kind];
      for (let i_e = 0; i_e < enemyBullets.length; i_e++) {
        const enemyBullet = enemyBullets[i_e];
        enemyBullet.die();
        console.log(enemyBullet.alive);
      }
    }
  }

  /**
   * remove reference to airCraft and kick super die.
   */
  die() {
    this.airCraft = null;

    super.die();

    const kinds = Object.keys(EnemyBullet.instances);
    for (let i_k = 0; i_k < kinds.length; i_k++) {
      const kind = kinds[i_k];
      const enemyBullets = EnemyBullet.instances[kind];
      let done = false;
      for (let i_e = 0; i_e < enemyBullets.length; i_e++) {
        const enemyBullet = enemyBullets[i_e];
        if (enemyBullet === this) {
          enemyBullets.splice(i_e, 1);
          done = true;
          break;
        }
      }
      if (done) {
        break;
      }
    }


  }
}

export default EnemyBullet;
