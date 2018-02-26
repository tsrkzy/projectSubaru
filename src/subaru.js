'use strict';

import Title from './class/Title';

/*
 * display "GAME START"
 */
(window.onLoad = () => {
  createjs.Ticker.timingMode = createjs.Ticker.RAF;

  new Title();

})();
