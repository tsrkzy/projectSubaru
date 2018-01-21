"use strict";

/**
 * Blow class.
 * render explode and blow up effect on bullet collision.
 */
class Blow {
  /**
   * @param {{stage, radius, color, x, y}} args
   */
  constructor(args) {
    this.stage  = args.stage;
    this.radius = args.radius || 20;
    this.color  = args.color || 'lightblue';
    
    this.shape       = new createjs.Shape();
    this.shape.x     = args.x || 0;
    this.shape.y     = args.y || 0;
    this.shape.alpha = 0;
    this.shape.graphics
      .beginFill(this.color)
      .drawCircle(0, 0, this.radius);
    
    this.stage.addChild(this.shape);
    
    createjs.Tween.get(this.shape)
      .to({alpha: 0.2}, 40)
      .to({alpha: 0}, 80)
      .call(completeHandler.bind(this));
    
    function completeHandler() {
      createjs.Tween.removeTweens(this.shape);
      this.stage.removeChild(this.shape);
      this.shape = null;
    }
    
  }
}

export default Blow;