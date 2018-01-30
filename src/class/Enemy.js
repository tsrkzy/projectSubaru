"use strict";
import FriendBullet from "./FriendBullet";
import Clock from "./Clock";
import Blow from "./Blow";
import AirCraft from "./AirCraft";
import EventWrapper from "./EventsWrapper";

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
      this.alive = false;
      this.destroyed();
    }
  }

  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    this.id = Enemy.id;
    Enemy.id++;
    this.x = args.x;
    this.y = args.y;
    this.airCraft = AirCraft.getInstance();
    this.hitPoint = args.hitPoint;
    this.alive = true;
    this.stage = args.stage;
    this.clock = new Clock(this);
    this.shape = null;
    this.hitArea = null;
    this.text = null;
    console.log(`enemy_${this.id} spawned`);
    this.p = new Promise((resolve) => {
      EventWrapper.on(`enemyDestroyed_${this.id}`, () => {
        EventWrapper.removeAllListeners(`enemyDestroyed_${this.id}`);
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
      let gatlingBullets = ((FriendBullet.instances || {}).GatlingBullet || []);
      this.collisionCheck(gatlingBullets);
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
      let target = targetArray[i];
      let pos = this.hitArea.localToLocal(0, 0, target.shape);
      let hitTest = this.hitArea.hitTest(pos.x, pos.y);
      if (hitTest) {
        this.beShot({ x: pos.x, y: pos.y, bullet: target });
      }
    }
  }

  /**
   * kicked by collision check.
   *
   * @param args
   */
  beShot(args) {

    if (!this.alive) {
      return;
    }

    let x = args.x;
    let y = args.y;

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
    let bullet = args.bullet;

    this.hitPoint -= bullet.stoppingPower;
  }

  destroyed() {

    new Blow({
      stage: this.stage,
      x: this.x,
      y: this.y,
      color: 'red',
      radius: 100
    });

    this.die();
  }

  die() {
    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.text);
    this.clock.allOff();
    this.airCraft = null;
    this.clock = null;
    this.shape = null;
    this.text = null;
    this.hitArea = null;
    this.stage = null;
    EventWrapper.emit(`enemyDestroyed_${this.id}`);

    for (let i = 0; i < Enemy.instances.length; i++) {
      let enemy = Enemy.instances[i];
      if (enemy === this) {
        Enemy.instances.splice(i, 1);
        break;
      }
    }
  }

}

Enemy.id = 0;
Enemy.instances = [];

export default Enemy;