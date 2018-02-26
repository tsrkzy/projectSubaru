'use strict';

import Canvas from './Canvas';
import Game from './Game';

class Title {
  /**
   * @constructor
   */
  constructor() {

    new Canvas();
    Canvas.initStage();
    this.stage = Canvas.getStage();

    const g = new createjs.Graphics();
    g.setStrokeStyle(1)
      .beginStroke('#000000')
      .beginFill('lightgray');
    const rect = g.drawRect(200, 100, 300, 100);
    this.gameStartButton = new createjs.Shape(rect);
    this.gameStartHandler = this.gameStart.bind(this);

    this.gameStartButton.addEventListener('click', this.gameStartHandler, false);

    this.stage.addChild(this.gameStartButton);
    this.stage.update();

  }

  gameStart() {
    this.gameStartButton.removeEventListener('click', this.gameStartHandler, false);
    this.stage.removeChild(this.gameStartButton);

    new Game();
  }
}

export default Title;