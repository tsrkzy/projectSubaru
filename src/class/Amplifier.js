'use strict';
import Enemy from './Enemy';
import {
  AMPLIFIER_COEFFICIENT,
  AMPLIFIER_HEIGHT,
  AMPLIFIER_WIDTH,
} from './Constant';

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
    }, 4000);
  }

  rage() {
    if (!this.alive) {
      return false;
    }
    this.enrage = true;
    this.shape.graphics
      .endFill()
      .setStrokeStyle(2)
      .beginStroke('lightblue')
      .drawCircle(0, 0, 40);
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
      this.text.text = `amp:{hp: ${this.hitPoint}`;
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
    this.updatePos();
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('blue')
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

    this.text = new createjs.Text('amp', 'bold 9px Arial', 'white');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Amplifier;
