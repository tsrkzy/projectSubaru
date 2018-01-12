"use strict";

import AirCraft from "./AirCraft.js";

class Stage {
  constructor() {
    let stage    = new createjs.Stage('demoCanvas');
    let airCraft = new AirCraft();
  }
}

export default Stage;