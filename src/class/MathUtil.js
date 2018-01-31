"use strict";


const PI = Math.PI;

class MathUtil {

  static d2r(degree) {
    let radian = (degree / 180) * PI;
    return radian
  }

  /**
   * @SEE https://qiita.com/sifue/items/e1dbfe671f42886e47d6
   * 
   * @param {Number} m mean: μ
   * @param {Number} s variance: σ^2
   * @return {Number}
   */
  static normalRandom(m, s) {
    let a = 1 - Math.random();
    let b = 1 - Math.random();
    let c = Math.sqrt(-2 * Math.log(a));
    if (0.5 - Math.random() > 0) {
      return c * Math.sin(Math.PI * 2 * b) * s + m;
    } else {
      return c * Math.cos(Math.PI * 2 * b) * s + m;
    }
  }

}

export default MathUtil;