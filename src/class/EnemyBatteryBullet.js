'use strict';
import EnemyBullet from './EnemyBullet';
import {
  BATTERY_BULLET_HEIGHT,
  BATTERY_BULLET_SPEED,
  BATTERY_BULLET_RADIUS,
} from './Constant';
import Amplifier from './Amplifier';

/**
 * enemy battery shoot it.
 */
class EnemyBatteryBullet extends EnemyBullet {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.angle = args.angle;
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      this.x -= BATTERY_BULLET_SPEED * Math.cos(this.angle);
      this.y -= BATTERY_BULLET_SPEED * Math.sin(this.angle);
      this.updatePos();
      this.getOutHandler();
    });
  }

  deploy() {
    const amplify = Amplifier.getRatio();

    this.shape = new createjs.Shape();
    this.shape.graphics
      .beginFill('white')
      .drawCircle(0, 0, amplify * BATTERY_BULLET_RADIUS);

    this.text.text = '';

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawCircle(0, 0, amplify * BATTERY_BULLET_RADIUS);

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default EnemyBatteryBullet;
