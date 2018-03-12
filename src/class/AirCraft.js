'use strict';

import VirtualPad from './VirtualPad.js';
import Gatling from './Gatling';
import Enemy from './Enemy';
import EnemyBullet from './EnemyBullet';
import Blow from './Blow';
import Clock from './Clock';

import {
  AIRCRAFT_INITIAL_X,
  AIRCRAFT_INITIAL_Y,
  AIRCRAFT_RADIUS,
  AIRCRAFT_HIT_AREA,
  AIRCRAFT_VELOCITY,
  STAGE_EDGE_LEFT,
  STAGE_EDGE_RIGHT,
  STAGE_EDGE_TOP,
  STAGE_EDGE_BOTTOM,
} from './Constant';
import Canvas from './Canvas';
import Jammer from './Jammer';
import EventsWrapper from './EventsWrapper';

/**
 * Your AirCraft Class.
 */
class AirCraft {
  get y() {
    return this._y || 0;
  }

  set y(value) {
    this._y = value;
  }

  get x() {
    return this._x || 0;
  }

  set x(value) {
    this._x = value;
  }

  /**
   * get airCraft's speed.
   * if snared, slows down to half.
   *
   * @return {number}
   */
  get velocity() {
    const coefficient = (!this.snared) ? 1 : 0.5;
    return AIRCRAFT_VELOCITY * coefficient;
  }

  get diagonalVelocity() {
    return this.velocity / Math.sqrt(2);
  }

  static getInstance() {
    return AirCraft.instance;
  }

  /**
   * initialize parameters, set listeners
   * @constructor
   */
  constructor() {
    AirCraft.instance = this;

    this.stage = Canvas.getStage();
    this.vp = new VirtualPad();
    this.clock = new Clock(this);

    this.alive = true;
    this.x = AIRCRAFT_INITIAL_X;
    this.y = AIRCRAFT_INITIAL_Y;
    this.snared = false;
    this._gun = new Gatling({
      x: this.x,
      y: this.y,
    });

    this.assignTickListener();
    this.deploy();
  }

  static isAlive() {
    if (!AirCraft.instance) {
      return false;
    }
    return AirCraft.instance.alive;
  }

  /**
   * set listeners
   * kicks every tick
   */
  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }

      /*
       * moving control
       */
      let vX = 0;
      let vY = 0;
      if (this.vp.keyDown_Right && !this.vp.keyDown_Left) {
        vX = this.vp.keyDownOnly_Right ? this.velocity : this.diagonalVelocity;
      }
      if (this.vp.keyDown_Left && !this.vp.keyDown_Right) {
        vX = -1 * (this.vp.keyDownOnly_Left ? this.velocity : this.diagonalVelocity);
      }
      if (this.vp.keyDown_Down && !this.vp.keyDown_Up) {
        vY = this.vp.keyDownOnly_Down ? this.velocity : this.diagonalVelocity;
      }
      if (this.vp.keyDown_Up && !this.vp.keyDown_Down) {
        vY = -1 * (this.vp.keyDownOnly_Up ? this.velocity : this.diagonalVelocity);
      }
      this.x += vX;
      this.y += vY;
      if (this.x < STAGE_EDGE_LEFT) this.x = STAGE_EDGE_LEFT;
      if (this.x > STAGE_EDGE_RIGHT) this.x = STAGE_EDGE_RIGHT;
      if (this.y < STAGE_EDGE_TOP) this.y = STAGE_EDGE_TOP;
      if (this.y > STAGE_EDGE_BOTTOM) this.y = STAGE_EDGE_BOTTOM;
      this.updatePos();

      this.text.text = `airCraft: {${Math.floor(this.x)},${Math.round(this.y)}}`;
    });

    /*
     * fire control
     */
    this.clock.onTick(() => {
      this._gun.trigger(this.x, this.y);
    });

    /*
     * collision check with enemies and every kind of enemyBullets
     */
    this.clock.onTick(() => {
      this.collisionCheck(Enemy.instances, this.beShot);

      this.collisionCheck(EnemyBullet.instances, this.beShot);

      this.snareCheck();
    });
  }

  /**
   * check airCrafts in Noise's jammer effect.
   */
  snareCheck() {
    const result = this.collisionCheck(Jammer.instances);
    const inJammer = result.test;
    this.snared = inJammer;
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  updatePos(x = this.x, y = this.y) {
    if (!this.alive) {
      return false;
    }

    this.shape.x = x;
    this.shape.y = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x = x;
    this.text.y = y;
  }

  /**
   * collision test with your aircraft.
   * @param {Array<Object>} targetArray - Object must have #shape to hitTest
   * @param {function|null} fn callback when every hitTest that returns true.
   * @return {Object} result
   */
  collisionCheck(targetArray, fn = null) {
    if (!this.alive) {
      return false;
    }

    const result = {
      all: true,
      test: false,
    };

    for (let j = 0; j < targetArray.length; j++) {
      /*
       * relative axis from target to hitArea(aircraft)-origin (zero-point)
       */
      const target = targetArray[j];

      if (target === null) {
        continue;
      }

      if (!target.alive) {
        continue;
      }

      if (this.hitArea === null) {
        break;
      }

      const pos = target.hitArea.localToLocal(0, 0, this.hitArea);
      const hitTest = target.hitArea.hitTest(pos.x, pos.y);
      if (hitTest) {
        result.test = true;
        if (typeof fn === 'function') {
          fn.call(this, pos.x, pos.y, target);
        }
        continue;
      }
      result.all = false;
    }

    return result;
  }

  /**
   * kicked when your aircraft have been shot
   * @param {number} x
   * @param {number} y
   * @param {object} target
   */
  beShot(x = 0, y = 0, target) {
    console.log(`${target.constructor.name} killed you.`);
    new Blow({
      x: this.x - x,
      y: this.y - y,
      color: 'red',
    });

    this.die();

    window.setTimeout(() => {
      createjs.Ticker.reset();
      createjs.Ticker.removeAllEventListeners();
      EventsWrapper.emit('gameOver');
    }, 2000);
  }

  die() {
    if (this.clock) {
      this.clock.allOff();
      this.clock = null;
    }

    if (this.stage) {
      this.stage.removeChild(this.shape);
      this.stage.removeChild(this.hitArea);
      this.stage.removeChild(this.text);
      this.stage = null;
    }

    this.shape = null;
    this.text = null;
    this.hitArea = null;
    this.alive = false;
  }

  deploy() {
    /*
     * aircraft
     */
    this.shape = new createjs.Shape();
    this.shape.graphics
      .setStrokeStyle(2)
      .beginStroke('lightgray')
      .drawCircle(0, 0, AIRCRAFT_RADIUS);

    /*
     * hit area
     */
    this.hitArea = new createjs.Shape();
    this.hitArea.graphics.beginFill('#1295b8').drawCircle(0, 0, AIRCRAFT_HIT_AREA);

    /*
     * text label
     */
    this.text = new createjs.Text('airCraft', 'bold 9px Arial', 'black');

    /*
     * staging
     */
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default AirCraft;
