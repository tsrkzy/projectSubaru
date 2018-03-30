'use strict';

import Clock from './Clock';
import Canvas from './Canvas';
import {JAMMER_LIFE_TIME, JAMMER_RADIUS} from './Constant';
import AirCraft from './AirCraft';

class Jammer {
  static get instances() {
    return Jammer._instances || [];
  }

  static set instances(instances) {
    Jammer._instances = instances;
  }

  constructor(x, y) {
    if (!AirCraft.isAlive()) {
      return null;
    }

    Jammer.instances = Jammer.instances || [];
    Jammer.instances.push(this);
    this.stage = Canvas.getStage();
    this.alive = true;
    this.x = x;
    this.y = y;
    this.radius = JAMMER_RADIUS;
    this.clock = new Clock(this);
    this.deploy();
    window.setTimeout(() => {
      this.die();
    }, JAMMER_LIFE_TIME);

    this.clock = new Clock(this);
    this.clock.onTick(() => {
      if (AirCraft.isAlive()) {
        return false;
      }
      this.die();
    });
  }

  updatePos(x = this.x, y = this.y) {
    this.shape.x = x;
    this.shape.y = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x = x;
    this.text.y = y;
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics
      .beginFill('darkgray')
      .drawCircle(0, 0, JAMMER_RADIUS);
    this.shape.alpha = 0.3;

    this.hitArea = new createjs.Shape();
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

  static flush() {
    while (Jammer.instances.length > 0) {
      const jammer = Jammer.instances[0];
      jammer.die();
      Jammer.instances.shift();
      console.log(Jammer.instances.length);
    }
  }

  die() {
    if (!this.alive) {
      return false;
    }

    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.hitArea);
    this.stage.removeChild(this.text);
    this.clock.allOff();
    this.clock = null;
    this.shape = null;
    this.text = null;
    this.hitArea = null;
    this.stage = null;
    this.alive = false;

    for (let i = 0; i < Jammer.instances.length; i++) {
      const jammer = Jammer.instances[i];
      if (jammer === this) {
        Jammer.instances.splice(i, 1);
        break;
      }
    }
  }
}

export default Jammer;
