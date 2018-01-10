"use strict";

const Stage = require('./class/Stage.js');
const GameClock = require('./class/GameClock.js');

/*
 * display "GAME START"
 */
(window.onLoad = () => {
  let stage = new createjs.Stage('demoCanvas');
  
  let g = new createjs.Graphics();
  g.setStrokeStyle(1)
    .beginStroke("#000000")
    .beginFill('lightgray');
  let rect      = g.drawRect(200, 100, 300, 100);
  let rectShape = new createjs.Shape(rect);
  
  GameClock.init();
  
  rectShape.addEventListener('click', gameStartHandler, false);
  function gameStartHandler() {
    let s = new Stage();
    rectShape.removeEventListener('click', gameStartHandler, false)
  }
  
  stage.addChild(rectShape);
  stage.update();
})();
