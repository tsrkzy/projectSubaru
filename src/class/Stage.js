"use strict";

import AirCraft from "./AirCraft.js";
import Battery from "./Battery";
import Bullet from "./Bullet";

class Stage {
  constructor() {
    this.stage   = new createjs.Stage('demoCanvas');
    this.airCraft = new AirCraft({stage: this.stage});
  
    this.indicator   = new createjs.Text('', 'bold 9px Arial', 'lightgray');
    this.indicator.x = 400;
    this.stage.addChild(this.indicator);
  
    window.setInterval(() => {
      let e = new Battery({
        x    : 300,
        y    : 100 + 400 * Math.random(),
        stage: this.stage,
      });
    }, 2000);
  
    /*
     * tick毎にstageを更新する
     */
    createjs.Ticker.addEventListener('tick', this.stage)
    createjs.Ticker.addEventListener('tick', () => {
      let measuredFPS = createjs.Ticker.getMeasuredFPS();
      let bulletCount = Bullet.instances.length;
      this.indicator.text =
        `FPS: ${measuredFPS}\nBullets: ${bulletCount}\nid:${Bullet.id}`;
    })
  }
}

export default Stage;