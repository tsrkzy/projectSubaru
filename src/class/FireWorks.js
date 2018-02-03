"use strict";

import GunPowder from "./GunPowder";

/**
 * bullet art utility class.
 * @static
 */
class FireWorks {
  constructor() {
    throw new Error('FireWorks cannot be instance')
  }
  
  static getRandomRadian(radian = Math.PI) {
    return Math.random() * radian;
  }
  
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param stage
   * @param {number} count
   * @param {number} depth
   */
  static sunFlower(x, y, stage, count = 1, depth = 1) {
    let pie   = 2 * Math.PI / count;
    let noise = FireWorks.getRandomRadian(pie);
    for (let j = 0; j < depth; j++) {
      let intercept = (2 * Math.PI * j) / (2 * count);
      for (let i = 0; i < count; i++) {
        window.setTimeout(() => {
          new GunPowder({
            x    : x,
            y    : y,
            angle: ((2 * Math.PI * i) / count) + intercept + noise,
            stage: stage,
          });
        }, 100 * j);
      }
    }
  }
  
  static conch(x, y, stage, count = 1, depth = 1) {
    let pie = 2 * Math.PI / count;
    let noise = FireWorks.getRandomRadian(pie);
    
    for (let j = 0; j < depth; j++) {
      let intercept = (2 * Math.PI * j) / (2 * count * depth);
      for (let i = 0; i < count; i++) {
        window.setTimeout(() => {
          new GunPowder({
            x               : x,
            y               : y,
            speedCoefficient: 0.5,
            angle           : ((2 * Math.PI * i) / count) + intercept + noise,
            stage           : stage,
          });
        }, 100 * j);
      }
    }
  }
  
  
}

export default FireWorks;