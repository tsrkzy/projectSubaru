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
    const kinds = Object.keys((EnemyBullet.instances || {}));
    for (let i_k = 0; i_k < kinds.length; i_k++) {
      const kind = kinds[i_k];
      const enemyBullets = EnemyBullet.instances[kind];
      for (let i_e = 0; i_e < enemyBullets.length; i_e++) {
        const enemyBullet = enemyBullets[i_e];
        enemyBullet.die();
      }
    }
  }

  // /**
  //  * remove reference to airCraft and kick super die.
  //  */
  // die() {
  //   console.info('try', this.id); // @DELETEME
  //   // console.log(JSON.stringify(EnemyBullet.instances));
  //   console.log(EnemyBullet.instances); // @DELETEME
  //
  //   this.airCraft = null;
  //
  //   super.die();
  //
  //   let done = false;
  //   const kinds = Object.keys(EnemyBullet.instances);
  //   for (let i_k = 0; i_k < kinds.length; i_k++) {
  //     const kind = kinds[i_k];
  //     const enemyBullets = EnemyBullet.instances[kind];
  //     for (let i_e = 0; i_e < enemyBullets.length; i_e++) {
  //       const enemyBullet = enemyBullets[i_e];
  //       if (enemyBullet.id === this.id) {
  //         enemyBullets.splice(i_e, 1);
  //         done = true;
  //         break;
  //       } else {
  //         // console.log(`not match ${enemyBullet.id} vs ${this.id}`); // @DELETEME
  //       }
  //     }
  //     if (done) {
  //       break;
  //     }
  //   }
  //
  //   if (done) {
  //     console.log(`done! this:${this.id}`); // @DELETEME
  //   } else {
  //     console.info('spawn zombie bullet', this.id, this);
  //     // console.info(this);
  //   }
  //
  //   // console.log(JSON.stringify(EnemyBullet.instances));
  // }
}

export default EnemyBullet;
