"use strict";

import Stage from "./class/Stage.js";

/*
 * display "GAME START"
 */
(window.onLoad = () => {
  let stage = new createjs.Stage('demoCanvas');
  
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  
  let g = new createjs.Graphics();
  g.setStrokeStyle(1)
    .beginStroke("#000000")
    .beginFill('lightgray');
  let rect      = g.drawRect(200, 100, 300, 100);
  let rectShape = new createjs.Shape(rect);
  
  rectShape.addEventListener('click', gameStartHandler, false);
  function gameStartHandler() {
    rectShape.removeEventListener('click', gameStartHandler, false)
  
    let waveIterator   = wave();
    let die = false;
    waveIterator.next();
  
    function* wave() {
      while (1) {
        new Stage().promise
          .then(() => {
            /*
             * @TODO 生存したらthen, 死亡したらcatchみたいなコードになっているので
             * thenは正常系(生存、死亡)、catchは異常系(エラーハンドラ)にする
             */
            waveIterator.next();
          })
          .catch(() => {
            die = true;
            waveIterator.next();
          });
      
        yield;
      
        if (die) {
          break;
        }
      }
      console.info('finished!'); // @DELETEME
    }
  }
  
  stage.addChild(rectShape);
  stage.update();
})();
