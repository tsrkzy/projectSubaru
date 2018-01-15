"use strict";

import Guns from "./Guns";

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
    this.shape.graphics.beginFill('lightgray').drawRect(0, 0, 30, 10);
    this.text = new createjs.Text("gatling", "bold 9px Arial", "black");
    
  }
  
  /**
   * kicked every tick when airCraft autoFire is on.
   */
  trigger() {
    this.shape.x = this.airCraft.x;
    this.shape.y = this.airCraft.y;
    this.text.x  = this.airCraft.x;
    this.text.y  = this.airCraft.y;
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
    // this.bullets.push(new Bullet({x: this.airCraft.x, y: this.airCraft.y,}))
  }
}

export default Gatling;