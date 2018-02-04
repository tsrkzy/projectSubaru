"use strict";
import Enemy from "./Enemy";
import {NOISE_WIDTH, NOISE_HEIGHT, BOMBER_SHOT_DEPTH, BOMBER_SHOT_COUNT} from "./Constant";
import MathUtil from "./MathUtil";
import Sign from "./Sign";
import EnemyMarker from "./EnemyMarker";
import FireWorks from "./FireWorks";
import Jammer from "./Jammer";
import AirCraft from "./AirCraft";

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
    this.addInstance();
    this.deploy();
    this.assignTickListener();
  }
  
  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = `noise:{hp: ${this.hitPoint}`;
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
       * Noise was dead, jammer does not appear.
       */
      if (this.alive === false) {
        return;
      }
    
      /*
       * jammer on you.
       */
      let x = AirCraft.getInstance().x;
      let y = AirCraft.getInstance().y;
      new Jammer(x, y);
    });
  }
  
  /**
   * moving control kicked every tick
   */
  move() {
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('darkgray').drawRect(0 - NOISE_WIDTH / 2, 0 - NOISE_HEIGHT / 2, NOISE_WIDTH, NOISE_HEIGHT);
    
    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-NOISE_WIDTH / 2, -NOISE_HEIGHT / 2, NOISE_WIDTH, NOISE_HEIGHT);
    
    this.text = new createjs.Text('noise', 'bold 9px Arial', 'black');
    
    this.updatePos();
    
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Noise;