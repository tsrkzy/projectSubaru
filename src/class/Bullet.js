'use strict';
import Clock from './Clock';
import {
  STAGE_FRAME_BOTTOM,
  STAGE_FRAME_LEFT,
  STAGE_FRAME_RIGHT,
  STAGE_FRAME_TOP,
} from './Constant';
import Canvas from './Canvas';
import EventsWrapper from './EventsWrapper';

/**
 * main weapon base bullet class.
 */
class Bullet {
  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  /**
   * update bullets shape position with x,y
   * @return {*}
   */
  updatePos() {
    if (!this.alive) {
      return false;
    }
    this.shape.x = this.x;
    this.shape.y = this.y;
    this.hitArea.x = this.x;
    this.hitArea.y = this.y;
    this.text.x = this.x;
    this.text.y = this.y;
  }

  getOutHandler() {
    if (this.x > STAGE_FRAME_RIGHT) {
      this.die();
    }
    if (this.x < STAGE_FRAME_LEFT) {
      this.die();
    }
    if (this.y > STAGE_FRAME_BOTTOM) {
      this.die();
    }
    if (this.y < STAGE_FRAME_TOP) {
      this.die();
    }
  }

  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    this.x = args.x;
    this.y = args.y;
    this.stoppingPower = 0;
    this.alive = true;
    this.stage = Canvas.getStage();
    this.shape = null;
    this.hitArea = null;
    this.clock = new Clock(this);
    this.text = new createjs.Text('', '9px Arial', 'black');
  }

  /**
   * remove bullets themselves got out of stage.
   */
  die() {
    if (!this.alive) {
      return;
    }

    this.airCraft = null;
    this.alive = false;
    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.text);
    this.clock.allOff();
    this.clock = null;
    this.text = null;
    this.shape = null;
    this.hitArea = null;
    this.stage = null;

    this.removeFromInstances();
  }

  removeFromInstances() {
    throw new Error('abstract #removeFromInstances is not implemented');
  }
}

export default Bullet;
