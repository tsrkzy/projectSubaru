"use strict";
import Enemy from "./Enemy";
import EnemyBatteryBullet from "./EnemyBatteryBullet";
import MathUtil from "./MathUtil";

const WIDTH = 30;
const HEIGHT = 30;

/**
 * Enemy "Battery" class.
 * shoot a bullet at you.
 */
class Battery extends Enemy {

  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.direction = 1;
    this.addInstance();
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = `battery:{hp: ${this.hitPoint}`;
    })
  }

  /**
   * firing control kicked every tick
   */
  trigger() {

    if (createjs.Ticker.getTicks() % 120 !== 0) {
      return;
    }

    let x = this.airCraft.x;
    let y = this.airCraft.y;

    let dx = x - this.x;
    let dy = y - this.y;
    let gradient = dy / dx;
    let flip = dx > 0 ? Math.PI : 0; // if aircraft flies behind of battery
    let theta = Math.atan(gradient) + flip;
    let shake = MathUtil.d2r(3);

    new EnemyBatteryBullet({
      x: this.x,
      y: this.y,
      angle: theta,
      stage: this.stage
    });

    new EnemyBatteryBullet({
      x: this.x,
      y: this.y,
      angle: theta + shake,
      stage: this.stage
    });

    new EnemyBatteryBullet({
      x: this.x,
      y: this.y,
      angle: theta - shake,
      stage: this.stage
    });
  }

  /**
   * moving control kicked every tick
   */
  move() {
    this.walkVertical(50, 450);
  }

  walkVertical(min, max) {
    if (this.direction === 1 && this.y >= max) {
      this.direction = -1;
    } else if (this.direction === -1 && this.y <= min) {
      this.direction = 1;
    }
    this.y += this.direction;
    this.updatePos();
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('darkgray').drawRect(0 - WIDTH / 2, 0 - HEIGHT / 2, WIDTH, HEIGHT);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT);

    this.text = new createjs.Text('battery', 'bold 9px Arial', 'black');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Battery;