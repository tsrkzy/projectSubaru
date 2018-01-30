"use strict";
import Battery from "./Battery";
import Debris from "./Debris";
import EventsWrapper from "./EventsWrapper";
import AirCraft from "./AirCraft";

class Wave {
  constructor(index, stage) {
    this.index = index;
    this.stage = stage;

    /*
     * dispatch enemy waves from config.
     */
    this.promises = this.comeOut();

    this.p = Promise.all(this.promises)
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
        enemyClass: Debris,
        delayMs: 0,
        args: {
          x: 500,
          y: 250,
          speed: -7,
          angleDegree: 10,
          hitPoint: 1,
        }
      },
      {
        enemyClass: Battery,
        delayMs: 0,
        args: {
          x: 600,
          y: -50,
          hitPoint: 1,
        }
      },
      {
        enemyClass: Battery,
        delayMs: 1000,
        args: {
          x: 600,
          y: -50,
          hitPoint: 1,
        }
      }, {
        enemyClass: Battery,
        delayMs: 2000,
        args: {
          x: 600,
          y: -50,
          hitPoint: 1,
        }
      }
    ];
    waveConf.forEach((w) => {
      let promise = this.deployEnemy(w);
      promiseArray.push(promise);
    })

    return promiseArray;
  }

  /**
   * @param {Object}
   * @return {Promise}
   */
  deployEnemy(config) {

    let enemyClass = config.enemyClass;
    let delayMs = config.delayMs
    let args = config.args;
    args.stage = this.stage;
    return new Promise((resolve, reject) => {
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