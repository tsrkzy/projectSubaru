"use strict";

import Stage from "./class/Stage.js";
import EventsWrapper from "./class/EventsWrapper";

/*
 * display "GAME START"
 */
(window.onLoad = () => {
  let s = new createjs.Stage('demoCanvas');
  
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  
  let g = new createjs.Graphics();
  g.setStrokeStyle(1)
    .beginStroke("#000000")
    .beginFill('lightgray');
  let rect      = g.drawRect(200, 100, 300, 100);
  let rectShape = new createjs.Shape(rect);
  
  rectShape.addEventListener('click', gameStartHandler, false);
  
  function gameStartHandler() {
    rectShape.removeEventListener('click', gameStartHandler, false);
    
    let s = new Stage();
    let waveIterator  = wave(s);
    let stageListener = new EventsWrapper();
    let die           = false;
    
    waveIterator.next();
  
    function* wave(s) {
      s.nextWave();
      
      while (1) {
        if (die) {
          break;
        }
  
        stageListener.on('wave.Clear', () => {
          waveIterator.next();
        });
  
        stageListener.on('gameOver', () => {
          die = true;
          waveIterator.next();
        });
  
        /*
         * pause process flow till next waveIterator#next();
         */
        yield;
      }
  
      stageListener.removeAllListeners();
    }
  }
  
  s.addChild(rectShape);
  s.update();
})();
