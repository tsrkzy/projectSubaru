'use strict';
import Enemy from './Enemy';
import EnemyBatteryBullet from './EnemyBatteryBullet';
import MathUtil from './MathUtil';
import {
  BATTERY_HEIGHT,
  BATTERY_WIDTH,
  STAGE_EDGE_BOTTOM,
  STAGE_EDGE_LEFT,
  STAGE_EDGE_RIGHT,
  STAGE_EDGE_TOP,
} from './Constant';

/**
 * Enemy "Battery" class.
 * shoot a bullet at you.
 */
class Battery extends Enemy {
  /**
   * @constructor
   * @param {Object} args - x, y
   */
  constructor(args) {
    super(args);
    this.directionX = 1;
    this.directionY = 1;
    this.addInstance();
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = `battery:{hp: ${this.hitPoint}`;
    });
  }

  /**
   * firing control kicked every tick
   */
  trigger() {
    if (createjs.Ticker.getTicks() % 120 !== 0) {
      return;
    }

    const theta = MathUtil.getAngleDegree(
      this.x,
      this.y,
      this.airCraft.x,
      this.airCraft.y
    );
    const shake = MathUtil.d2r(3);

    new EnemyBatteryBullet({
      x: this.x,
      y: this.y,
      angle: theta,
      stage: this.stage,
    });

    new EnemyBatteryBullet({
      x: this.x,
      y: this.y,
      angle: theta + shake,
      stage: this.stage,
    });

    new EnemyBatteryBullet({
      x: this.x,
      y: this.y,
      angle: theta - shake,
      stage: this.stage,
    });
  }

  /**
   * moving control kicked every tick
   */
  move() {
    this.walkAround(STAGE_EDGE_LEFT, STAGE_EDGE_RIGHT, STAGE_EDGE_TOP, STAGE_EDGE_BOTTOM);
    this.updatePos();
  }

  walkAround(minX, maxX, minY, maxY) {
    if (this.directionX === 1 && this.x >= maxX) {
      this.directionX = -1;
    } else if (this.directionX === -1 && this.x <= minX) {
      this.directionX = 1;
    }
    this.x += this.directionX;

    if (this.directionY === 1 && this.y >= maxY) {
      this.directionY = -1;
    } else if (this.directionY === -1 && this.y <= minY) {
      this.directionY = 1;
    }
    this.y += this.directionY;
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('darkgray').drawRect(0 - BATTERY_WIDTH / 2, 0 - BATTERY_HEIGHT / 2, BATTERY_WIDTH, BATTERY_HEIGHT);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-BATTERY_WIDTH / 2, -BATTERY_HEIGHT / 2, BATTERY_WIDTH, BATTERY_HEIGHT);

    this.text = new createjs.Text('battery', 'bold 9px Arial', 'black');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Battery;
