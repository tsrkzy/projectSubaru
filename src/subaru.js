"use strict";

import Stage from "./class/Stage.js";
import EventsWrapper from "./class/EventsWrapper";
import {CANVAS_ID} from "./class/Constant.js";
import Wave from "./class/Wave";


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
  
    new Stage();
    let stageListener = new EventsWrapper();
    let wi            = waveIterator(stageListener);
    let die           = false;
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
  }
})();
