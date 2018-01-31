"use strict";

import AirCraft from "./AirCraft.js";
import Enemy from "./Enemy";
import EnemyBullet from "./EnemyBullet";
import FriendBullet from "./FriendBullet";
import Wave from "./Wave";

class Stage {
  constructor() {
    
    this.stage    = new createjs.Stage('demoCanvas');
    this.airCraft = new AirCraft({stage: this.stage});
  
    this.indicator   = new createjs.Text('', 'bold 9px Arial', 'lightgray');
    this.indicator.x = 400;
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