"use strict";

import Clock from "./Clock";
import Canvas from "./Canvas";
import {JAMMER_LIFE_TIME, JAMMER_RADIUS} from "./Constant";

class Jammer {
  
  static get instances() {
    return Jammer._instances || [];
  }
  
  constructor(x, y) {
    Jammer._instances = Jammer.instances || [];
    Jammer._instances.push(this);
    this.stage  = Canvas.getStage();
    this.x      = x;
    this.y      = y;
    this.radius = JAMMER_RADIUS;
    this.life   = JAMMER_LIFE_TIME;
    this.clock  = new Clock(this);
    this.deploy();
    this.assignTickListener();
    window.setTimeout(() => {
      this.die();
    }, this.life)
  }
  
  assignTickListener() {
    this.clock.onTick(() => {
    
    })
  }
  
  updatePos(x = this.x, y = this.y) {
    this.shape.x   = x;
    this.shape.y   = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x    = x;
    this.text.y    = y;
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('darkgray').drawCircle(0, 0, JAMMER_RADIUS);
    this.shape.alpha = 0.3;
    
    this.hitArea       = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawCircle(0, 0, JAMMER_RADIUS);
    
    this.text = new createjs.Text('jammer', 'bold 9px Arial', 'black');
    
    this.updatePos();
    
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
  
  die() {
    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.hitArea);
    this.stage.removeChild(this.text);
    this.clock.allOff();
    this.airCraft = null;
    this.clock    = null;
    this.shape    = null;
    this.text     = null;
    this.hitArea  = null;
    this.stage    = null;
    
    for (let i = 0; i < Jammer.instances.length; i++) {
      let jammer = Jammer.instances[i];
      if (jammer === this) {
        Jammer.instances.splice(i, 1);
        break;
      }
    }
  }
}

export default Jammer;