'use strict';


const PI = Math.PI;

class MathUtil {
  static d2r(degree) {
    const radian = (degree / 180) * PI;
    return radian;
  }

  /**
   * get angle(degree) from observer pos to target pos.
   *
   * @param {number} fromX
   * @param {number} fromY
   * @param {number} toX
   * @param {number} toY
   * @return {number} theta
   */
  static getAngleDegree(fromX, fromY, toX, toY) {
    const dx = toX - fromX;
    const dy = toY - fromY;
    const gradient = dy / dx;

    /*
     * target flies behind of observer? then flip.
     */
    const flip = dx > 0 ? Math.PI : 0;
    const theta = Math.atan(gradient) + flip;
    return theta;
  }

  /**
   * @SEE https://qiita.com/sifue/items/e1dbfe671f42886e47d6
   *
   * @param {Number} m mean: μ
   * @param {Number} s variance: σ^2
   * @return {Number}
   */
  static normalRandom(m, s) {
    const a = 1 - Math.random();
    const b = 1 - Math.random();
    const c = Math.sqrt(-2 * Math.log(a));
    if (0.5 - Math.random() > 0) {
      return c * Math.sin(Math.PI * 2 * b) * s + m;
    } else {
      return c * Math.cos(Math.PI * 2 * b) * s + m;
    }
  }
}

export default MathUtil;
