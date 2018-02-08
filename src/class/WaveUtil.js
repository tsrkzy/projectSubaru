import MathUtil from "./MathUtil";
import Debris from "./Debris";
import Bomber from "./Bomber";
import Amplifier from "./Amplifier";
import Battery from "./Battery";
import Launcher from "./Launcher";

"use strict";

class WaveUtil {
  constructor() {
    throw Error('WaveUtil cannot be instanciate');
  }

  /**
   * generate debris rain.
   * @param {Object} args
   * @return {Array<Object>}
   */
  static meteorRain(args) {
    let number = args.number;
    let _y = args.y;
    let delayMs = args.delayMs;
    let spanMs = args.spanMs;
    let direction = args.direction;
    let spreadDegree = args.spreadDegree || 10;
    let speed = args.speed;

    let result = [];
    for (let i = 1; i <= number; i++) {

      let y = MathUtil.normalRandom(_y, 100);
      let angleDegree = MathUtil.normalRandom(0, spreadDegree);
      let conf = {
        enemyClass: Debris,
        delayMs: delayMs + (i * spanMs / number),
        args: {
          x: 740,
          y: y,
          speed: -7,
          angleDegree: angleDegree,
          hitPoint: 1
        }
      };
      result.push(conf);
    }

    return result
  }

  static batteryArray() {

  }
  
  static getConfig(level) {
    
    let waveConf = [
      {
        enemyClass: Launcher,
        delayMs   : 0,
        args      : {
          x       : 600,
          y       : 100,
          hitPoint: 2,
        }
      },
      {
        enemyClass: Amplifier,
        delayMs   : 0,
        args      : {
          x       : 600,
          y       : 300,
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
      {
        enemyClass: Bomber,
        delayMs   : 0,
        args      : {
          x       : 600,
          y       : -50,
          hitPoint: 2,
        }
      },
    ];
    
    // let meteorConf = WaveUtil.meteorRain({
    //   number      : 20,
    //   y           : 250,
    //   delayMs     : 0,
    //   spanMs      : 3000,
    //   spreadDegree: 10,
    // });
    // waveConf       = waveConf.concat(meteorConf);
    
    return waveConf
  }
}

export default WaveUtil;