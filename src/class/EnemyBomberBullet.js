"use strict";
import EnemyBullet from "./EnemyBullet";
import {
  BOMBER_BULLET_SPEED} from "./Constant";

/**
 * enemy bomber shoot it.
 */
class EnemyBombStrike extends EnemyBullet {
  
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
      this.x -= BOMBER_BULLET_SPEED * Math.cos(this.angle);
      this.y -= BOMBER_BULLET_SPEED * Math.sin(this.angle);
      this.updatePos();
      this.getOutHandler();
    })
  }
  
  deploy() {
    
    /*
     * lock marker on you.
     */
    let marker = new EnemyMarker();
    marker.p.then(() => {
      
      /*
       * effect sign on you.
       */
      let sign = new EnemySign();
      sign.p.then(() => {
        
        /*
         * bomb on you.
         */
        new EnemyBombStrike()
      });
    });
  }
}

export default EnemyBombStrike;