"use strict";
import Enemy from "./Enemy";
import {BOMBER_HEIGHT, BOMBER_LAST_SHOT_COUNT, BOMBER_LAST_SHOT_DEPTH, BOMBER_SHOT_COUNT, BOMBER_SHOT_DEPTH, BOMBER_WIDTH} from "./Constant";
import EnemyMarker from "./EnemyMarker";
import MathUtil from "./MathUtil";
import Sign from "./Sign";
import FireWorks from "./FireWorks";

/**
 * Enemy "Bomber" class.
 * he dies nasty.
 */
class Bomber extends Enemy {
  
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
      this.text.text = `bomb:{hp: ${this.hitPoint}`;
    })
  }
  
  /**
   * firing control kicked every tick
   */
  trigger() {
    if (createjs.Ticker.getTicks() % 120 !== 0) {
      return
    }
  
    let x = this.airCraft.x;
    let y = this.airCraft.y;
  
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
      stage: this.stage,
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
        stage: this.stage,
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
          this.stage,
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
  
  /**
   * nasty lastShot
   */
  last() {
    FireWorks.sunFlower(
      this.x,
      this.y,
      this.stage,
      BOMBER_LAST_SHOT_COUNT,
      BOMBER_LAST_SHOT_DEPTH,
    );
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('darkgray').drawRect(0 - BOMBER_WIDTH / 2, 0 - BOMBER_HEIGHT / 2, BOMBER_WIDTH, BOMBER_HEIGHT);
    
    this.hitArea       = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-BOMBER_WIDTH / 2, -BOMBER_HEIGHT / 2, BOMBER_WIDTH, BOMBER_HEIGHT);
    
    this.text = new createjs.Text('bomber', 'bold 9px Arial', 'black');
    
    this.updatePos();
    
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Bomber;