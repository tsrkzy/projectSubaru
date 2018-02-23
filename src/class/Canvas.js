'use strict';

import {CANVAS_ID} from './Constant';

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
  }

  static getStage() {
    return Canvas.stage;
  }
}

export default Canvas;
