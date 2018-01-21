"use strict";

import Guns from "./Guns";
import GatlingBullet from "./GatlingBullet";

/**
 * main weapon "gatling-gun" class.
 */
class Gatling extends Guns {
  constructor(aircraft) {
    super();
    this.airCraft = aircraft;
    this.stage    = this.airCraft.stage;
    this.bullets  = [];
    this.coolTime = 400;
    this.shape    = new createjs.Shape();
    this.shape.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 0)).drawRect(-1, -1, 2, 2);
    this.text = new createjs.Text("gatling", "bold 9px Arial", "black");
    
  }
  
  /**
   * kicked every tick when airCraft autoFire is on.
   */
  trigger() {
    this.shape.x   = this.airCraft.x;
    this.shape.y   = this.airCraft.y;
    this.text.x    = this.airCraft.x;
    this.text.y    = this.airCraft.y - 20;
    this.text.text = `{x:${this.shape.x},y:${this.shape.y}`;
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
    let b = new GatlingBullet({
      x    : this.airCraft.x,
      y    : this.airCraft.y,
      stage: this.stage,
    });
  }
}

export default Gatling;