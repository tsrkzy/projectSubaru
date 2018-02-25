'use strict';
import {WAVE_TIME_LIMIT} from './Constant';
import Canvas from './Canvas';
import WaveUtil from './WaveUtil';
import AirCraft from './AirCraft';

class Wave {
  static nextLevel() {
    return (Wave._level++);
  }

  static get level() {
    return Wave._level;
  };

  static set level(l) {
    Wave._level = l;
  }

  /**
   * @constructor
   */
  constructor() {
    if (typeof Wave.level === 'undefined') {
      Wave.level = 0;
    }

    this.level = Wave.level;
    Wave.nextLevel();
    this.stage = Canvas.getStage();

    /*
     * dispatch enemy waves from config.
     */
    this.promises = this.comeOut();

    /*
     * set wave timer
     */
    const timer = new Promise((resolve) => {
      window.setTimeout(() => {
        resolve();
      }, WAVE_TIME_LIMIT);
    });

    /*
     * wave clear ... when (1) or (2) done
     *   (1) destroy all enemy.
     *   (2) after ${timeMs} milli seconds.
     */
    this.p = Promise.race([Promise.all(this.promises), timer])
      .then(() => {
        console.warn('wave clear!!');
      });
  }


  /**
   * @return {Array<Promise>}
   */
  comeOut() {
    const promiseArray = [];

    const waveConf = WaveUtil.getConfig(Wave.level);

    waveConf.forEach((w) => {
      const promise = this.deployEnemy(w);
      promiseArray.push(promise);
    });

    return promiseArray;
  }

  /**
   * dispatch enemy from wave config.
   * get promise from it and return.
   *
   * @param {Object} config
   * @return {Promise}
   */
  deployEnemy(config) {
    const EnemyClass = config.enemyClass;
    const delayMs = config.delayMs;
    const args = config.args;

    return new Promise((resolve) => {

      window.setTimeout(() => {

        if (!AirCraft.isAlive()) {
          resolve();
        }

        const e = new EnemyClass(args);
        const p = e.p;
        p.then(() => {
          resolve();
        });

      }, delayMs);

    });
  }
}

export default Wave;
