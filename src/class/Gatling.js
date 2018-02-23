'use strict';

import Guns from './Guns';
import GatlingBullet from './GatlingBullet';
import {GATLING_COOL_TIME} from './Constant';
import Canvas from './Canvas';

/**
 * main weapon "gatling-gun" class.
 */
class Gatling extends Guns {
  constructor(args) {
    super();
    this.stage = Canvas.getStage();
    this.coolTime = GATLING_COOL_TIME;
    this.x = args.x;
    this.y = args.y;

    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 0)).drawRect(-1, -1, 2, 2);

    this.text = new createjs.Text('', 'bold 9px Arial', 'black');

    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
  }

  /**
   * kicked every tick when airCraft autoFire is on.
   * @param {number} x
   * @param {number} y
   */
  trigger(x, y) {
    if (createjs.Ticker.getTicks() % 10 !== 0) {
      return;
    }

    this.x = x;
    this.y = y;
    this.updatePos();

    // this.text.text = `{x:${this.shape.x},y:${this.shape.y}`;

    new GatlingBullet({
      x: x,
      y: y
    });
  }

  updatePos() {
    this.shape.x = this.x;
    this.shape.y = this.y;
    this.text.x = this.x;
    this.text.y = this.y - 20;
  }
}

export default Gatling;
