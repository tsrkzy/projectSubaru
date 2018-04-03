'use strict';
import {WAVE_TIME_LIMIT} from './Constant';
import Canvas from './Canvas';
import WaveUtil from './WaveUtil';
import AirCraft from './AirCraft';
import EventsWrapper from './EventsWrapper';

class Wave {
  static nextLevel() {
    return (Wave._level++);
  }

  static get level() {
    Wave._level = Wave._level || 0;
    return Wave._level;
  };

  static set level(l) {
    Wave._level = l;
  }

  /**
   * @constructor
   */
  constructor() {
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

    const gameOver = new Promise((resolve) => {
      EventsWrapper.once('gameOver', () => {
        resolve();
      });
    });

    /*
     * wave clear ... when (1) or (2) done
     *   (1) destroy all enemy.
     *   (2) after ${timeMs} milli seconds.
     *
     * wave fails immediately
     *   (1) 'gameOver' event fired.
     *
     */
    this.p = new Promise((resolve, reject) => {
      Promise.race([
        Promise.all(this.promises),
        timer
      ]).then(() => {
        resolve(this.level);
      });

      gameOver.then(() => {
        reject(this.level);
      });
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
