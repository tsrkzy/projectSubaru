'use strict';

import {
  SIGN_INNER_RADIUS,
  SIGN_OUTER_RADIUS,
} from './Constant';
import Canvas from './Canvas';

/**
 * enemy bullet-storm drop zone.
 */
class Sign {
  /**
   * @param {{stage, x, y}} args
   * @constructor
   */
  constructor(args) {
    this.stage = Canvas.getStage();

    this.shape = new createjs.Shape();
    this.shape.x = args.x || 0;
    this.shape.y = args.y || 0;
    this.outline = this.shape.clone();

    this.shape.alpha = 0.1;
    this.shape.graphics
      .setStrokeStyle(1)
      .beginStroke('white')
      .drawCircle(0, 0, SIGN_OUTER_RADIUS);

    this.outline.alpha = 0.3;
    this.outline.graphics
      .setStrokeStyle(1)
      .beginStroke('white')
      .drawCircle(0, 0, SIGN_INNER_RADIUS);

    this.stage.addChild(this.shape);
    this.stage.addChild(this.outline);

    this.p = new Promise((resolve, reject) => {
      const completeHandler = () => {
        createjs.Tween.removeTweens(this.shape);
        this.stage.removeChild(this.shape);
        this.stage.removeChild(this.outline);
        this.shape = null;
        this.outline = null;

        resolve();
      };

      window.setTimeout(completeHandler.bind(this), 600);
    });
  }
}

export default Sign;
