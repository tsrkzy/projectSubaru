'use strict';


class Score {
  /**
   * @constructor
   * @singleton
   */
  constructor() {
    if (typeof Score.instance !== 'undefined') {
      return Score.instance;
    }
    Score.instance = this;
    this.reset();
  }

  get point() {
    return this._point;
  }

  set point(p) {
    this._point = p;
    this.highScore = p;
  }

  get highScore() {
    return this._highScore || 0;
  }

  set highScore(score) {
    return this._highScore = (this.highScore < score) ? score : this.highScore;
  }

  reset() {
    this._point = 0;
    this._highScore = 0;
  }

  static get point() {
    return Score.instance.point || 0;
  }

  static set point(p) {
    Score.instance.point = p;
  }

  static get highScore() {
    return Score.instance.highScore || 0;
  }

  static reset() {
    Score.instance.reset();
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
