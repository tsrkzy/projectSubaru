'use strict';

import Clock from './Clock';
import Canvas from './Canvas';
import GatlingBullet from './GatlingBullet';
import {
  dd,
  POD_CABLE_LENGTH,
  POD_FIRE_DELAY,
  POD_HEIGHT,
  POD_WIDTH
} from './Constant';
import AirCraft from './AirCraft';
import MathUtil from './MathUtil';

class Pod {
  constructor(args) {
    const {x, y} = args;
    this.x = x;
    this.y = y;
    this.clock = new Clock(this);
    this.stage = Canvas.getStage();
    this.assignTickListener();
    this.deploy();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!AirCraft.isAlive()) {
        this.die();
      }

      if (!this.clock) {
        return false;
      }

      const tick = this.clock.getTick() * 6;
      this.shape.rotation = tick;

      this.move();

      this.trigger();
    });
  }

  move() {
    const {theta, distance} = this.toAirCraft();

    if (distance > POD_CABLE_LENGTH) {
      this.pullUp(theta, distance);
    }

    this.updatePos();
  }

  toAirCraft() {
    const airCraft = AirCraft.getInstance();

    const {x, y} = airCraft;
    const theta = MathUtil.getAngleDegree(this.x, this.y, x, y);
    const distance = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));

    return {theta, distance};
  }

  pullUp(theta) {
    const dx = 3 * Math.cos(theta);
    const dy = 3 * Math.sin(theta);
    this.x -= dx;
    this.y -= dy;
    this.text.text = dd(`dx: ${Math.floor(dx)}, dy: ${Math.floor(dy)}, theta: ${theta}`);
  }

  trigger() {
    if (!AirCraft.isAlive()) {
      return false;
    }

    if (this.clock.getTick() % POD_FIRE_DELAY !== 0) {
      return;
    }

    const x = this.x;
    const y = this.y;
    new GatlingBullet({x, y});
  }

  updatePos(x = this.x, y = this.y) {
    this.shape.x = x;
    this.shape.y = y;
  }

  deploy() {
    const graphic = new createjs.Graphics();
    graphic.setStrokeStyle(1).beginStroke('white')
      .drawRect(-POD_WIDTH / 2, -POD_HEIGHT / 2, POD_WIDTH, POD_HEIGHT);
    this.shape = new createjs.Shape(graphic);
    this.text = new createjs.Text('', 'bold 9px Arial', 'red');
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
  }

  die() {
    if (this.clock) {
      this.clock.allOff();
      this.clock = null;
    }

    if (this.stage) {
      this.stage.removeChild(this.shape);
      this.stage.removeChild(this.text);
      this.stage = null;
    }

    this.shape = null;
    this.text = null;
  }
}

export default Pod;
