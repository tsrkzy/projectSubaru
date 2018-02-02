"use strict";

import AirCraft from "./AirCraft.js";
import Enemy from "./Enemy";
import EnemyBullet from "./EnemyBullet";
import FriendBullet from "./FriendBullet";
import Wave from "./Wave";
import {
  CANVAS_ID,
  INDICATOR_FONT_STYLE,
  INDICATOR_X,
  INDICATOR_Y
} from "./Constant";

class Stage {
  constructor() {
  
    this.stage    = new createjs.Stage(CANVAS_ID);
    this.airCraft = new AirCraft({stage: this.stage});
  
    this.indicator   = new createjs.Text('', INDICATOR_FONT_STYLE, 'lightgray');
    this.indicator.x = INDICATOR_X;
    this.indicator.y = INDICATOR_Y;
    this.stage.addChild(this.indicator);
    
    /*
     * update stage every tick
     */
    createjs.Ticker.addEventListener('tick', this.stage);
    
    /*
     * display debug indicator
     */
    createjs.Ticker.addEventListener('tick', () => {
      let measuredFPS       = createjs.Ticker.getMeasuredFPS();
      let friendBulletCount = ((FriendBullet.instances || {}).GatlingBullet || []).length;
      let enemyBulletCount  = ((EnemyBullet.instances || {}).EnemyBatteryBullet || []).length;
      let enemyCount        = (Enemy.instances || []).length;
      this.indicator.text   =
        `FPS: ${measuredFPS}\n` +
        `FriendBullets: ${friendBulletCount}\n` +
        `Enemy: ${enemyCount}\n` +
        `EnemyBullets:${enemyBulletCount}`;
    })
  }
  
  /**
   * create next Wave
   */
  nextWave() {
    new Wave(this.stage);
  }
}

export default Stage;