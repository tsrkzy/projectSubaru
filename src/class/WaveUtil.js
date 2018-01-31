import MathUtil from "./MathUtil";
import Debris from "./Debris";

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
}

export default WaveUtil;