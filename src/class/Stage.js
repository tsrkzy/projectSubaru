"use strict";

import AirCraft from "./AirCraft.js";

class Stage {
  constructor() {
    this.stage   = new createjs.Stage('demoCanvas');
    this.airCraft = new AirCraft({stage: this.stage});
    createjs.Ticker.addEventListener('tick', this.stage)
  }
}

export default Stage;