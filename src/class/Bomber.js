"use strict";
import Enemy from "./Enemy";
import {
  BOMBER_WIDTH,
  BOMBER_HEIGHT,
  BOMBER_LAST_SHOT_COUNT
} from "./Constant";
import EnemyLastBullet from "./EnemyLastBullet";
import EnemyMarker from "./EnemyMarker";
import MathUtil from "./MathUtil";

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
       * effect sign on you.
       */
      // let sign = new EnemySign();
      // sign.p.then(() => {
      //
      //   /*
      //    * bomb on you.
      //    */
      //   new EnemyBombBullet()
      // });
    });
  
    // new EnemyBomberBullet({
    //   x    : this.x,
    //   y    : this.y,
    //   angle: theta,
    //   stage: this.stage
    // });
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
    
    let numOfShot = BOMBER_LAST_SHOT_COUNT;
    
    for (let i = 0; i < numOfShot; i++) {
      new EnemyLastBullet({
        x    : this.x,
        y    : this.y,
        angle: (2 * Math.PI * i) / numOfShot,
        stage: this.stage,
      });
    }
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