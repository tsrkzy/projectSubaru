"use strict";

import Events from "Events";

/**
 * nodejs "Events" wrapper
 * @class
 */
class EventsWrapper extends Events {
  
  /**
   * @singleton
   * @constructor
   */
  constructor() {
    if (typeof EventsWrapper.instance === 'object') {
      return EventsWrapper.instance;
    }
    super();
    EventsWrapper.instance = this;
  }
  
  /**
   * shorthand of #emit
   * @param args
   */
  static emit(...args) {
    EventsWrapper.instance.emit(...args);
  }
  
  /**
   * shorthand of #on
   * @param args
   */
  static on(...args) {
    EventsWrapper.instance.on(...args);
  }
  
  /**
   * shorthand of #removeAllListeners
   * @param args
   */
  static removeAllListeners(...args){
    EventsWrapper.instance.removeAllListeners(...args);
  }
}

export default EventsWrapper;