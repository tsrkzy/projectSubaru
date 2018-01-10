"use strict";

/**
 * virtual GamePad class.
 * buttons are
 *  up
 *  down
 *  left
 *  right
 *  ctrl
 *
 * @singleton
 */
class VirtualPad {
  
  /*
   * getter and setter
   */
  get keyDownOnly_Right() {
    return this._keyDown_Right && !(this._keyDown_Up || this._keyDown_Down || this._keyDown_Left)
  }
  
  get keyDown_Right() {
    return this._keyDown_Right;
  }
  
  set keyDown_Right(value) {
    this._keyDown_Right = value;
  }
  
  get keyDownOnly_Left() {
    return this._keyDown_Left && !(this._keyDown_Up || this._keyDown_Down || this._keyDown_Right)
  }
  
  get keyDown_Left() {
    return this._keyDown_Left;
  }
  
  set keyDown_Left(value) {
    this._keyDown_Left = value;
  }
  
  get keyDownOnly_Down() {
    return this._keyDown_Down && !(this._keyDown_Up || this._keyDown_Left || this._keyDown_Right)
  }
  
  get keyDown_Down() {
    return this._keyDown_Down;
  }
  
  set keyDown_Down(value) {
    this._keyDown_Down = value;
  }
  
  get keyDownOnly_Up() {
    return this._keyDown_Up && !( this._keyDown_Down || this._keyDown_Left || this._keyDown_Right)
  }
  
  get keyDown_Up() {
    return this._keyDown_Up;
  }
  
  set keyDown_Up(value) {
    this._keyDown_Up = value;
  }
  
  get arrowDown() {
    return this._keyDown_Up |
      this._keyDown_Down |
      this._keyDown_Left |
      this._keyDown_Right;
  }
  
  get keyDown_Ctrl() {
    return this._keyDown_Ctrl;
  }
  
  set keyDown_Ctrl(value) {
    this._keyDown_Ctrl = value;
  }
  
  /**
   * @constructor
   */
  constructor() {
    if (typeof VirtualPad.instance === 'object') {
      return VirtualPad.instance;
    }
    
    VirtualPad.instance = this;
    
    this._keyDown_Up    = false;
    this._keyDown_Down  = false;
    this._keyDown_Left  = false;
    this._keyDown_Right = false;
    this._keyDown_Ctrl  = false;
    
    document.addEventListener('keydown', keyHandler.bind(this, 'down'));
    document.addEventListener('keyup', keyHandler.bind(this, 'up'));
    
    function keyHandler(mode, e) {
      if (mode !== 'up' && mode !== 'down') {
        throw new Error('implement error!');
      }
      let pressed = (mode === 'down') || false;
      let keyCode = e.keyCode;
      
      const KEY_UP    = 38;
      const KEY_DOWN  = 40;
      const KEY_LEFT  = 37;
      const KEY_RIGHT = 39;
      // const KEY_W     = 87;
      // const KEY_A     = 65;
      // const KEY_S     = 83;
      // const KEY_D     = 68;
      const KEY_CTRL = 17;
      
      switch (keyCode) {
        case KEY_UP:
          this.keyDown_Up = pressed;
          break;
        case KEY_DOWN:
          this.keyDown_Down = pressed;
          break;
        case KEY_LEFT:
          this.keyDown_Left = pressed;
          break;
        case KEY_RIGHT:
          this.keyDown_Right = pressed;
          break;
        case KEY_CTRL:
          this.keyDown_Ctrl = pressed;
          break;
        default:
          break;
      }
    }
  }
  
  debug() {
    console.info({
      Up   : this.keyDown_Up,
      Down : this.keyDown_Down,
      Left : this.keyDown_Left,
      Right: this.keyDown_Right,
    });
  }
}

module.exports = VirtualPad;