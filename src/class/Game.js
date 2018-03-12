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
import Wave from './Wave';
import EventsWrapper from './EventsWrapper';
import Title from './Title';
import EnemyMarker from './EnemyMarker';

class Game {
  /**
   * @constructor
   */
  constructor() {
    console.info('new game start.');

    new AirCraft();

    Wave.level = 0;

    Enemy.flush();
    console.log('Enemy.flush(); done.'); // @DELETEME
    EnemyMarker.flush();
    console.log('EnemyMarker.flush(); done.'); // @DELETEME
    EnemyBullet.flush();
    console.log('EnemyBullet.flush(); done.'); // @DELETEME

    this.stage = Canvas.getStage();

    this.indicator = new createjs.Text('', INDICATOR_FONT_STYLE, 'lightgray');
    this.indicator.x = INDICATOR_X;
    this.indicator.y = INDICATOR_Y;
    this.stage.addChild(this.indicator);

    this.stageListener = new EventsWrapper();
    EventsWrapper.removeAllListeners();

    const wi = waveIterator(this.stageListener);
    let die = false;
    wi.next();

    this.stageListener.on('wave.clear', () => {
      wi.next();
    });

    this.stageListener.once('gameOver', () => {
      die = true;
      wi.next();
      this.destroy();
      new Title();
    });

    function* waveIterator(listener) {
      while (1) {
        if (die) {
          break;
        }
        new Wave().p.then(() => {
          listener.emit('wave.clear');
        });

        /*
         * pause process flow till next waveIterator#next();
         */
        yield;
      }
    }

    /*
     * update stage every tick
     */
    createjs.Ticker.addEventListener('tick', this.stage);

    /*
     * display debug indicator
     */
    createjs.Ticker.addEventListener('tick', () => {
      const measuredFPS = createjs.Ticker.getMeasuredFPS();
      const friendBulletCount = (FriendBullet.instances || []).length;
      const enemyBulletCount = EnemyBullet.instances.length;
      const enemyCount = (Enemy.instances || []).length;
      const wave = Wave.level;
      this.indicator.text =
        `FPS: ${measuredFPS}\n` +
        `FriendBullets: ${friendBulletCount}\n` +
        `Enemy: ${enemyCount}\n` +
        `EnemyBullets:${enemyBulletCount}\n` +
        `Wave:${wave}`;
    });
  }

  destroy() {

    if (this.stageListener) {
      this.stageListener.removeAllListeners();
      this.stageListener = null;
    }
  }
}

export default Game;
