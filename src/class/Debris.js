'use strict';
import Enemy from './Enemy';
import MathUtil from './MathUtil';
import {DEBRIS_HEIGHT, DEBRIS_WIDTH} from './Constant';

/**
 * Enemy "Debris" class.
 * only move without shot.
 * come from outside of stage, go oppsite and die.
 */
class Debris extends Enemy {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.speed = args.speed;
    this.angleDegree = args.angleDegree;
    this.angleRadian = MathUtil.d2r(this.angleDegree);
    this.vX = this.speed * Math.cos(this.angleRadian);
    this.vY = this.speed * Math.sin(this.angleRadian);
    this.addInstance();
    this.deploy();
    this.assignTickListener();
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('black').drawRect(0 - DEBRIS_WIDTH / 2, 0 - DEBRIS_HEIGHT / 2, DEBRIS_WIDTH, DEBRIS_HEIGHT);

    this.hitArea = this.shape.clone(true);
    this.hitArea.alpha = 0;
    this.text = new createjs.Text('debris', 'bold 9px Arial', 'dimgray');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      if (this.isFrameOut) {
        this.die();
      }
    });
  }

  /**
   * debris shot nothing.
   */
  trigger() {
  }

  move() {
    this.x += this.vX;
    this.y += this.vY;
    this.updatePos();
  }
}

export default Debris;
