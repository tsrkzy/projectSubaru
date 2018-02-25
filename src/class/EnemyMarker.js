'use strict';

import EventsWrapper from './EventsWrapper';
import AirCraft from './AirCraft';
import Clock from './Clock';
import MathUtil from './MathUtil';
import {
  MARKER_HITAREA_RADIUS,
  MARKER_SHAPE_RADIUS,
  MARKER_SPEED,
  STAGE_FRAME_BOTTOM,
  STAGE_FRAME_LEFT,
  STAGE_FRAME_RIGHT,
  STAGE_FRAME_TOP
} from './Constant';
import Canvas from './Canvas';

/**
 * enemy's target marker.
 * spawns and rush to you.
 * reached, then, resolve promise as #p.
 */
class EnemyMarker {
  /**
   * @constructor
   * @param {Object} args - x, y
   */
  constructor(args) {
    this.id = EnemyMarker.id;
    EnemyMarker.id++;
    this.x = args.x;
    this.y = args.y;
    this.alive = true;
    this.stage = Canvas.getStage();
    this.airCraft = AirCraft.getInstance();
    this.clock = new Clock(this);
    this.p = new Promise((resolve) => {
      EventsWrapper.once(`reached_${this.id}`, () => {
        EventsWrapper.removeAllListeners(`reached_${this.id}`);
        resolve();
      });
    });
    this.deploy();
    this.assignTickListener();
  }

  /**
   * assign two listeners.
   *   (1) hitTest with aircraft.
   *   (2) call #move.
   */
  assignTickListener() {
    this.clock.onTick(() => {
      this.move();
      this.updatePos();
      this.getOutHandler();
      this.collisionCheckWithAircraft();
    });
  }

  move() {
    const angle = MathUtil.getAngleDegree(
      this.x,
      this.y,
      this.airCraft.x,
      this.airCraft.y
    );
    this.x -= MARKER_SPEED * Math.cos(angle);
    this.y -= MARKER_SPEED * Math.sin(angle);
  }

  updatePos(x = this.x, y = this.y) {
    this.shape.x = x;
    this.shape.y = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x = x;
    this.text.y = y;
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

  collisionCheckWithAircraft() {
    if (!this.alive) {
      return false;
    }
    const pos = this.hitArea.localToLocal(0, 0, this.airCraft.shape);
    const hitTest = this.hitArea.hitTest(pos.x, pos.y);
    if (hitTest) {
      this.locked();
    }
  }

  locked() {
    EventsWrapper.emit(`reached_${this.id}`);
    this.die();
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.alpha = 1;
    this.shape.graphics
      .setStrokeStyle(2)
      .beginStroke('dimgray')
      .drawCircle(0, 0, MARKER_SHAPE_RADIUS);

    this.text = new createjs.Text('marker', 'bold 9px Arial', 'white');

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawCircle(0, 0, MARKER_HITAREA_RADIUS);

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }

  die() {
    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.hitArea);
    this.stage.removeChild(this.text);
    this.clock.allOff();
    this.airCraft = null;
    this.clock = null;
    this.shape = null;
    this.text = null;
    this.hitArea = null;
    this.stage = null;
    this.alive = false;
  }
}

EnemyMarker.id = 0;

export default EnemyMarker;
