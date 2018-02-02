"use strict";
import Enemy from "./Enemy";
import {LAUNCHER_WIDTH, LAUNCHER_HEIGHT} from "./Constant";

/**
 * Enemy "Launcher" class.
 * Once locked you, he launch missiles rapidly.
 */
class Launcher extends Enemy {

  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.addInstance();
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = `launcher:{hp: ${this.hitPoint}`;
    })
  }

  /**
   * firing control kicked every tick
   */
  trigger() {}

  /**
   * moving control kicked every tick
   */
  move() {
  }
  
  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill('darkgray').drawRect(0 - LAUNCHER_WIDTH / 2, 0 - LAUNCHER_HEIGHT / 2, LAUNCHER_WIDTH, LAUNCHER_HEIGHT);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-LAUNCHER_WIDTH / 2, -LAUNCHER_HEIGHT / 2, LAUNCHER_WIDTH, LAUNCHER_HEIGHT);

    this.text = new createjs.Text('launcher', 'bold 9px Arial', 'black');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

export default Launcher;