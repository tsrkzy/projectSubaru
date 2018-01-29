"use strict";
import Battery from "./Battery";
import EventsWrapper from "./EventsWrapper";

class Wave {
  constructor(index, stage) {
    this.promises = [];
    this.index    = index;
    this.stage    = stage;
    this.summonBattery(650);
    this.summonBattery(660);
    this.summonBattery(670);
    this.p = Promise.all(this.promises)
      .then(() => {
        EventsWrapper.emit('wave.Clear');
      })
  }
  
  summonBattery(x, y) {
    let b = new Battery({
      x       : x || 600,
      y       : y || -50,
      hitPoint: 1,
      stage   : this.stage,
    });
    this.promises.push(b.p);
  }
}

export default Wave;