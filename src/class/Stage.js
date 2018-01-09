"use strict";

const AirCraft = require('./AirCraft.js');

class Stage {
  constructor() {
    let stage    = new createjs.Stage('demoCanvas');
    let airCraft = new AirCraft();
  }
}

module.exports = Stage;