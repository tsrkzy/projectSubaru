'use strict';
import FriendBullet from './FriendBullet';
import Clock from './Clock';
import Blow from './Blow';
import EventsWrapper from './EventsWrapper';
import {
  STAGE_FRAME_LEFT,
  STAGE_FRAME_RIGHT,
  STAGE_FRAME_TOP,
  STAGE_FRAME_BOTTOM,
  STAGE_EDGE_LEFT,
  STAGE_EDGE_RIGHT,
  STAGE_EDGE_TOP,
  STAGE_EDGE_BOTTOM,
  SCORE,
} from './Constant';
import Canvas from './Canvas';
import Score from './Score';

/**
 * Enemy base class.
 */
class Enemy {
  get hitPoint() {
    return this._hitPoint;
  }

  set hitPoint(value) {
    this._hitPoint = value;
    if (this._hitPoint <= 0) {
      this.destroyed();
    }
  }

  static get instances() {
    return Enemy._instances || [];
  }

  static set instances(instances) {
    Enemy._instances = instances;
  }

  /**
   * @constructor
   * @param {Object} args - x, y
   */
  constructor(args) {
    Enemy.id = Enemy.id || 0;
    this.id = Enemy.id;
    Enemy.id++;

    this.addInstance();
    const enemyType = (this.constructor.name.toString()).toUpperCase();
    this.score = SCORE[enemyType];

    this.x = args.x;
    this.y = args.y;
    this.hitPoint = args.hitPoint;
    this.alive = true;
    this.stage = Canvas.getStage();
    this.clock = new Clock(this);
    this.shape = null;
    this.hitArea = null;
    this.text = null;
    this.p = new Promise((resolve) => {
      EventsWrapper.once(`enemyDestroyed_${this.id}`, () => {
        EventsWrapper.removeAllListeners(`enemyDestroyed_${this.id}`);
        resolve();
      });
    });

    this._assignTickListener();
  }

  addInstance() {
    Enemy.instances = Enemy.instances || [];
    Enemy.instances.push(this);
  }

  updatePos(x = this.x, y = this.y) {
    if (!this.alive) {
      return;
    }

    this.shape.x = x;
    this.shape.y = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x = x;
    this.text.y = y;
  }

  _assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.trigger();
      this.move();

      this.collisionCheck(FriendBullet.instances);
    });
  }

  /**
   * collision test with your bullets.
   * @param {Array<Object>} targetArray - Object must have #shape to hitTest
   */
  collisionCheck(targetArray) {
    for (let i = 0; i < targetArray.length; i++) {
      if (!this.alive) {
        break;
      }
      const target = targetArray[i];
      const pos = this.hitArea.localToLocal(0, 0, target.shape);
      const hitTest = this.hitArea.hitTest(pos.x, pos.y);
      if (hitTest) {
        this.beShot({x: pos.x, y: pos.y, bullet: target});
      }
    }
  }

  /**
   * kicked by collision check.
   *
   * @param {object} args
   */
  beShot(args) {
    if (!this.alive) {
      return;
    }

    const x = args.x;
    const y = args.y;

    new Blow({
      stage: this.stage,
      x: this.x - x,
      y: this.y - y,
      color: 'red',
    });

    this.beHit(args);
    args.bullet.die();
  }

  trigger() {
    throw new Error('implement abstract #trigger.');
  }

  move() {
    throw new Error('implement abstract #move.');
  }

  beHit(args) {
    const bullet = args.bullet;

    this.hitPoint -= bullet.stoppingPower;
  }

  destroyed() {
    this.last();

    new Blow({
      stage: this.stage,
      x: this.x,
      y: this.y,
      color: 'red',
      radius: 100,
    });

    Score.addPoint(this.score);

    this.die();
  }

  /**
   * kicked just after #destroyed, before #die.
   */
  last() {
    /*
     * do nothing in general.
     */
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

    EventsWrapper.emit(`enemyDestroyed_${this.id}`);

    for (let i = 0; i < Enemy.instances.length; i++) {
      const enemy = Enemy.instances[i];
      if (enemy === this) {
        Enemy.instances.splice(i, 1);
        break;
      }
    }
  }

  static flush() {
    while (Enemy.instances.length > 0) {
      for (let i_b = 0; i_b < Enemy.instances.length; i_b++) {
        const enemy = Enemy.instances[i_b];
        enemy.die();
      }
    }
  }

  slideIn() {
    if (!this.isEdgeOut) {
      return false;
    }

    if (this.x <= STAGE_EDGE_LEFT) {
      this.x += 1;
    }
    if (this.x >= STAGE_EDGE_RIGHT) {
      this.x -= 1;
    }
    if (this.y <= STAGE_EDGE_TOP) {
      this.y += 1;
    }
    if (this.y >= STAGE_EDGE_BOTTOM) {
      this.y -= 1;
    }
  }

  get isEdgeOut() {
    return this.x <= STAGE_EDGE_LEFT ||
      this.x >= STAGE_EDGE_RIGHT ||
      this.y <= STAGE_EDGE_TOP ||
      this.y >= STAGE_EDGE_BOTTOM;
  }

  get isFrameOut() {
    return this.x <= STAGE_FRAME_LEFT ||
      this.x >= STAGE_FRAME_RIGHT ||
      this.y <= STAGE_FRAME_TOP ||
      this.y >= STAGE_FRAME_BOTTOM;
  }
}

export default Enemy;
