'use strict';

import {
  CANVAS_ID,
  STAGE_HEIGHT,
  STAGE_WIDTH
} from './Constant';

class Canvas {
  /**
   * @constructor
   * @singleton
   */
  constructor() {
    if (typeof Canvas.instance === 'object') {
      return Canvas.instance;
    }
    Canvas.instance = this;

    Canvas.stage = new createjs.Stage(CANVAS_ID);

    const background = new createjs.Shape();
    background.graphics
      .beginFill('#151515')
      .drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
    Canvas.stage.addChild(background);
  }

  static getStage() {
    return Canvas.stage;
  }
}

export default Canvas;
