'use strict';
import Enemy from './Enemy';
import {
  NOISE_WIDTH,
  NOISE_HEIGHT,
  dd,
} from './Constant';
import MathUtil from './MathUtil';
import EnemyMarker from './EnemyMarker';
import Jammer from './Jammer';
import AirCraft from './AirCraft';
import Hue from './Hue';

/**
 * Enemy "Noise" class.
 * he use ecm(electrical counter measure).
 * its slows your aircraft.
 */
class Noise extends Enemy {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = dd(`noise:{hp: ${this.hitPoint}`);
    });
  }

  /**
   * firing control kicked every tick
   */
  trigger() {
    if (createjs.Ticker.getTicks() % 120 !== 0) {
      return;
    }

    const airCraft = AirCraft.getInstance();

    const theta = MathUtil.getAngleDegree(
      this.x,
      this.y,
      airCraft.x,
      airCraft.y
    );

    /*
     * lock marker on you.
     */
    const marker = new EnemyMarker({
      x: this.x,
      y: this.y,
      angle: theta,
    });
    marker.p.then(() => {
      /*
       * jammer on you.
       */
      const x = airCraft.x;
      const y = airCraft.y;
      new Jammer(x, y);
    });
  }

  /**
   * moving control kicked every tick
   */
  move() {
    this.slideIn();
    this.drift();
    this.updatePos();
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(Hue.getHue()).drawRect(0 - NOISE_WIDTH / 2, 0 - NOISE_HEIGHT / 2, NOISE_WIDTH, NOISE_HEIGHT);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-NOISE_WIDTH / 2, -NOISE_HEIGHT / 2, NOISE_WIDTH, NOISE_HEIGHT);

    this.text = new createjs.Text(dd('noise'), 'bold 9px Arial', 'black');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Noise;
