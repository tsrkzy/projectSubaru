'use strict';

import Canvas from './Canvas';
import Game from './Game';
import {
  STAGE_HEIGHT,
  STAGE_MIDDLE_X,
  STAGE_MIDDLE_Y,
  STAGE_WIDTH
} from './Constant';
import Score from './Score';
import Hue from './Hue';

class Title {
  /**
   * @constructor
   */
  constructor() {
    new Canvas();
    new Score();
    new Hue();
    this.stage = Canvas.getStage();

    const b = new createjs.Graphics();
    b.beginFill('black');
    const blind = b.drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
    this.blind = new createjs.Shape(blind);
    this.blind.alpha = 0.3;

    /* start button */
    {
      this.start = new createjs.Text('Start', 'bold 16px Arial', 'lightgray');
      const {height, width} = this.start.getMetrics();
      const left = (-width / 2) + STAGE_MIDDLE_X;
      const top = (-height / 2) + STAGE_MIDDLE_Y;
      this.start.x = left;
      this.start.y = top;

      const g = new createjs.Graphics();
      g.setStrokeStyle(1)
        .beginStroke('#000000')
        .beginFill('black');

      const rect = g.drawRect(left, top, width, height);
      this.gameStartButton = new createjs.Shape(rect);
      this.gameStartHandler = this.gameStart.bind(this);

      this.gameStartButton.addEventListener('click', this.gameStartHandler, false);
    }

    /* score */
    {
      const score = Score.highScore;
      this.score = new createjs.Text(score ? `score: ${score}` : '', 'bold 12px Arial', 'lightgray');
      const {height, width} = this.score.getMetrics();
      const left = (-width / 2) + STAGE_MIDDLE_X;
      const top = (-height / 2) + STAGE_MIDDLE_Y + height * 2;
      this.score.x = left;
      this.score.y = top;

      const g = new createjs.Graphics();
      g.setStrokeStyle(1)
        .beginStroke('#000000')
        .beginFill('black');

      const rect = g.drawRect(left, top, width, height);
      this.scoreIndicator = new createjs.Shape(rect);
    }

    this.stage.addChild(this.blind);
    this.stage.addChild(this.gameStartButton);
    this.stage.addChild(this.scoreIndicator);
    this.stage.addChild(this.score);
    this.stage.addChild(this.start);

    this.stage.update();
  }

  gameStart() {
    this.gameStartButton.removeEventListener('click', this.gameStartHandler, false);
    this.stage.removeChild(this.blind);
    this.stage.removeChild(this.gameStartButton);
    this.stage.removeChild(this.score);
    this.stage.removeChild(this.start);

    new Game();
  }
}

export default Title;
