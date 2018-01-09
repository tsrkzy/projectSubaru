"use strict";

const Stage = require('./class/Stage.js');

/*
 * スタート画面の表示
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
  
  /*
   * イベントの付与
   */
  rectShape.addEventListener('click', gameStartHandler, false);
  
  function gameStartHandler() {
    let s = new Stage();
    rectShape.removeEventListener('click', gameStartHandler, false)
  }
  
  /*
   * 追加、画面の更新
   */
  stage.addChild(rectShape);
  stage.update();
})();
