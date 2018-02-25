'use strict';

import Stage from './class/Stage.js';
import EventsWrapper from './class/EventsWrapper';
import Wave from './class/Wave';
import Canvas from './class/Canvas';

/*
 * display "GAME START"
 */
(window.onLoad = () => {
  new Canvas();
  const s = Canvas.stage;

  createjs.Ticker.timingMode = createjs.Ticker.RAF;

  const g = new createjs.Graphics();
  g.setStrokeStyle(1)
    .beginStroke('#000000')
    .beginFill('lightgray');
  const rect = g.drawRect(200, 100, 300, 100);
  const rectShape = new createjs.Shape(rect);

  const gameStartHandler = () => {

    rectShape.removeEventListener('click', gameStartHandler, false);
    s.removeChild(rectShape);

    new Stage();
    const stageListener = new EventsWrapper();
    const wi = waveIterator(stageListener);
    let die = false;
    wi.next();

    stageListener.on('wave.clear', () => {
      wi.next();
    });

    stageListener.on('gameOver', () => {
      die = true;
      wi.next();
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
  };

  rectShape.addEventListener('click', gameStartHandler, false);

  s.addChild(rectShape);
  s.update();
})();
