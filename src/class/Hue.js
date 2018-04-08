'use strict';


import Clock from './Clock';

class Hue {
  /**
   * @singleton
   * @constructor
   */
  constructor() {
    if (typeof Hue.instance === 'object') {
      return Hue.instance;
    }
    Hue.instance = this;

    this.clock = new Clock(this);
  }

  getHue() {
    const tick = this.clock.getTick();
    const hue = tick % 360 - 180;
    const color = `hsl(${hue},100%,70%)`;

    return color;
  }

  static getHue() {
    return Hue.instance.getHue();
  }
}

export default Hue;
