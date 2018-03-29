'use strict';


class Score {
  /**
   * @constructor
   * @singleton
   */
  constructor() {
    throw new Error('Score cannot be instance');
  }

  static get point() {
    return Score._point || 0;
  }

  static set point(p) {
    Score._point = p;
  }

  static reset() {
    Score.point = 0;
  }

  static addPoint(p) {
    const point = parseInt(p);
    if (isNaN(point)) {
      return false;
    }

    this.point = this.point || 0;
    this.point += point;
  }
}

export default Score;
