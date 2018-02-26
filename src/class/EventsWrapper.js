'use strict';

import Events from 'Events';

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
   * @param {object} args
   */
  static emit(...args) {
    EventsWrapper.instance.emit(...args);
  }

  /**
   * shorthand of #on
   * @param {object} args
   */
  static on(...args) {
    EventsWrapper.instance.on(...args);
  }

  /**
   * shorthand of #once
   * diff with #on ...when #once triggered, listeners are removed.
   *
   * @param {object} args
   */
  static once(...args) {
    EventsWrapper.instance.once(...args);
  }

  /**
   * shorthand of #removeAllListeners
   * @param {object} args
   */
  static removeAllListeners(...args) {
    if (args.length === 0) {
      EventsWrapper.instance.removeAllListeners();
    } else {
      EventsWrapper.instance.removeAllListeners(...args);
    }
  }

}

export default EventsWrapper;
