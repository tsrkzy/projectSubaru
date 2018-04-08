'use strict';
import EnemyBullet from './EnemyBullet';
import {
  GUNPOWDER_BULLET_RADIUS,
  GUNPOWDER_BULLET_SPEED,
} from './Constant';
import Amplifier from './Amplifier';
import Hue from './Hue';

/**
 * only use for FireWorks.
 * @requires Amplifier
 */
class GunPowder extends EnemyBullet {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.angle = args.angle;
    this.delayMs = args.delayMs;
    this.speed = GUNPOWDER_BULLET_SPEED * (args.speedCoefficient || 1);
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      this.x -= this.speed * Math.cos(this.angle);
      this.y -= this.speed * Math.sin(this.angle);
      this.updatePos();
      this.getOutHandler();
    });
  }

  deploy() {
    const amplify = Amplifier.getRatio();

    this.shape = new createjs.Shape();
    this.shape.graphics
      .beginFill(Hue.getHue())
      .drawCircle(0, 0, amplify * GUNPOWDER_BULLET_RADIUS);

    this.text.text = '';

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawCircle(0, 0, amplify * GUNPOWDER_BULLET_RADIUS);

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default GunPowder;
