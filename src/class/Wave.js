"use strict";
import Battery from "./Battery";
import EventsWrapper from "./EventsWrapper";
import Bomber from "./Bomber";
import {WAVE_TIME_LIMIT} from "./Constant";
import Canvas from "./Canvas";
import Noise from "./Noise";

class Wave {

  static nextLevel() {
    return (Wave._level++)
  }

  static get level() {
    return Wave._level
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
    let timer = new Promise((resolve) => {
      window.setTimeout(() => {
        resolve()
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
        EventsWrapper.emit('wave.Clear');
      })
  }


  /**
   * @return {Array<Promise>}
   */
  comeOut() {

    let promiseArray = [];
    let waveConf = [
      {
        enemyClass: Noise,
        delayMs   : 0,
        args      : {
          x: 600,
          y: 100,
          hitPoint: 2,
        }
      },
        {
          enemyClass: Bomber,
          delayMs: 0,
          args: {
            x: 600,
            y: 300,
            hitPoint: 2,
          }
        },
      {
        enemyClass: Battery,
        delayMs   : 0,
        args      : {
          x       : 600,
          y       : -50,
          hitPoint: 2,
        }
      },
    ];
    //       [
    //   {
    //     enemyClass: Battery,
    //     delayMs: 0,
    //     args: {
    //       x: 600,
    //       y: -50,
    //       hitPoint: 2,
    //     }
    //   },
    //   {
    //     enemyClass: Battery,
    //     delayMs: 1000,
    //     args: {
    //       x: 600,
    //       y: -50,
    //       hitPoint: 2,
    //     }
    //   }, {
    //     enemyClass: Battery,
    //     delayMs: 2000,
    //     args: {
    //       x: 600,
    //       y: -50,
    //       hitPoint: 2,
    //     }
    //   }
    // ];

    // let meteorConf = WaveUtil.meteorRain({
    //   number: 20,
    //   y: 250,
    //   delayMs: 0,
    //   spanMs: 3000,
    //   spreadDegree: 10,
    // });
    // waveConf = waveConf.concat(meteorConf);
    waveConf.forEach((w) => {
      let promise = this.deployEnemy(w);
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

    let enemyClass = config.enemyClass;
    let delayMs    = config.delayMs;
    let args       = config.args;
    return new Promise((resolve) => {
      window.setTimeout(() => {
        let e = new enemyClass(args);
        let p = e.p;
        p.then(() => {
          resolve();
        })
      }, delayMs);
    })
  }
}

export default Wave;