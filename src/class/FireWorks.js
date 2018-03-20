'use strict';

import GunPowder from './GunPowder';
import Canvas from './Canvas';
import EventsWrapper from './EventsWrapper';

/**
 * bullet art utility class.
 * @static
 */
class FireWorks {
  constructor() {
    throw new Error('FireWorks cannot be instance');
  }

  static getRandomRadian(radian = Math.PI) {
    return Math.random() * radian;
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} count
   * @param {number} depth
   */
  static sunFlower(x, y, count = 1, depth = 1) {
    const pie = 2 * Math.PI / count;
    const noise = FireWorks.getRandomRadian(pie);
    for (let j = 0; j < depth; j++) {
      const intercept = (2 * Math.PI * j) / (2 * count);
      for (let i = 0; i < count; i++) {
        window.setTimeout(() => {
          new GunPowder({
            x: x,
            y: y,
            angle: ((2 * Math.PI * i) / count) + intercept + noise,
            stage: Canvas.getStage(),
          });
        }, 100 * j);
      }
    }
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} count
   * @param {number} depth
   */
  static conch(x, y, count = 1, depth = 1) {
    const pie = 2 * Math.PI / count;
    const noise = FireWorks.getRandomRadian(pie);

    for (let j = 0; j < depth; j++) {
      const intercept = (2 * Math.PI * j) / (2 * count * depth);
      for (let i = 0; i < count; i++) {
        window.setTimeout(() => {
          new GunPowder({
            x: x,
            y: y,
            speedCoefficient: 0.5,
            angle: ((2 * Math.PI * i) / count) + intercept + noise,
            stage: Canvas.getStage(),
          });
        }, 100 * j);
      }
    }
  }
}

export default FireWorks;
