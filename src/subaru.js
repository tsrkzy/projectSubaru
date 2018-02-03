"use strict";

import Stage from "./class/Stage.js";
import EventsWrapper from "./class/EventsWrapper";
import {CANVAS_ID} from "./class/Constant.js";

/*
 * display "GAME START"
 */
(window.onLoad = () => {
  let s = new createjs.Stage(CANVAS_ID);
  
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  
  let g = new createjs.Graphics();
  g.setStrokeStyle(1)
    .beginStroke("#000000")
    .beginFill('lightgray');
  let rect      = g.drawRect(200, 100, 300, 100);
  let rectShape = new createjs.Shape(rect);
  
  rectShape.addEventListener('click', gameStartHandler, false);
  
  s.addChild(rectShape);
  s.update();
  
  function gameStartHandler() {
    rectShape.removeEventListener('click', gameStartHandler, false);
    
    let s = new Stage();
    let waveIterator  = wave(s);
    let stageListener = new EventsWrapper();
    let die           = false;

    stageListener.on('wave.Clear', () => {
      waveIterator.next();
    });

    stageListener.on('gameOver', () => {
      die = true;
      waveIterator.next();
    });
    
    waveIterator.next();
  
    function* wave(s) {
      
      while (1) {
        if (die) {
          break;
        }
        s.nextWave();
        /*
         * pause process flow till next waveIterator#next();
         */
        yield;
      }
  
    }
  }
})();
