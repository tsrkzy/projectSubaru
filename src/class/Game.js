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
import Amplifier from './Amplifier';
import Jammer from './Jammer';

class Game {
  /**
   * @constructor
   */
  constructor() {
    console.info('new game start.');

    new AirCraft();

    Wave.level = 0;

    Enemy.flush();
    EnemyMarker.flush();
    EnemyBullet.flush();

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
      /* kill timer */
      createjs.Ticker.reset();
      createjs.Ticker.removeAllEventListeners();

      die = true;

      /* kill wave generator */
      wi.return();

      this.destroy();

      new Title();
    });

    function* waveIterator(listener) {
      while (1) {
        if (die) {
          break;
        }
        const wave = new Wave();
        wave.p
          .then((level) => {
            console.warn(`wave: ${level} clear!!`);
            listener.emit('wave.clear');
          })
          .catch((level) => {
            console.warn(`wave: ${level} failed!!`);
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
      const jam = Jammer.instances.length || 0;
      const amp = Amplifier.getRatio() || 1;
      const amp_c = Amplifier.getAmplifiers().length || 0;
      const wave = Wave.level;
      this.indicator.text =
        `FPS: ${measuredFPS}\n` +
        `FriendBullets: ${friendBulletCount}\n` +
        `Enemy: ${enemyCount}\n` +
        `EnemyBullets: ${enemyBulletCount}\n` +
        `jam: ${jam}\n` +
        `amp: ${amp} - ${amp_c}\n` +
        `Wave: ${wave}`;
    });
  }

  destroy() {
    this.stage.removeChild(this.indicator);

    if (this.stageListener) {
      this.stageListener.removeAllListeners();
      this.stageListener = null;
    }

    createjs.Ticker.removeAllEventListeners();
  }
}

export default Game;
