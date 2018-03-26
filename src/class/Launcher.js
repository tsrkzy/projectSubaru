'use strict';
import Enemy from './Enemy';
import {
  LAUNCHER_WIDTH,
  LAUNCHER_HEIGHT,
  BOMBER_SHOT_DEPTH,
  BOMBER_SHOT_COUNT,
  LAUNCHER_DELAY
} from './Constant';
import Sign from './Sign';
import EnemyMarker from './EnemyMarker';
import FireWorks from './FireWorks';
import AirCraft from './AirCraft';

/**
 * Enemy "Launcher" class.
 * Once locked you, he launch missiles rapidly.
 */
class Launcher extends Enemy {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.deploy();
    this.assignTickListener();
    this.aimTime = Math.floor(Math.random() * 100);
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = `launcher:{hp: ${this.hitPoint}`;
    });
  }

  /**
   * firing control kicked every tick
   */
  trigger() {
    if ((createjs.Ticker.getTicks() + this.aimTime) % LAUNCHER_DELAY !== 0) {
      return;
    }
    const airCraft = AirCraft.getInstance();

    /*
     * lock marker on you.
     */
    const marker = new EnemyMarker({
      x: this.x,
      y: this.y,
    });
    marker.p.then(() => {

      /*
       * effect sign on you.
       */
      const signX = airCraft.x;
      const signY = airCraft.y;
      const sign = new Sign({
        x: signX,
        y: signY,
      });
      sign.p.then(() => {
        /*
         * bomb on you.
         */
        FireWorks.conch(
          signX,
          signY,
          BOMBER_SHOT_COUNT,
          BOMBER_SHOT_DEPTH
        );
      });
    }).catch(() => {
      console.log('AirCraft already died');
    });
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
    this.shape.graphics.beginFill('darkgray').drawRect(0 - LAUNCHER_WIDTH / 2, 0 - LAUNCHER_HEIGHT / 2, LAUNCHER_WIDTH, LAUNCHER_HEIGHT);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-LAUNCHER_WIDTH / 2, -LAUNCHER_HEIGHT / 2, LAUNCHER_WIDTH, LAUNCHER_HEIGHT);

    this.text = new createjs.Text('launcher', 'bold 9px Arial', 'black');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Launcher;
