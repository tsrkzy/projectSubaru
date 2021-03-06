'use strict';

import Canvas from './Canvas';

/**
 * Blow class.
 * render explode and blow up effect on bullet collision.
 */
class Blow {
  /**
   * @param {{radius, color, x, y}} args
   */
  constructor(args) {
    this.stage = Canvas.getStage();
    this.radius = args.radius || 20;
    this.color = args.color || 'lightblue';

    this.shape = new createjs.Shape();
    this.shape.x = args.x || 0;
    this.shape.y = args.y || 0;
    this.shape.alpha = 0;
    this.shape.graphics
      .beginFill(this.color)
      .drawCircle(0, 0, this.radius);

    this.stage.addChild(this.shape);

    const completeHandler = () => {
      createjs.Tween.removeTweens(this.shape);
      this.stage.removeChild(this.shape);
      this.shape = null;
    };

    createjs.Tween.get(this.shape)
      .to({alpha: 0.6}, 40)
      .to({alpha: 0}, 80)
      .call(completeHandler.bind(this));
  }
}

export default Blow;
