"use strict";

const EventEmitter = require('events').EventEmitter;

/**
 * Events#EventEmitter Wrapper.
 * Call #init first and static.
 * eg. let g = require(...)
 *     g.init();
 *
 * "tick" on createjs.Ticker#tick
 *
 * @singleton
 */
class GameClock extends EventEmitter {
  
  /*
   * getter and setter
   */
  static get gameSpeed() {
    return GameClock._gameSpeed;
  }
  
  static set gameSpeed(speed) {
    GameClock._gameSpeed = speed;
  }
  
  constructor() {
    /*
     * @singleton
     */
    if (GameClock.instance === 'object') {
      return GameClock.instance;
    }
    
    super();
    GameClock.instance         = this;
    GameClock._gameSpeed       = 1;
    GameClock.pin              = 0;
    
    createjs.Ticker.setFPS(60);
    
    createjs.Ticker.addEventListener('tick', (e) => {
      if ((GameClock.pin % GameClock.gameSpeed) === 0) {
        this.emit('tick');
      }
      GameClock.pin++;
      GameClock.pin = GameClock.pin >= 60 ? 0 : GameClock.pin;
    })
  }
  
  /*
   * initialize
   */
  static init() {
    return new GameClock();
  }
  
  /*
   * get instance
   */
  static get Ticker() {
    return new GameClock();
  }
  
  /*
   * shortHand of "GameClock.instance#on('tick', callback)"
   */
  static onTick(callback) {
    GameClock.Ticker.on('tick', callback);
  }
}

module.exports = GameClock;