"use strict";

import Guns from "./Guns";
import GatlingBullet from "./GatlingBullet";

/**
 * main weapon "gatling-gun" class.
 */
class Gatling extends Guns {
  constructor(args) {
    super();
    this.stage    = args.stage;
    this.coolTime = 400;
    this.shape    = new createjs.Shape();
    this.shape.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 0)).drawRect(-1, -1, 2, 2);
    this.text = new createjs.Text("gatling", "bold 9px Arial", "black");
    
  }
  
  /**
   * kicked every tick when airCraft autoFire is on.
   */
  trigger(x, y) {
    this.shape.x   = x;
    this.shape.y   = y;
    this.text.x    = x;
    this.text.y    = y - 20;
    this.text.text = `{x:${this.shape.x},y:${this.shape.y}`;
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
    new GatlingBullet({
      x    : x,
      y    : y,
      stage: this.stage,
    });
  }
}

export default Gatling;