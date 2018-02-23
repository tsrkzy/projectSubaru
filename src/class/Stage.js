'use strict';

import AirCraft from './AirCraft.js';
import Enemy from './Enemy';
import EnemyBullet from './EnemyBullet';
import FriendBullet from './FriendBullet';
import {
  INDICATOR_FONT_STYLE,
  INDICATOR_X,
  INDICATOR_Y,
} from './Constant';
import Canvas from './Canvas';

class Stage {
  /**
   * @constructor
   * @singleton
   */
  constructor() {
    new Canvas();
    this.stage = Canvas.getStage();

    this.airCraft = new AirCraft();

    this.indicator = new createjs.Text('', INDICATOR_FONT_STYLE, 'lightgray');
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
      const measuredFPS = createjs.Ticker.getMeasuredFPS();
      const friendBulletCount = ((FriendBullet.instances || {}).GatlingBullet || []).length;
      const enemyBulletCount = ((EnemyBullet.instances || {}).EnemyBatteryBullet || []).length;
      const enemyCount = (Enemy.instances || []).length;
      this.indicator.text =
        `FPS: ${measuredFPS}\n` +
        `FriendBullets: ${friendBulletCount}\n` +
        `Enemy: ${enemyCount}\n` +
        `EnemyBullets:${enemyBulletCount}`;
    });
  }
}

export default Stage;
