"use strict";


const PI = Math.PI;

class MathUtil {

  static d2r(degree) {
    let radian = (degree / 180) * PI;
    return radian
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
    
    let dx       = toX - fromX;
    let dy       = toY - fromY;
    let gradient = dy / dx;
    
    /*
     * target flies behind of observer? then flip.
     */
    let flip     = dx > 0 ? Math.PI : 0;
    let theta    = Math.atan(gradient) + flip;
    return theta
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