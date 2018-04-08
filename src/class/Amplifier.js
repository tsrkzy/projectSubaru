'use strict';
import Enemy from './Enemy';
import {
  AMPLIFIER_COEFFICIENT,
  AMPLIFIER_HEIGHT,
  AMPLIFIER_SPIN_UP_TIME,
  AMPLIFIER_WIDTH,
  dd,
} from './Constant';
import MathUtil from './MathUtil';
import Hue from './Hue';
import EventsWrapper from './EventsWrapper';

/**
 * Enemy "Amplifier" class.
 * He expand every enemy bullet hitArea.
 */
class Amplifier extends Enemy {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.enrage = false;

    this.deploy();
    this.assignTickListener();
    window.setTimeout(() => {
      this.rage();
    }, AMPLIFIER_SPIN_UP_TIME);
  }

  rage() {
    if (!this.alive) {
      return false;
    }
    this.enrage = true;

    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      const tick1 = this.clock.getTick() * 4;
      const tick2 = tick1 + 60;
      const tick3 = tick2 + 60;
      const age1 = Math.abs(Math.sin(MathUtil.d2r(tick1)));
      const age2 = Math.abs(Math.sin(MathUtil.d2r(tick2)));
      const age3 = Math.abs(Math.sin(MathUtil.d2r(tick3)));
      this.ripple1.alpha = 1 - (age1 * 0.8);
      this.ripple1.scaleX = age1;
      this.ripple1.scaleY = age1;
      this.ripple2.alpha = 1 - (age2 * 0.8);
      this.ripple2.scaleX = age2;
      this.ripple2.scaleY = age2;
      this.ripple3.alpha = 1 - (age3 * 0.8);
      this.ripple3.scaleX = age3;
      this.ripple3.scaleY = age3;
    });
  }

  static getAmplifiers() {
    const result = [];
    for (let i = 0; i < Enemy.instances.length; i++) {
      const enemy = Enemy.instances[i];
      if (enemy instanceof Amplifier) {
        result.push(enemy);
      }
    }

    return result;
  }

  /**
   * return bullet expand ratio.
   * returns 2 to the power of number of Amplifier enraged.
   * (if Amplifier enraged does not exist, return 1)
   *
   * @return {number} Math.power(2,n);
   */
  static getRatio() {
    let enraged = 0;
    const amplifiers = Amplifier.getAmplifiers();

    for (let i = 0; i < amplifiers.length; i++) {
      const enemy = amplifiers[i];
      if (!(enemy instanceof Amplifier)) {
        continue;
      }

      if (enemy.enrage === true) {
        enraged++;
      }
    }

    const amplify = Math.pow(AMPLIFIER_COEFFICIENT, enraged);

    return amplify;
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = dd(`amp:{hp: ${this.hitPoint}`);
    });
  }

  /**
   * firing control kicked every tick
   */
  trigger() {
  }

  /**
   * moving control kicked every tick
   */
  move() {
    this.slideIn();
    this.drift();
    this.updatePos();
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
    this.ripple1.x = x;
    this.ripple1.y = y;
    this.ripple2.x = x;
    this.ripple2.y = y;
    this.ripple3.x = x;
    this.ripple3.y = y;
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(Hue.getHue())
      .drawRect(
        -AMPLIFIER_WIDTH / 2,
        -AMPLIFIER_HEIGHT / 2,
        AMPLIFIER_WIDTH,
        AMPLIFIER_HEIGHT);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(
        -AMPLIFIER_WIDTH / 2,
        -AMPLIFIER_HEIGHT / 2,
        AMPLIFIER_WIDTH,
        AMPLIFIER_HEIGHT);

    this.ripple1 = new createjs.Shape();
    this.ripple1.alpha = 0;
    this.ripple1.graphics
      .setStrokeStyle(2)
      .beginStroke('white')
      .drawCircle(0, 0, 40);

    this.ripple2 = new createjs.Shape();
    this.ripple2.alpha = 0;
    this.ripple2.graphics
      .setStrokeStyle(2)
      .beginStroke('white')
      .drawCircle(0, 0, 40);

    this.ripple3 = new createjs.Shape();
    this.ripple3.alpha = 0;
    this.ripple3.graphics
      .setStrokeStyle(2)
      .beginStroke('white')
      .drawCircle(0, 0, 40);

    this.text = new createjs.Text(dd('amp'), 'bold 9px Arial', 'white');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
    this.stage.addChild(this.ripple1);
    this.stage.addChild(this.ripple2);
    this.stage.addChild(this.ripple3);
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
      this.stage.removeChild(this.ripple1);
      this.stage.removeChild(this.ripple2);
      this.stage.removeChild(this.ripple3);
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
}

export default Amplifier;
