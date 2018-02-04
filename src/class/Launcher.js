"use strict";
import Enemy from "./Enemy";
import {LAUNCHER_WIDTH, LAUNCHER_HEIGHT, BOMBER_SHOT_DEPTH, BOMBER_SHOT_COUNT} from "./Constant";
import MathUtil from "./MathUtil";
import Sign from "./Sign";
import EnemyMarker from "./EnemyMarker";
import FireWorks from "./FireWorks";

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
    this.addInstance();
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = `launcher:{hp: ${this.hitPoint}`;
    })
  }

  /**
   * firing control kicked every tick
   */
  trigger() {
    if (createjs.Ticker.getTicks() % 120 !== 0) {
      return
    }
  
    let theta = MathUtil.getAngleDegree(
      this.x,
      this.y,
      this.airCraft.x,
      this.airCraft.y,
    );
  
    /*
     * lock marker on you.
     */
    let marker = new EnemyMarker({
      x    : this.x,
      y    : this.y,
      angle: theta,
    });
    marker.p.then(() => {
    
      /*
       * Bomber was dead, sign does not appear.
       */
      if (this.alive === false) {
        return;
      }
    
      /*
       * effect sign on you.
       */
      let signX = this.airCraft.x;
      let signY = this.airCraft.y;
      let sign  = new Sign({
        x    : signX,
        y    : signY,
      });
      sign.p.then(() => {
      
        /*
         * bomb on you.
         */
        FireWorks.conch(
          signX,
          signY,
          BOMBER_SHOT_COUNT,
          BOMBER_SHOT_DEPTH,
        );
      });
    });
  }

  /**
   * moving control kicked every tick
   */
  move() {
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