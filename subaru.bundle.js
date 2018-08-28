/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const DEBUG = false;
/* unused harmony export DEBUG */

const dd = ((text) => DEBUG ? text : '');
/* harmony export (immutable) */ __webpack_exports__["_22"] = dd;


/* canvas config */
const CANVAS_ID = 'subaru';
/* harmony export (immutable) */ __webpack_exports__["v"] = CANVAS_ID;


/* indicator */
const INDICATOR_X = 400;
/* harmony export (immutable) */ __webpack_exports__["L"] = INDICATOR_X;

const INDICATOR_Y = 0;
/* harmony export (immutable) */ __webpack_exports__["M"] = INDICATOR_Y;

const INDICATOR_FONT_STYLE = 'bold 9px Arial';
/* harmony export (immutable) */ __webpack_exports__["K"] = INDICATOR_FONT_STYLE;


/* stage */
const STAGE_WIDTH = 700;
/* harmony export (immutable) */ __webpack_exports__["_19"] = STAGE_WIDTH;

const STAGE_MIDDLE_X = STAGE_WIDTH / 2;
/* harmony export (immutable) */ __webpack_exports__["_17"] = STAGE_MIDDLE_X;

const STAGE_HEIGHT = 500;
/* harmony export (immutable) */ __webpack_exports__["_16"] = STAGE_HEIGHT;

const STAGE_MIDDLE_Y = STAGE_HEIGHT / 2;
/* harmony export (immutable) */ __webpack_exports__["_18"] = STAGE_MIDDLE_Y;

const STAGE_PADDING_X = 20;
/* unused harmony export STAGE_PADDING_X */

const STAGE_PADDING_Y = 20;
/* unused harmony export STAGE_PADDING_Y */

const STAGE_MARGIN_X = 50;
/* unused harmony export STAGE_MARGIN_X */

const STAGE_MARGIN_Y = 50;
/* unused harmony export STAGE_MARGIN_Y */

const STAGE_EDGE_LEFT = 0 + STAGE_PADDING_X;
/* harmony export (immutable) */ __webpack_exports__["_9"] = STAGE_EDGE_LEFT;

const STAGE_EDGE_RIGHT = STAGE_WIDTH - STAGE_PADDING_X;
/* harmony export (immutable) */ __webpack_exports__["_10"] = STAGE_EDGE_RIGHT;

const STAGE_EDGE_TOP = 0 + STAGE_PADDING_Y;
/* harmony export (immutable) */ __webpack_exports__["_11"] = STAGE_EDGE_TOP;

const STAGE_EDGE_BOTTOM = STAGE_HEIGHT - STAGE_PADDING_Y;
/* harmony export (immutable) */ __webpack_exports__["_8"] = STAGE_EDGE_BOTTOM;

const STAGE_FRAME_LEFT = 0 - STAGE_MARGIN_X;
/* harmony export (immutable) */ __webpack_exports__["_13"] = STAGE_FRAME_LEFT;

const STAGE_FRAME_RIGHT = STAGE_WIDTH + STAGE_MARGIN_X;
/* harmony export (immutable) */ __webpack_exports__["_14"] = STAGE_FRAME_RIGHT;

const STAGE_FRAME_TOP = 0 - STAGE_MARGIN_Y;
/* harmony export (immutable) */ __webpack_exports__["_15"] = STAGE_FRAME_TOP;

const STAGE_FRAME_BOTTOM = STAGE_HEIGHT + STAGE_MARGIN_Y;
/* harmony export (immutable) */ __webpack_exports__["_12"] = STAGE_FRAME_BOTTOM;


/* wave */
const WAVE_TIME_LIMIT = 5 * 1000;
/* harmony export (immutable) */ __webpack_exports__["_21"] = WAVE_TIME_LIMIT;

const ENEMY_VARIATION = 4;
/* harmony export (immutable) */ __webpack_exports__["A"] = ENEMY_VARIATION;

const NEXT_GAME_TIMEOUT = 4000;
/* harmony export (immutable) */ __webpack_exports__["W"] = NEXT_GAME_TIMEOUT;


/* TIER */
const MAX_TIER = 3;
/* harmony export (immutable) */ __webpack_exports__["V"] = MAX_TIER;

const TUTORIAL = 0;
/* harmony export (immutable) */ __webpack_exports__["_20"] = TUTORIAL;

const EASY = 1;
/* harmony export (immutable) */ __webpack_exports__["z"] = EASY;

const HARD = 2;
/* harmony export (immutable) */ __webpack_exports__["I"] = HARD;

const HUSH = 3;
/* harmony export (immutable) */ __webpack_exports__["J"] = HUSH;


/* aircraft */
const AIRCRAFT_INITIAL_X = 50;
/* harmony export (immutable) */ __webpack_exports__["c"] = AIRCRAFT_INITIAL_X;

const AIRCRAFT_INITIAL_Y = 250;
/* harmony export (immutable) */ __webpack_exports__["d"] = AIRCRAFT_INITIAL_Y;

const AIRCRAFT_RADIUS = 10;
/* harmony export (immutable) */ __webpack_exports__["e"] = AIRCRAFT_RADIUS;

const AIRCRAFT_HIT_AREA = 2;
/* harmony export (immutable) */ __webpack_exports__["b"] = AIRCRAFT_HIT_AREA;

const AIRCRAFT_VELOCITY = 3;
/* harmony export (immutable) */ __webpack_exports__["f"] = AIRCRAFT_VELOCITY;

const AIRCRAFT_FIRE_DELAY = 10;
/* harmony export (immutable) */ __webpack_exports__["a"] = AIRCRAFT_FIRE_DELAY;


/* pod */
const POD_CABLE_LENGTH = 40;
/* harmony export (immutable) */ __webpack_exports__["_1"] = POD_CABLE_LENGTH;

const POD_FIRE_DELAY = 15;
/* harmony export (immutable) */ __webpack_exports__["_2"] = POD_FIRE_DELAY;

const POD_WIDTH = 10;
/* harmony export (immutable) */ __webpack_exports__["_4"] = POD_WIDTH;

const POD_HEIGHT = 10;
/* harmony export (immutable) */ __webpack_exports__["_3"] = POD_HEIGHT;


/* score */
const SCORE = {
  BATTERY: 10,
  LAUNCHER: 10,
  BOMBER: 10,
  DEBRIS: 5,
  NOISE: 20,
  AMPLIFIER: 20,
};
/* harmony export (immutable) */ __webpack_exports__["_5"] = SCORE;


/* gatling */
const GATLING_COOL_TIME = 400;
/* harmony export (immutable) */ __webpack_exports__["F"] = GATLING_COOL_TIME;

const GATLING_BULLET_WIDTH = 5;
/* harmony export (immutable) */ __webpack_exports__["E"] = GATLING_BULLET_WIDTH;

const GATLING_BULLET_HEIGHT = 2;
/* harmony export (immutable) */ __webpack_exports__["B"] = GATLING_BULLET_HEIGHT;

const GATLING_BULLET_SPEED = 8;
/* harmony export (immutable) */ __webpack_exports__["C"] = GATLING_BULLET_SPEED;

const GATLING_BULLET_STOPPING_POWER = 1;
/* harmony export (immutable) */ __webpack_exports__["D"] = GATLING_BULLET_STOPPING_POWER;



/* gunpowder */
const GUNPOWDER_BULLET_RADIUS = 8;
/* harmony export (immutable) */ __webpack_exports__["G"] = GUNPOWDER_BULLET_RADIUS;

const GUNPOWDER_BULLET_SPEED = 2;
/* harmony export (immutable) */ __webpack_exports__["H"] = GUNPOWDER_BULLET_SPEED;


/* enemy */
const DRIFT_SPEED_LEFT = 0.5;
/* harmony export (immutable) */ __webpack_exports__["y"] = DRIFT_SPEED_LEFT;


/* battery */
const BATTERY_WIDTH = 30;
/* harmony export (immutable) */ __webpack_exports__["n"] = BATTERY_WIDTH;

const BATTERY_HEIGHT = 30;
/* harmony export (immutable) */ __webpack_exports__["m"] = BATTERY_HEIGHT;

const BATTERY_BULLET_RADIUS = 10;
/* harmony export (immutable) */ __webpack_exports__["k"] = BATTERY_BULLET_RADIUS;

const BATTERY_BULLET_SPEED = 4;
/* harmony export (immutable) */ __webpack_exports__["l"] = BATTERY_BULLET_SPEED;



/* debris */
const DEBRIS_WIDTH = 20;
/* harmony export (immutable) */ __webpack_exports__["x"] = DEBRIS_WIDTH;

const DEBRIS_HEIGHT = 20;
/* harmony export (immutable) */ __webpack_exports__["w"] = DEBRIS_HEIGHT;


/* amplifier */
const AMPLIFIER_COEFFICIENT = 1.4;
/* harmony export (immutable) */ __webpack_exports__["g"] = AMPLIFIER_COEFFICIENT;

const AMPLIFIER_WIDTH = 20;
/* harmony export (immutable) */ __webpack_exports__["j"] = AMPLIFIER_WIDTH;

const AMPLIFIER_HEIGHT = 20;
/* harmony export (immutable) */ __webpack_exports__["h"] = AMPLIFIER_HEIGHT;

const AMPLIFIER_SPIN_UP_TIME = 4000;
/* harmony export (immutable) */ __webpack_exports__["i"] = AMPLIFIER_SPIN_UP_TIME;


/* bomber */
const BOMBER_WIDTH = 20;
/* harmony export (immutable) */ __webpack_exports__["u"] = BOMBER_WIDTH;

const BOMBER_HEIGHT = 20;
/* harmony export (immutable) */ __webpack_exports__["o"] = BOMBER_HEIGHT;

const BOMBER_SPEED = 1;
/* harmony export (immutable) */ __webpack_exports__["t"] = BOMBER_SPEED;

const BOMBER_LAST_SHOT_COUNT = 15;
/* harmony export (immutable) */ __webpack_exports__["p"] = BOMBER_LAST_SHOT_COUNT;

const BOMBER_LAST_SHOT_DEPTH = 2;
/* harmony export (immutable) */ __webpack_exports__["q"] = BOMBER_LAST_SHOT_DEPTH;


/* marker */
const MARKER_SPEED = 6;
/* harmony export (immutable) */ __webpack_exports__["U"] = MARKER_SPEED;

const MARKER_SHAPE_RADIUS = 30;
/* harmony export (immutable) */ __webpack_exports__["T"] = MARKER_SHAPE_RADIUS;

const MARKER_HITAREA_RADIUS = 10;
/* harmony export (immutable) */ __webpack_exports__["S"] = MARKER_HITAREA_RADIUS;


/* sign */
const SIGN_INNER_RADIUS = 5;
/* harmony export (immutable) */ __webpack_exports__["_6"] = SIGN_INNER_RADIUS;

const SIGN_OUTER_RADIUS = 10;
/* harmony export (immutable) */ __webpack_exports__["_7"] = SIGN_OUTER_RADIUS;


/* launcher */
const LAUNCHER_WIDTH = 20;
/* harmony export (immutable) */ __webpack_exports__["R"] = LAUNCHER_WIDTH;

const LAUNCHER_HEIGHT = 20;
/* harmony export (immutable) */ __webpack_exports__["Q"] = LAUNCHER_HEIGHT;

const BOMBER_SHOT_COUNT = 3;
/* harmony export (immutable) */ __webpack_exports__["r"] = BOMBER_SHOT_COUNT;

const BOMBER_SHOT_DEPTH = 5;
/* harmony export (immutable) */ __webpack_exports__["s"] = BOMBER_SHOT_DEPTH;

const LAUNCHER_DELAY = 180;
/* harmony export (immutable) */ __webpack_exports__["P"] = LAUNCHER_DELAY;


/* noise */
const NOISE_WIDTH = 20;
/* harmony export (immutable) */ __webpack_exports__["_0"] = NOISE_WIDTH;

const NOISE_HEIGHT = 20;
/* harmony export (immutable) */ __webpack_exports__["X"] = NOISE_HEIGHT;

const NOISE_OUTER_WIDTH = 24;
/* harmony export (immutable) */ __webpack_exports__["Z"] = NOISE_OUTER_WIDTH;

const NOISE_OUTER_HEIGHT = 24;
/* harmony export (immutable) */ __webpack_exports__["Y"] = NOISE_OUTER_HEIGHT;


/* jammer */
const JAMMER_RADIUS = 100;
/* harmony export (immutable) */ __webpack_exports__["O"] = JAMMER_RADIUS;

const JAMMER_LIFE_TIME = 6000;
/* harmony export (immutable) */ __webpack_exports__["N"] = JAMMER_LIFE_TIME;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constant__ = __webpack_require__(0);




class Canvas {
  /**
   * @constructor
   * @singleton
   */
  constructor() {
    if (typeof Canvas.instance === 'object') {
      return Canvas.instance;
    }
    Canvas.instance = this;

    Canvas.stage = new createjs.Stage(__WEBPACK_IMPORTED_MODULE_0__Constant__["v" /* CANVAS_ID */]);

    const background = new createjs.Shape();
    background.graphics
      .beginFill('#151515')
      .drawRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__Constant__["_19" /* STAGE_WIDTH */], __WEBPACK_IMPORTED_MODULE_0__Constant__["_16" /* STAGE_HEIGHT */]);
    Canvas.stage.addChild(background);
  }

  static getStage() {
    return Canvas.stage;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Canvas);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VirtualPad_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Gatling__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Enemy__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EnemyBullet__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Blow__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Clock__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Jammer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EventsWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Pod__ = __webpack_require__(25);















/**
 * Your AirCraft Class.
 */
class AirCraft {
  get y() {
    return this._y || 0;
  }

  set y(value) {
    this._y = value;
  }

  get x() {
    return this._x || 0;
  }

  set x(value) {
    this._x = value;
  }

  /**
   * get airCraft's speed.
   * if snared, slows down to half.
   *
   * @return {number}
   */
  get velocity() {
    const coefficient = (!this.snared) ? 1 : 0.5;
    return __WEBPACK_IMPORTED_MODULE_6__Constant__["f" /* AIRCRAFT_VELOCITY */] * coefficient;
  }

  get diagonalVelocity() {
    return this.velocity / Math.sqrt(2);
  }

  static getInstance() {
    return AirCraft.instance;
  }

  /**
   * initialize parameters, set listeners
   * @constructor
   */
  constructor() {
    AirCraft.instance = this;

    this.stage = __WEBPACK_IMPORTED_MODULE_7__Canvas__["a" /* default */].getStage();
    this.vp = new __WEBPACK_IMPORTED_MODULE_0__VirtualPad_js__["a" /* default */]();
    this.clock = new __WEBPACK_IMPORTED_MODULE_5__Clock__["a" /* default */](this);

    this.alive = true;
    this.x = __WEBPACK_IMPORTED_MODULE_6__Constant__["c" /* AIRCRAFT_INITIAL_X */];
    this.y = __WEBPACK_IMPORTED_MODULE_6__Constant__["d" /* AIRCRAFT_INITIAL_Y */];
    this.snared = false;
    this._gun = new __WEBPACK_IMPORTED_MODULE_1__Gatling__["a" /* default */]({
      x: this.x,
      y: this.y,
    });

    new __WEBPACK_IMPORTED_MODULE_10__Pod__["a" /* default */]({
      x: this.x,
      y: this.y,
    });

    this.assignTickListener();
    this.deploy();
  }

  static isAlive() {
    if (!AirCraft.instance) {
      return false;
    }
    return AirCraft.instance.alive;
  }

  /**
   * set listeners
   * kicks every tick
   */
  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }

      /*
       * moving control
       */
      let vX = 0;
      let vY = 0;
      if (this.vp.keyDown_Right && !this.vp.keyDown_Left) {
        vX = this.vp.keyDownOnly_Right ? this.velocity : this.diagonalVelocity;
      }
      if (this.vp.keyDown_Left && !this.vp.keyDown_Right) {
        vX = -1 * (this.vp.keyDownOnly_Left ? this.velocity : this.diagonalVelocity);
      }
      if (this.vp.keyDown_Down && !this.vp.keyDown_Up) {
        vY = this.vp.keyDownOnly_Down ? this.velocity : this.diagonalVelocity;
      }
      if (this.vp.keyDown_Up && !this.vp.keyDown_Down) {
        vY = -1 * (this.vp.keyDownOnly_Up ? this.velocity : this.diagonalVelocity);
      }
      this.x += vX;
      this.y += vY;
      if (this.x < __WEBPACK_IMPORTED_MODULE_6__Constant__["_9" /* STAGE_EDGE_LEFT */]) this.x = __WEBPACK_IMPORTED_MODULE_6__Constant__["_9" /* STAGE_EDGE_LEFT */];
      if (this.x > __WEBPACK_IMPORTED_MODULE_6__Constant__["_10" /* STAGE_EDGE_RIGHT */]) this.x = __WEBPACK_IMPORTED_MODULE_6__Constant__["_10" /* STAGE_EDGE_RIGHT */];
      if (this.y < __WEBPACK_IMPORTED_MODULE_6__Constant__["_11" /* STAGE_EDGE_TOP */]) this.y = __WEBPACK_IMPORTED_MODULE_6__Constant__["_11" /* STAGE_EDGE_TOP */];
      if (this.y > __WEBPACK_IMPORTED_MODULE_6__Constant__["_8" /* STAGE_EDGE_BOTTOM */]) this.y = __WEBPACK_IMPORTED_MODULE_6__Constant__["_8" /* STAGE_EDGE_BOTTOM */];
      this.updatePos();

      this.text.text = Object(__WEBPACK_IMPORTED_MODULE_6__Constant__["_22" /* dd */])(`airCraft: {${Math.floor(this.x)},${Math.round(this.y)}}`);
    });

    /*
     * fire control
     */
    this.clock.onTick(() => {
      this._gun.trigger(this.x, this.y);
    });

    /*
     * collision check with enemies and every kind of enemyBullets
     */
    this.clock.onTick(() => {
      this.collisionCheck(__WEBPACK_IMPORTED_MODULE_2__Enemy__["a" /* default */].instances, this.beShot);

      this.collisionCheck(__WEBPACK_IMPORTED_MODULE_3__EnemyBullet__["a" /* default */].instances, this.beShot);

      this.snareCheck();
    });
  }

  /**
   * check airCrafts in Noise's jammer effect.
   */
  snareCheck() {
    const result = this.collisionCheck(__WEBPACK_IMPORTED_MODULE_8__Jammer__["a" /* default */].instances);
    const inJammer = result.test;
    this.snared = inJammer;
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  updatePos(x = this.x, y = this.y) {
    if (!this.alive) {
      return false;
    }

    this.shape.x = x;
    this.shape.y = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x = x;
    this.text.y = y;
  }

  /**
   * collision test with your aircraft.
   * @param {Array<Object>} targetArray - Object must have #shape to hitTest
   * @param {function|null} fn callback when every hitTest that returns true.
   * @return {Object} result
   */
  collisionCheck(targetArray, fn = null) {
    if (!this.alive) {
      return false;
    }

    const result = {
      all: true,
      test: false,
    };

    for (let j = 0; j < targetArray.length; j++) {
      /*
       * relative axis from target to hitArea(aircraft)-origin (zero-point)
       */
      const target = targetArray[j];

      if (target === null) {
        continue;
      }

      if (!target.alive) {
        continue;
      }

      if (this.hitArea === null) {
        break;
      }

      const pos = target.hitArea.localToLocal(0, 0, this.hitArea);
      const hitTest = target.hitArea.hitTest(pos.x, pos.y);
      if (hitTest) {
        result.test = true;
        if (typeof fn === 'function') {
          fn.call(this, pos.x, pos.y, target);
        }
        continue;
      }
      result.all = false;
    }

    return result;
  }

  /**
   * kicked when your aircraft have been shot
   * @param {number} x
   * @param {number} y
   * @param {object} target
   */
  beShot(x = 0, y = 0, target) {
    console.log(`${target.constructor.name} killed you.`);
    new __WEBPACK_IMPORTED_MODULE_4__Blow__["a" /* default */]({
      x: this.x - x,
      y: this.y - y,
      color: 'white',
    });

    this.die();

    /*
     * wait for prevent "bullet after game over"
     * once gameOver emitted, all animations stops and all handlers die.
     */
    window.setTimeout(() => {
      __WEBPACK_IMPORTED_MODULE_9__EventsWrapper__["a" /* default */].emit('gameOver');
    }, __WEBPACK_IMPORTED_MODULE_6__Constant__["W" /* NEXT_GAME_TIMEOUT */]);
  }

  die() {
    if (this.clock) {
      this.clock.allOff();
      this.clock = null;
    }

    if (this.stage) {
      this.stage.removeChild(this.shape);
      this.stage.removeChild(this.hitArea);
      this.stage.removeChild(this.text);
      this.stage = null;
    }

    this.shape = null;
    this.text = null;
    this.hitArea = null;
    this.alive = false;
  }

  deploy() {
    /*
     * aircraft
     */
    this.shape = new createjs.Shape();
    this.shape.graphics
      .setStrokeStyle(2)
      .beginStroke('lightgray')
      .drawCircle(0, 0, __WEBPACK_IMPORTED_MODULE_6__Constant__["e" /* AIRCRAFT_RADIUS */]);

    /*
     * hit area
     */
    this.hitArea = new createjs.Shape();
    this.hitArea.graphics.beginFill('#1295b8').drawCircle(0, 0, __WEBPACK_IMPORTED_MODULE_6__Constant__["b" /* AIRCRAFT_HIT_AREA */]);

    /*
     * text label
     */
    this.text = new createjs.Text(Object(__WEBPACK_IMPORTED_MODULE_6__Constant__["_22" /* dd */])('airCraft'), 'bold 9px Arial', 'white');

    /*
     * staging
     */
    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (AirCraft);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



const PI = Math.PI;

class MathUtil {
  static d2r(degree) {
    const radian = (degree / 180) * PI;
    return radian;
  }

  static r2d(radian) {
    const degree = (radian / PI) * 180;
    return degree;
  }

  /**
   * get angle(degree) from observer pos to target pos.
   *
   * @param {number} fromX
   * @param {number} fromY
   * @param {number} toX
   * @param {number} toY
   * @return {number} theta
   */
  static getAngleDegree(fromX, fromY, toX, toY) {
    const dx = toX - fromX;
    const dy = toY - fromY;
    const gradient = dy / dx;

    /*
     * target flies behind of observer? then flip.
     */
    const flip = dx > 0 ? Math.PI : 0;
    const theta = Math.atan(gradient) + flip;
    return theta;
  }

  /**
   * @SEE https://qiita.com/sifue/items/e1dbfe671f42886e47d6
   *
   * @param {Number} m mean: μ
   * @param {Number} s variance: σ^2
   * @return {Number}
   */
  static normalRandom(m, s) {
    const a = 1 - Math.random();
    const b = 1 - Math.random();
    const c = Math.sqrt(-2 * Math.log(a));
    if (0.5 - Math.random() > 0) {
      return c * Math.sin(Math.PI * 2 * b) * s + m;
    } else {
      return c * Math.cos(Math.PI * 2 * b) * s + m;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MathUtil);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Clock__ = __webpack_require__(7);





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

    this.clock = new __WEBPACK_IMPORTED_MODULE_0__Clock__["a" /* default */](this);
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

/* harmony default export */ __webpack_exports__["a"] = (Hue);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Events__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Events__);




/**
 * nodejs "Events" wrapper
 * @class
 */
class EventsWrapper extends __WEBPACK_IMPORTED_MODULE_0_Events___default.a {
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

/* harmony default export */ __webpack_exports__["a"] = (EventsWrapper);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FriendBullet__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clock__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Blow__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EventsWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Score__ = __webpack_require__(11);









/**
 * Enemy base class.
 */
class Enemy {
  get hitPoint() {
    return this._hitPoint;
  }

  set hitPoint(value) {
    this._hitPoint = value;
    if (this._hitPoint <= 0) {
      this.destroyed();
    }
  }

  static get instances() {
    return Enemy._instances || [];
  }

  static set instances(instances) {
    Enemy._instances = instances;
  }

  /**
   * @constructor
   * @param {Object} args - x, y
   */
  constructor(args) {
    Enemy.id = Enemy.id || 0;
    this.id = Enemy.id;
    Enemy.id++;

    this.addInstance();
    const enemyType = (this.constructor.name.toString()).toUpperCase();
    this.score = __WEBPACK_IMPORTED_MODULE_4__Constant__["_5" /* SCORE */][enemyType];

    this.x = args.x;
    this.y = args.y;
    this.hitPoint = args.hitPoint;
    this.alive = true;
    this.slidedIn = false;
    this.stage = __WEBPACK_IMPORTED_MODULE_5__Canvas__["a" /* default */].getStage();
    this.clock = new __WEBPACK_IMPORTED_MODULE_1__Clock__["a" /* default */](this);
    this.shape = null;
    this.hitArea = null;
    this.text = null;
    this.p = new Promise((resolve) => {
      __WEBPACK_IMPORTED_MODULE_3__EventsWrapper__["a" /* default */].once(`enemyDestroyed_${this.id}`, () => {
        __WEBPACK_IMPORTED_MODULE_3__EventsWrapper__["a" /* default */].removeAllListeners(`enemyDestroyed_${this.id}`);
        resolve();
      });
    });

    this._assignTickListener();
  }

  addInstance() {
    Enemy.instances = Enemy.instances || [];
    Enemy.instances.push(this);
  }

  updatePos(x = this.x, y = this.y) {
    if (!this.alive) {
      return;
    }

    this.shape.x = x;
    this.shape.y = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x = x;
    this.text.y = y;
  }

  _assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.trigger();
      this.move();

      this.collisionCheck(__WEBPACK_IMPORTED_MODULE_0__FriendBullet__["a" /* default */].instances);
    });
  }

  /**
   * collision test with your bullets.
   * @param {Array<Object>} targetArray - Object must have #shape to hitTest
   */
  collisionCheck(targetArray) {
    for (let i = 0; i < targetArray.length; i++) {
      if (!this.alive) {
        break;
      }
      const target = targetArray[i];
      const pos = this.hitArea.localToLocal(0, 0, target.shape);
      const hitTest = this.hitArea.hitTest(pos.x, pos.y);
      if (hitTest) {
        this.beShot({x: pos.x, y: pos.y, bullet: target});
      }
    }
  }

  /**
   * kicked by collision check.
   *
   * @param {object} args
   */
  beShot(args) {
    if (!this.alive) {
      return;
    }

    const x = args.x;
    const y = args.y;

    new __WEBPACK_IMPORTED_MODULE_2__Blow__["a" /* default */]({
      stage: this.stage,
      x: this.x - x,
      y: this.y - y,
      color: 'white',
    });

    this.beHit(args);
    args.bullet.die();
  }

  trigger() {
    throw new Error('implement abstract #trigger.');
  }

  move() {
    throw new Error('implement abstract #move.');
  }

  beHit(args) {
    const bullet = args.bullet;

    this.hitPoint -= bullet.stoppingPower;
  }

  destroyed() {
    this.last();

    new __WEBPACK_IMPORTED_MODULE_2__Blow__["a" /* default */]({
      stage: this.stage,
      x: this.x,
      y: this.y,
      color: 'white',
      radius: 100,
    });

    __WEBPACK_IMPORTED_MODULE_6__Score__["a" /* default */].addPoint(this.score);

    this.die();
  }

  /**
   * kicked just after #destroyed, before #die.
   */
  last() {
    /*
     * do nothing in general.
     */
  }

  die() {

    if (this.clock) {
      this.clock.allOff();
      this.clock = null;
    }

    if (this.stage) {
      this.stage.removeChild(this.shape);
      this.stage.removeChild(this.hitArea);
      this.stage.removeChild(this.text);
      this.stage = null;
    }

    this.shape = null;
    this.text = null;
    this.hitArea = null;
    this.alive = false;

    __WEBPACK_IMPORTED_MODULE_3__EventsWrapper__["a" /* default */].emit(`enemyDestroyed_${this.id}`);

    for (let i = 0; i < Enemy.instances.length; i++) {
      const enemy = Enemy.instances[i];
      if (enemy === this) {
        Enemy.instances.splice(i, 1);
        break;
      }
    }
  }

  static flush() {
    while (Enemy.instances.length > 0) {
      for (let i_b = 0; i_b < Enemy.instances.length; i_b++) {
        const enemy = Enemy.instances[i_b];
        enemy.die();
      }
    }
  }

  slideIn() {
    if(this.slidedIn){
      return false;
    }
    
    if (!this.isEdgeOut) {
      this.slidedIn = true;
      return false;
    }

    if (this.x <= __WEBPACK_IMPORTED_MODULE_4__Constant__["_9" /* STAGE_EDGE_LEFT */]) {
      this.x += 1;
    }
    if (this.x >= __WEBPACK_IMPORTED_MODULE_4__Constant__["_10" /* STAGE_EDGE_RIGHT */]) {
      this.x -= 1;
    }
    if (this.y <= __WEBPACK_IMPORTED_MODULE_4__Constant__["_11" /* STAGE_EDGE_TOP */]) {
      this.y += 1;
    }
    if (this.y >= __WEBPACK_IMPORTED_MODULE_4__Constant__["_8" /* STAGE_EDGE_BOTTOM */]) {
      this.y -= 1;
    }

    return true;
  }

  drift(){
    this.x -= __WEBPACK_IMPORTED_MODULE_4__Constant__["y" /* DRIFT_SPEED_LEFT */];
  }

  get isEdgeOut() {
    return this.x <= __WEBPACK_IMPORTED_MODULE_4__Constant__["_9" /* STAGE_EDGE_LEFT */] ||
      this.x >= __WEBPACK_IMPORTED_MODULE_4__Constant__["_10" /* STAGE_EDGE_RIGHT */] ||
      this.y <= __WEBPACK_IMPORTED_MODULE_4__Constant__["_11" /* STAGE_EDGE_TOP */] ||
      this.y >= __WEBPACK_IMPORTED_MODULE_4__Constant__["_8" /* STAGE_EDGE_BOTTOM */];
  }

  get isFrameOut() {
    return this.x <= __WEBPACK_IMPORTED_MODULE_4__Constant__["_13" /* STAGE_FRAME_LEFT */] ||
      this.x >= __WEBPACK_IMPORTED_MODULE_4__Constant__["_14" /* STAGE_FRAME_RIGHT */] ||
      this.y <= __WEBPACK_IMPORTED_MODULE_4__Constant__["_15" /* STAGE_FRAME_TOP */] ||
      this.y >= __WEBPACK_IMPORTED_MODULE_4__Constant__["_12" /* STAGE_FRAME_BOTTOM */];
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Enemy);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Clock {
  constructor(instance) {
    this.instance = instance;
    this.handlers = [];
  }

  getTick() {
    const tick = createjs.Ticker.getTicks();
    return tick;
  }

  static getTick() {
    return this.instance.getTick();
  }

  onTick(fn) {
    if (typeof fn !== 'function') {
      throw new Error('fn must be a function');
    }
    const handler = fn.bind(this.instance);
    createjs.Ticker.addEventListener('tick', handler);
    this.handlers.push(handler);
    const index = this.handlers.length;
    return index;
  }

  allOff() {
    this.handlers.forEach((handler) => {
      createjs.Ticker.removeEventListener('tick', handler);
    });
    this.instance = null;
    this.handlers = null;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Clock);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bullet__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AirCraft__ = __webpack_require__(2);




/**
 * enemy bullet base class.
 */
class EnemyBullet extends __WEBPACK_IMPORTED_MODULE_0__Bullet__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);

    EnemyBullet.id = EnemyBullet.id || 0;
    this.id = EnemyBullet.id;
    EnemyBullet.id++;

    EnemyBullet.instances = EnemyBullet.instances;

    EnemyBullet.instances.push(this);
  }

  static get instances() {
    return EnemyBullet._instances || [];
  }

  static set instances(instance) {
    EnemyBullet._instances = instance;
  }

  static flush() {

    while (EnemyBullet.instances.length > 0) {
      for (let i_b = 0; i_b < EnemyBullet.instances.length; i_b++) {
        const enemyBullet = EnemyBullet.instances[i_b];
        enemyBullet.die();
      }
    }
  }

  removeFromInstances() {
    for (let i = 0; i < EnemyBullet.instances.length; i++) {
      const enemyBullet = EnemyBullet.instances[i];
      if (enemyBullet.id === this.id) {
        EnemyBullet.instances.splice(i, 1);
        break;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (EnemyBullet);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enemy__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MathUtil__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Hue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EventsWrapper__ = __webpack_require__(5);







/**
 * Enemy "Amplifier" class.
 * He expand every enemy bullet hitArea.
 */
class Amplifier extends __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.enrage = false;

    this.deploy();
    this.assignTickListener();
    window.setTimeout(() => {
      this.rage();
    }, __WEBPACK_IMPORTED_MODULE_1__Constant__["i" /* AMPLIFIER_SPIN_UP_TIME */]);
  }

  rage() {
    if (!this.alive) {
      return false;
    }
    this.enrage = true;

    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      const tick1 = this.clock.getTick() * 4;
      const tick2 = tick1 + 60;
      const tick3 = tick2 + 60;
      const age1 = Math.abs(Math.sin(__WEBPACK_IMPORTED_MODULE_2__MathUtil__["a" /* default */].d2r(tick1)));
      const age2 = Math.abs(Math.sin(__WEBPACK_IMPORTED_MODULE_2__MathUtil__["a" /* default */].d2r(tick2)));
      const age3 = Math.abs(Math.sin(__WEBPACK_IMPORTED_MODULE_2__MathUtil__["a" /* default */].d2r(tick3)));
      this.ripple1.alpha = 1 - (age1 * 0.8);
      this.ripple1.scaleX = age1;
      this.ripple1.scaleY = age1;
      this.ripple2.alpha = 1 - (age2 * 0.8);
      this.ripple2.scaleX = age2;
      this.ripple2.scaleY = age2;
      this.ripple3.alpha = 1 - (age3 * 0.8);
      this.ripple3.scaleX = age3;
      this.ripple3.scaleY = age3;
    });
  }

  static getAmplifiers() {
    const result = [];
    for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */].instances.length; i++) {
      const enemy = __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */].instances[i];
      if (enemy instanceof Amplifier) {
        result.push(enemy);
      }
    }

    return result;
  }

  /**
   * return bullet expand ratio.
   * returns 2 to the power of number of Amplifier enraged.
   * (if Amplifier enraged does not exist, return 1)
   *
   * @return {number} Math.power(2,n);
   */
  static getRatio() {
    let enraged = 0;
    const amplifiers = Amplifier.getAmplifiers();

    for (let i = 0; i < amplifiers.length; i++) {
      const enemy = amplifiers[i];
      if (!(enemy instanceof Amplifier)) {
        continue;
      }

      if (enemy.enrage === true) {
        enraged++;
      }
    }

    const amplify = Math.pow(__WEBPACK_IMPORTED_MODULE_1__Constant__["g" /* AMPLIFIER_COEFFICIENT */], enraged);

    return amplify;
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = Object(__WEBPACK_IMPORTED_MODULE_1__Constant__["_22" /* dd */])(`amp:{hp: ${this.hitPoint}`);
    });
  }

  /**
   * firing control kicked every tick
   */
  trigger() {
  }

  /**
   * moving control kicked every tick
   */
  move() {
    this.slideIn();
    this.drift();
    this.updatePos();
  }

  updatePos(x = this.x, y = this.y) {
    if (!this.alive) {
      return;
    }

    this.shape.x = x;
    this.shape.y = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x = x;
    this.text.y = y;
    this.ripple1.x = x;
    this.ripple1.y = y;
    this.ripple2.x = x;
    this.ripple2.y = y;
    this.ripple3.x = x;
    this.ripple3.y = y;
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(__WEBPACK_IMPORTED_MODULE_3__Hue__["a" /* default */].getHue())
      .drawRect(
        -__WEBPACK_IMPORTED_MODULE_1__Constant__["j" /* AMPLIFIER_WIDTH */] / 2,
        -__WEBPACK_IMPORTED_MODULE_1__Constant__["h" /* AMPLIFIER_HEIGHT */] / 2,
        __WEBPACK_IMPORTED_MODULE_1__Constant__["j" /* AMPLIFIER_WIDTH */],
        __WEBPACK_IMPORTED_MODULE_1__Constant__["h" /* AMPLIFIER_HEIGHT */]);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(
        -__WEBPACK_IMPORTED_MODULE_1__Constant__["j" /* AMPLIFIER_WIDTH */] / 2,
        -__WEBPACK_IMPORTED_MODULE_1__Constant__["h" /* AMPLIFIER_HEIGHT */] / 2,
        __WEBPACK_IMPORTED_MODULE_1__Constant__["j" /* AMPLIFIER_WIDTH */],
        __WEBPACK_IMPORTED_MODULE_1__Constant__["h" /* AMPLIFIER_HEIGHT */]);

    this.ripple1 = new createjs.Shape();
    this.ripple1.alpha = 0;
    this.ripple1.graphics
      .setStrokeStyle(2)
      .beginStroke('white')
      .drawCircle(0, 0, 40);

    this.ripple2 = new createjs.Shape();
    this.ripple2.alpha = 0;
    this.ripple2.graphics
      .setStrokeStyle(2)
      .beginStroke('white')
      .drawCircle(0, 0, 40);

    this.ripple3 = new createjs.Shape();
    this.ripple3.alpha = 0;
    this.ripple3.graphics
      .setStrokeStyle(2)
      .beginStroke('white')
      .drawCircle(0, 0, 40);

    this.text = new createjs.Text(Object(__WEBPACK_IMPORTED_MODULE_1__Constant__["_22" /* dd */])('amp'), 'bold 9px Arial', 'white');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
    this.stage.addChild(this.ripple1);
    this.stage.addChild(this.ripple2);
    this.stage.addChild(this.ripple3);
  }

  die() {
    if (this.clock) {
      this.clock.allOff();
      this.clock = null;
    }

    if (this.stage) {
      this.stage.removeChild(this.shape);
      this.stage.removeChild(this.hitArea);
      this.stage.removeChild(this.text);
      this.stage.removeChild(this.ripple1);
      this.stage.removeChild(this.ripple2);
      this.stage.removeChild(this.ripple3);
      this.stage = null;
    }

    this.shape = null;
    this.text = null;
    this.hitArea = null;
    this.alive = false;

    __WEBPACK_IMPORTED_MODULE_4__EventsWrapper__["a" /* default */].emit(`enemyDestroyed_${this.id}`);

    for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */].instances.length; i++) {
      const enemy = __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */].instances[i];
      if (enemy === this) {
        __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */].instances.splice(i, 1);
        break;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Amplifier);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bullet__ = __webpack_require__(16);



/**
 * friend bullet base class.
 */
class FriendBullet extends __WEBPACK_IMPORTED_MODULE_0__Bullet__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y
   */
  constructor(args) {
    super(args);

    FriendBullet.id = FriendBullet.id || 0;
    this.id = FriendBullet.id;
    FriendBullet.id++;

    FriendBullet.instances = FriendBullet.instances;

    FriendBullet.instances.push(this);
  }

  static get instances() {
    return FriendBullet._instances || [];
  }

  static set instances(_instances) {
    FriendBullet._instances = _instances;
  }

  static flush() {

    while (FriendBullet.instances.length > 0) {
      for (let i_b = 0; i_b < FriendBullet.instances.length; i_b++) {
        const friendBullet = FriendBullet.instances[i_b];
        friendBullet.die();
      }
    }
  }

  removeFromInstances() {
    for (let i = 0; i < FriendBullet.instances.length; i++) {
      const friendBullet = FriendBullet.instances[i];
      if (friendBullet.id === this.id) {
        FriendBullet.instances.splice(i, 1);
        break;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (FriendBullet);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



class Score {
  /**
   * @constructor
   * @singleton
   */
  constructor() {
    if (typeof Score.instance !== 'undefined') {
      return Score.instance;
    }
    Score.instance = this;
    this.reset();
  }

  get point() {
    return this._point;
  }

  set point(p) {
    this._point = p;
    this.highScore = p;
  }

  get highScore() {
    return this._highScore || 0;
  }

  set highScore(score) {
    return this._highScore = (this.highScore < score) ? score : this.highScore;
  }

  reset() {
    this._point = 0;
    this._highScore = 0;
  }

  static get point() {
    return Score.instance.point || 0;
  }

  static set point(p) {
    Score.instance.point = p;
  }

  static get highScore() {
    return Score.instance.highScore || 0;
  }

  static reset() {
    Score.instance.reset();
  }

  static addPoint(p) {
    const point = parseInt(p);
    if (isNaN(point)) {
      return false;
    }

    this.point = this.point || 0;
    this.point += point;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Score);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Clock__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AirCraft__ = __webpack_require__(2);







class Jammer {
  static get instances() {
    return Jammer._instances || [];
  }

  static set instances(instances) {
    Jammer._instances = instances;
  }

  constructor(x, y) {
    if (!__WEBPACK_IMPORTED_MODULE_3__AirCraft__["a" /* default */].isAlive()) {
      return null;
    }

    Jammer.instances = Jammer.instances || [];
    Jammer.instances.push(this);
    this.stage = __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */].getStage();
    this.alive = true;
    this.x = x;
    this.y = y;
    this.radius = __WEBPACK_IMPORTED_MODULE_2__Constant__["O" /* JAMMER_RADIUS */];
    this.clock = new __WEBPACK_IMPORTED_MODULE_0__Clock__["a" /* default */](this);
    this.deploy();
    window.setTimeout(() => {
      this.die();
    }, __WEBPACK_IMPORTED_MODULE_2__Constant__["N" /* JAMMER_LIFE_TIME */]);

    this.clock = new __WEBPACK_IMPORTED_MODULE_0__Clock__["a" /* default */](this);
    this.clock.onTick(() => {
      if (__WEBPACK_IMPORTED_MODULE_3__AirCraft__["a" /* default */].isAlive()) {
        return false;
      }
      this.die();
    });
  }

  updatePos(x = this.x, y = this.y) {
    this.shape.x = x;
    this.shape.y = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x = x;
    this.text.y = y;
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics
      .beginFill('darkgray')
      .drawCircle(0, 0, __WEBPACK_IMPORTED_MODULE_2__Constant__["O" /* JAMMER_RADIUS */]);
    this.shape.alpha = 0.3;

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawCircle(0, 0, __WEBPACK_IMPORTED_MODULE_2__Constant__["O" /* JAMMER_RADIUS */]);

    this.text = new createjs.Text(Object(__WEBPACK_IMPORTED_MODULE_2__Constant__["_22" /* dd */])('jammer'), 'bold 9px Arial', 'black');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }

  static flush() {
    while (Jammer.instances.length > 0) {
      const jammer = Jammer.instances[0];
      jammer.die();
      Jammer.instances.shift();
      console.log(Jammer.instances.length);
    }
  }

  die() {
    if (!this.alive) {
      return false;
    }

    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.hitArea);
    this.stage.removeChild(this.text);
    this.clock.allOff();
    this.clock = null;
    this.shape = null;
    this.text = null;
    this.hitArea = null;
    this.stage = null;
    this.alive = false;

    for (let i = 0; i < Jammer.instances.length; i++) {
      const jammer = Jammer.instances[i];
      if (jammer === this) {
        Jammer.instances.splice(i, 1);
        break;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Jammer);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventsWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AirCraft__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Clock__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MathUtil__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Canvas__ = __webpack_require__(1);









/**
 * enemy's target marker.
 * spawns and rush to you.
 * reached, then, resolve promise as #p.
 */
class EnemyMarker {
  /**
   * @constructor
   * @param {Object} args - x, y
   */
  constructor(args) {

    this.id = EnemyMarker.getId();

    EnemyMarker.instances.push(this);

    this.x = args.x;
    this.y = args.y;
    this.alive = true;
    this.stage = __WEBPACK_IMPORTED_MODULE_5__Canvas__["a" /* default */].getStage();
    this.clock = new __WEBPACK_IMPORTED_MODULE_2__Clock__["a" /* default */](this);
    this.p = new Promise((resolve, reject) => {
      __WEBPACK_IMPORTED_MODULE_0__EventsWrapper__["a" /* default */].once(`reached_${this.id}`, () => {
        __WEBPACK_IMPORTED_MODULE_0__EventsWrapper__["a" /* default */].removeAllListeners(`reached_${this.id}`);
        resolve();
      });
    });
    this.deploy();
    this.assignTickListener();
  }

  static getId() {
    EnemyMarker._id = EnemyMarker._id || 0;
    const id = EnemyMarker._id;
    EnemyMarker._id++;

    return id;
  }


  static get instances() {
    return EnemyMarker._instances || [];
  }

  static set instances(_instances) {
    EnemyMarker._instances = _instances;
  }

  static flush() {
    while (EnemyMarker.instances.length > 0) {
      for (let i_b = 0; i_b < EnemyMarker.instances.length; i_b++) {
        const marker = EnemyMarker.instances[i_b];
        marker.die();
      }
    }
  }

  /**
   * assign two listeners.
   *   (1) hitTest with aircraft.
   *   (2) call #move.
   */
  assignTickListener() {
    this.clock.onTick(() => {
      this.move();
      this.updatePos();
      this.getOutHandler();
      this.collisionCheckWithAircraft();

      if (this.alive !== true) {
        this.die();
        return false;
      }
    });
  }

  move() {
    const airCraft = __WEBPACK_IMPORTED_MODULE_1__AirCraft__["a" /* default */].getInstance();

    const angle = __WEBPACK_IMPORTED_MODULE_3__MathUtil__["a" /* default */].getAngleDegree(
      this.x,
      this.y,
      airCraft.x,
      airCraft.y,
    );

    this.x -= __WEBPACK_IMPORTED_MODULE_4__Constant__["U" /* MARKER_SPEED */] * Math.cos(angle);
    this.y -= __WEBPACK_IMPORTED_MODULE_4__Constant__["U" /* MARKER_SPEED */] * Math.sin(angle);
  }

  updatePos(x = this.x, y = this.y) {
    this.shape.x = x;
    this.shape.y = y;
    this.hitArea.x = x;
    this.hitArea.y = y;
    this.text.x = x;
    this.text.y = y;
  }

  getOutHandler() {
    if (this.x > __WEBPACK_IMPORTED_MODULE_4__Constant__["_14" /* STAGE_FRAME_RIGHT */]) {
      this.die();
    }
    if (this.x < __WEBPACK_IMPORTED_MODULE_4__Constant__["_13" /* STAGE_FRAME_LEFT */]) {
      this.die();
    }
    if (this.y > __WEBPACK_IMPORTED_MODULE_4__Constant__["_12" /* STAGE_FRAME_BOTTOM */]) {
      this.die();
    }
    if (this.y < __WEBPACK_IMPORTED_MODULE_4__Constant__["_15" /* STAGE_FRAME_TOP */]) {
      this.die();
    }
  }

  collisionCheckWithAircraft() {
    const airCraft = __WEBPACK_IMPORTED_MODULE_1__AirCraft__["a" /* default */].getInstance();

    if (!this.alive) {
      return false;
    }


    if (!__WEBPACK_IMPORTED_MODULE_1__AirCraft__["a" /* default */].isAlive() || !airCraft) {
      this.locked();
      return false;
    }

    const pos = this.hitArea.localToLocal(0, 0, airCraft.shape);
    const hitTest = this.hitArea.hitTest(pos.x, pos.y);
    if (hitTest) {
      this.locked();
    }
  }

  locked() {
    __WEBPACK_IMPORTED_MODULE_0__EventsWrapper__["a" /* default */].emit(`reached_${this.id}`);
    this.die();
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.alpha = 1;
    this.shape.graphics
      .setStrokeStyle(2)
      .beginStroke('dimgray')
      .drawCircle(0, 0, __WEBPACK_IMPORTED_MODULE_4__Constant__["T" /* MARKER_SHAPE_RADIUS */]);

    this.text = new createjs.Text(Object(__WEBPACK_IMPORTED_MODULE_4__Constant__["_22" /* dd */])('marker'), 'bold 9px Arial', 'white');

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawCircle(0, 0, __WEBPACK_IMPORTED_MODULE_4__Constant__["S" /* MARKER_HITAREA_RADIUS */]);

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }

  die() {
    if (this.clock) {
      this.clock.allOff();
      this.clock = null;
    }

    if (this.stage) {
      this.stage.removeChild(this.shape);
      this.stage.removeChild(this.hitArea);
      this.stage.removeChild(this.text);
      this.stage = null;
    }

    this.shape = null;
    this.text = null;
    this.hitArea = null;
    this.alive = false;
    this.removeFromInstances();
  }

  removeFromInstances() {
    for (let i_i = 0; i_i < EnemyMarker.instances.length; i_i++) {
      const marker = EnemyMarker.instances[i_i];
      if (marker === this) {
        EnemyMarker.instances.splice(i_i, 1);
        break;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (EnemyMarker);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Score__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Hue__ = __webpack_require__(4);








class Title {
  /**
   * @constructor
   */
  constructor() {
    new __WEBPACK_IMPORTED_MODULE_0__Canvas__["a" /* default */]();
    new __WEBPACK_IMPORTED_MODULE_3__Score__["a" /* default */]();
    new __WEBPACK_IMPORTED_MODULE_4__Hue__["a" /* default */]();
    this.stage = __WEBPACK_IMPORTED_MODULE_0__Canvas__["a" /* default */].getStage();

    const b = new createjs.Graphics();
    b.beginFill('black');
    const blind = b.drawRect(0, 0, __WEBPACK_IMPORTED_MODULE_2__Constant__["_19" /* STAGE_WIDTH */], __WEBPACK_IMPORTED_MODULE_2__Constant__["_16" /* STAGE_HEIGHT */]);
    this.blind = new createjs.Shape(blind);
    this.blind.alpha = 0.3;

    /* start button */
    {
      this.start = new createjs.Text('Start', 'bold 16px Arial', 'lightgray');
      const {height, width} = this.start.getMetrics();
      const left = (-width / 2) + __WEBPACK_IMPORTED_MODULE_2__Constant__["_17" /* STAGE_MIDDLE_X */];
      const top = (-height / 2) + __WEBPACK_IMPORTED_MODULE_2__Constant__["_18" /* STAGE_MIDDLE_Y */];
      this.start.x = left;
      this.start.y = top;

      const g = new createjs.Graphics();
      g.setStrokeStyle(1)
        .beginStroke('#000000')
        .beginFill('black');

      const rect = g.drawRect(left, top, width, height);
      this.gameStartButton = new createjs.Shape(rect);
      this.gameStartHandler = this.gameStart.bind(this);

      this.gameStartButton.addEventListener('click', this.gameStartHandler, false);
    }

    /* score */
    {
      const score = __WEBPACK_IMPORTED_MODULE_3__Score__["a" /* default */].highScore;
      this.score = new createjs.Text(score ? `score: ${score}` : '', 'bold 12px Arial', 'lightgray');
      const {height, width} = this.score.getMetrics();
      const left = (-width / 2) + __WEBPACK_IMPORTED_MODULE_2__Constant__["_17" /* STAGE_MIDDLE_X */];
      const top = (-height / 2) + __WEBPACK_IMPORTED_MODULE_2__Constant__["_18" /* STAGE_MIDDLE_Y */] + height * 2;
      this.score.x = left;
      this.score.y = top;

      const g = new createjs.Graphics();
      g.setStrokeStyle(1)
        .beginStroke('#000000')
        .beginFill('black');

      const rect = g.drawRect(left, top, width, height);
      this.scoreIndicator = new createjs.Shape(rect);
    }

    this.stage.addChild(this.blind);
    this.stage.addChild(this.gameStartButton);
    this.stage.addChild(this.scoreIndicator);
    this.stage.addChild(this.score);
    this.stage.addChild(this.start);

    this.stage.update();
  }

  gameStart() {
    this.gameStartButton.removeEventListener('click', this.gameStartHandler, false);
    this.stage.removeChild(this.blind);
    this.stage.removeChild(this.gameStartButton);
    this.stage.removeChild(this.score);
    this.stage.removeChild(this.start);

    new __WEBPACK_IMPORTED_MODULE_1__Game__["a" /* default */]();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Title);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FriendBullet__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constant__ = __webpack_require__(0);





/**
 * gatling gun bullet class.
 */
class GatlingBullet extends __WEBPACK_IMPORTED_MODULE_0__FriendBullet__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y
   */
  constructor(args) {
    super(args);
    this.stoppingPower = __WEBPACK_IMPORTED_MODULE_1__Constant__["D" /* GATLING_BULLET_STOPPING_POWER */];
    this.assignTickListener();
    this.deploy();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      this.x += __WEBPACK_IMPORTED_MODULE_1__Constant__["C" /* GATLING_BULLET_SPEED */];
      this.updatePos();
      this.getOutHandler();
    });
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics
      .setStrokeStyle(2)
      .beginStroke('white')
      .drawRect(-__WEBPACK_IMPORTED_MODULE_1__Constant__["E" /* GATLING_BULLET_WIDTH */] / 2, -__WEBPACK_IMPORTED_MODULE_1__Constant__["B" /* GATLING_BULLET_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_1__Constant__["E" /* GATLING_BULLET_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__Constant__["B" /* GATLING_BULLET_HEIGHT */]);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-__WEBPACK_IMPORTED_MODULE_1__Constant__["E" /* GATLING_BULLET_WIDTH */] / 2, -__WEBPACK_IMPORTED_MODULE_1__Constant__["B" /* GATLING_BULLET_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_1__Constant__["E" /* GATLING_BULLET_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__Constant__["B" /* GATLING_BULLET_HEIGHT */]);

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (GatlingBullet);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Clock__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EventsWrapper__ = __webpack_require__(5);






/**
 * main weapon base bullet class.
 */
class Bullet {
  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  /**
   * update bullets shape position with x,y
   * @return {*}
   */
  updatePos() {
    if (!this.alive) {
      return false;
    }
    this.shape.x = this.x;
    this.shape.y = this.y;
    this.hitArea.x = this.x;
    this.hitArea.y = this.y;
    this.text.x = this.x;
    this.text.y = this.y;
  }

  getOutHandler() {
    if (this.x > __WEBPACK_IMPORTED_MODULE_1__Constant__["_14" /* STAGE_FRAME_RIGHT */]) {
      this.die();
    }
    if (this.x < __WEBPACK_IMPORTED_MODULE_1__Constant__["_13" /* STAGE_FRAME_LEFT */]) {
      this.die();
    }
    if (this.y > __WEBPACK_IMPORTED_MODULE_1__Constant__["_12" /* STAGE_FRAME_BOTTOM */]) {
      this.die();
    }
    if (this.y < __WEBPACK_IMPORTED_MODULE_1__Constant__["_15" /* STAGE_FRAME_TOP */]) {
      this.die();
    }
  }

  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    this.x = args.x;
    this.y = args.y;
    this.stoppingPower = 0;
    this.alive = true;
    this.stage = __WEBPACK_IMPORTED_MODULE_2__Canvas__["a" /* default */].getStage();
    this.shape = null;
    this.hitArea = null;
    this.clock = new __WEBPACK_IMPORTED_MODULE_0__Clock__["a" /* default */](this);
    this.text = new createjs.Text('', '9px Arial', 'black');
  }

  /**
   * remove bullets themselves got out of stage.
   */
  die() {
    if (!this.alive) {
      return;
    }

    this.alive = false;
    this.stage.removeChild(this.shape);
    this.stage.removeChild(this.text);
    this.clock.allOff();
    this.clock = null;
    this.text = null;
    this.shape = null;
    this.hitArea = null;
    this.stage = null;

    this.removeFromInstances();
  }

  removeFromInstances() {
    throw new Error('abstract #removeFromInstances is not implemented');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Bullet);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Canvas__ = __webpack_require__(1);




/**
 * Blow class.
 * render explode and blow up effect on bullet collision.
 */
class Blow {
  /**
   * @param {{radius, color, x, y}} args
   */
  constructor(args) {
    this.stage = __WEBPACK_IMPORTED_MODULE_0__Canvas__["a" /* default */].getStage();
    this.radius = args.radius || 20;
    this.color = args.color || 'lightblue';

    this.shape = new createjs.Shape();
    this.shape.x = args.x || 0;
    this.shape.y = args.y || 0;
    this.shape.alpha = 0;
    this.shape.graphics
      .beginFill(this.color)
      .drawCircle(0, 0, this.radius);

    this.stage.addChild(this.shape);

    const completeHandler = () => {
      createjs.Tween.removeTweens(this.shape);
      this.stage.removeChild(this.shape);
      this.shape = null;
    };

    createjs.Tween.get(this.shape)
      .to({alpha: 0.6}, 40)
      .to({alpha: 0}, 80)
      .call(completeHandler.bind(this));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Blow);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GunPowder__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EventsWrapper__ = __webpack_require__(5);






/**
 * bullet art utility class.
 * @static
 */
class FireWorks {
  constructor() {
    throw new Error('FireWorks cannot be instance');
  }

  static getRandomRadian(radian = Math.PI) {
    return Math.random() * radian;
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} count
   * @param {number} depth
   */
  static sunFlower(x, y, count = 1, depth = 1) {
    const pie = 2 * Math.PI / count;
    const noise = FireWorks.getRandomRadian(pie);
    for (let j = 0; j < depth; j++) {
      const intercept = (2 * Math.PI * j) / (2 * count);
      for (let i = 0; i < count; i++) {
        window.setTimeout(() => {
          new __WEBPACK_IMPORTED_MODULE_0__GunPowder__["a" /* default */]({
            x: x,
            y: y,
            angle: ((2 * Math.PI * i) / count) + intercept + noise,
            stage: __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */].getStage(),
          });
        }, 100 * j);
      }
    }
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} count
   * @param {number} depth
   */
  static conch(x, y, count = 1, depth = 1) {
    const pie = 2 * Math.PI / count;
    const noise = FireWorks.getRandomRadian(pie);

    for (let j = 0; j < depth; j++) {
      const intercept = (2 * Math.PI * j) / (2 * count * depth);
      for (let i = 0; i < count; i++) {
        window.setTimeout(() => {
          new __WEBPACK_IMPORTED_MODULE_0__GunPowder__["a" /* default */]({
            x: x,
            y: y,
            speedCoefficient: 0.5,
            angle: ((2 * Math.PI * i) / count) + intercept + noise,
            stage: __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */].getStage(),
          });
        }, 100 * j);
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (FireWorks);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_Title__ = __webpack_require__(14);




/*
 * display "GAME START"
 */
(window.onLoad = () => {
  createjs.Ticker.timingMode = createjs.Ticker.RAF;

  new __WEBPACK_IMPORTED_MODULE_0__class_Title__["a" /* default */]();

})();


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AirCraft_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Enemy__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EnemyBullet__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FriendBullet__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Wave__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__EventsWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Title__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EnemyMarker__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Amplifier__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Jammer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Score__ = __webpack_require__(11);
















class Game {
  /**
   * @constructor
   */
  constructor() {
    console.info('new game start.');

    new __WEBPACK_IMPORTED_MODULE_0__AirCraft_js__["a" /* default */]();

    __WEBPACK_IMPORTED_MODULE_6__Wave__["a" /* default */].level = 0;

    __WEBPACK_IMPORTED_MODULE_1__Enemy__["a" /* default */].flush();
    __WEBPACK_IMPORTED_MODULE_9__EnemyMarker__["a" /* default */].flush();
    __WEBPACK_IMPORTED_MODULE_2__EnemyBullet__["a" /* default */].flush();
    __WEBPACK_IMPORTED_MODULE_11__Jammer__["a" /* default */].flush();

    __WEBPACK_IMPORTED_MODULE_12__Score__["a" /* default */].reset();

    this.stage = __WEBPACK_IMPORTED_MODULE_5__Canvas__["a" /* default */].getStage();

    this.indicator = new createjs.Text('', __WEBPACK_IMPORTED_MODULE_4__Constant__["K" /* INDICATOR_FONT_STYLE */], 'lightgray');
    this.indicator.x = __WEBPACK_IMPORTED_MODULE_4__Constant__["L" /* INDICATOR_X */];
    this.indicator.y = __WEBPACK_IMPORTED_MODULE_4__Constant__["M" /* INDICATOR_Y */];
    this.stage.addChild(this.indicator);

    this.stageListener = new __WEBPACK_IMPORTED_MODULE_7__EventsWrapper__["a" /* default */]();
    __WEBPACK_IMPORTED_MODULE_7__EventsWrapper__["a" /* default */].removeAllListeners();

    const wi = waveIterator(this.stageListener);
    let die = false;
    wi.next();

    this.stageListener.on('wave.clear', () => {
      wi.next();
    });

    this.stageListener.once('gameOver', () => {
      /* kill timer */
      createjs.Ticker.reset();
      createjs.Ticker.removeAllEventListeners();

      die = true;

      /* kill wave generator */
      wi.return();

      this.destroy();

      new __WEBPACK_IMPORTED_MODULE_8__Title__["a" /* default */]();
    });

    function* waveIterator(listener) {
      while (1) {
        if (die) {
          break;
        }
        const wave = new __WEBPACK_IMPORTED_MODULE_6__Wave__["a" /* default */]();
        wave.p
          .then((level) => {
            console.warn(`wave: ${level} clear!!`);
            listener.emit('wave.clear');
          })
          .catch((level) => {
            console.warn(`wave: ${level} failed!!`);
          });

        /*
         * pause process flow till next waveIterator#next();
         */
        yield;
      }
    }

    /*
     * update stage every tick
     */
    createjs.Ticker.addEventListener('tick', this.stage);

    /*
     * display debug indicator
     */
    createjs.Ticker.addEventListener('tick', () => {
      const measuredFPS = createjs.Ticker.getMeasuredFPS();
      const score = __WEBPACK_IMPORTED_MODULE_12__Score__["a" /* default */].point;
      const highScore = __WEBPACK_IMPORTED_MODULE_12__Score__["a" /* default */].highScore;
      const friendBulletCount = (__WEBPACK_IMPORTED_MODULE_3__FriendBullet__["a" /* default */].instances || []).length;
      const enemyBulletCount = __WEBPACK_IMPORTED_MODULE_2__EnemyBullet__["a" /* default */].instances.length;
      const enemyCount = (__WEBPACK_IMPORTED_MODULE_1__Enemy__["a" /* default */].instances || []).length;
      const jam = __WEBPACK_IMPORTED_MODULE_11__Jammer__["a" /* default */].instances.length || 0;
      const amp = __WEBPACK_IMPORTED_MODULE_10__Amplifier__["a" /* default */].getRatio() || 1;
      const amp_c = __WEBPACK_IMPORTED_MODULE_10__Amplifier__["a" /* default */].getAmplifiers().length || 0;
      const wave = __WEBPACK_IMPORTED_MODULE_6__Wave__["a" /* default */].level;
      this.indicator.text =
        `FPS: ${measuredFPS}\n` +
        `Score: ${score}\n` +
        `HighScore: ${highScore}\n` +
        Object(__WEBPACK_IMPORTED_MODULE_4__Constant__["_22" /* dd */])(`FriendBullets: ${friendBulletCount}\n`) +
        Object(__WEBPACK_IMPORTED_MODULE_4__Constant__["_22" /* dd */])(`Enemy: ${enemyCount}\n`) +
        Object(__WEBPACK_IMPORTED_MODULE_4__Constant__["_22" /* dd */])(`EnemyBullets: ${enemyBulletCount}\n`) +
        Object(__WEBPACK_IMPORTED_MODULE_4__Constant__["_22" /* dd */])(`jam: ${jam}\n`) +
        Object(__WEBPACK_IMPORTED_MODULE_4__Constant__["_22" /* dd */])(`amp: ${amp} - ${amp_c}\n`) +
        `Wave: ${wave}`;
    });
  }

  destroy() {
    this.stage.removeChild(this.indicator);

    if (this.stageListener) {
      this.stageListener.removeAllListeners();
      this.stageListener = null;
    }

    createjs.Ticker.removeAllEventListeners();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
    return this._keyDown_Right && !(this._keyDown_Up || this._keyDown_Down || this._keyDown_Left);
  }

  get keyDown_Right() {
    return this._keyDown_Right;
  }

  set keyDown_Right(value) {
    this._keyDown_Right = value;
  }

  get keyDownOnly_Left() {
    return this._keyDown_Left && !(this._keyDown_Up || this._keyDown_Down || this._keyDown_Right);
  }

  get keyDown_Left() {
    return this._keyDown_Left;
  }

  set keyDown_Left(value) {
    this._keyDown_Left = value;
  }

  get keyDownOnly_Down() {
    return this._keyDown_Down && !(this._keyDown_Up || this._keyDown_Left || this._keyDown_Right);
  }

  get keyDown_Down() {
    return this._keyDown_Down;
  }

  set keyDown_Down(value) {
    this._keyDown_Down = value;
  }

  get keyDownOnly_Up() {
    return this._keyDown_Up && !(this._keyDown_Down || this._keyDown_Left || this._keyDown_Right);
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

    this._keyDown_Up = false;
    this._keyDown_Down = false;
    this._keyDown_Left = false;
    this._keyDown_Right = false;
    this._keyDown_Ctrl = false;

    const keyHandler = (mode, e)=> {
      if (mode !== 'up' && mode !== 'down') {
        throw new Error('implement error!');
      }
      const pressed = (mode === 'down') || false;
      const keyCode = e.keyCode;

      const KEY_UP = 38;
      const KEY_DOWN = 40;
      const KEY_LEFT = 37;
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
    };

    document.addEventListener('keydown', keyHandler.bind(this, 'down'));
    document.addEventListener('keyup', keyHandler.bind(this, 'up'));
  }

  debug() {
    console.info({
      Up: this.keyDown_Up,
      Down: this.keyDown_Down,
      Left: this.keyDown_Left,
      Right: this.keyDown_Right,
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (VirtualPad);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Guns__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GatlingBullet__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Canvas__ = __webpack_require__(1);







/**
 * main weapon "gatling-gun" class.
 */
class Gatling extends __WEBPACK_IMPORTED_MODULE_0__Guns__["a" /* default */] {
  constructor(args) {
    super();
    this.stage = __WEBPACK_IMPORTED_MODULE_3__Canvas__["a" /* default */].getStage();
    this.coolTime = __WEBPACK_IMPORTED_MODULE_2__Constant__["F" /* GATLING_COOL_TIME */];
    this.x = args.x;
    this.y = args.y;

    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 0)).drawRect(-1, -1, 2, 2);

    this.text = new createjs.Text('', 'bold 9px Arial', 'black');

    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
  }

  /**
   * kicked every tick when airCraft autoFire is on.
   * @param {number} x
   * @param {number} y
   */
  trigger(x, y) {
    if (createjs.Ticker.getTicks() % __WEBPACK_IMPORTED_MODULE_2__Constant__["a" /* AIRCRAFT_FIRE_DELAY */] !== 0) {
      return;
    }

    this.x = x;
    this.y = y;
    this.updatePos();

    // this.text.text = `{x:${this.shape.x},y:${this.shape.y}`;

    new __WEBPACK_IMPORTED_MODULE_1__GatlingBullet__["a" /* default */]({
      x: x,
      y: y
    });
  }

  updatePos() {
    this.shape.x = this.x;
    this.shape.y = this.y;
    this.text.x = this.x;
    this.text.y = this.y - 20;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Gatling);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * main weapon abstract class.
 */
class Guns {
  get coolTime() {
    return this._coolTime;
  }

  set coolTime(value) {
    this._coolTime = value;
  }

  constructor() {
    this.coolTime = 1000;
    this.prevFired = 0;
  }

  trigger() {
    throw new Error('not implemented.');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Guns);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Clock__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GatlingBullet__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AirCraft__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MathUtil__ = __webpack_require__(3);









class Pod {
  constructor(args) {
    const {x, y} = args;
    this.x = x;
    this.y = y;
    this.clock = new __WEBPACK_IMPORTED_MODULE_0__Clock__["a" /* default */](this);
    this.stage = __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */].getStage();
    this.assignTickListener();
    this.deploy();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!__WEBPACK_IMPORTED_MODULE_4__AirCraft__["a" /* default */].isAlive()) {
        this.die();
      }

      if (!this.clock) {
        return false;
      }

      const tick = this.clock.getTick() * 6;
      this.shape.rotation = tick;

      this.move();

      this.trigger();
    });
  }

  move() {
    const {theta, distance} = this.toAirCraft();

    if (distance > __WEBPACK_IMPORTED_MODULE_3__Constant__["_1" /* POD_CABLE_LENGTH */]) {
      this.pullUp(theta, distance);
    }

    this.updatePos();
  }

  toAirCraft() {
    const airCraft = __WEBPACK_IMPORTED_MODULE_4__AirCraft__["a" /* default */].getInstance();

    const {x, y} = airCraft;
    const theta = __WEBPACK_IMPORTED_MODULE_5__MathUtil__["a" /* default */].getAngleDegree(this.x, this.y, x, y);
    const distance = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));

    return {theta, distance};
  }

  pullUp(theta) {
    const dx = 3 * Math.cos(theta);
    const dy = 3 * Math.sin(theta);
    this.x -= dx;
    this.y -= dy;
    this.text.text = Object(__WEBPACK_IMPORTED_MODULE_3__Constant__["_22" /* dd */])(`dx: ${Math.floor(dx)}, dy: ${Math.floor(dy)}, theta: ${theta}`);
  }

  trigger() {
    if (!__WEBPACK_IMPORTED_MODULE_4__AirCraft__["a" /* default */].isAlive()) {
      return false;
    }

    if (this.clock.getTick() % __WEBPACK_IMPORTED_MODULE_3__Constant__["_2" /* POD_FIRE_DELAY */] !== 0) {
      return;
    }

    const x = this.x;
    const y = this.y;
    new __WEBPACK_IMPORTED_MODULE_2__GatlingBullet__["a" /* default */]({x, y});
  }

  updatePos(x = this.x, y = this.y) {
    this.shape.x = x;
    this.shape.y = y;
  }

  deploy() {
    const graphic = new createjs.Graphics();
    graphic.setStrokeStyle(1).beginStroke('white')
      .drawRect(-__WEBPACK_IMPORTED_MODULE_3__Constant__["_4" /* POD_WIDTH */] / 2, -__WEBPACK_IMPORTED_MODULE_3__Constant__["_3" /* POD_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_3__Constant__["_4" /* POD_WIDTH */], __WEBPACK_IMPORTED_MODULE_3__Constant__["_3" /* POD_HEIGHT */]);
    this.shape = new createjs.Shape(graphic);
    this.text = new createjs.Text('', 'bold 9px Arial', 'red');
    this.stage.addChild(this.shape);
    this.stage.addChild(this.text);
  }

  die() {
    if (this.clock) {
      this.clock.allOff();
      this.clock = null;
    }

    if (this.stage) {
      this.stage.removeChild(this.shape);
      this.stage.removeChild(this.text);
      this.stage = null;
    }

    this.shape = null;
    this.text = null;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Pod);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WaveUtil__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AirCraft__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EventsWrapper__ = __webpack_require__(5);







class Wave {
  static nextLevel() {
    return (Wave._level++);
  }

  static get level() {
    Wave._level = Wave._level || 0;
    return Wave._level;
  };

  static set level(l) {
    Wave._level = l;
  }

  /**
   * @constructor
   */
  constructor() {
    this.level = Wave.level;
    Wave.nextLevel();
    this.stage = __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */].getStage();

    /*
     * dispatch enemy waves from config.
     */
    this.promises = this.comeOut();

    /*
     * set wave timer
     */
    const timer = new Promise((resolve) => {
      window.setTimeout(() => {
        resolve();
      }, __WEBPACK_IMPORTED_MODULE_0__Constant__["_21" /* WAVE_TIME_LIMIT */]);
    });

    const gameOver = new Promise((resolve) => {
      __WEBPACK_IMPORTED_MODULE_4__EventsWrapper__["a" /* default */].once('gameOver', () => {
        resolve();
      });
    });

    /*
     * wave clear ... when (1) or (2) done
     *   (1) destroy all enemy.
     *   (2) after ${timeMs} milli seconds.
     *
     * wave fails immediately
     *   (1) 'gameOver' event fired.
     *
     */
    this.p = new Promise((resolve, reject) => {
      Promise.race([
        Promise.all(this.promises),
        timer
      ]).then(() => {
        resolve(this.level);
      });

      gameOver.then(() => {
        reject(this.level);
      });
    });
  }


  /**
   * @return {Array<Promise>}
   */
  comeOut() {
    const promiseArray = [];

    const waveConf = __WEBPACK_IMPORTED_MODULE_2__WaveUtil__["a" /* default */].getConfig(Wave.level);

    waveConf.forEach((w) => {
      const promise = this.deployEnemy(w);
      promiseArray.push(promise);
    });

    return promiseArray;
  }

  /**
   * dispatch enemy from wave config.
   * get promise from it and return.
   *
   * @param {Object} config
   * @return {Promise}
   */
  deployEnemy(config) {
    const EnemyClass = config.enemyClass;
    const delayMs = config.delayMs;
    const args = config.args;

    return new Promise((resolve) => {
      window.setTimeout(() => {
        if (!__WEBPACK_IMPORTED_MODULE_3__AirCraft__["a" /* default */].isAlive()) {
          resolve();
        }

        const e = new EnemyClass(args);
        const p = e.p;
        p.then(() => {
          resolve();
        });
      }, delayMs);
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Wave);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MathUtil__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Debris__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bomber__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Amplifier__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Battery__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Launcher__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Noise__ = __webpack_require__(35);









'use strict';

/**
 * wave config utility class
 * @class
 */
class WaveUtil {
  /**
   * @constructor
   */
  constructor() {
    throw Error('WaveUtil cannot be instanciate');
  }

  /**
   *
   * @param {number} level
   * @return {Array<Object>}
   */
  static getConfig(level) {
    /*
     * get tier (0<=tier<=MAX_TIER)
     */
    let tier = Math.floor(level / 5);
    if (tier > __WEBPACK_IMPORTED_MODULE_6__Constant__["V" /* MAX_TIER */]) {
      tier = __WEBPACK_IMPORTED_MODULE_6__Constant__["V" /* MAX_TIER */];
    }

    /*
     * tier 0 is tutorial
     */
    if (tier === __WEBPACK_IMPORTED_MODULE_6__Constant__["_20" /* TUTORIAL */]) {
      return WaveUtil.tutorial(level);
    }

    /*
     * tier 1~MAX_TIER
     */
    return WaveUtil.randomConfig(level, tier);
  }

  /**
   * generate tutorial enemy config.
   *   every enemy config are static.
   *
   * @param {number} level
   * @return {Array<Object>}
   */
  static tutorial(level) {
    const waveConfig = [];
    switch (level) {
    case 1:
      // "what is battery"
      waveConfig.push(...WaveUtil.dispatchBatterySortie());
      break;
    case 2:
      // "launcher and bomber"
      waveConfig.push(...WaveUtil.dispatchLauncherSortie());
      waveConfig.push(...WaveUtil.dispatchBomberSortie());
      break;
    case 3:
      // "launcher and amplifier"
      waveConfig.push(...WaveUtil.dispatchAmplifierSortie());
      break;
    case 4:
      // "bomber and noise"
      waveConfig.push(...WaveUtil.dispatchLauncherSortie());
      waveConfig.push(...WaveUtil.dispatchBomberSortie());
      waveConfig.push(...WaveUtil.dispatchNoiseSortie());
      break;
    default:
      throw new Error(`unexpected level: ${level} in #tutorial`);
    }

    waveConfig.push(...WaveUtil.dispatchDebrisSortie());

    return waveConfig;
  }

  /**
   * generate wave config from level and tier
   *
   * @param {number} level
   * @param {number} tier
   * @return {Array}
   */
  static randomConfig(level, tier) {
    const debrisLevel = 0;
    const amplifierLevel = 0;
    const patternSeedId = Math.floor(__WEBPACK_IMPORTED_MODULE_6__Constant__["A" /* ENEMY_VARIATION */] * Math.random() + 1); // 0-9
    let waveConf = [];

    const randomConf = WaveUtil.generateRandomPattern(level, tier, patternSeedId);
    const debrisConf = WaveUtil.generateDebrisConf(level, tier, debrisLevel);
    const amplifierConf = WaveUtil.generateAmplifierConf(level, tier, amplifierLevel);

    waveConf = waveConf.concat(randomConf);
    waveConf = waveConf.concat(debrisConf);
    waveConf = waveConf.concat(amplifierConf);

    return waveConf;
  }

  /**
   * generate wave config by random patternSeedId
   *
   * @param {number} level
   * @param {number} tier
   * @param {number} patternSeedId
   * @return {Array}
   */
  static generateRandomPattern(level, tier, patternSeedId) {
    console.log(`level:${level}, tier:${tier}, patternSeedId:${patternSeedId}`); // @DELETEME

    const waveConfig = [];
    switch (patternSeedId) {
    case 1:
      waveConfig.push(...WaveUtil.generateBatteryConf(level, tier));
      break;
    case 2:
      waveConfig.push(...WaveUtil.generateLauncherConf(level, tier));
      waveConfig.push(...WaveUtil.generateBomberConf(level, tier));
      break;
    case 3:
      waveConfig.push(...WaveUtil.generateLauncherConf(level, tier));
      break;
    case 4:
      waveConfig.push(...WaveUtil.generateBomberConf(level, tier));
      waveConfig.push(...WaveUtil.generateNoiseConf(level, tier));
      break;
    case 5:
      waveConfig.push(...WaveUtil.generateBomberConf(level, tier));
      break;
    default:
      throw new Error(`unexpected level: ${patternSeedId} in #generateRandomConf`);
    }

    return waveConfig;
  }

  /**
   * EASY
   *   entry : front
   *   hp    : 2
   *   count : 3
   * HARD
   *   entry : horizontal
   *   hp    : 4
   *   count : 4
   * HUSH:
   *   entry : around
   *   hp    : tier * 2
   *   count : 5
   *
   * @param {number} level
   * @param {number} tier
   * @return {Array}
   */
  static generateBatteryConf(level, tier) {
    const args = {};
    switch (tier) {
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["z" /* EASY */]:
      args.entry = 'front';
      args.hitPoint = 2;
      args.count = 3;
      break;
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["I" /* HARD */]:
      args.entry = 'horizontal';
      args.hitPoint = 4;
      args.count = 4;
      break;
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["J" /* HUSH */]:
      args.entry = 'around';
      args.hitPoint = 2 * tier;
      args.count = 5;
      break;
    default:
      throw new Error(`invalid tier: ${tier}`);
    }

    const waveConf = WaveUtil.dispatchBatterySortie(args);

    return waveConf;
  }

  /**
   * EASY
   *   entry : front
   *   hp    : 2
   *   count : 3
   * HARD
   *   entry : both
   *   hp    : 4
   *   count : 4
   * HUSH:
   *   entry : around
   *   hp    : 4
   *   count : 6
   *
   * @param {number} level
   * @param {number} tier
   * @return {Array}
   */
  static generateBomberConf(level, tier) {
    const args = {};

    switch (tier) {
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["z" /* EASY */]:
      args.entry = 'front';
      args.hitPoint = 2;
      args.count = 3;
      break;
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["I" /* HARD */]:
      args.entry = 'horizontal';
      args.hitPoint = 4;
      args.count = 4;
      break;
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["J" /* HUSH */]:
      args.entry = 'around';
      args.hitPoint = 4;
      args.count = 6;
      break;
    default:
      throw new Error(`invalid tier: ${tier}`);
    }

    const waveConf = WaveUtil.dispatchBomberSortie(args);

    return waveConf;
  }

  /**
   * EASY
   *   entry : front
   *   hp    : 4
   *   count : 3
   * HARD
   *   entry : front
   *   hp    : 6
   *   count : 4
   * HUSH:
   *   entry : front-vertical
   *   hp    : 8
   *   count : 6
   *
   * @param {number} level
   * @param {number} tier
   * @return {Array}
   */
  static generateLauncherConf(level, tier) {
    const args = {};

    switch (tier) {
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["z" /* EASY */]:
      args.entry = 'front';
      args.hitPoint = 4;
      args.count = 3;
      break;
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["I" /* HARD */]:
      args.entry = 'vertical';
      args.hitPoint = 6;
      args.count = 4;
      break;
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["J" /* HUSH */]:
      args.entry = 'vertical';
      args.hitPoint = 8;
      args.count = 6;
      break;
    default:
      throw new Error(`invalid tier: ${tier}`);
    }

    const waveConf = WaveUtil.dispatchLauncherSortie(args);

    return waveConf;
  }

  /**
   * EASY
   *   entry : front
   *   hp    : 4
   *   count : 3
   * HARD
   *   entry : front
   *   hp    : 6
   *   count : 4
   * HUSH:
   *   entry : front-vertical
   *   hp    : 8
   *   count : 6
   *
   * @param {number} level
   * @param {number} tier
   * @return {Array}
   */
  static generateNoiseConf(level, tier) {
    const args = {};

    switch (tier) {
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["z" /* EASY */]:
      args.entry = 'front';
      args.hitPoint = 4;
      args.count = 3;
      break;
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["I" /* HARD */]:
      args.entry = 'front';
      args.hitPoint = 6;
      args.count = 4;
      break;
    case __WEBPACK_IMPORTED_MODULE_6__Constant__["J" /* HUSH */]:
      args.entry = 'front';
      args.hitPoint = 8;
      args.count = 6;
      break;
    default:
      throw new Error(`invalid tier: ${tier}`);
    }

    const waveConf = WaveUtil.dispatchNoiseSortie(args);

    return waveConf;
  }

  static generateDebrisConf(level, tier, debrisLevel) {
    return [];
  }

  static generateAmplifierConf(level, tier, amplifierLevel) {
    return [];
  }

  /**
   * @param {object} args
   * @return {Array<Object>}
   */
  static dispatchBatterySortie(args = {}) {
    const
      {
        delayMs = 0,
        spanMs = 800,
        count = 1,
        entry,
        hitPoint = 1
      } = args;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: __WEBPACK_IMPORTED_MODULE_4__Battery__["a" /* default */],
      delayMs,
      spanMs,
      count,
      entry,
      hitPoint,
    });

    return waveConf;
  }

  /**
   * @param {object} args
   * @return {Array<Object>}
   */
  static dispatchLauncherSortie(args = {}) {
    const {
      delayMs = 0,
      spanY = 100,
      count = 2,
      entry = 'front',
      x = __WEBPACK_IMPORTED_MODULE_6__Constant__["_14" /* STAGE_FRAME_RIGHT */],
      y = __WEBPACK_IMPORTED_MODULE_6__Constant__["_11" /* STAGE_EDGE_TOP */],
      hitPoint = 1,
    } = args;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: __WEBPACK_IMPORTED_MODULE_5__Launcher__["a" /* default */],
      delayMs,
      spanY,
      count,
      entry,
      x,
      y,
      hitPoint,
    });

    return waveConf;
  }

  /**
   * @param {object} args
   * @return {Array<Object>}
   */
  static dispatchBomberSortie(args = {}) {
    const {
      delayMs = 0,
      spanY = 100,
      spanMs = 800,
      count = 2,
      entry = 'front',
      x = __WEBPACK_IMPORTED_MODULE_6__Constant__["_14" /* STAGE_FRAME_RIGHT */],
      y = __WEBPACK_IMPORTED_MODULE_6__Constant__["_11" /* STAGE_EDGE_TOP */],
    } = args;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: __WEBPACK_IMPORTED_MODULE_2__Bomber__["a" /* default */],
      delayMs,
      spanMs,
      count,
      entry,
      x,
      y,
      spanY,
    });

    return waveConf;
  }

  /**
   * @param {object} args
   * @return {Array<Object>}
   */
  static dispatchAmplifierSortie(args = {}) {
    const {
      delayMs = 0,
      spanY = 120,
      spanMs = 800,
      count = 2,
      x = __WEBPACK_IMPORTED_MODULE_6__Constant__["_14" /* STAGE_FRAME_RIGHT */],
      y = 120,
      hitPoint = 3,
    } = args;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: __WEBPACK_IMPORTED_MODULE_3__Amplifier__["a" /* default */],
      delayMs,
      spanMs,
      spanY,
      count,
      x,
      y,
      hitPoint,
    });

    return waveConf;
  }

  /**
   * @param {object} args
   * @return {Array<Object>}
   */
  static dispatchNoiseSortie(args = {}) {
    const {
      spanY = 100,
      spanMs = 800,
      count = 1,
      entry = 'front',
      x = __WEBPACK_IMPORTED_MODULE_6__Constant__["_14" /* STAGE_FRAME_RIGHT */],
      y = __WEBPACK_IMPORTED_MODULE_6__Constant__["_11" /* STAGE_EDGE_TOP */],
      hitPoint = 1,
    } = args;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: __WEBPACK_IMPORTED_MODULE_7__Noise__["a" /* default */],
      spanMs,
      entry,
      x,
      y,
      spanY,
      count,
      hitPoint,
    });

    return waveConf;
  }

  /**
   * generate debris rain.
   * @param {Object} args
   * @return {Array<Object>}
   */
  static dispatchDebrisSortie(args = {}) {
    const {
      number = 10,
      x = __WEBPACK_IMPORTED_MODULE_6__Constant__["_14" /* STAGE_FRAME_RIGHT */],
      y = __WEBPACK_IMPORTED_MODULE_6__Constant__["_18" /* STAGE_MIDDLE_Y */],
      delayMs = 100,
      spanMs = 2000,
      spreadDegree = 10,
      speed = -7,
      hitPoint = 1,
    } = args;

    const result = [];
    for (let i = 1; i <= number; i++) {
      const _y = __WEBPACK_IMPORTED_MODULE_0__MathUtil__["a" /* default */].normalRandom(y, __WEBPACK_IMPORTED_MODULE_6__Constant__["_18" /* STAGE_MIDDLE_Y */] * 0.6);
      const angleDegree = __WEBPACK_IMPORTED_MODULE_0__MathUtil__["a" /* default */].normalRandom(0, spreadDegree);
      const conf = {
        enemyClass: __WEBPACK_IMPORTED_MODULE_1__Debris__["a" /* default */],
        delayMs: delayMs + (i * spanMs / number),
        args: {
          x,
          y: _y,
          speed,
          angleDegree,
          hitPoint,
        },
      };
      result.push(conf);
    }

    return result;
  }

  /**
   *
   * @param {object} args
   * @return {Array}
   */
  static dispatchSortie(args) {
    const enemyClass = args.enemyClass;
    const {
      delayMs = 0,
      spanMs = 0,
      spanX = 0,
      spanY = 0,
      count = 1,
      hitPoint = 1,
      entry = 'front'
    } = args;
    let entryPoint = entry;

    let x = 0;
    let y = 0;

    const random0to3 = Math.floor(Math.random() * 4);

    switch (entry) {
    case 'vertical':
      entryPoint = (random0to3 % 2 === 0) ? 'top' : 'bottom';
      break;

    case 'horizontal':
      entryPoint = (random0to3 % 2 === 0) ? 'front' : 'back';
      break;

    case 'around':
      switch (random0to3) {
      case 0:
        entryPoint = 'top';
        break;
      case 1:
        entryPoint = 'bottom';
        break;
      case 2:
        entryPoint = 'front';
        break;
      case 3:
        entryPoint = 'back';
        break;
      }
      break;

    default:
      break;
    }

    switch (entryPoint) {
    case 'top':
      x = __WEBPACK_IMPORTED_MODULE_0__MathUtil__["a" /* default */].normalRandom(__WEBPACK_IMPORTED_MODULE_6__Constant__["_17" /* STAGE_MIDDLE_X */], 200);
      y = __WEBPACK_IMPORTED_MODULE_6__Constant__["_15" /* STAGE_FRAME_TOP */];
      break;
    case 'bottom':
      x = __WEBPACK_IMPORTED_MODULE_0__MathUtil__["a" /* default */].normalRandom(__WEBPACK_IMPORTED_MODULE_6__Constant__["_17" /* STAGE_MIDDLE_X */], 200);
      y = __WEBPACK_IMPORTED_MODULE_6__Constant__["_12" /* STAGE_FRAME_BOTTOM */];
      break;
    case 'front':
      x = __WEBPACK_IMPORTED_MODULE_6__Constant__["_14" /* STAGE_FRAME_RIGHT */];
      y = __WEBPACK_IMPORTED_MODULE_0__MathUtil__["a" /* default */].normalRandom(__WEBPACK_IMPORTED_MODULE_6__Constant__["_18" /* STAGE_MIDDLE_Y */], 100);
      break;
    case 'back':
      x = __WEBPACK_IMPORTED_MODULE_6__Constant__["_13" /* STAGE_FRAME_LEFT */];
      y = __WEBPACK_IMPORTED_MODULE_0__MathUtil__["a" /* default */].normalRandom(__WEBPACK_IMPORTED_MODULE_6__Constant__["_18" /* STAGE_MIDDLE_Y */], 100);
      break;
    }

    const waveConf = [];

    for (let i = 0; i < count; i++) {
      const conf = {
        enemyClass: enemyClass,
        delayMs: delayMs + spanMs * i,
        args: {
          x: x + spanX * i,
          y: y + spanY * i,
          hitPoint: hitPoint,
        },
      };
      waveConf.push(conf);
    }

    return waveConf;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (WaveUtil);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enemy__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MathUtil__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Hue__ = __webpack_require__(4);






/**
 * Enemy "Debris" class.
 * only move without shot.
 * come from outside of stage, go oppsite and die.
 */
class Debris extends __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.speed = args.speed;
    this.angleDegree = args.angleDegree;
    this.angleRadian = __WEBPACK_IMPORTED_MODULE_1__MathUtil__["a" /* default */].d2r(this.angleDegree);
    this.vX = this.speed * Math.cos(this.angleRadian);
    this.vY = this.speed * Math.sin(this.angleRadian);
    this.deploy();
    this.assignTickListener();
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics
      .beginFill(__WEBPACK_IMPORTED_MODULE_3__Hue__["a" /* default */].getHue())
      .drawRect(0 - __WEBPACK_IMPORTED_MODULE_2__Constant__["x" /* DEBRIS_WIDTH */] / 2, 0 - __WEBPACK_IMPORTED_MODULE_2__Constant__["w" /* DEBRIS_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_2__Constant__["x" /* DEBRIS_WIDTH */], __WEBPACK_IMPORTED_MODULE_2__Constant__["w" /* DEBRIS_HEIGHT */]);

    this.hitArea = this.shape.clone(true);
    this.hitArea.alpha = 0;
    this.text = new createjs.Text(Object(__WEBPACK_IMPORTED_MODULE_2__Constant__["_22" /* dd */])('debris'), 'bold 9px Arial', 'lightgray');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }

      this.shape.rotation += 12;

      if (this.isFrameOut) {
        this.die();
      }
    });
  }

  /**
   * debris shot nothing.
   */
  trigger() {
  }

  move() {
    this.x += this.vX;
    this.y += this.vY;
    this.updatePos();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Debris);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enemy__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MathUtil__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FireWorks__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AirCraft__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Hue__ = __webpack_require__(4);








/**
 * Enemy "Bomber" class.
 * he dies nasty.
 */
class Bomber extends __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.theta = 0;
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = Object(__WEBPACK_IMPORTED_MODULE_1__Constant__["_22" /* dd */])(`bomb:{hp: ${this.hitPoint}`);
    });
  }

  /**
   * firing control kicked every tick
   */
  trigger() {

  }

  /**
   * moving control kicked every tick
   */
  move() {
    const airCraft = __WEBPACK_IMPORTED_MODULE_4__AirCraft__["a" /* default */].getInstance();

    if (!airCraft) {
      return false;
    }

    const angle = __WEBPACK_IMPORTED_MODULE_2__MathUtil__["a" /* default */].getAngleDegree(this.x, this.y, airCraft.x, airCraft.y);
    const sinTheta = 1 - Math.sin(this.theta);
    const speed = __WEBPACK_IMPORTED_MODULE_1__Constant__["t" /* BOMBER_SPEED */];

    this.x -= speed * sinTheta * Math.cos(angle);
    this.y -= speed * sinTheta * Math.sin(angle);
    this.theta += __WEBPACK_IMPORTED_MODULE_2__MathUtil__["a" /* default */].d2r(1);

    this.updatePos();
  }

  /**
   * nasty lastShot
   */
  last() {
    __WEBPACK_IMPORTED_MODULE_3__FireWorks__["a" /* default */].sunFlower(
      this.x,
      this.y,
      __WEBPACK_IMPORTED_MODULE_1__Constant__["p" /* BOMBER_LAST_SHOT_COUNT */],
      __WEBPACK_IMPORTED_MODULE_1__Constant__["q" /* BOMBER_LAST_SHOT_DEPTH */]
    );
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics
      .beginFill(__WEBPACK_IMPORTED_MODULE_5__Hue__["a" /* default */].getHue())
      .drawRect(0 - __WEBPACK_IMPORTED_MODULE_1__Constant__["u" /* BOMBER_WIDTH */] / 2, 0 - __WEBPACK_IMPORTED_MODULE_1__Constant__["o" /* BOMBER_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_1__Constant__["u" /* BOMBER_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__Constant__["o" /* BOMBER_HEIGHT */]);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-__WEBPACK_IMPORTED_MODULE_1__Constant__["u" /* BOMBER_WIDTH */] / 2, -__WEBPACK_IMPORTED_MODULE_1__Constant__["o" /* BOMBER_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_1__Constant__["u" /* BOMBER_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__Constant__["o" /* BOMBER_HEIGHT */]);

    this.text = new createjs.Text(Object(__WEBPACK_IMPORTED_MODULE_1__Constant__["_22" /* dd */])('bomber'), 'bold 9px Arial', 'white');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Bomber);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EnemyBullet__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Amplifier__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Hue__ = __webpack_require__(4);






/**
 * only use for FireWorks.
 * @requires Amplifier
 */
class GunPowder extends __WEBPACK_IMPORTED_MODULE_0__EnemyBullet__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.angle = args.angle;
    this.delayMs = args.delayMs;
    this.speed = __WEBPACK_IMPORTED_MODULE_1__Constant__["H" /* GUNPOWDER_BULLET_SPEED */] * (args.speedCoefficient || 1);
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      this.x -= this.speed * Math.cos(this.angle);
      this.y -= this.speed * Math.sin(this.angle);
      this.updatePos();
      this.getOutHandler();
    });
  }

  deploy() {
    const amplify = __WEBPACK_IMPORTED_MODULE_2__Amplifier__["a" /* default */].getRatio();

    this.shape = new createjs.Shape();
    this.shape.graphics
      .beginFill(__WEBPACK_IMPORTED_MODULE_3__Hue__["a" /* default */].getHue())
      .drawCircle(0, 0, amplify * __WEBPACK_IMPORTED_MODULE_1__Constant__["G" /* GUNPOWDER_BULLET_RADIUS */]);

    this.text.text = '';

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawCircle(0, 0, amplify * __WEBPACK_IMPORTED_MODULE_1__Constant__["G" /* GUNPOWDER_BULLET_RADIUS */]);

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (GunPowder);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enemy__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EnemyBatteryBullet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MathUtil__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AirCraft__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Hue__ = __webpack_require__(4);








/**
 * Enemy "Battery" class.
 * shoot a bullet at you.
 */
class Battery extends __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y
   */
  constructor(args) {
    super(args);
    this.directionX = 1;
    this.directionY = 1;
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = Object(__WEBPACK_IMPORTED_MODULE_3__Constant__["_22" /* dd */])(`battery:{hp: ${this.hitPoint}`);
    });
  }

  /**
   * firing control kicked every tick
   */
  trigger() {
    if (this.clock.getTick() % 120 !== 0) {
      return false;
    }

    const airCraft = __WEBPACK_IMPORTED_MODULE_4__AirCraft__["a" /* default */].getInstance();

    const theta = __WEBPACK_IMPORTED_MODULE_2__MathUtil__["a" /* default */].getAngleDegree(
      this.x,
      this.y,
      airCraft.x,
      airCraft.y
    );
    this.shape.rotation = __WEBPACK_IMPORTED_MODULE_2__MathUtil__["a" /* default */].r2d(theta);

    const shake = __WEBPACK_IMPORTED_MODULE_2__MathUtil__["a" /* default */].d2r(3);
    new __WEBPACK_IMPORTED_MODULE_1__EnemyBatteryBullet__["a" /* default */]({
      x: this.x,
      y: this.y,
      angle: theta,
      stage: this.stage,
    });

    new __WEBPACK_IMPORTED_MODULE_1__EnemyBatteryBullet__["a" /* default */]({
      x: this.x,
      y: this.y,
      angle: theta + shake,
      stage: this.stage,
    });

    new __WEBPACK_IMPORTED_MODULE_1__EnemyBatteryBullet__["a" /* default */]({
      x: this.x,
      y: this.y,
      angle: theta - shake,
      stage: this.stage,
    });
  }

  /**
   * moving control kicked every tick
   */
  move() {
    this.walkAround(__WEBPACK_IMPORTED_MODULE_3__Constant__["_9" /* STAGE_EDGE_LEFT */], __WEBPACK_IMPORTED_MODULE_3__Constant__["_10" /* STAGE_EDGE_RIGHT */], __WEBPACK_IMPORTED_MODULE_3__Constant__["_11" /* STAGE_EDGE_TOP */], __WEBPACK_IMPORTED_MODULE_3__Constant__["_8" /* STAGE_EDGE_BOTTOM */]);
    this.updatePos();
  }

  walkAround(minX, maxX, minY, maxY) {
    if (this.directionX === 1 && this.x >= maxX) {
      this.directionX = -1;
    } else if (this.directionX === -1 && this.x <= minX) {
      this.directionX = 1;
    }
    this.x += this.directionX;

    if (this.directionY === 1 && this.y >= maxY) {
      this.directionY = -1;
    } else if (this.directionY === -1 && this.y <= minY) {
      this.directionY = 1;
    }
    this.y += this.directionY;
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(__WEBPACK_IMPORTED_MODULE_5__Hue__["a" /* default */].getHue()).drawRect(0 - __WEBPACK_IMPORTED_MODULE_3__Constant__["n" /* BATTERY_WIDTH */] / 2, 0 - __WEBPACK_IMPORTED_MODULE_3__Constant__["m" /* BATTERY_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_3__Constant__["n" /* BATTERY_WIDTH */], __WEBPACK_IMPORTED_MODULE_3__Constant__["m" /* BATTERY_HEIGHT */]);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-__WEBPACK_IMPORTED_MODULE_3__Constant__["n" /* BATTERY_WIDTH */] / 2, -__WEBPACK_IMPORTED_MODULE_3__Constant__["m" /* BATTERY_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_3__Constant__["n" /* BATTERY_WIDTH */], __WEBPACK_IMPORTED_MODULE_3__Constant__["m" /* BATTERY_HEIGHT */]);

    this.text = new createjs.Text(Object(__WEBPACK_IMPORTED_MODULE_3__Constant__["_22" /* dd */])('battery'), 'bold 9px Arial', 'black');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Battery);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EnemyBullet__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Amplifier__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Hue__ = __webpack_require__(4);






/**
 * enemy battery shoot it.
 */
class EnemyBatteryBullet extends __WEBPACK_IMPORTED_MODULE_0__EnemyBullet__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.angle = args.angle;
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      this.x -= __WEBPACK_IMPORTED_MODULE_1__Constant__["l" /* BATTERY_BULLET_SPEED */] * Math.cos(this.angle);
      this.y -= __WEBPACK_IMPORTED_MODULE_1__Constant__["l" /* BATTERY_BULLET_SPEED */] * Math.sin(this.angle);
      this.updatePos();
      this.getOutHandler();
    });
  }

  deploy() {
    const amplify = __WEBPACK_IMPORTED_MODULE_2__Amplifier__["a" /* default */].getRatio();

    this.shape = new createjs.Shape();
    this.shape.graphics
      .beginFill(__WEBPACK_IMPORTED_MODULE_3__Hue__["a" /* default */].getHue())
      .drawCircle(0, 0, amplify * __WEBPACK_IMPORTED_MODULE_1__Constant__["k" /* BATTERY_BULLET_RADIUS */]);

    this.text.text = '';

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawCircle(0, 0, amplify * __WEBPACK_IMPORTED_MODULE_1__Constant__["k" /* BATTERY_BULLET_RADIUS */]);

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (EnemyBatteryBullet);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enemy__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sign__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EnemyMarker__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FireWorks__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AirCraft__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MathUtil__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Hue__ = __webpack_require__(4);










/**
 * Enemy "Launcher" class.
 * Once locked you, he launch missiles rapidly.
 */
class Launcher extends __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.deploy();
    this.assignTickListener();
    this.aimTime = Math.floor(Math.random() * 100);
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = Object(__WEBPACK_IMPORTED_MODULE_1__Constant__["_22" /* dd */])(`launcher:{hp: ${this.hitPoint}`);

      const tick = this.clock.getTick();
      const radian = __WEBPACK_IMPORTED_MODULE_6__MathUtil__["a" /* default */].d2r(tick);
      const sineWave = Math.sin(radian);
      this.shape.rotation = 90 * sineWave;
    });

  }

  /**
   * firing control kicked every tick
   */
  trigger() {
    if ((createjs.Ticker.getTicks() + this.aimTime) % __WEBPACK_IMPORTED_MODULE_1__Constant__["P" /* LAUNCHER_DELAY */] !== 0) {
      return;
    }
    const airCraft = __WEBPACK_IMPORTED_MODULE_5__AirCraft__["a" /* default */].getInstance();

    /*
     * lock marker on you.
     */
    const marker = new __WEBPACK_IMPORTED_MODULE_3__EnemyMarker__["a" /* default */]({
      x: this.x,
      y: this.y,
    });
    marker.p.then(() => {

      /*
       * effect sign on you.
       */
      const signX = airCraft.x;
      const signY = airCraft.y;
      const sign = new __WEBPACK_IMPORTED_MODULE_2__Sign__["a" /* default */]({
        x: signX,
        y: signY,
      });
      sign.p.then(() => {
        /*
         * bomb on you.
         */
        __WEBPACK_IMPORTED_MODULE_4__FireWorks__["a" /* default */].conch(
          signX,
          signY,
          __WEBPACK_IMPORTED_MODULE_1__Constant__["r" /* BOMBER_SHOT_COUNT */],
          __WEBPACK_IMPORTED_MODULE_1__Constant__["s" /* BOMBER_SHOT_DEPTH */]
        );
      });
    }).catch(() => {
      console.log('AirCraft already died');
    });
  }

  /**
   * moving control kicked every tick
   */
  move() {
    this.slideIn();
    this.drift();
    this.updatePos();
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(__WEBPACK_IMPORTED_MODULE_7__Hue__["a" /* default */].getHue()).drawRect(0 - __WEBPACK_IMPORTED_MODULE_1__Constant__["R" /* LAUNCHER_WIDTH */] / 2, 0 - __WEBPACK_IMPORTED_MODULE_1__Constant__["Q" /* LAUNCHER_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_1__Constant__["R" /* LAUNCHER_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__Constant__["Q" /* LAUNCHER_HEIGHT */]);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-__WEBPACK_IMPORTED_MODULE_1__Constant__["R" /* LAUNCHER_WIDTH */] / 2, -__WEBPACK_IMPORTED_MODULE_1__Constant__["Q" /* LAUNCHER_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_1__Constant__["R" /* LAUNCHER_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__Constant__["Q" /* LAUNCHER_HEIGHT */]);

    this.text = new createjs.Text(Object(__WEBPACK_IMPORTED_MODULE_1__Constant__["_22" /* dd */])('launcher'), 'bold 9px Arial', 'black');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Launcher);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(1);





/**
 * enemy bullet-storm drop zone.
 */
class Sign {
  /**
   * @param {{stage, x, y}} args
   * @constructor
   */
  constructor(args) {
    this.stage = __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */].getStage();

    this.shape = new createjs.Shape();
    this.shape.x = args.x || 0;
    this.shape.y = args.y || 0;
    this.outline = this.shape.clone();

    this.shape.alpha = 0.1;
    this.shape.graphics
      .setStrokeStyle(1)
      .beginStroke('white')
      .drawCircle(0, 0, __WEBPACK_IMPORTED_MODULE_0__Constant__["_7" /* SIGN_OUTER_RADIUS */]);

    this.outline.alpha = 0.3;
    this.outline.graphics
      .setStrokeStyle(1)
      .beginStroke('white')
      .drawCircle(0, 0, __WEBPACK_IMPORTED_MODULE_0__Constant__["_6" /* SIGN_INNER_RADIUS */]);

    this.stage.addChild(this.shape);
    this.stage.addChild(this.outline);

    this.p = new Promise((resolve, reject) => {
      const completeHandler = () => {
        createjs.Tween.removeTweens(this.shape);
        this.stage.removeChild(this.shape);
        this.stage.removeChild(this.outline);
        this.shape = null;
        this.outline = null;

        resolve();
      };

      window.setTimeout(completeHandler.bind(this), 600);
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Sign);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enemy__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MathUtil__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EnemyMarker__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Jammer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AirCraft__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Hue__ = __webpack_require__(4);









/**
 * Enemy "Noise" class.
 * he use ecm(electrical counter measure).
 * its slows your aircraft.
 */
class Noise extends __WEBPACK_IMPORTED_MODULE_0__Enemy__["a" /* default */] {
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    this.deploy();
    this.assignTickListener();
  }

  assignTickListener() {
    this.clock.onTick(() => {
      if (!this.alive) {
        return false;
      }
      this.text.text = Object(__WEBPACK_IMPORTED_MODULE_1__Constant__["_22" /* dd */])(`noise:{hp: ${this.hitPoint}`);
    });
  }

  /**
   * firing control kicked every tick
   */
  trigger() {
    if (createjs.Ticker.getTicks() % 120 !== 0) {
      return;
    }

    const airCraft = __WEBPACK_IMPORTED_MODULE_5__AirCraft__["a" /* default */].getInstance();

    const theta = __WEBPACK_IMPORTED_MODULE_2__MathUtil__["a" /* default */].getAngleDegree(
      this.x,
      this.y,
      airCraft.x,
      airCraft.y
    );

    /*
     * lock marker on you.
     */
    const marker = new __WEBPACK_IMPORTED_MODULE_3__EnemyMarker__["a" /* default */]({
      x: this.x,
      y: this.y,
      angle: theta,
    });
    marker.p.then(() => {
      /*
       * jammer on you.
       */
      const x = airCraft.x;
      const y = airCraft.y;
      new __WEBPACK_IMPORTED_MODULE_4__Jammer__["a" /* default */](x, y);
    });
  }

  /**
   * moving control kicked every tick
   */
  move() {
    this.slideIn();
    this.drift();
    this.updatePos();
  }

  deploy() {
    this.shape = new createjs.Shape();
    this.shape.graphics
      .beginFill(__WEBPACK_IMPORTED_MODULE_6__Hue__["a" /* default */].getHue()).drawRect(0 - __WEBPACK_IMPORTED_MODULE_1__Constant__["_0" /* NOISE_WIDTH */] / 2, 0 - __WEBPACK_IMPORTED_MODULE_1__Constant__["X" /* NOISE_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_1__Constant__["_0" /* NOISE_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__Constant__["X" /* NOISE_HEIGHT */])
      .endFill();
    this.shape.graphics.setStrokeStyle(1).beginStroke('white')
      .drawRect(0 - __WEBPACK_IMPORTED_MODULE_1__Constant__["Z" /* NOISE_OUTER_WIDTH */] / 2, 0 - __WEBPACK_IMPORTED_MODULE_1__Constant__["Y" /* NOISE_OUTER_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_1__Constant__["Z" /* NOISE_OUTER_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__Constant__["Y" /* NOISE_OUTER_HEIGHT */]);

    this.hitArea = new createjs.Shape();
    this.hitArea.alpha = 0;
    this.hitArea.graphics
      .beginFill('purple')
      .drawRect(-__WEBPACK_IMPORTED_MODULE_1__Constant__["_0" /* NOISE_WIDTH */] / 2, -__WEBPACK_IMPORTED_MODULE_1__Constant__["X" /* NOISE_HEIGHT */] / 2, __WEBPACK_IMPORTED_MODULE_1__Constant__["_0" /* NOISE_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__Constant__["X" /* NOISE_HEIGHT */]);

    this.text = new createjs.Text(Object(__WEBPACK_IMPORTED_MODULE_1__Constant__["_22" /* dd */])('noise'), 'bold 9px Arial', 'black');

    this.updatePos();

    this.stage.addChild(this.shape);
    this.stage.addChild(this.hitArea);
    this.stage.addChild(this.text);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Noise);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWM5NTEyYjRjMTg1MWI5MmU2ZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL0NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL0FpckNyYWZ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9NYXRoVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvSHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9FdmVudHNXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9FbmVteS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvQ2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL0VuZW15QnVsbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9BbXBsaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL0ZyaWVuZEJ1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvU2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL0phbW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvRW5lbXlNYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9HYXRsaW5nQnVsbGV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL0Jsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL0ZpcmVXb3Jrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ViYXJ1LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9HYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9WaXJ0dWFsUGFkLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9HYXRsaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9HdW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9FdmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9Qb2QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL1dhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL1dhdmVVdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9EZWJyaXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL0JvbWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvR3VuUG93ZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9CYXR0ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9FbmVteUJhdHRlcnlCdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL0xhdW5jaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9TaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9Ob2lzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ2xJQTs7QUFNQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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QSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRkFBeUMsUUFBUTs7QUFFakQsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDL1FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtDQUFrQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFPQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsOEVBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQWdDLE1BQU0sY0FBYztBQUNwRCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJGQUF5QyxRQUFROztBQUVqRCxtQkFBbUIsOEVBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQ3BPQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QixxQ0FBcUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNwREE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDakVBOztBQUVBO0FBQ0E7QUFLQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFVQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBb0MsUUFBUTtBQUM1QyxzR0FBb0QsUUFBUTtBQUM1RDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFrQyxRQUFRO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsb0NBQW9DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuTkE7O0FBRUE7QUFDQTtBQU1DO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELE1BQU07QUFDN0QsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3pGQTs7QUFFQTtBQU1DOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBTUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQ3hHQTs7QUFF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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3BKQTs7QUFFQTtBQUNBO0FBSUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsSUFBSSxhQUFhLEtBQUssYUFBYTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzVEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FB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Y0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNqbkJBO0FBQ0E7QUFDQTtBQU1DO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBUUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQWlDLE1BQU0sY0FBYztBQUNyRCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUNBO0FBSUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBU0M7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlHQUFvQyxNQUFNLGNBQWM7QUFDeEQsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7QUFJQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBUUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFxQyxNQUFNLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN4SEE7O0FBS0M7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFPQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUFrQyxNQUFNLGNBQWM7QUFDdEQsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdWJhcnUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVjOTUxMmI0YzE4NTFiOTJlNmY4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY29uc3QgREVCVUcgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBkZCA9ICgodGV4dCkgPT4gREVCVUcgPyB0ZXh0IDogJycpO1xuXG4vKiBjYW52YXMgY29uZmlnICovXG5leHBvcnQgY29uc3QgQ0FOVkFTX0lEID0gJ3N1YmFydSc7XG5cbi8qIGluZGljYXRvciAqL1xuZXhwb3J0IGNvbnN0IElORElDQVRPUl9YID0gNDAwO1xuZXhwb3J0IGNvbnN0IElORElDQVRPUl9ZID0gMDtcbmV4cG9ydCBjb25zdCBJTkRJQ0FUT1JfRk9OVF9TVFlMRSA9ICdib2xkIDlweCBBcmlhbCc7XG5cbi8qIHN0YWdlICovXG5leHBvcnQgY29uc3QgU1RBR0VfV0lEVEggPSA3MDA7XG5leHBvcnQgY29uc3QgU1RBR0VfTUlERExFX1ggPSBTVEFHRV9XSURUSCAvIDI7XG5leHBvcnQgY29uc3QgU1RBR0VfSEVJR0hUID0gNTAwO1xuZXhwb3J0IGNvbnN0IFNUQUdFX01JRERMRV9ZID0gU1RBR0VfSEVJR0hUIC8gMjtcbmV4cG9ydCBjb25zdCBTVEFHRV9QQURESU5HX1ggPSAyMDtcbmV4cG9ydCBjb25zdCBTVEFHRV9QQURESU5HX1kgPSAyMDtcbmV4cG9ydCBjb25zdCBTVEFHRV9NQVJHSU5fWCA9IDUwO1xuZXhwb3J0IGNvbnN0IFNUQUdFX01BUkdJTl9ZID0gNTA7XG5leHBvcnQgY29uc3QgU1RBR0VfRURHRV9MRUZUID0gMCArIFNUQUdFX1BBRERJTkdfWDtcbmV4cG9ydCBjb25zdCBTVEFHRV9FREdFX1JJR0hUID0gU1RBR0VfV0lEVEggLSBTVEFHRV9QQURESU5HX1g7XG5leHBvcnQgY29uc3QgU1RBR0VfRURHRV9UT1AgPSAwICsgU1RBR0VfUEFERElOR19ZO1xuZXhwb3J0IGNvbnN0IFNUQUdFX0VER0VfQk9UVE9NID0gU1RBR0VfSEVJR0hUIC0gU1RBR0VfUEFERElOR19ZO1xuZXhwb3J0IGNvbnN0IFNUQUdFX0ZSQU1FX0xFRlQgPSAwIC0gU1RBR0VfTUFSR0lOX1g7XG5leHBvcnQgY29uc3QgU1RBR0VfRlJBTUVfUklHSFQgPSBTVEFHRV9XSURUSCArIFNUQUdFX01BUkdJTl9YO1xuZXhwb3J0IGNvbnN0IFNUQUdFX0ZSQU1FX1RPUCA9IDAgLSBTVEFHRV9NQVJHSU5fWTtcbmV4cG9ydCBjb25zdCBTVEFHRV9GUkFNRV9CT1RUT00gPSBTVEFHRV9IRUlHSFQgKyBTVEFHRV9NQVJHSU5fWTtcblxuLyogd2F2ZSAqL1xuZXhwb3J0IGNvbnN0IFdBVkVfVElNRV9MSU1JVCA9IDUgKiAxMDAwO1xuZXhwb3J0IGNvbnN0IEVORU1ZX1ZBUklBVElPTiA9IDQ7XG5leHBvcnQgY29uc3QgTkVYVF9HQU1FX1RJTUVPVVQgPSA0MDAwO1xuXG4vKiBUSUVSICovXG5leHBvcnQgY29uc3QgTUFYX1RJRVIgPSAzO1xuZXhwb3J0IGNvbnN0IFRVVE9SSUFMID0gMDtcbmV4cG9ydCBjb25zdCBFQVNZID0gMTtcbmV4cG9ydCBjb25zdCBIQVJEID0gMjtcbmV4cG9ydCBjb25zdCBIVVNIID0gMztcblxuLyogYWlyY3JhZnQgKi9cbmV4cG9ydCBjb25zdCBBSVJDUkFGVF9JTklUSUFMX1ggPSA1MDtcbmV4cG9ydCBjb25zdCBBSVJDUkFGVF9JTklUSUFMX1kgPSAyNTA7XG5leHBvcnQgY29uc3QgQUlSQ1JBRlRfUkFESVVTID0gMTA7XG5leHBvcnQgY29uc3QgQUlSQ1JBRlRfSElUX0FSRUEgPSAyO1xuZXhwb3J0IGNvbnN0IEFJUkNSQUZUX1ZFTE9DSVRZID0gMztcbmV4cG9ydCBjb25zdCBBSVJDUkFGVF9GSVJFX0RFTEFZID0gMTA7XG5cbi8qIHBvZCAqL1xuZXhwb3J0IGNvbnN0IFBPRF9DQUJMRV9MRU5HVEggPSA0MDtcbmV4cG9ydCBjb25zdCBQT0RfRklSRV9ERUxBWSA9IDE1O1xuZXhwb3J0IGNvbnN0IFBPRF9XSURUSCA9IDEwO1xuZXhwb3J0IGNvbnN0IFBPRF9IRUlHSFQgPSAxMDtcblxuLyogc2NvcmUgKi9cbmV4cG9ydCBjb25zdCBTQ09SRSA9IHtcbiAgQkFUVEVSWTogMTAsXG4gIExBVU5DSEVSOiAxMCxcbiAgQk9NQkVSOiAxMCxcbiAgREVCUklTOiA1LFxuICBOT0lTRTogMjAsXG4gIEFNUExJRklFUjogMjAsXG59O1xuXG4vKiBnYXRsaW5nICovXG5leHBvcnQgY29uc3QgR0FUTElOR19DT09MX1RJTUUgPSA0MDA7XG5leHBvcnQgY29uc3QgR0FUTElOR19CVUxMRVRfV0lEVEggPSA1O1xuZXhwb3J0IGNvbnN0IEdBVExJTkdfQlVMTEVUX0hFSUdIVCA9IDI7XG5leHBvcnQgY29uc3QgR0FUTElOR19CVUxMRVRfU1BFRUQgPSA4O1xuZXhwb3J0IGNvbnN0IEdBVExJTkdfQlVMTEVUX1NUT1BQSU5HX1BPV0VSID0gMTtcblxuXG4vKiBndW5wb3dkZXIgKi9cbmV4cG9ydCBjb25zdCBHVU5QT1dERVJfQlVMTEVUX1JBRElVUyA9IDg7XG5leHBvcnQgY29uc3QgR1VOUE9XREVSX0JVTExFVF9TUEVFRCA9IDI7XG5cbi8qIGVuZW15ICovXG5leHBvcnQgY29uc3QgRFJJRlRfU1BFRURfTEVGVCA9IDAuNTtcblxuLyogYmF0dGVyeSAqL1xuZXhwb3J0IGNvbnN0IEJBVFRFUllfV0lEVEggPSAzMDtcbmV4cG9ydCBjb25zdCBCQVRURVJZX0hFSUdIVCA9IDMwO1xuZXhwb3J0IGNvbnN0IEJBVFRFUllfQlVMTEVUX1JBRElVUyA9IDEwO1xuZXhwb3J0IGNvbnN0IEJBVFRFUllfQlVMTEVUX1NQRUVEID0gNDtcblxuXG4vKiBkZWJyaXMgKi9cbmV4cG9ydCBjb25zdCBERUJSSVNfV0lEVEggPSAyMDtcbmV4cG9ydCBjb25zdCBERUJSSVNfSEVJR0hUID0gMjA7XG5cbi8qIGFtcGxpZmllciAqL1xuZXhwb3J0IGNvbnN0IEFNUExJRklFUl9DT0VGRklDSUVOVCA9IDEuNDtcbmV4cG9ydCBjb25zdCBBTVBMSUZJRVJfV0lEVEggPSAyMDtcbmV4cG9ydCBjb25zdCBBTVBMSUZJRVJfSEVJR0hUID0gMjA7XG5leHBvcnQgY29uc3QgQU1QTElGSUVSX1NQSU5fVVBfVElNRSA9IDQwMDA7XG5cbi8qIGJvbWJlciAqL1xuZXhwb3J0IGNvbnN0IEJPTUJFUl9XSURUSCA9IDIwO1xuZXhwb3J0IGNvbnN0IEJPTUJFUl9IRUlHSFQgPSAyMDtcbmV4cG9ydCBjb25zdCBCT01CRVJfU1BFRUQgPSAxO1xuZXhwb3J0IGNvbnN0IEJPTUJFUl9MQVNUX1NIT1RfQ09VTlQgPSAxNTtcbmV4cG9ydCBjb25zdCBCT01CRVJfTEFTVF9TSE9UX0RFUFRIID0gMjtcblxuLyogbWFya2VyICovXG5leHBvcnQgY29uc3QgTUFSS0VSX1NQRUVEID0gNjtcbmV4cG9ydCBjb25zdCBNQVJLRVJfU0hBUEVfUkFESVVTID0gMzA7XG5leHBvcnQgY29uc3QgTUFSS0VSX0hJVEFSRUFfUkFESVVTID0gMTA7XG5cbi8qIHNpZ24gKi9cbmV4cG9ydCBjb25zdCBTSUdOX0lOTkVSX1JBRElVUyA9IDU7XG5leHBvcnQgY29uc3QgU0lHTl9PVVRFUl9SQURJVVMgPSAxMDtcblxuLyogbGF1bmNoZXIgKi9cbmV4cG9ydCBjb25zdCBMQVVOQ0hFUl9XSURUSCA9IDIwO1xuZXhwb3J0IGNvbnN0IExBVU5DSEVSX0hFSUdIVCA9IDIwO1xuZXhwb3J0IGNvbnN0IEJPTUJFUl9TSE9UX0NPVU5UID0gMztcbmV4cG9ydCBjb25zdCBCT01CRVJfU0hPVF9ERVBUSCA9IDU7XG5leHBvcnQgY29uc3QgTEFVTkNIRVJfREVMQVkgPSAxODA7XG5cbi8qIG5vaXNlICovXG5leHBvcnQgY29uc3QgTk9JU0VfV0lEVEggPSAyMDtcbmV4cG9ydCBjb25zdCBOT0lTRV9IRUlHSFQgPSAyMDtcbmV4cG9ydCBjb25zdCBOT0lTRV9PVVRFUl9XSURUSCA9IDI0O1xuZXhwb3J0IGNvbnN0IE5PSVNFX09VVEVSX0hFSUdIVCA9IDI0O1xuXG4vKiBqYW1tZXIgKi9cbmV4cG9ydCBjb25zdCBKQU1NRVJfUkFESVVTID0gMTAwO1xuZXhwb3J0IGNvbnN0IEpBTU1FUl9MSUZFX1RJTUUgPSA2MDAwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2xhc3MvQ29uc3RhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge1xuICBDQU5WQVNfSUQsXG4gIFNUQUdFX0hFSUdIVCxcbiAgU1RBR0VfV0lEVEhcbn0gZnJvbSAnLi9Db25zdGFudCc7XG5cbmNsYXNzIENhbnZhcyB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHNpbmdsZXRvblxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiBDYW52YXMuaW5zdGFuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gQ2FudmFzLmluc3RhbmNlO1xuICAgIH1cbiAgICBDYW52YXMuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgQ2FudmFzLnN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKENBTlZBU19JRCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgYmFja2dyb3VuZC5ncmFwaGljc1xuICAgICAgLmJlZ2luRmlsbCgnIzE1MTUxNScpXG4gICAgICAuZHJhd1JlY3QoMCwgMCwgU1RBR0VfV0lEVEgsIFNUQUdFX0hFSUdIVCk7XG4gICAgQ2FudmFzLnN0YWdlLmFkZENoaWxkKGJhY2tncm91bmQpO1xuICB9XG5cbiAgc3RhdGljIGdldFN0YWdlKCkge1xuICAgIHJldHVybiBDYW52YXMuc3RhZ2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2xhc3MvQ2FudmFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFZpcnR1YWxQYWQgZnJvbSAnLi9WaXJ0dWFsUGFkLmpzJztcbmltcG9ydCBHYXRsaW5nIGZyb20gJy4vR2F0bGluZyc7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9FbmVteSc7XG5pbXBvcnQgRW5lbXlCdWxsZXQgZnJvbSAnLi9FbmVteUJ1bGxldCc7XG5pbXBvcnQgQmxvdyBmcm9tICcuL0Jsb3cnO1xuaW1wb3J0IENsb2NrIGZyb20gJy4vQ2xvY2snO1xuXG5pbXBvcnQge1xuICBBSVJDUkFGVF9JTklUSUFMX1gsXG4gIEFJUkNSQUZUX0lOSVRJQUxfWSxcbiAgQUlSQ1JBRlRfUkFESVVTLFxuICBBSVJDUkFGVF9ISVRfQVJFQSxcbiAgQUlSQ1JBRlRfVkVMT0NJVFksXG4gIFNUQUdFX0VER0VfTEVGVCxcbiAgU1RBR0VfRURHRV9SSUdIVCxcbiAgU1RBR0VfRURHRV9UT1AsXG4gIFNUQUdFX0VER0VfQk9UVE9NLFxuICBORVhUX0dBTUVfVElNRU9VVCxcbiAgZGQsXG59IGZyb20gJy4vQ29uc3RhbnQnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcyc7XG5pbXBvcnQgSmFtbWVyIGZyb20gJy4vSmFtbWVyJztcbmltcG9ydCBFdmVudHNXcmFwcGVyIGZyb20gJy4vRXZlbnRzV3JhcHBlcic7XG5pbXBvcnQgUG9kIGZyb20gJy4vUG9kJztcblxuLyoqXG4gKiBZb3VyIEFpckNyYWZ0IENsYXNzLlxuICovXG5jbGFzcyBBaXJDcmFmdCB7XG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95IHx8IDA7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94IHx8IDA7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgYWlyQ3JhZnQncyBzcGVlZC5cbiAgICogaWYgc25hcmVkLCBzbG93cyBkb3duIHRvIGhhbGYuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCB2ZWxvY2l0eSgpIHtcbiAgICBjb25zdCBjb2VmZmljaWVudCA9ICghdGhpcy5zbmFyZWQpID8gMSA6IDAuNTtcbiAgICByZXR1cm4gQUlSQ1JBRlRfVkVMT0NJVFkgKiBjb2VmZmljaWVudDtcbiAgfVxuXG4gIGdldCBkaWFnb25hbFZlbG9jaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnZlbG9jaXR5IC8gTWF0aC5zcXJ0KDIpO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiBBaXJDcmFmdC5pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIHBhcmFtZXRlcnMsIHNldCBsaXN0ZW5lcnNcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBBaXJDcmFmdC5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICB0aGlzLnN0YWdlID0gQ2FudmFzLmdldFN0YWdlKCk7XG4gICAgdGhpcy52cCA9IG5ldyBWaXJ0dWFsUGFkKCk7XG4gICAgdGhpcy5jbG9jayA9IG5ldyBDbG9jayh0aGlzKTtcblxuICAgIHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIHRoaXMueCA9IEFJUkNSQUZUX0lOSVRJQUxfWDtcbiAgICB0aGlzLnkgPSBBSVJDUkFGVF9JTklUSUFMX1k7XG4gICAgdGhpcy5zbmFyZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9ndW4gPSBuZXcgR2F0bGluZyh7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgfSk7XG5cbiAgICBuZXcgUG9kKHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICB9KTtcblxuICAgIHRoaXMuYXNzaWduVGlja0xpc3RlbmVyKCk7XG4gICAgdGhpcy5kZXBsb3koKTtcbiAgfVxuXG4gIHN0YXRpYyBpc0FsaXZlKCkge1xuICAgIGlmICghQWlyQ3JhZnQuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIEFpckNyYWZ0Lmluc3RhbmNlLmFsaXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBsaXN0ZW5lcnNcbiAgICoga2lja3MgZXZlcnkgdGlja1xuICAgKi9cbiAgYXNzaWduVGlja0xpc3RlbmVyKCkge1xuICAgIHRoaXMuY2xvY2sub25UaWNrKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5hbGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgKiBtb3ZpbmcgY29udHJvbFxuICAgICAgICovXG4gICAgICBsZXQgdlggPSAwO1xuICAgICAgbGV0IHZZID0gMDtcbiAgICAgIGlmICh0aGlzLnZwLmtleURvd25fUmlnaHQgJiYgIXRoaXMudnAua2V5RG93bl9MZWZ0KSB7XG4gICAgICAgIHZYID0gdGhpcy52cC5rZXlEb3duT25seV9SaWdodCA/IHRoaXMudmVsb2NpdHkgOiB0aGlzLmRpYWdvbmFsVmVsb2NpdHk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52cC5rZXlEb3duX0xlZnQgJiYgIXRoaXMudnAua2V5RG93bl9SaWdodCkge1xuICAgICAgICB2WCA9IC0xICogKHRoaXMudnAua2V5RG93bk9ubHlfTGVmdCA/IHRoaXMudmVsb2NpdHkgOiB0aGlzLmRpYWdvbmFsVmVsb2NpdHkpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudnAua2V5RG93bl9Eb3duICYmICF0aGlzLnZwLmtleURvd25fVXApIHtcbiAgICAgICAgdlkgPSB0aGlzLnZwLmtleURvd25Pbmx5X0Rvd24gPyB0aGlzLnZlbG9jaXR5IDogdGhpcy5kaWFnb25hbFZlbG9jaXR5O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudnAua2V5RG93bl9VcCAmJiAhdGhpcy52cC5rZXlEb3duX0Rvd24pIHtcbiAgICAgICAgdlkgPSAtMSAqICh0aGlzLnZwLmtleURvd25Pbmx5X1VwID8gdGhpcy52ZWxvY2l0eSA6IHRoaXMuZGlhZ29uYWxWZWxvY2l0eSk7XG4gICAgICB9XG4gICAgICB0aGlzLnggKz0gdlg7XG4gICAgICB0aGlzLnkgKz0gdlk7XG4gICAgICBpZiAodGhpcy54IDwgU1RBR0VfRURHRV9MRUZUKSB0aGlzLnggPSBTVEFHRV9FREdFX0xFRlQ7XG4gICAgICBpZiAodGhpcy54ID4gU1RBR0VfRURHRV9SSUdIVCkgdGhpcy54ID0gU1RBR0VfRURHRV9SSUdIVDtcbiAgICAgIGlmICh0aGlzLnkgPCBTVEFHRV9FREdFX1RPUCkgdGhpcy55ID0gU1RBR0VfRURHRV9UT1A7XG4gICAgICBpZiAodGhpcy55ID4gU1RBR0VfRURHRV9CT1RUT00pIHRoaXMueSA9IFNUQUdFX0VER0VfQk9UVE9NO1xuICAgICAgdGhpcy51cGRhdGVQb3MoKTtcblxuICAgICAgdGhpcy50ZXh0LnRleHQgPSBkZChgYWlyQ3JhZnQ6IHske01hdGguZmxvb3IodGhpcy54KX0sJHtNYXRoLnJvdW5kKHRoaXMueSl9fWApO1xuICAgIH0pO1xuXG4gICAgLypcbiAgICAgKiBmaXJlIGNvbnRyb2xcbiAgICAgKi9cbiAgICB0aGlzLmNsb2NrLm9uVGljaygoKSA9PiB7XG4gICAgICB0aGlzLl9ndW4udHJpZ2dlcih0aGlzLngsIHRoaXMueSk7XG4gICAgfSk7XG5cbiAgICAvKlxuICAgICAqIGNvbGxpc2lvbiBjaGVjayB3aXRoIGVuZW1pZXMgYW5kIGV2ZXJ5IGtpbmQgb2YgZW5lbXlCdWxsZXRzXG4gICAgICovXG4gICAgdGhpcy5jbG9jay5vblRpY2soKCkgPT4ge1xuICAgICAgdGhpcy5jb2xsaXNpb25DaGVjayhFbmVteS5pbnN0YW5jZXMsIHRoaXMuYmVTaG90KTtcblxuICAgICAgdGhpcy5jb2xsaXNpb25DaGVjayhFbmVteUJ1bGxldC5pbnN0YW5jZXMsIHRoaXMuYmVTaG90KTtcblxuICAgICAgdGhpcy5zbmFyZUNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgYWlyQ3JhZnRzIGluIE5vaXNlJ3MgamFtbWVyIGVmZmVjdC5cbiAgICovXG4gIHNuYXJlQ2hlY2soKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jb2xsaXNpb25DaGVjayhKYW1tZXIuaW5zdGFuY2VzKTtcbiAgICBjb25zdCBpbkphbW1lciA9IHJlc3VsdC50ZXN0O1xuICAgIHRoaXMuc25hcmVkID0gaW5KYW1tZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICovXG4gIHVwZGF0ZVBvcyh4ID0gdGhpcy54LCB5ID0gdGhpcy55KSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zaGFwZS54ID0geDtcbiAgICB0aGlzLnNoYXBlLnkgPSB5O1xuICAgIHRoaXMuaGl0QXJlYS54ID0geDtcbiAgICB0aGlzLmhpdEFyZWEueSA9IHk7XG4gICAgdGhpcy50ZXh0LnggPSB4O1xuICAgIHRoaXMudGV4dC55ID0geTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb2xsaXNpb24gdGVzdCB3aXRoIHlvdXIgYWlyY3JhZnQuXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gdGFyZ2V0QXJyYXkgLSBPYmplY3QgbXVzdCBoYXZlICNzaGFwZSB0byBoaXRUZXN0XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb258bnVsbH0gZm4gY2FsbGJhY2sgd2hlbiBldmVyeSBoaXRUZXN0IHRoYXQgcmV0dXJucyB0cnVlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IHJlc3VsdFxuICAgKi9cbiAgY29sbGlzaW9uQ2hlY2sodGFyZ2V0QXJyYXksIGZuID0gbnVsbCkge1xuICAgIGlmICghdGhpcy5hbGl2ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIGFsbDogdHJ1ZSxcbiAgICAgIHRlc3Q6IGZhbHNlLFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhcmdldEFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAvKlxuICAgICAgICogcmVsYXRpdmUgYXhpcyBmcm9tIHRhcmdldCB0byBoaXRBcmVhKGFpcmNyYWZ0KS1vcmlnaW4gKHplcm8tcG9pbnQpXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldEFycmF5W2pdO1xuXG4gICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRhcmdldC5hbGl2ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaGl0QXJlYSA9PT0gbnVsbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9zID0gdGFyZ2V0LmhpdEFyZWEubG9jYWxUb0xvY2FsKDAsIDAsIHRoaXMuaGl0QXJlYSk7XG4gICAgICBjb25zdCBoaXRUZXN0ID0gdGFyZ2V0LmhpdEFyZWEuaGl0VGVzdChwb3MueCwgcG9zLnkpO1xuICAgICAgaWYgKGhpdFRlc3QpIHtcbiAgICAgICAgcmVzdWx0LnRlc3QgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZm4uY2FsbCh0aGlzLCBwb3MueCwgcG9zLnksIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQuYWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBraWNrZWQgd2hlbiB5b3VyIGFpcmNyYWZ0IGhhdmUgYmVlbiBzaG90XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICovXG4gIGJlU2hvdCh4ID0gMCwgeSA9IDAsIHRhcmdldCkge1xuICAgIGNvbnNvbGUubG9nKGAke3RhcmdldC5jb25zdHJ1Y3Rvci5uYW1lfSBraWxsZWQgeW91LmApO1xuICAgIG5ldyBCbG93KHtcbiAgICAgIHg6IHRoaXMueCAtIHgsXG4gICAgICB5OiB0aGlzLnkgLSB5LFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgfSk7XG5cbiAgICB0aGlzLmRpZSgpO1xuXG4gICAgLypcbiAgICAgKiB3YWl0IGZvciBwcmV2ZW50IFwiYnVsbGV0IGFmdGVyIGdhbWUgb3ZlclwiXG4gICAgICogb25jZSBnYW1lT3ZlciBlbWl0dGVkLCBhbGwgYW5pbWF0aW9ucyBzdG9wcyBhbmQgYWxsIGhhbmRsZXJzIGRpZS5cbiAgICAgKi9cbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBFdmVudHNXcmFwcGVyLmVtaXQoJ2dhbWVPdmVyJyk7XG4gICAgfSwgTkVYVF9HQU1FX1RJTUVPVVQpO1xuICB9XG5cbiAgZGllKCkge1xuICAgIGlmICh0aGlzLmNsb2NrKSB7XG4gICAgICB0aGlzLmNsb2NrLmFsbE9mZigpO1xuICAgICAgdGhpcy5jbG9jayA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhZ2UpIHtcbiAgICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5zaGFwZSk7XG4gICAgICB0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuaGl0QXJlYSk7XG4gICAgICB0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMudGV4dCk7XG4gICAgICB0aGlzLnN0YWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnNoYXBlID0gbnVsbDtcbiAgICB0aGlzLnRleHQgPSBudWxsO1xuICAgIHRoaXMuaGl0QXJlYSA9IG51bGw7XG4gICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgZGVwbG95KCkge1xuICAgIC8qXG4gICAgICogYWlyY3JhZnRcbiAgICAgKi9cbiAgICB0aGlzLnNoYXBlID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgdGhpcy5zaGFwZS5ncmFwaGljc1xuICAgICAgLnNldFN0cm9rZVN0eWxlKDIpXG4gICAgICAuYmVnaW5TdHJva2UoJ2xpZ2h0Z3JheScpXG4gICAgICAuZHJhd0NpcmNsZSgwLCAwLCBBSVJDUkFGVF9SQURJVVMpO1xuXG4gICAgLypcbiAgICAgKiBoaXQgYXJlYVxuICAgICAqL1xuICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuaGl0QXJlYS5ncmFwaGljcy5iZWdpbkZpbGwoJyMxMjk1YjgnKS5kcmF3Q2lyY2xlKDAsIDAsIEFJUkNSQUZUX0hJVF9BUkVBKTtcblxuICAgIC8qXG4gICAgICogdGV4dCBsYWJlbFxuICAgICAqL1xuICAgIHRoaXMudGV4dCA9IG5ldyBjcmVhdGVqcy5UZXh0KGRkKCdhaXJDcmFmdCcpLCAnYm9sZCA5cHggQXJpYWwnLCAnd2hpdGUnKTtcblxuICAgIC8qXG4gICAgICogc3RhZ2luZ1xuICAgICAqL1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zaGFwZSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmhpdEFyZWEpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy50ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBaXJDcmFmdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0FpckNyYWZ0LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuXG5jb25zdCBQSSA9IE1hdGguUEk7XG5cbmNsYXNzIE1hdGhVdGlsIHtcbiAgc3RhdGljIGQycihkZWdyZWUpIHtcbiAgICBjb25zdCByYWRpYW4gPSAoZGVncmVlIC8gMTgwKSAqIFBJO1xuICAgIHJldHVybiByYWRpYW47XG4gIH1cblxuICBzdGF0aWMgcjJkKHJhZGlhbikge1xuICAgIGNvbnN0IGRlZ3JlZSA9IChyYWRpYW4gLyBQSSkgKiAxODA7XG4gICAgcmV0dXJuIGRlZ3JlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgYW5nbGUoZGVncmVlKSBmcm9tIG9ic2VydmVyIHBvcyB0byB0YXJnZXQgcG9zLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZnJvbVhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZyb21ZXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b1hcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRvWVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZXRhXG4gICAqL1xuICBzdGF0aWMgZ2V0QW5nbGVEZWdyZWUoZnJvbVgsIGZyb21ZLCB0b1gsIHRvWSkge1xuICAgIGNvbnN0IGR4ID0gdG9YIC0gZnJvbVg7XG4gICAgY29uc3QgZHkgPSB0b1kgLSBmcm9tWTtcbiAgICBjb25zdCBncmFkaWVudCA9IGR5IC8gZHg7XG5cbiAgICAvKlxuICAgICAqIHRhcmdldCBmbGllcyBiZWhpbmQgb2Ygb2JzZXJ2ZXI/IHRoZW4gZmxpcC5cbiAgICAgKi9cbiAgICBjb25zdCBmbGlwID0gZHggPiAwID8gTWF0aC5QSSA6IDA7XG4gICAgY29uc3QgdGhldGEgPSBNYXRoLmF0YW4oZ3JhZGllbnQpICsgZmxpcDtcbiAgICByZXR1cm4gdGhldGE7XG4gIH1cblxuICAvKipcbiAgICogQFNFRSBodHRwczovL3FpaXRhLmNvbS9zaWZ1ZS9pdGVtcy9lMWRiZmU2NzFmNDI4ODZlNDdkNlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gbSBtZWFuOiDOvFxuICAgKiBAcGFyYW0ge051bWJlcn0gcyB2YXJpYW5jZTogz4NeMlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgbm9ybWFsUmFuZG9tKG0sIHMpIHtcbiAgICBjb25zdCBhID0gMSAtIE1hdGgucmFuZG9tKCk7XG4gICAgY29uc3QgYiA9IDEgLSBNYXRoLnJhbmRvbSgpO1xuICAgIGNvbnN0IGMgPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhhKSk7XG4gICAgaWYgKDAuNSAtIE1hdGgucmFuZG9tKCkgPiAwKSB7XG4gICAgICByZXR1cm4gYyAqIE1hdGguc2luKE1hdGguUEkgKiAyICogYikgKiBzICsgbTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGMgKiBNYXRoLmNvcyhNYXRoLlBJICogMiAqIGIpICogcyArIG07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGhVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2xhc3MvTWF0aFV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJztcblxuY2xhc3MgSHVlIHtcbiAgLyoqXG4gICAqIEBzaW5nbGV0b25cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAodHlwZW9mIEh1ZS5pbnN0YW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBIdWUuaW5zdGFuY2U7XG4gICAgfVxuICAgIEh1ZS5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICB0aGlzLmNsb2NrID0gbmV3IENsb2NrKHRoaXMpO1xuICB9XG5cbiAgZ2V0SHVlKCkge1xuICAgIGNvbnN0IHRpY2sgPSB0aGlzLmNsb2NrLmdldFRpY2soKTtcbiAgICBjb25zdCBodWUgPSB0aWNrICUgMzYwIC0gMTgwO1xuICAgIGNvbnN0IGNvbG9yID0gYGhzbCgke2h1ZX0sMTAwJSw3MCUpYDtcblxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRIdWUoKSB7XG4gICAgcmV0dXJuIEh1ZS5pbnN0YW5jZS5nZXRIdWUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9IdWUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJ0V2ZW50cyc7XG5cbi8qKlxuICogbm9kZWpzIFwiRXZlbnRzXCIgd3JhcHBlclxuICogQGNsYXNzXG4gKi9cbmNsYXNzIEV2ZW50c1dyYXBwZXIgZXh0ZW5kcyBFdmVudHMge1xuICAvKipcbiAgICogQHNpbmdsZXRvblxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0eXBlb2YgRXZlbnRzV3JhcHBlci5pbnN0YW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBFdmVudHNXcmFwcGVyLmluc3RhbmNlO1xuICAgIH1cbiAgICBzdXBlcigpO1xuICAgIEV2ZW50c1dyYXBwZXIuaW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHNob3J0aGFuZCBvZiAjZW1pdFxuICAgKiBAcGFyYW0ge29iamVjdH0gYXJnc1xuICAgKi9cbiAgc3RhdGljIGVtaXQoLi4uYXJncykge1xuICAgIEV2ZW50c1dyYXBwZXIuaW5zdGFuY2UuZW1pdCguLi5hcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzaG9ydGhhbmQgb2YgI29uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzXG4gICAqL1xuICBzdGF0aWMgb24oLi4uYXJncykge1xuICAgIEV2ZW50c1dyYXBwZXIuaW5zdGFuY2Uub24oLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogc2hvcnRoYW5kIG9mICNvbmNlXG4gICAqIGRpZmYgd2l0aCAjb24gLi4ud2hlbiAjb25jZSB0cmlnZ2VyZWQsIGxpc3RlbmVycyBhcmUgcmVtb3ZlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3NcbiAgICovXG4gIHN0YXRpYyBvbmNlKC4uLmFyZ3MpIHtcbiAgICBFdmVudHNXcmFwcGVyLmluc3RhbmNlLm9uY2UoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogc2hvcnRoYW5kIG9mICNyZW1vdmVBbGxMaXN0ZW5lcnNcbiAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3NcbiAgICovXG4gIHN0YXRpYyByZW1vdmVBbGxMaXN0ZW5lcnMoLi4uYXJncykge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgRXZlbnRzV3JhcHBlci5pbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRzV3JhcHBlci5pbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMoLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzV3JhcHBlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0V2ZW50c1dyYXBwZXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IEZyaWVuZEJ1bGxldCBmcm9tICcuL0ZyaWVuZEJ1bGxldCc7XG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9DbG9jayc7XG5pbXBvcnQgQmxvdyBmcm9tICcuL0Jsb3cnO1xuaW1wb3J0IEV2ZW50c1dyYXBwZXIgZnJvbSAnLi9FdmVudHNXcmFwcGVyJztcbmltcG9ydCB7XG4gIFNUQUdFX0ZSQU1FX0xFRlQsXG4gIFNUQUdFX0ZSQU1FX1JJR0hULFxuICBTVEFHRV9GUkFNRV9UT1AsXG4gIFNUQUdFX0ZSQU1FX0JPVFRPTSxcbiAgU1RBR0VfRURHRV9MRUZULFxuICBTVEFHRV9FREdFX1JJR0hULFxuICBTVEFHRV9FREdFX1RPUCxcbiAgU1RBR0VfRURHRV9CT1RUT00sXG4gIFNDT1JFLFxuICBEUklGVF9TUEVFRF9MRUZULFxufSBmcm9tICcuL0NvbnN0YW50JztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUnO1xuXG4vKipcbiAqIEVuZW15IGJhc2UgY2xhc3MuXG4gKi9cbmNsYXNzIEVuZW15IHtcbiAgZ2V0IGhpdFBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9oaXRQb2ludDtcbiAgfVxuXG4gIHNldCBoaXRQb2ludCh2YWx1ZSkge1xuICAgIHRoaXMuX2hpdFBvaW50ID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2hpdFBvaW50IDw9IDApIHtcbiAgICAgIHRoaXMuZGVzdHJveWVkKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBpbnN0YW5jZXMoKSB7XG4gICAgcmV0dXJuIEVuZW15Ll9pbnN0YW5jZXMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgc2V0IGluc3RhbmNlcyhpbnN0YW5jZXMpIHtcbiAgICBFbmVteS5faW5zdGFuY2VzID0gaW5zdGFuY2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIHgsIHlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICBFbmVteS5pZCA9IEVuZW15LmlkIHx8IDA7XG4gICAgdGhpcy5pZCA9IEVuZW15LmlkO1xuICAgIEVuZW15LmlkKys7XG5cbiAgICB0aGlzLmFkZEluc3RhbmNlKCk7XG4gICAgY29uc3QgZW5lbXlUeXBlID0gKHRoaXMuY29uc3RydWN0b3IubmFtZS50b1N0cmluZygpKS50b1VwcGVyQ2FzZSgpO1xuICAgIHRoaXMuc2NvcmUgPSBTQ09SRVtlbmVteVR5cGVdO1xuXG4gICAgdGhpcy54ID0gYXJncy54O1xuICAgIHRoaXMueSA9IGFyZ3MueTtcbiAgICB0aGlzLmhpdFBvaW50ID0gYXJncy5oaXRQb2ludDtcbiAgICB0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNsaWRlZEluID0gZmFsc2U7XG4gICAgdGhpcy5zdGFnZSA9IENhbnZhcy5nZXRTdGFnZSgpO1xuICAgIHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2sodGhpcyk7XG4gICAgdGhpcy5zaGFwZSA9IG51bGw7XG4gICAgdGhpcy5oaXRBcmVhID0gbnVsbDtcbiAgICB0aGlzLnRleHQgPSBudWxsO1xuICAgIHRoaXMucCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBFdmVudHNXcmFwcGVyLm9uY2UoYGVuZW15RGVzdHJveWVkXyR7dGhpcy5pZH1gLCAoKSA9PiB7XG4gICAgICAgIEV2ZW50c1dyYXBwZXIucmVtb3ZlQWxsTGlzdGVuZXJzKGBlbmVteURlc3Ryb3llZF8ke3RoaXMuaWR9YCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYXNzaWduVGlja0xpc3RlbmVyKCk7XG4gIH1cblxuICBhZGRJbnN0YW5jZSgpIHtcbiAgICBFbmVteS5pbnN0YW5jZXMgPSBFbmVteS5pbnN0YW5jZXMgfHwgW107XG4gICAgRW5lbXkuaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gIH1cblxuICB1cGRhdGVQb3MoeCA9IHRoaXMueCwgeSA9IHRoaXMueSkge1xuICAgIGlmICghdGhpcy5hbGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hhcGUueCA9IHg7XG4gICAgdGhpcy5zaGFwZS55ID0geTtcbiAgICB0aGlzLmhpdEFyZWEueCA9IHg7XG4gICAgdGhpcy5oaXRBcmVhLnkgPSB5O1xuICAgIHRoaXMudGV4dC54ID0geDtcbiAgICB0aGlzLnRleHQueSA9IHk7XG4gIH1cblxuICBfYXNzaWduVGlja0xpc3RlbmVyKCkge1xuICAgIHRoaXMuY2xvY2sub25UaWNrKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5hbGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgIHRoaXMubW92ZSgpO1xuXG4gICAgICB0aGlzLmNvbGxpc2lvbkNoZWNrKEZyaWVuZEJ1bGxldC5pbnN0YW5jZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbGxpc2lvbiB0ZXN0IHdpdGggeW91ciBidWxsZXRzLlxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHRhcmdldEFycmF5IC0gT2JqZWN0IG11c3QgaGF2ZSAjc2hhcGUgdG8gaGl0VGVzdFxuICAgKi9cbiAgY29sbGlzaW9uQ2hlY2sodGFyZ2V0QXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRBcnJheVtpXTtcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMuaGl0QXJlYS5sb2NhbFRvTG9jYWwoMCwgMCwgdGFyZ2V0LnNoYXBlKTtcbiAgICAgIGNvbnN0IGhpdFRlc3QgPSB0aGlzLmhpdEFyZWEuaGl0VGVzdChwb3MueCwgcG9zLnkpO1xuICAgICAgaWYgKGhpdFRlc3QpIHtcbiAgICAgICAgdGhpcy5iZVNob3Qoe3g6IHBvcy54LCB5OiBwb3MueSwgYnVsbGV0OiB0YXJnZXR9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICoga2lja2VkIGJ5IGNvbGxpc2lvbiBjaGVjay5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3NcbiAgICovXG4gIGJlU2hvdChhcmdzKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeCA9IGFyZ3MueDtcbiAgICBjb25zdCB5ID0gYXJncy55O1xuXG4gICAgbmV3IEJsb3coe1xuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXG4gICAgICB4OiB0aGlzLnggLSB4LFxuICAgICAgeTogdGhpcy55IC0geSxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5iZUhpdChhcmdzKTtcbiAgICBhcmdzLmJ1bGxldC5kaWUoKTtcbiAgfVxuXG4gIHRyaWdnZXIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbXBsZW1lbnQgYWJzdHJhY3QgI3RyaWdnZXIuJyk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW1wbGVtZW50IGFic3RyYWN0ICNtb3ZlLicpO1xuICB9XG5cbiAgYmVIaXQoYXJncykge1xuICAgIGNvbnN0IGJ1bGxldCA9IGFyZ3MuYnVsbGV0O1xuXG4gICAgdGhpcy5oaXRQb2ludCAtPSBidWxsZXQuc3RvcHBpbmdQb3dlcjtcbiAgfVxuXG4gIGRlc3Ryb3llZCgpIHtcbiAgICB0aGlzLmxhc3QoKTtcblxuICAgIG5ldyBCbG93KHtcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICByYWRpdXM6IDEwMCxcbiAgICB9KTtcblxuICAgIFNjb3JlLmFkZFBvaW50KHRoaXMuc2NvcmUpO1xuXG4gICAgdGhpcy5kaWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBraWNrZWQganVzdCBhZnRlciAjZGVzdHJveWVkLCBiZWZvcmUgI2RpZS5cbiAgICovXG4gIGxhc3QoKSB7XG4gICAgLypcbiAgICAgKiBkbyBub3RoaW5nIGluIGdlbmVyYWwuXG4gICAgICovXG4gIH1cblxuICBkaWUoKSB7XG5cbiAgICBpZiAodGhpcy5jbG9jaykge1xuICAgICAgdGhpcy5jbG9jay5hbGxPZmYoKTtcbiAgICAgIHRoaXMuY2xvY2sgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YWdlKSB7XG4gICAgICB0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuc2hhcGUpO1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmhpdEFyZWEpO1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnRleHQpO1xuICAgICAgdGhpcy5zdGFnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zaGFwZSA9IG51bGw7XG4gICAgdGhpcy50ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmhpdEFyZWEgPSBudWxsO1xuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcblxuICAgIEV2ZW50c1dyYXBwZXIuZW1pdChgZW5lbXlEZXN0cm95ZWRfJHt0aGlzLmlkfWApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFbmVteS5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVuZW15ID0gRW5lbXkuaW5zdGFuY2VzW2ldO1xuICAgICAgaWYgKGVuZW15ID09PSB0aGlzKSB7XG4gICAgICAgIEVuZW15Lmluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmbHVzaCgpIHtcbiAgICB3aGlsZSAoRW5lbXkuaW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGlfYiA9IDA7IGlfYiA8IEVuZW15Lmluc3RhbmNlcy5sZW5ndGg7IGlfYisrKSB7XG4gICAgICAgIGNvbnN0IGVuZW15ID0gRW5lbXkuaW5zdGFuY2VzW2lfYl07XG4gICAgICAgIGVuZW15LmRpZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNsaWRlSW4oKSB7XG4gICAgaWYodGhpcy5zbGlkZWRJbil7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGlmICghdGhpcy5pc0VkZ2VPdXQpIHtcbiAgICAgIHRoaXMuc2xpZGVkSW4gPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnggPD0gU1RBR0VfRURHRV9MRUZUKSB7XG4gICAgICB0aGlzLnggKz0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMueCA+PSBTVEFHRV9FREdFX1JJR0hUKSB7XG4gICAgICB0aGlzLnggLT0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMueSA8PSBTVEFHRV9FREdFX1RPUCkge1xuICAgICAgdGhpcy55ICs9IDE7XG4gICAgfVxuICAgIGlmICh0aGlzLnkgPj0gU1RBR0VfRURHRV9CT1RUT00pIHtcbiAgICAgIHRoaXMueSAtPSAxO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZHJpZnQoKXtcbiAgICB0aGlzLnggLT0gRFJJRlRfU1BFRURfTEVGVDtcbiAgfVxuXG4gIGdldCBpc0VkZ2VPdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMueCA8PSBTVEFHRV9FREdFX0xFRlQgfHxcbiAgICAgIHRoaXMueCA+PSBTVEFHRV9FREdFX1JJR0hUIHx8XG4gICAgICB0aGlzLnkgPD0gU1RBR0VfRURHRV9UT1AgfHxcbiAgICAgIHRoaXMueSA+PSBTVEFHRV9FREdFX0JPVFRPTTtcbiAgfVxuXG4gIGdldCBpc0ZyYW1lT3V0KCkge1xuICAgIHJldHVybiB0aGlzLnggPD0gU1RBR0VfRlJBTUVfTEVGVCB8fFxuICAgICAgdGhpcy54ID49IFNUQUdFX0ZSQU1FX1JJR0hUIHx8XG4gICAgICB0aGlzLnkgPD0gU1RBR0VfRlJBTUVfVE9QIHx8XG4gICAgICB0aGlzLnkgPj0gU1RBR0VfRlJBTUVfQk9UVE9NO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2xhc3MvRW5lbXkuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDbG9jayB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIGdldFRpY2soKSB7XG4gICAgY29uc3QgdGljayA9IGNyZWF0ZWpzLlRpY2tlci5nZXRUaWNrcygpO1xuICAgIHJldHVybiB0aWNrO1xuICB9XG5cbiAgc3RhdGljIGdldFRpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0VGljaygpO1xuICB9XG5cbiAgb25UaWNrKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmbiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlciA9IGZuLmJpbmQodGhpcy5pbnN0YW5jZSk7XG4gICAgY3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGVyKTtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmxlbmd0aDtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBhbGxPZmYoKSB7XG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBjcmVhdGVqcy5UaWNrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGljaycsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgIHRoaXMuaGFuZGxlcnMgPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb2NrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2xhc3MvQ2xvY2suanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IEJ1bGxldCBmcm9tICcuL0J1bGxldCc7XG5pbXBvcnQgQWlyQ3JhZnQgZnJvbSAnLi9BaXJDcmFmdCc7XG5cbi8qKlxuICogZW5lbXkgYnVsbGV0IGJhc2UgY2xhc3MuXG4gKi9cbmNsYXNzIEVuZW15QnVsbGV0IGV4dGVuZHMgQnVsbGV0IHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIHgsIHksIHN0YWdlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG5cbiAgICBFbmVteUJ1bGxldC5pZCA9IEVuZW15QnVsbGV0LmlkIHx8IDA7XG4gICAgdGhpcy5pZCA9IEVuZW15QnVsbGV0LmlkO1xuICAgIEVuZW15QnVsbGV0LmlkKys7XG5cbiAgICBFbmVteUJ1bGxldC5pbnN0YW5jZXMgPSBFbmVteUJ1bGxldC5pbnN0YW5jZXM7XG5cbiAgICBFbmVteUJ1bGxldC5pbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaW5zdGFuY2VzKCkge1xuICAgIHJldHVybiBFbmVteUJ1bGxldC5faW5zdGFuY2VzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIHNldCBpbnN0YW5jZXMoaW5zdGFuY2UpIHtcbiAgICBFbmVteUJ1bGxldC5faW5zdGFuY2VzID0gaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgZmx1c2goKSB7XG5cbiAgICB3aGlsZSAoRW5lbXlCdWxsZXQuaW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGlfYiA9IDA7IGlfYiA8IEVuZW15QnVsbGV0Lmluc3RhbmNlcy5sZW5ndGg7IGlfYisrKSB7XG4gICAgICAgIGNvbnN0IGVuZW15QnVsbGV0ID0gRW5lbXlCdWxsZXQuaW5zdGFuY2VzW2lfYl07XG4gICAgICAgIGVuZW15QnVsbGV0LmRpZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUZyb21JbnN0YW5jZXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFbmVteUJ1bGxldC5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVuZW15QnVsbGV0ID0gRW5lbXlCdWxsZXQuaW5zdGFuY2VzW2ldO1xuICAgICAgaWYgKGVuZW15QnVsbGV0LmlkID09PSB0aGlzLmlkKSB7XG4gICAgICAgIEVuZW15QnVsbGV0Lmluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmVteUJ1bGxldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0VuZW15QnVsbGV0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15JztcbmltcG9ydCB7XG4gIEFNUExJRklFUl9DT0VGRklDSUVOVCxcbiAgQU1QTElGSUVSX0hFSUdIVCxcbiAgQU1QTElGSUVSX1NQSU5fVVBfVElNRSxcbiAgQU1QTElGSUVSX1dJRFRILFxuICBkZCxcbn0gZnJvbSAnLi9Db25zdGFudCc7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi9NYXRoVXRpbCc7XG5pbXBvcnQgSHVlIGZyb20gJy4vSHVlJztcbmltcG9ydCBFdmVudHNXcmFwcGVyIGZyb20gJy4vRXZlbnRzV3JhcHBlcic7XG5cbi8qKlxuICogRW5lbXkgXCJBbXBsaWZpZXJcIiBjbGFzcy5cbiAqIEhlIGV4cGFuZCBldmVyeSBlbmVteSBidWxsZXQgaGl0QXJlYS5cbiAqL1xuY2xhc3MgQW1wbGlmaWVyIGV4dGVuZHMgRW5lbXkge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0geCwgeSwgc3RhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLmVucmFnZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5kZXBsb3koKTtcbiAgICB0aGlzLmFzc2lnblRpY2tMaXN0ZW5lcigpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmFnZSgpO1xuICAgIH0sIEFNUExJRklFUl9TUElOX1VQX1RJTUUpO1xuICB9XG5cbiAgcmFnZSgpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5lbnJhZ2UgPSB0cnVlO1xuXG4gICAgdGhpcy5jbG9jay5vblRpY2soKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRpY2sxID0gdGhpcy5jbG9jay5nZXRUaWNrKCkgKiA0O1xuICAgICAgY29uc3QgdGljazIgPSB0aWNrMSArIDYwO1xuICAgICAgY29uc3QgdGljazMgPSB0aWNrMiArIDYwO1xuICAgICAgY29uc3QgYWdlMSA9IE1hdGguYWJzKE1hdGguc2luKE1hdGhVdGlsLmQycih0aWNrMSkpKTtcbiAgICAgIGNvbnN0IGFnZTIgPSBNYXRoLmFicyhNYXRoLnNpbihNYXRoVXRpbC5kMnIodGljazIpKSk7XG4gICAgICBjb25zdCBhZ2UzID0gTWF0aC5hYnMoTWF0aC5zaW4oTWF0aFV0aWwuZDJyKHRpY2szKSkpO1xuICAgICAgdGhpcy5yaXBwbGUxLmFscGhhID0gMSAtIChhZ2UxICogMC44KTtcbiAgICAgIHRoaXMucmlwcGxlMS5zY2FsZVggPSBhZ2UxO1xuICAgICAgdGhpcy5yaXBwbGUxLnNjYWxlWSA9IGFnZTE7XG4gICAgICB0aGlzLnJpcHBsZTIuYWxwaGEgPSAxIC0gKGFnZTIgKiAwLjgpO1xuICAgICAgdGhpcy5yaXBwbGUyLnNjYWxlWCA9IGFnZTI7XG4gICAgICB0aGlzLnJpcHBsZTIuc2NhbGVZID0gYWdlMjtcbiAgICAgIHRoaXMucmlwcGxlMy5hbHBoYSA9IDEgLSAoYWdlMyAqIDAuOCk7XG4gICAgICB0aGlzLnJpcHBsZTMuc2NhbGVYID0gYWdlMztcbiAgICAgIHRoaXMucmlwcGxlMy5zY2FsZVkgPSBhZ2UzO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldEFtcGxpZmllcnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFbmVteS5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVuZW15ID0gRW5lbXkuaW5zdGFuY2VzW2ldO1xuICAgICAgaWYgKGVuZW15IGluc3RhbmNlb2YgQW1wbGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGVuZW15KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiBidWxsZXQgZXhwYW5kIHJhdGlvLlxuICAgKiByZXR1cm5zIDIgdG8gdGhlIHBvd2VyIG9mIG51bWJlciBvZiBBbXBsaWZpZXIgZW5yYWdlZC5cbiAgICogKGlmIEFtcGxpZmllciBlbnJhZ2VkIGRvZXMgbm90IGV4aXN0LCByZXR1cm4gMSlcbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSBNYXRoLnBvd2VyKDIsbik7XG4gICAqL1xuICBzdGF0aWMgZ2V0UmF0aW8oKSB7XG4gICAgbGV0IGVucmFnZWQgPSAwO1xuICAgIGNvbnN0IGFtcGxpZmllcnMgPSBBbXBsaWZpZXIuZ2V0QW1wbGlmaWVycygpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbXBsaWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbmVteSA9IGFtcGxpZmllcnNbaV07XG4gICAgICBpZiAoIShlbmVteSBpbnN0YW5jZW9mIEFtcGxpZmllcikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmVteS5lbnJhZ2UgPT09IHRydWUpIHtcbiAgICAgICAgZW5yYWdlZCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFtcGxpZnkgPSBNYXRoLnBvdyhBTVBMSUZJRVJfQ09FRkZJQ0lFTlQsIGVucmFnZWQpO1xuXG4gICAgcmV0dXJuIGFtcGxpZnk7XG4gIH1cblxuICBhc3NpZ25UaWNrTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jbG9jay5vblRpY2soKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGV4dC50ZXh0ID0gZGQoYGFtcDp7aHA6ICR7dGhpcy5oaXRQb2ludH1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmaXJpbmcgY29udHJvbCBraWNrZWQgZXZlcnkgdGlja1xuICAgKi9cbiAgdHJpZ2dlcigpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBtb3ZpbmcgY29udHJvbCBraWNrZWQgZXZlcnkgdGlja1xuICAgKi9cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnNsaWRlSW4oKTtcbiAgICB0aGlzLmRyaWZ0KCk7XG4gICAgdGhpcy51cGRhdGVQb3MoKTtcbiAgfVxuXG4gIHVwZGF0ZVBvcyh4ID0gdGhpcy54LCB5ID0gdGhpcy55KSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaGFwZS54ID0geDtcbiAgICB0aGlzLnNoYXBlLnkgPSB5O1xuICAgIHRoaXMuaGl0QXJlYS54ID0geDtcbiAgICB0aGlzLmhpdEFyZWEueSA9IHk7XG4gICAgdGhpcy50ZXh0LnggPSB4O1xuICAgIHRoaXMudGV4dC55ID0geTtcbiAgICB0aGlzLnJpcHBsZTEueCA9IHg7XG4gICAgdGhpcy5yaXBwbGUxLnkgPSB5O1xuICAgIHRoaXMucmlwcGxlMi54ID0geDtcbiAgICB0aGlzLnJpcHBsZTIueSA9IHk7XG4gICAgdGhpcy5yaXBwbGUzLnggPSB4O1xuICAgIHRoaXMucmlwcGxlMy55ID0geTtcbiAgfVxuXG4gIGRlcGxveSgpIHtcbiAgICB0aGlzLnNoYXBlID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgdGhpcy5zaGFwZS5ncmFwaGljcy5iZWdpbkZpbGwoSHVlLmdldEh1ZSgpKVxuICAgICAgLmRyYXdSZWN0KFxuICAgICAgICAtQU1QTElGSUVSX1dJRFRIIC8gMixcbiAgICAgICAgLUFNUExJRklFUl9IRUlHSFQgLyAyLFxuICAgICAgICBBTVBMSUZJRVJfV0lEVEgsXG4gICAgICAgIEFNUExJRklFUl9IRUlHSFQpO1xuXG4gICAgdGhpcy5oaXRBcmVhID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgdGhpcy5oaXRBcmVhLmFscGhhID0gMDtcbiAgICB0aGlzLmhpdEFyZWEuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwoJ3B1cnBsZScpXG4gICAgICAuZHJhd1JlY3QoXG4gICAgICAgIC1BTVBMSUZJRVJfV0lEVEggLyAyLFxuICAgICAgICAtQU1QTElGSUVSX0hFSUdIVCAvIDIsXG4gICAgICAgIEFNUExJRklFUl9XSURUSCxcbiAgICAgICAgQU1QTElGSUVSX0hFSUdIVCk7XG5cbiAgICB0aGlzLnJpcHBsZTEgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICB0aGlzLnJpcHBsZTEuYWxwaGEgPSAwO1xuICAgIHRoaXMucmlwcGxlMS5ncmFwaGljc1xuICAgICAgLnNldFN0cm9rZVN0eWxlKDIpXG4gICAgICAuYmVnaW5TdHJva2UoJ3doaXRlJylcbiAgICAgIC5kcmF3Q2lyY2xlKDAsIDAsIDQwKTtcblxuICAgIHRoaXMucmlwcGxlMiA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMucmlwcGxlMi5hbHBoYSA9IDA7XG4gICAgdGhpcy5yaXBwbGUyLmdyYXBoaWNzXG4gICAgICAuc2V0U3Ryb2tlU3R5bGUoMilcbiAgICAgIC5iZWdpblN0cm9rZSgnd2hpdGUnKVxuICAgICAgLmRyYXdDaXJjbGUoMCwgMCwgNDApO1xuXG4gICAgdGhpcy5yaXBwbGUzID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgdGhpcy5yaXBwbGUzLmFscGhhID0gMDtcbiAgICB0aGlzLnJpcHBsZTMuZ3JhcGhpY3NcbiAgICAgIC5zZXRTdHJva2VTdHlsZSgyKVxuICAgICAgLmJlZ2luU3Ryb2tlKCd3aGl0ZScpXG4gICAgICAuZHJhd0NpcmNsZSgwLCAwLCA0MCk7XG5cbiAgICB0aGlzLnRleHQgPSBuZXcgY3JlYXRlanMuVGV4dChkZCgnYW1wJyksICdib2xkIDlweCBBcmlhbCcsICd3aGl0ZScpO1xuXG4gICAgdGhpcy51cGRhdGVQb3MoKTtcblxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zaGFwZSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmhpdEFyZWEpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy50ZXh0KTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMucmlwcGxlMSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnJpcHBsZTIpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5yaXBwbGUzKTtcbiAgfVxuXG4gIGRpZSgpIHtcbiAgICBpZiAodGhpcy5jbG9jaykge1xuICAgICAgdGhpcy5jbG9jay5hbGxPZmYoKTtcbiAgICAgIHRoaXMuY2xvY2sgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YWdlKSB7XG4gICAgICB0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuc2hhcGUpO1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmhpdEFyZWEpO1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnRleHQpO1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnJpcHBsZTEpO1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnJpcHBsZTIpO1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnJpcHBsZTMpO1xuICAgICAgdGhpcy5zdGFnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zaGFwZSA9IG51bGw7XG4gICAgdGhpcy50ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmhpdEFyZWEgPSBudWxsO1xuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcblxuICAgIEV2ZW50c1dyYXBwZXIuZW1pdChgZW5lbXlEZXN0cm95ZWRfJHt0aGlzLmlkfWApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFbmVteS5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVuZW15ID0gRW5lbXkuaW5zdGFuY2VzW2ldO1xuICAgICAgaWYgKGVuZW15ID09PSB0aGlzKSB7XG4gICAgICAgIEVuZW15Lmluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbXBsaWZpZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9BbXBsaWZpZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IEJ1bGxldCBmcm9tICcuL0J1bGxldCc7XG5cbi8qKlxuICogZnJpZW5kIGJ1bGxldCBiYXNlIGNsYXNzLlxuICovXG5jbGFzcyBGcmllbmRCdWxsZXQgZXh0ZW5kcyBCdWxsZXQge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0geCwgeVxuICAgKi9cbiAgY29uc3RydWN0b3IoYXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuXG4gICAgRnJpZW5kQnVsbGV0LmlkID0gRnJpZW5kQnVsbGV0LmlkIHx8IDA7XG4gICAgdGhpcy5pZCA9IEZyaWVuZEJ1bGxldC5pZDtcbiAgICBGcmllbmRCdWxsZXQuaWQrKztcblxuICAgIEZyaWVuZEJ1bGxldC5pbnN0YW5jZXMgPSBGcmllbmRCdWxsZXQuaW5zdGFuY2VzO1xuXG4gICAgRnJpZW5kQnVsbGV0Lmluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGdldCBpbnN0YW5jZXMoKSB7XG4gICAgcmV0dXJuIEZyaWVuZEJ1bGxldC5faW5zdGFuY2VzIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIHNldCBpbnN0YW5jZXMoX2luc3RhbmNlcykge1xuICAgIEZyaWVuZEJ1bGxldC5faW5zdGFuY2VzID0gX2luc3RhbmNlcztcbiAgfVxuXG4gIHN0YXRpYyBmbHVzaCgpIHtcblxuICAgIHdoaWxlIChGcmllbmRCdWxsZXQuaW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGlfYiA9IDA7IGlfYiA8IEZyaWVuZEJ1bGxldC5pbnN0YW5jZXMubGVuZ3RoOyBpX2IrKykge1xuICAgICAgICBjb25zdCBmcmllbmRCdWxsZXQgPSBGcmllbmRCdWxsZXQuaW5zdGFuY2VzW2lfYl07XG4gICAgICAgIGZyaWVuZEJ1bGxldC5kaWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVGcm9tSW5zdGFuY2VzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRnJpZW5kQnVsbGV0Lmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZnJpZW5kQnVsbGV0ID0gRnJpZW5kQnVsbGV0Lmluc3RhbmNlc1tpXTtcbiAgICAgIGlmIChmcmllbmRCdWxsZXQuaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgRnJpZW5kQnVsbGV0Lmluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmllbmRCdWxsZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9GcmllbmRCdWxsZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuXG5jbGFzcyBTY29yZSB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHNpbmdsZXRvblxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiBTY29yZS5pbnN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBTY29yZS5pbnN0YW5jZTtcbiAgICB9XG4gICAgU2NvcmUuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIGdldCBwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnQ7XG4gIH1cblxuICBzZXQgcG9pbnQocCkge1xuICAgIHRoaXMuX3BvaW50ID0gcDtcbiAgICB0aGlzLmhpZ2hTY29yZSA9IHA7XG4gIH1cblxuICBnZXQgaGlnaFNjb3JlKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWdoU2NvcmUgfHwgMDtcbiAgfVxuXG4gIHNldCBoaWdoU2NvcmUoc2NvcmUpIHtcbiAgICByZXR1cm4gdGhpcy5faGlnaFNjb3JlID0gKHRoaXMuaGlnaFNjb3JlIDwgc2NvcmUpID8gc2NvcmUgOiB0aGlzLmhpZ2hTY29yZTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgICB0aGlzLl9oaWdoU2NvcmUgPSAwO1xuICB9XG5cbiAgc3RhdGljIGdldCBwb2ludCgpIHtcbiAgICByZXR1cm4gU2NvcmUuaW5zdGFuY2UucG9pbnQgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyBzZXQgcG9pbnQocCkge1xuICAgIFNjb3JlLmluc3RhbmNlLnBvaW50ID0gcDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaGlnaFNjb3JlKCkge1xuICAgIHJldHVybiBTY29yZS5pbnN0YW5jZS5oaWdoU2NvcmUgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyByZXNldCgpIHtcbiAgICBTY29yZS5pbnN0YW5jZS5yZXNldCgpO1xuICB9XG5cbiAgc3RhdGljIGFkZFBvaW50KHApIHtcbiAgICBjb25zdCBwb2ludCA9IHBhcnNlSW50KHApO1xuICAgIGlmIChpc05hTihwb2ludCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnBvaW50ID0gdGhpcy5wb2ludCB8fCAwO1xuICAgIHRoaXMucG9pbnQgKz0gcG9pbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9TY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9DbG9jayc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCB7XG4gIGRkLFxuICBKQU1NRVJfTElGRV9USU1FLFxuICBKQU1NRVJfUkFESVVTXG59IGZyb20gJy4vQ29uc3RhbnQnO1xuaW1wb3J0IEFpckNyYWZ0IGZyb20gJy4vQWlyQ3JhZnQnO1xuXG5jbGFzcyBKYW1tZXIge1xuICBzdGF0aWMgZ2V0IGluc3RhbmNlcygpIHtcbiAgICByZXR1cm4gSmFtbWVyLl9pbnN0YW5jZXMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgc2V0IGluc3RhbmNlcyhpbnN0YW5jZXMpIHtcbiAgICBKYW1tZXIuX2luc3RhbmNlcyA9IGluc3RhbmNlcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICBpZiAoIUFpckNyYWZ0LmlzQWxpdmUoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgSmFtbWVyLmluc3RhbmNlcyA9IEphbW1lci5pbnN0YW5jZXMgfHwgW107XG4gICAgSmFtbWVyLmluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgIHRoaXMuc3RhZ2UgPSBDYW52YXMuZ2V0U3RhZ2UoKTtcbiAgICB0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yYWRpdXMgPSBKQU1NRVJfUkFESVVTO1xuICAgIHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2sodGhpcyk7XG4gICAgdGhpcy5kZXBsb3koKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRpZSgpO1xuICAgIH0sIEpBTU1FUl9MSUZFX1RJTUUpO1xuXG4gICAgdGhpcy5jbG9jayA9IG5ldyBDbG9jayh0aGlzKTtcbiAgICB0aGlzLmNsb2NrLm9uVGljaygoKSA9PiB7XG4gICAgICBpZiAoQWlyQ3JhZnQuaXNBbGl2ZSgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQb3MoeCA9IHRoaXMueCwgeSA9IHRoaXMueSkge1xuICAgIHRoaXMuc2hhcGUueCA9IHg7XG4gICAgdGhpcy5zaGFwZS55ID0geTtcbiAgICB0aGlzLmhpdEFyZWEueCA9IHg7XG4gICAgdGhpcy5oaXRBcmVhLnkgPSB5O1xuICAgIHRoaXMudGV4dC54ID0geDtcbiAgICB0aGlzLnRleHQueSA9IHk7XG4gIH1cblxuICBkZXBsb3koKSB7XG4gICAgdGhpcy5zaGFwZSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuc2hhcGUuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwoJ2RhcmtncmF5JylcbiAgICAgIC5kcmF3Q2lyY2xlKDAsIDAsIEpBTU1FUl9SQURJVVMpO1xuICAgIHRoaXMuc2hhcGUuYWxwaGEgPSAwLjM7XG5cbiAgICB0aGlzLmhpdEFyZWEgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICB0aGlzLmhpdEFyZWEuYWxwaGEgPSAwO1xuICAgIHRoaXMuaGl0QXJlYS5ncmFwaGljc1xuICAgICAgLmJlZ2luRmlsbCgncHVycGxlJylcbiAgICAgIC5kcmF3Q2lyY2xlKDAsIDAsIEpBTU1FUl9SQURJVVMpO1xuXG4gICAgdGhpcy50ZXh0ID0gbmV3IGNyZWF0ZWpzLlRleHQoZGQoJ2phbW1lcicpLCAnYm9sZCA5cHggQXJpYWwnLCAnYmxhY2snKTtcblxuICAgIHRoaXMudXBkYXRlUG9zKCk7XG5cbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuc2hhcGUpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5oaXRBcmVhKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMudGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZmx1c2goKSB7XG4gICAgd2hpbGUgKEphbW1lci5pbnN0YW5jZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgamFtbWVyID0gSmFtbWVyLmluc3RhbmNlc1swXTtcbiAgICAgIGphbW1lci5kaWUoKTtcbiAgICAgIEphbW1lci5pbnN0YW5jZXMuc2hpZnQoKTtcbiAgICAgIGNvbnNvbGUubG9nKEphbW1lci5pbnN0YW5jZXMubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBkaWUoKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnNoYXBlKTtcbiAgICB0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuaGl0QXJlYSk7XG4gICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnRleHQpO1xuICAgIHRoaXMuY2xvY2suYWxsT2ZmKCk7XG4gICAgdGhpcy5jbG9jayA9IG51bGw7XG4gICAgdGhpcy5zaGFwZSA9IG51bGw7XG4gICAgdGhpcy50ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmhpdEFyZWEgPSBudWxsO1xuICAgIHRoaXMuc3RhZ2UgPSBudWxsO1xuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSmFtbWVyLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgamFtbWVyID0gSmFtbWVyLmluc3RhbmNlc1tpXTtcbiAgICAgIGlmIChqYW1tZXIgPT09IHRoaXMpIHtcbiAgICAgICAgSmFtbWVyLmluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKYW1tZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9KYW1tZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEV2ZW50c1dyYXBwZXIgZnJvbSAnLi9FdmVudHNXcmFwcGVyJztcbmltcG9ydCBBaXJDcmFmdCBmcm9tICcuL0FpckNyYWZ0JztcbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJztcbmltcG9ydCBNYXRoVXRpbCBmcm9tICcuL01hdGhVdGlsJztcbmltcG9ydCB7XG4gIGRkLFxuICBNQVJLRVJfSElUQVJFQV9SQURJVVMsXG4gIE1BUktFUl9TSEFQRV9SQURJVVMsXG4gIE1BUktFUl9TUEVFRCxcbiAgU1RBR0VfRlJBTUVfQk9UVE9NLFxuICBTVEFHRV9GUkFNRV9MRUZULFxuICBTVEFHRV9GUkFNRV9SSUdIVCxcbiAgU1RBR0VfRlJBTUVfVE9QXG59IGZyb20gJy4vQ29uc3RhbnQnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcyc7XG5cbi8qKlxuICogZW5lbXkncyB0YXJnZXQgbWFya2VyLlxuICogc3Bhd25zIGFuZCBydXNoIHRvIHlvdS5cbiAqIHJlYWNoZWQsIHRoZW4sIHJlc29sdmUgcHJvbWlzZSBhcyAjcC5cbiAqL1xuY2xhc3MgRW5lbXlNYXJrZXIge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0geCwgeVxuICAgKi9cbiAgY29uc3RydWN0b3IoYXJncykge1xuXG4gICAgdGhpcy5pZCA9IEVuZW15TWFya2VyLmdldElkKCk7XG5cbiAgICBFbmVteU1hcmtlci5pbnN0YW5jZXMucHVzaCh0aGlzKTtcblxuICAgIHRoaXMueCA9IGFyZ3MueDtcbiAgICB0aGlzLnkgPSBhcmdzLnk7XG4gICAgdGhpcy5hbGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdGFnZSA9IENhbnZhcy5nZXRTdGFnZSgpO1xuICAgIHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2sodGhpcyk7XG4gICAgdGhpcy5wID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgRXZlbnRzV3JhcHBlci5vbmNlKGByZWFjaGVkXyR7dGhpcy5pZH1gLCAoKSA9PiB7XG4gICAgICAgIEV2ZW50c1dyYXBwZXIucmVtb3ZlQWxsTGlzdGVuZXJzKGByZWFjaGVkXyR7dGhpcy5pZH1gKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5kZXBsb3koKTtcbiAgICB0aGlzLmFzc2lnblRpY2tMaXN0ZW5lcigpO1xuICB9XG5cbiAgc3RhdGljIGdldElkKCkge1xuICAgIEVuZW15TWFya2VyLl9pZCA9IEVuZW15TWFya2VyLl9pZCB8fCAwO1xuICAgIGNvbnN0IGlkID0gRW5lbXlNYXJrZXIuX2lkO1xuICAgIEVuZW15TWFya2VyLl9pZCsrO1xuXG4gICAgcmV0dXJuIGlkO1xuICB9XG5cblxuICBzdGF0aWMgZ2V0IGluc3RhbmNlcygpIHtcbiAgICByZXR1cm4gRW5lbXlNYXJrZXIuX2luc3RhbmNlcyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBzZXQgaW5zdGFuY2VzKF9pbnN0YW5jZXMpIHtcbiAgICBFbmVteU1hcmtlci5faW5zdGFuY2VzID0gX2luc3RhbmNlcztcbiAgfVxuXG4gIHN0YXRpYyBmbHVzaCgpIHtcbiAgICB3aGlsZSAoRW5lbXlNYXJrZXIuaW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGlfYiA9IDA7IGlfYiA8IEVuZW15TWFya2VyLmluc3RhbmNlcy5sZW5ndGg7IGlfYisrKSB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEVuZW15TWFya2VyLmluc3RhbmNlc1tpX2JdO1xuICAgICAgICBtYXJrZXIuZGllKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFzc2lnbiB0d28gbGlzdGVuZXJzLlxuICAgKiAgICgxKSBoaXRUZXN0IHdpdGggYWlyY3JhZnQuXG4gICAqICAgKDIpIGNhbGwgI21vdmUuXG4gICAqL1xuICBhc3NpZ25UaWNrTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jbG9jay5vblRpY2soKCkgPT4ge1xuICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICAgICAgdGhpcy5nZXRPdXRIYW5kbGVyKCk7XG4gICAgICB0aGlzLmNvbGxpc2lvbkNoZWNrV2l0aEFpcmNyYWZ0KCk7XG5cbiAgICAgIGlmICh0aGlzLmFsaXZlICE9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgY29uc3QgYWlyQ3JhZnQgPSBBaXJDcmFmdC5nZXRJbnN0YW5jZSgpO1xuXG4gICAgY29uc3QgYW5nbGUgPSBNYXRoVXRpbC5nZXRBbmdsZURlZ3JlZShcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIGFpckNyYWZ0LngsXG4gICAgICBhaXJDcmFmdC55LFxuICAgICk7XG5cbiAgICB0aGlzLnggLT0gTUFSS0VSX1NQRUVEICogTWF0aC5jb3MoYW5nbGUpO1xuICAgIHRoaXMueSAtPSBNQVJLRVJfU1BFRUQgKiBNYXRoLnNpbihhbmdsZSk7XG4gIH1cblxuICB1cGRhdGVQb3MoeCA9IHRoaXMueCwgeSA9IHRoaXMueSkge1xuICAgIHRoaXMuc2hhcGUueCA9IHg7XG4gICAgdGhpcy5zaGFwZS55ID0geTtcbiAgICB0aGlzLmhpdEFyZWEueCA9IHg7XG4gICAgdGhpcy5oaXRBcmVhLnkgPSB5O1xuICAgIHRoaXMudGV4dC54ID0geDtcbiAgICB0aGlzLnRleHQueSA9IHk7XG4gIH1cblxuICBnZXRPdXRIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLnggPiBTVEFHRV9GUkFNRV9SSUdIVCkge1xuICAgICAgdGhpcy5kaWUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMueCA8IFNUQUdFX0ZSQU1FX0xFRlQpIHtcbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnkgPiBTVEFHRV9GUkFNRV9CT1RUT00pIHtcbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnkgPCBTVEFHRV9GUkFNRV9UT1ApIHtcbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9uQ2hlY2tXaXRoQWlyY3JhZnQoKSB7XG4gICAgY29uc3QgYWlyQ3JhZnQgPSBBaXJDcmFmdC5nZXRJbnN0YW5jZSgpO1xuXG4gICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBpZiAoIUFpckNyYWZ0LmlzQWxpdmUoKSB8fCAhYWlyQ3JhZnQpIHtcbiAgICAgIHRoaXMubG9ja2VkKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcG9zID0gdGhpcy5oaXRBcmVhLmxvY2FsVG9Mb2NhbCgwLCAwLCBhaXJDcmFmdC5zaGFwZSk7XG4gICAgY29uc3QgaGl0VGVzdCA9IHRoaXMuaGl0QXJlYS5oaXRUZXN0KHBvcy54LCBwb3MueSk7XG4gICAgaWYgKGhpdFRlc3QpIHtcbiAgICAgIHRoaXMubG9ja2VkKCk7XG4gICAgfVxuICB9XG5cbiAgbG9ja2VkKCkge1xuICAgIEV2ZW50c1dyYXBwZXIuZW1pdChgcmVhY2hlZF8ke3RoaXMuaWR9YCk7XG4gICAgdGhpcy5kaWUoKTtcbiAgfVxuXG4gIGRlcGxveSgpIHtcbiAgICB0aGlzLnNoYXBlID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgdGhpcy5zaGFwZS5hbHBoYSA9IDE7XG4gICAgdGhpcy5zaGFwZS5ncmFwaGljc1xuICAgICAgLnNldFN0cm9rZVN0eWxlKDIpXG4gICAgICAuYmVnaW5TdHJva2UoJ2RpbWdyYXknKVxuICAgICAgLmRyYXdDaXJjbGUoMCwgMCwgTUFSS0VSX1NIQVBFX1JBRElVUyk7XG5cbiAgICB0aGlzLnRleHQgPSBuZXcgY3JlYXRlanMuVGV4dChkZCgnbWFya2VyJyksICdib2xkIDlweCBBcmlhbCcsICd3aGl0ZScpO1xuXG4gICAgdGhpcy5oaXRBcmVhID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgdGhpcy5oaXRBcmVhLmFscGhhID0gMDtcbiAgICB0aGlzLmhpdEFyZWEuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwoJ3B1cnBsZScpXG4gICAgICAuZHJhd0NpcmNsZSgwLCAwLCBNQVJLRVJfSElUQVJFQV9SQURJVVMpO1xuXG4gICAgdGhpcy51cGRhdGVQb3MoKTtcblxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zaGFwZSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmhpdEFyZWEpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy50ZXh0KTtcbiAgfVxuXG4gIGRpZSgpIHtcbiAgICBpZiAodGhpcy5jbG9jaykge1xuICAgICAgdGhpcy5jbG9jay5hbGxPZmYoKTtcbiAgICAgIHRoaXMuY2xvY2sgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YWdlKSB7XG4gICAgICB0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuc2hhcGUpO1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmhpdEFyZWEpO1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnRleHQpO1xuICAgICAgdGhpcy5zdGFnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zaGFwZSA9IG51bGw7XG4gICAgdGhpcy50ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmhpdEFyZWEgPSBudWxsO1xuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlbW92ZUZyb21JbnN0YW5jZXMoKTtcbiAgfVxuXG4gIHJlbW92ZUZyb21JbnN0YW5jZXMoKSB7XG4gICAgZm9yIChsZXQgaV9pID0gMDsgaV9pIDwgRW5lbXlNYXJrZXIuaW5zdGFuY2VzLmxlbmd0aDsgaV9pKyspIHtcbiAgICAgIGNvbnN0IG1hcmtlciA9IEVuZW15TWFya2VyLmluc3RhbmNlc1tpX2ldO1xuICAgICAgaWYgKG1hcmtlciA9PT0gdGhpcykge1xuICAgICAgICBFbmVteU1hcmtlci5pbnN0YW5jZXMuc3BsaWNlKGlfaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmVteU1hcmtlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0VuZW15TWFya2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7XG4gIFNUQUdFX0hFSUdIVCxcbiAgU1RBR0VfTUlERExFX1gsXG4gIFNUQUdFX01JRERMRV9ZLFxuICBTVEFHRV9XSURUSFxufSBmcm9tICcuL0NvbnN0YW50JztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcbmltcG9ydCBIdWUgZnJvbSAnLi9IdWUnO1xuXG5jbGFzcyBUaXRsZSB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG5ldyBDYW52YXMoKTtcbiAgICBuZXcgU2NvcmUoKTtcbiAgICBuZXcgSHVlKCk7XG4gICAgdGhpcy5zdGFnZSA9IENhbnZhcy5nZXRTdGFnZSgpO1xuXG4gICAgY29uc3QgYiA9IG5ldyBjcmVhdGVqcy5HcmFwaGljcygpO1xuICAgIGIuYmVnaW5GaWxsKCdibGFjaycpO1xuICAgIGNvbnN0IGJsaW5kID0gYi5kcmF3UmVjdCgwLCAwLCBTVEFHRV9XSURUSCwgU1RBR0VfSEVJR0hUKTtcbiAgICB0aGlzLmJsaW5kID0gbmV3IGNyZWF0ZWpzLlNoYXBlKGJsaW5kKTtcbiAgICB0aGlzLmJsaW5kLmFscGhhID0gMC4zO1xuXG4gICAgLyogc3RhcnQgYnV0dG9uICovXG4gICAge1xuICAgICAgdGhpcy5zdGFydCA9IG5ldyBjcmVhdGVqcy5UZXh0KCdTdGFydCcsICdib2xkIDE2cHggQXJpYWwnLCAnbGlnaHRncmF5Jyk7XG4gICAgICBjb25zdCB7aGVpZ2h0LCB3aWR0aH0gPSB0aGlzLnN0YXJ0LmdldE1ldHJpY3MoKTtcbiAgICAgIGNvbnN0IGxlZnQgPSAoLXdpZHRoIC8gMikgKyBTVEFHRV9NSURETEVfWDtcbiAgICAgIGNvbnN0IHRvcCA9ICgtaGVpZ2h0IC8gMikgKyBTVEFHRV9NSURETEVfWTtcbiAgICAgIHRoaXMuc3RhcnQueCA9IGxlZnQ7XG4gICAgICB0aGlzLnN0YXJ0LnkgPSB0b3A7XG5cbiAgICAgIGNvbnN0IGcgPSBuZXcgY3JlYXRlanMuR3JhcGhpY3MoKTtcbiAgICAgIGcuc2V0U3Ryb2tlU3R5bGUoMSlcbiAgICAgICAgLmJlZ2luU3Ryb2tlKCcjMDAwMDAwJylcbiAgICAgICAgLmJlZ2luRmlsbCgnYmxhY2snKTtcblxuICAgICAgY29uc3QgcmVjdCA9IGcuZHJhd1JlY3QobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHRoaXMuZ2FtZVN0YXJ0QnV0dG9uID0gbmV3IGNyZWF0ZWpzLlNoYXBlKHJlY3QpO1xuICAgICAgdGhpcy5nYW1lU3RhcnRIYW5kbGVyID0gdGhpcy5nYW1lU3RhcnQuYmluZCh0aGlzKTtcblxuICAgICAgdGhpcy5nYW1lU3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdhbWVTdGFydEhhbmRsZXIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKiBzY29yZSAqL1xuICAgIHtcbiAgICAgIGNvbnN0IHNjb3JlID0gU2NvcmUuaGlnaFNjb3JlO1xuICAgICAgdGhpcy5zY29yZSA9IG5ldyBjcmVhdGVqcy5UZXh0KHNjb3JlID8gYHNjb3JlOiAke3Njb3JlfWAgOiAnJywgJ2JvbGQgMTJweCBBcmlhbCcsICdsaWdodGdyYXknKTtcbiAgICAgIGNvbnN0IHtoZWlnaHQsIHdpZHRofSA9IHRoaXMuc2NvcmUuZ2V0TWV0cmljcygpO1xuICAgICAgY29uc3QgbGVmdCA9ICgtd2lkdGggLyAyKSArIFNUQUdFX01JRERMRV9YO1xuICAgICAgY29uc3QgdG9wID0gKC1oZWlnaHQgLyAyKSArIFNUQUdFX01JRERMRV9ZICsgaGVpZ2h0ICogMjtcbiAgICAgIHRoaXMuc2NvcmUueCA9IGxlZnQ7XG4gICAgICB0aGlzLnNjb3JlLnkgPSB0b3A7XG5cbiAgICAgIGNvbnN0IGcgPSBuZXcgY3JlYXRlanMuR3JhcGhpY3MoKTtcbiAgICAgIGcuc2V0U3Ryb2tlU3R5bGUoMSlcbiAgICAgICAgLmJlZ2luU3Ryb2tlKCcjMDAwMDAwJylcbiAgICAgICAgLmJlZ2luRmlsbCgnYmxhY2snKTtcblxuICAgICAgY29uc3QgcmVjdCA9IGcuZHJhd1JlY3QobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHRoaXMuc2NvcmVJbmRpY2F0b3IgPSBuZXcgY3JlYXRlanMuU2hhcGUocmVjdCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmJsaW5kKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuZ2FtZVN0YXJ0QnV0dG9uKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuc2NvcmVJbmRpY2F0b3IpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zY29yZSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnN0YXJ0KTtcblxuICAgIHRoaXMuc3RhZ2UudXBkYXRlKCk7XG4gIH1cblxuICBnYW1lU3RhcnQoKSB7XG4gICAgdGhpcy5nYW1lU3RhcnRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdhbWVTdGFydEhhbmRsZXIsIGZhbHNlKTtcbiAgICB0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuYmxpbmQpO1xuICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5nYW1lU3RhcnRCdXR0b24pO1xuICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5zY29yZSk7XG4gICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnN0YXJ0KTtcblxuICAgIG5ldyBHYW1lKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9UaXRsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgRnJpZW5kQnVsbGV0IGZyb20gJy4vRnJpZW5kQnVsbGV0JztcbmltcG9ydCB7XG4gIEdBVExJTkdfQlVMTEVUX0hFSUdIVCxcbiAgR0FUTElOR19CVUxMRVRfU1BFRUQsXG4gIEdBVExJTkdfQlVMTEVUX1NUT1BQSU5HX1BPV0VSLFxuICBHQVRMSU5HX0JVTExFVF9XSURUSCxcbn0gZnJvbSAnLi9Db25zdGFudCc7XG5cbi8qKlxuICogZ2F0bGluZyBndW4gYnVsbGV0IGNsYXNzLlxuICovXG5jbGFzcyBHYXRsaW5nQnVsbGV0IGV4dGVuZHMgRnJpZW5kQnVsbGV0IHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIHgsIHlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLnN0b3BwaW5nUG93ZXIgPSBHQVRMSU5HX0JVTExFVF9TVE9QUElOR19QT1dFUjtcbiAgICB0aGlzLmFzc2lnblRpY2tMaXN0ZW5lcigpO1xuICAgIHRoaXMuZGVwbG95KCk7XG4gIH1cblxuICBhc3NpZ25UaWNrTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jbG9jay5vblRpY2soKCkgPT4ge1xuICAgICAgdGhpcy54ICs9IEdBVExJTkdfQlVMTEVUX1NQRUVEO1xuICAgICAgdGhpcy51cGRhdGVQb3MoKTtcbiAgICAgIHRoaXMuZ2V0T3V0SGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVwbG95KCkge1xuICAgIHRoaXMuc2hhcGUgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICB0aGlzLnNoYXBlLmdyYXBoaWNzXG4gICAgICAuc2V0U3Ryb2tlU3R5bGUoMilcbiAgICAgIC5iZWdpblN0cm9rZSgnd2hpdGUnKVxuICAgICAgLmRyYXdSZWN0KC1HQVRMSU5HX0JVTExFVF9XSURUSCAvIDIsIC1HQVRMSU5HX0JVTExFVF9IRUlHSFQgLyAyLCBHQVRMSU5HX0JVTExFVF9XSURUSCwgR0FUTElOR19CVUxMRVRfSEVJR0hUKTtcblxuICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuaGl0QXJlYS5hbHBoYSA9IDA7XG4gICAgdGhpcy5oaXRBcmVhLmdyYXBoaWNzXG4gICAgICAuYmVnaW5GaWxsKCdwdXJwbGUnKVxuICAgICAgLmRyYXdSZWN0KC1HQVRMSU5HX0JVTExFVF9XSURUSCAvIDIsIC1HQVRMSU5HX0JVTExFVF9IRUlHSFQgLyAyLCBHQVRMSU5HX0JVTExFVF9XSURUSCwgR0FUTElOR19CVUxMRVRfSEVJR0hUKTtcblxuICAgIHRoaXMudXBkYXRlUG9zKCk7XG5cbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuc2hhcGUpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5oaXRBcmVhKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMudGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2F0bGluZ0J1bGxldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0dhdGxpbmdCdWxsZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJztcbmltcG9ydCB7XG4gIFNUQUdFX0ZSQU1FX0JPVFRPTSxcbiAgU1RBR0VfRlJBTUVfTEVGVCxcbiAgU1RBR0VfRlJBTUVfUklHSFQsXG4gIFNUQUdFX0ZSQU1FX1RPUCxcbn0gZnJvbSAnLi9Db25zdGFudCc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCBFdmVudHNXcmFwcGVyIGZyb20gJy4vRXZlbnRzV3JhcHBlcic7XG5cbi8qKlxuICogbWFpbiB3ZWFwb24gYmFzZSBidWxsZXQgY2xhc3MuXG4gKi9cbmNsYXNzIEJ1bGxldCB7XG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLl95ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpcy5feCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZSBidWxsZXRzIHNoYXBlIHBvc2l0aW9uIHdpdGggeCx5XG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICB1cGRhdGVQb3MoKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2hhcGUueCA9IHRoaXMueDtcbiAgICB0aGlzLnNoYXBlLnkgPSB0aGlzLnk7XG4gICAgdGhpcy5oaXRBcmVhLnggPSB0aGlzLng7XG4gICAgdGhpcy5oaXRBcmVhLnkgPSB0aGlzLnk7XG4gICAgdGhpcy50ZXh0LnggPSB0aGlzLng7XG4gICAgdGhpcy50ZXh0LnkgPSB0aGlzLnk7XG4gIH1cblxuICBnZXRPdXRIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLnggPiBTVEFHRV9GUkFNRV9SSUdIVCkge1xuICAgICAgdGhpcy5kaWUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMueCA8IFNUQUdFX0ZSQU1FX0xFRlQpIHtcbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnkgPiBTVEFHRV9GUkFNRV9CT1RUT00pIHtcbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnkgPCBTVEFHRV9GUkFNRV9UT1ApIHtcbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIHgsIHksIHN0YWdlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgdGhpcy54ID0gYXJncy54O1xuICAgIHRoaXMueSA9IGFyZ3MueTtcbiAgICB0aGlzLnN0b3BwaW5nUG93ZXIgPSAwO1xuICAgIHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3RhZ2UgPSBDYW52YXMuZ2V0U3RhZ2UoKTtcbiAgICB0aGlzLnNoYXBlID0gbnVsbDtcbiAgICB0aGlzLmhpdEFyZWEgPSBudWxsO1xuICAgIHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2sodGhpcyk7XG4gICAgdGhpcy50ZXh0ID0gbmV3IGNyZWF0ZWpzLlRleHQoJycsICc5cHggQXJpYWwnLCAnYmxhY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgYnVsbGV0cyB0aGVtc2VsdmVzIGdvdCBvdXQgb2Ygc3RhZ2UuXG4gICAqL1xuICBkaWUoKSB7XG4gICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5zaGFwZSk7XG4gICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnRleHQpO1xuICAgIHRoaXMuY2xvY2suYWxsT2ZmKCk7XG4gICAgdGhpcy5jbG9jayA9IG51bGw7XG4gICAgdGhpcy50ZXh0ID0gbnVsbDtcbiAgICB0aGlzLnNoYXBlID0gbnVsbDtcbiAgICB0aGlzLmhpdEFyZWEgPSBudWxsO1xuICAgIHRoaXMuc3RhZ2UgPSBudWxsO1xuXG4gICAgdGhpcy5yZW1vdmVGcm9tSW5zdGFuY2VzKCk7XG4gIH1cblxuICByZW1vdmVGcm9tSW5zdGFuY2VzKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYWJzdHJhY3QgI3JlbW92ZUZyb21JbnN0YW5jZXMgaXMgbm90IGltcGxlbWVudGVkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVsbGV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2xhc3MvQnVsbGV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuXG4vKipcbiAqIEJsb3cgY2xhc3MuXG4gKiByZW5kZXIgZXhwbG9kZSBhbmQgYmxvdyB1cCBlZmZlY3Qgb24gYnVsbGV0IGNvbGxpc2lvbi5cbiAqL1xuY2xhc3MgQmxvdyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3tyYWRpdXMsIGNvbG9yLCB4LCB5fX0gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3IoYXJncykge1xuICAgIHRoaXMuc3RhZ2UgPSBDYW52YXMuZ2V0U3RhZ2UoKTtcbiAgICB0aGlzLnJhZGl1cyA9IGFyZ3MucmFkaXVzIHx8IDIwO1xuICAgIHRoaXMuY29sb3IgPSBhcmdzLmNvbG9yIHx8ICdsaWdodGJsdWUnO1xuXG4gICAgdGhpcy5zaGFwZSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuc2hhcGUueCA9IGFyZ3MueCB8fCAwO1xuICAgIHRoaXMuc2hhcGUueSA9IGFyZ3MueSB8fCAwO1xuICAgIHRoaXMuc2hhcGUuYWxwaGEgPSAwO1xuICAgIHRoaXMuc2hhcGUuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwodGhpcy5jb2xvcilcbiAgICAgIC5kcmF3Q2lyY2xlKDAsIDAsIHRoaXMucmFkaXVzKTtcblxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zaGFwZSk7XG5cbiAgICBjb25zdCBjb21wbGV0ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjcmVhdGVqcy5Ud2Vlbi5yZW1vdmVUd2VlbnModGhpcy5zaGFwZSk7XG4gICAgICB0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuc2hhcGUpO1xuICAgICAgdGhpcy5zaGFwZSA9IG51bGw7XG4gICAgfTtcblxuICAgIGNyZWF0ZWpzLlR3ZWVuLmdldCh0aGlzLnNoYXBlKVxuICAgICAgLnRvKHthbHBoYTogMC42fSwgNDApXG4gICAgICAudG8oe2FscGhhOiAwfSwgODApXG4gICAgICAuY2FsbChjb21wbGV0ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvdztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0Jsb3cuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEd1blBvd2RlciBmcm9tICcuL0d1blBvd2Rlcic7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCBFdmVudHNXcmFwcGVyIGZyb20gJy4vRXZlbnRzV3JhcHBlcic7XG5cbi8qKlxuICogYnVsbGV0IGFydCB1dGlsaXR5IGNsYXNzLlxuICogQHN0YXRpY1xuICovXG5jbGFzcyBGaXJlV29ya3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcmVXb3JrcyBjYW5ub3QgYmUgaW5zdGFuY2UnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRSYW5kb21SYWRpYW4ocmFkaWFuID0gTWF0aC5QSSkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogcmFkaWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVwdGhcbiAgICovXG4gIHN0YXRpYyBzdW5GbG93ZXIoeCwgeSwgY291bnQgPSAxLCBkZXB0aCA9IDEpIHtcbiAgICBjb25zdCBwaWUgPSAyICogTWF0aC5QSSAvIGNvdW50O1xuICAgIGNvbnN0IG5vaXNlID0gRmlyZVdvcmtzLmdldFJhbmRvbVJhZGlhbihwaWUpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGVwdGg7IGorKykge1xuICAgICAgY29uc3QgaW50ZXJjZXB0ID0gKDIgKiBNYXRoLlBJICogaikgLyAoMiAqIGNvdW50KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbmV3IEd1blBvd2Rlcih7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgIGFuZ2xlOiAoKDIgKiBNYXRoLlBJICogaSkgLyBjb3VudCkgKyBpbnRlcmNlcHQgKyBub2lzZSxcbiAgICAgICAgICAgIHN0YWdlOiBDYW52YXMuZ2V0U3RhZ2UoKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwICogaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVwdGhcbiAgICovXG4gIHN0YXRpYyBjb25jaCh4LCB5LCBjb3VudCA9IDEsIGRlcHRoID0gMSkge1xuICAgIGNvbnN0IHBpZSA9IDIgKiBNYXRoLlBJIC8gY291bnQ7XG4gICAgY29uc3Qgbm9pc2UgPSBGaXJlV29ya3MuZ2V0UmFuZG9tUmFkaWFuKHBpZSk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRlcHRoOyBqKyspIHtcbiAgICAgIGNvbnN0IGludGVyY2VwdCA9ICgyICogTWF0aC5QSSAqIGopIC8gKDIgKiBjb3VudCAqIGRlcHRoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbmV3IEd1blBvd2Rlcih7XG4gICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgIHNwZWVkQ29lZmZpY2llbnQ6IDAuNSxcbiAgICAgICAgICAgIGFuZ2xlOiAoKDIgKiBNYXRoLlBJICogaSkgLyBjb3VudCkgKyBpbnRlcmNlcHQgKyBub2lzZSxcbiAgICAgICAgICAgIHN0YWdlOiBDYW52YXMuZ2V0U3RhZ2UoKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwICogaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpcmVXb3JrcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0ZpcmVXb3Jrcy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9jbGFzcy9UaXRsZSc7XG5cbi8qXG4gKiBkaXNwbGF5IFwiR0FNRSBTVEFSVFwiXG4gKi9cbih3aW5kb3cub25Mb2FkID0gKCkgPT4ge1xuICBjcmVhdGVqcy5UaWNrZXIudGltaW5nTW9kZSA9IGNyZWF0ZWpzLlRpY2tlci5SQUY7XG5cbiAgbmV3IFRpdGxlKCk7XG5cbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdWJhcnUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEFpckNyYWZ0IGZyb20gJy4vQWlyQ3JhZnQuanMnO1xuaW1wb3J0IEVuZW15IGZyb20gJy4vRW5lbXknO1xuaW1wb3J0IEVuZW15QnVsbGV0IGZyb20gJy4vRW5lbXlCdWxsZXQnO1xuaW1wb3J0IEZyaWVuZEJ1bGxldCBmcm9tICcuL0ZyaWVuZEJ1bGxldCc7XG5pbXBvcnQge1xuICBkZCxcbiAgSU5ESUNBVE9SX0ZPTlRfU1RZTEUsXG4gIElORElDQVRPUl9YLFxuICBJTkRJQ0FUT1JfWSxcbn0gZnJvbSAnLi9Db25zdGFudCc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCBXYXZlIGZyb20gJy4vV2F2ZSc7XG5pbXBvcnQgRXZlbnRzV3JhcHBlciBmcm9tICcuL0V2ZW50c1dyYXBwZXInO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnO1xuaW1wb3J0IEVuZW15TWFya2VyIGZyb20gJy4vRW5lbXlNYXJrZXInO1xuaW1wb3J0IEFtcGxpZmllciBmcm9tICcuL0FtcGxpZmllcic7XG5pbXBvcnQgSmFtbWVyIGZyb20gJy4vSmFtbWVyJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcblxuY2xhc3MgR2FtZSB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUuaW5mbygnbmV3IGdhbWUgc3RhcnQuJyk7XG5cbiAgICBuZXcgQWlyQ3JhZnQoKTtcblxuICAgIFdhdmUubGV2ZWwgPSAwO1xuXG4gICAgRW5lbXkuZmx1c2goKTtcbiAgICBFbmVteU1hcmtlci5mbHVzaCgpO1xuICAgIEVuZW15QnVsbGV0LmZsdXNoKCk7XG4gICAgSmFtbWVyLmZsdXNoKCk7XG5cbiAgICBTY29yZS5yZXNldCgpO1xuXG4gICAgdGhpcy5zdGFnZSA9IENhbnZhcy5nZXRTdGFnZSgpO1xuXG4gICAgdGhpcy5pbmRpY2F0b3IgPSBuZXcgY3JlYXRlanMuVGV4dCgnJywgSU5ESUNBVE9SX0ZPTlRfU1RZTEUsICdsaWdodGdyYXknKTtcbiAgICB0aGlzLmluZGljYXRvci54ID0gSU5ESUNBVE9SX1g7XG4gICAgdGhpcy5pbmRpY2F0b3IueSA9IElORElDQVRPUl9ZO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5pbmRpY2F0b3IpO1xuXG4gICAgdGhpcy5zdGFnZUxpc3RlbmVyID0gbmV3IEV2ZW50c1dyYXBwZXIoKTtcbiAgICBFdmVudHNXcmFwcGVyLnJlbW92ZUFsbExpc3RlbmVycygpO1xuXG4gICAgY29uc3Qgd2kgPSB3YXZlSXRlcmF0b3IodGhpcy5zdGFnZUxpc3RlbmVyKTtcbiAgICBsZXQgZGllID0gZmFsc2U7XG4gICAgd2kubmV4dCgpO1xuXG4gICAgdGhpcy5zdGFnZUxpc3RlbmVyLm9uKCd3YXZlLmNsZWFyJywgKCkgPT4ge1xuICAgICAgd2kubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGFnZUxpc3RlbmVyLm9uY2UoJ2dhbWVPdmVyJywgKCkgPT4ge1xuICAgICAgLyoga2lsbCB0aW1lciAqL1xuICAgICAgY3JlYXRlanMuVGlja2VyLnJlc2V0KCk7XG4gICAgICBjcmVhdGVqcy5UaWNrZXIucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgZGllID0gdHJ1ZTtcblxuICAgICAgLyoga2lsbCB3YXZlIGdlbmVyYXRvciAqL1xuICAgICAgd2kucmV0dXJuKCk7XG5cbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgICBuZXcgVGl0bGUoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uKiB3YXZlSXRlcmF0b3IobGlzdGVuZXIpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIGlmIChkaWUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3YXZlID0gbmV3IFdhdmUoKTtcbiAgICAgICAgd2F2ZS5wXG4gICAgICAgICAgLnRoZW4oKGxldmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHdhdmU6ICR7bGV2ZWx9IGNsZWFyISFgKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmVtaXQoJ3dhdmUuY2xlYXInKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgobGV2ZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgd2F2ZTogJHtsZXZlbH0gZmFpbGVkISFgKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBwYXVzZSBwcm9jZXNzIGZsb3cgdGlsbCBuZXh0IHdhdmVJdGVyYXRvciNuZXh0KCk7XG4gICAgICAgICAqL1xuICAgICAgICB5aWVsZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIHVwZGF0ZSBzdGFnZSBldmVyeSB0aWNrXG4gICAgICovXG4gICAgY3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLCB0aGlzLnN0YWdlKTtcblxuICAgIC8qXG4gICAgICogZGlzcGxheSBkZWJ1ZyBpbmRpY2F0b3JcbiAgICAgKi9cbiAgICBjcmVhdGVqcy5UaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcigndGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG1lYXN1cmVkRlBTID0gY3JlYXRlanMuVGlja2VyLmdldE1lYXN1cmVkRlBTKCk7XG4gICAgICBjb25zdCBzY29yZSA9IFNjb3JlLnBvaW50O1xuICAgICAgY29uc3QgaGlnaFNjb3JlID0gU2NvcmUuaGlnaFNjb3JlO1xuICAgICAgY29uc3QgZnJpZW5kQnVsbGV0Q291bnQgPSAoRnJpZW5kQnVsbGV0Lmluc3RhbmNlcyB8fCBbXSkubGVuZ3RoO1xuICAgICAgY29uc3QgZW5lbXlCdWxsZXRDb3VudCA9IEVuZW15QnVsbGV0Lmluc3RhbmNlcy5sZW5ndGg7XG4gICAgICBjb25zdCBlbmVteUNvdW50ID0gKEVuZW15Lmluc3RhbmNlcyB8fCBbXSkubGVuZ3RoO1xuICAgICAgY29uc3QgamFtID0gSmFtbWVyLmluc3RhbmNlcy5sZW5ndGggfHwgMDtcbiAgICAgIGNvbnN0IGFtcCA9IEFtcGxpZmllci5nZXRSYXRpbygpIHx8IDE7XG4gICAgICBjb25zdCBhbXBfYyA9IEFtcGxpZmllci5nZXRBbXBsaWZpZXJzKCkubGVuZ3RoIHx8IDA7XG4gICAgICBjb25zdCB3YXZlID0gV2F2ZS5sZXZlbDtcbiAgICAgIHRoaXMuaW5kaWNhdG9yLnRleHQgPVxuICAgICAgICBgRlBTOiAke21lYXN1cmVkRlBTfVxcbmAgK1xuICAgICAgICBgU2NvcmU6ICR7c2NvcmV9XFxuYCArXG4gICAgICAgIGBIaWdoU2NvcmU6ICR7aGlnaFNjb3JlfVxcbmAgK1xuICAgICAgICBkZChgRnJpZW5kQnVsbGV0czogJHtmcmllbmRCdWxsZXRDb3VudH1cXG5gKSArXG4gICAgICAgIGRkKGBFbmVteTogJHtlbmVteUNvdW50fVxcbmApICtcbiAgICAgICAgZGQoYEVuZW15QnVsbGV0czogJHtlbmVteUJ1bGxldENvdW50fVxcbmApICtcbiAgICAgICAgZGQoYGphbTogJHtqYW19XFxuYCkgK1xuICAgICAgICBkZChgYW1wOiAke2FtcH0gLSAke2FtcF9jfVxcbmApICtcbiAgICAgICAgYFdhdmU6ICR7d2F2ZX1gO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuaW5kaWNhdG9yKTtcblxuICAgIGlmICh0aGlzLnN0YWdlTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuc3RhZ2VMaXN0ZW5lci5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuc3RhZ2VMaXN0ZW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgY3JlYXRlanMuVGlja2VyLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0dhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiB2aXJ0dWFsIEdhbWVQYWQgY2xhc3MuXG4gKiBidXR0b25zIGFyZVxuICogIHVwXG4gKiAgZG93blxuICogIGxlZnRcbiAqICByaWdodFxuICogIGN0cmxcbiAqXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIFZpcnR1YWxQYWQge1xuICAvKlxuICAgKiBnZXR0ZXIgYW5kIHNldHRlclxuICAgKi9cbiAgZ2V0IGtleURvd25Pbmx5X1JpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlEb3duX1JpZ2h0ICYmICEodGhpcy5fa2V5RG93bl9VcCB8fCB0aGlzLl9rZXlEb3duX0Rvd24gfHwgdGhpcy5fa2V5RG93bl9MZWZ0KTtcbiAgfVxuXG4gIGdldCBrZXlEb3duX1JpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlEb3duX1JpZ2h0O1xuICB9XG5cbiAgc2V0IGtleURvd25fUmlnaHQodmFsdWUpIHtcbiAgICB0aGlzLl9rZXlEb3duX1JpZ2h0ID0gdmFsdWU7XG4gIH1cblxuICBnZXQga2V5RG93bk9ubHlfTGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5RG93bl9MZWZ0ICYmICEodGhpcy5fa2V5RG93bl9VcCB8fCB0aGlzLl9rZXlEb3duX0Rvd24gfHwgdGhpcy5fa2V5RG93bl9SaWdodCk7XG4gIH1cblxuICBnZXQga2V5RG93bl9MZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlEb3duX0xlZnQ7XG4gIH1cblxuICBzZXQga2V5RG93bl9MZWZ0KHZhbHVlKSB7XG4gICAgdGhpcy5fa2V5RG93bl9MZWZ0ID0gdmFsdWU7XG4gIH1cblxuICBnZXQga2V5RG93bk9ubHlfRG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5RG93bl9Eb3duICYmICEodGhpcy5fa2V5RG93bl9VcCB8fCB0aGlzLl9rZXlEb3duX0xlZnQgfHwgdGhpcy5fa2V5RG93bl9SaWdodCk7XG4gIH1cblxuICBnZXQga2V5RG93bl9Eb3duKCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlEb3duX0Rvd247XG4gIH1cblxuICBzZXQga2V5RG93bl9Eb3duKHZhbHVlKSB7XG4gICAgdGhpcy5fa2V5RG93bl9Eb3duID0gdmFsdWU7XG4gIH1cblxuICBnZXQga2V5RG93bk9ubHlfVXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleURvd25fVXAgJiYgISh0aGlzLl9rZXlEb3duX0Rvd24gfHwgdGhpcy5fa2V5RG93bl9MZWZ0IHx8IHRoaXMuX2tleURvd25fUmlnaHQpO1xuICB9XG5cbiAgZ2V0IGtleURvd25fVXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleURvd25fVXA7XG4gIH1cblxuICBzZXQga2V5RG93bl9VcCh2YWx1ZSkge1xuICAgIHRoaXMuX2tleURvd25fVXAgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhcnJvd0Rvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleURvd25fVXAgfFxuICAgICAgdGhpcy5fa2V5RG93bl9Eb3duIHxcbiAgICAgIHRoaXMuX2tleURvd25fTGVmdCB8XG4gICAgICB0aGlzLl9rZXlEb3duX1JpZ2h0O1xuICB9XG5cbiAgZ2V0IGtleURvd25fQ3RybCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5RG93bl9DdHJsO1xuICB9XG5cbiAgc2V0IGtleURvd25fQ3RybCh2YWx1ZSkge1xuICAgIHRoaXMuX2tleURvd25fQ3RybCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiBWaXJ0dWFsUGFkLmluc3RhbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFZpcnR1YWxQYWQuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgVmlydHVhbFBhZC5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICB0aGlzLl9rZXlEb3duX1VwID0gZmFsc2U7XG4gICAgdGhpcy5fa2V5RG93bl9Eb3duID0gZmFsc2U7XG4gICAgdGhpcy5fa2V5RG93bl9MZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5fa2V5RG93bl9SaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuX2tleURvd25fQ3RybCA9IGZhbHNlO1xuXG4gICAgY29uc3Qga2V5SGFuZGxlciA9IChtb2RlLCBlKT0+IHtcbiAgICAgIGlmIChtb2RlICE9PSAndXAnICYmIG1vZGUgIT09ICdkb3duJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ltcGxlbWVudCBlcnJvciEnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXNzZWQgPSAobW9kZSA9PT0gJ2Rvd24nKSB8fCBmYWxzZTtcbiAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG5cbiAgICAgIGNvbnN0IEtFWV9VUCA9IDM4O1xuICAgICAgY29uc3QgS0VZX0RPV04gPSA0MDtcbiAgICAgIGNvbnN0IEtFWV9MRUZUID0gMzc7XG4gICAgICBjb25zdCBLRVlfUklHSFQgPSAzOTtcbiAgICAgIC8vIGNvbnN0IEtFWV9XICAgICA9IDg3O1xuICAgICAgLy8gY29uc3QgS0VZX0EgICAgID0gNjU7XG4gICAgICAvLyBjb25zdCBLRVlfUyAgICAgPSA4MztcbiAgICAgIC8vIGNvbnN0IEtFWV9EICAgICA9IDY4O1xuICAgICAgY29uc3QgS0VZX0NUUkwgPSAxNztcblxuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEtFWV9VUDpcbiAgICAgICAgdGhpcy5rZXlEb3duX1VwID0gcHJlc3NlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWV9ET1dOOlxuICAgICAgICB0aGlzLmtleURvd25fRG93biA9IHByZXNzZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVlfTEVGVDpcbiAgICAgICAgdGhpcy5rZXlEb3duX0xlZnQgPSBwcmVzc2VkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZX1JJR0hUOlxuICAgICAgICB0aGlzLmtleURvd25fUmlnaHQgPSBwcmVzc2VkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZX0NUUkw6XG4gICAgICAgIHRoaXMua2V5RG93bl9DdHJsID0gcHJlc3NlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleUhhbmRsZXIuYmluZCh0aGlzLCAnZG93bicpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleUhhbmRsZXIuYmluZCh0aGlzLCAndXAnKSk7XG4gIH1cblxuICBkZWJ1ZygpIHtcbiAgICBjb25zb2xlLmluZm8oe1xuICAgICAgVXA6IHRoaXMua2V5RG93bl9VcCxcbiAgICAgIERvd246IHRoaXMua2V5RG93bl9Eb3duLFxuICAgICAgTGVmdDogdGhpcy5rZXlEb3duX0xlZnQsXG4gICAgICBSaWdodDogdGhpcy5rZXlEb3duX1JpZ2h0LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpcnR1YWxQYWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9WaXJ0dWFsUGFkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHdW5zIGZyb20gJy4vR3Vucyc7XG5pbXBvcnQgR2F0bGluZ0J1bGxldCBmcm9tICcuL0dhdGxpbmdCdWxsZXQnO1xuaW1wb3J0IHtcbiAgQUlSQ1JBRlRfRklSRV9ERUxBWSxcbiAgR0FUTElOR19DT09MX1RJTUVcbn0gZnJvbSAnLi9Db25zdGFudCc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcblxuLyoqXG4gKiBtYWluIHdlYXBvbiBcImdhdGxpbmctZ3VuXCIgY2xhc3MuXG4gKi9cbmNsYXNzIEdhdGxpbmcgZXh0ZW5kcyBHdW5zIHtcbiAgY29uc3RydWN0b3IoYXJncykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGFnZSA9IENhbnZhcy5nZXRTdGFnZSgpO1xuICAgIHRoaXMuY29vbFRpbWUgPSBHQVRMSU5HX0NPT0xfVElNRTtcbiAgICB0aGlzLnggPSBhcmdzLng7XG4gICAgdGhpcy55ID0gYXJncy55O1xuXG4gICAgdGhpcy5zaGFwZSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuc2hhcGUuZ3JhcGhpY3MuYmVnaW5GaWxsKGNyZWF0ZWpzLkdyYXBoaWNzLmdldFJHQigwLCAwLCAwLCAwKSkuZHJhd1JlY3QoLTEsIC0xLCAyLCAyKTtcblxuICAgIHRoaXMudGV4dCA9IG5ldyBjcmVhdGVqcy5UZXh0KCcnLCAnYm9sZCA5cHggQXJpYWwnLCAnYmxhY2snKTtcblxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zaGFwZSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIGtpY2tlZCBldmVyeSB0aWNrIHdoZW4gYWlyQ3JhZnQgYXV0b0ZpcmUgaXMgb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAqL1xuICB0cmlnZ2VyKHgsIHkpIHtcbiAgICBpZiAoY3JlYXRlanMuVGlja2VyLmdldFRpY2tzKCkgJSBBSVJDUkFGVF9GSVJFX0RFTEFZICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudXBkYXRlUG9zKCk7XG5cbiAgICAvLyB0aGlzLnRleHQudGV4dCA9IGB7eDoke3RoaXMuc2hhcGUueH0seToke3RoaXMuc2hhcGUueX1gO1xuXG4gICAgbmV3IEdhdGxpbmdCdWxsZXQoe1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBvcygpIHtcbiAgICB0aGlzLnNoYXBlLnggPSB0aGlzLng7XG4gICAgdGhpcy5zaGFwZS55ID0gdGhpcy55O1xuICAgIHRoaXMudGV4dC54ID0gdGhpcy54O1xuICAgIHRoaXMudGV4dC55ID0gdGhpcy55IC0gMjA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2F0bGluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0dhdGxpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBtYWluIHdlYXBvbiBhYnN0cmFjdCBjbGFzcy5cbiAqL1xuY2xhc3MgR3VucyB7XG4gIGdldCBjb29sVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29vbFRpbWU7XG4gIH1cblxuICBzZXQgY29vbFRpbWUodmFsdWUpIHtcbiAgICB0aGlzLl9jb29sVGltZSA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb29sVGltZSA9IDEwMDA7XG4gICAgdGhpcy5wcmV2RmlyZWQgPSAwO1xuICB9XG5cbiAgdHJpZ2dlcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHdW5zO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2xhc3MvR3Vucy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9FdmVudHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuaW1wb3J0IEdhdGxpbmdCdWxsZXQgZnJvbSAnLi9HYXRsaW5nQnVsbGV0JztcbmltcG9ydCB7XG4gIGRkLFxuICBQT0RfQ0FCTEVfTEVOR1RILFxuICBQT0RfRklSRV9ERUxBWSxcbiAgUE9EX0hFSUdIVCxcbiAgUE9EX1dJRFRIXG59IGZyb20gJy4vQ29uc3RhbnQnO1xuaW1wb3J0IEFpckNyYWZ0IGZyb20gJy4vQWlyQ3JhZnQnO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gJy4vTWF0aFV0aWwnO1xuXG5jbGFzcyBQb2Qge1xuICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgY29uc3Qge3gsIHl9ID0gYXJncztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5jbG9jayA9IG5ldyBDbG9jayh0aGlzKTtcbiAgICB0aGlzLnN0YWdlID0gQ2FudmFzLmdldFN0YWdlKCk7XG4gICAgdGhpcy5hc3NpZ25UaWNrTGlzdGVuZXIoKTtcbiAgICB0aGlzLmRlcGxveSgpO1xuICB9XG5cbiAgYXNzaWduVGlja0xpc3RlbmVyKCkge1xuICAgIHRoaXMuY2xvY2sub25UaWNrKCgpID0+IHtcbiAgICAgIGlmICghQWlyQ3JhZnQuaXNBbGl2ZSgpKSB7XG4gICAgICAgIHRoaXMuZGllKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5jbG9jaykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpY2sgPSB0aGlzLmNsb2NrLmdldFRpY2soKSAqIDY7XG4gICAgICB0aGlzLnNoYXBlLnJvdGF0aW9uID0gdGljaztcblxuICAgICAgdGhpcy5tb3ZlKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBjb25zdCB7dGhldGEsIGRpc3RhbmNlfSA9IHRoaXMudG9BaXJDcmFmdCgpO1xuXG4gICAgaWYgKGRpc3RhbmNlID4gUE9EX0NBQkxFX0xFTkdUSCkge1xuICAgICAgdGhpcy5wdWxsVXAodGhldGEsIGRpc3RhbmNlKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICB9XG5cbiAgdG9BaXJDcmFmdCgpIHtcbiAgICBjb25zdCBhaXJDcmFmdCA9IEFpckNyYWZ0LmdldEluc3RhbmNlKCk7XG5cbiAgICBjb25zdCB7eCwgeX0gPSBhaXJDcmFmdDtcbiAgICBjb25zdCB0aGV0YSA9IE1hdGhVdGlsLmdldEFuZ2xlRGVncmVlKHRoaXMueCwgdGhpcy55LCB4LCB5KTtcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh4IC0gdGhpcy54LCAyKSArIE1hdGgucG93KHkgLSB0aGlzLnksIDIpKTtcblxuICAgIHJldHVybiB7dGhldGEsIGRpc3RhbmNlfTtcbiAgfVxuXG4gIHB1bGxVcCh0aGV0YSkge1xuICAgIGNvbnN0IGR4ID0gMyAqIE1hdGguY29zKHRoZXRhKTtcbiAgICBjb25zdCBkeSA9IDMgKiBNYXRoLnNpbih0aGV0YSk7XG4gICAgdGhpcy54IC09IGR4O1xuICAgIHRoaXMueSAtPSBkeTtcbiAgICB0aGlzLnRleHQudGV4dCA9IGRkKGBkeDogJHtNYXRoLmZsb29yKGR4KX0sIGR5OiAke01hdGguZmxvb3IoZHkpfSwgdGhldGE6ICR7dGhldGF9YCk7XG4gIH1cblxuICB0cmlnZ2VyKCkge1xuICAgIGlmICghQWlyQ3JhZnQuaXNBbGl2ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2xvY2suZ2V0VGljaygpICUgUE9EX0ZJUkVfREVMQVkgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB4ID0gdGhpcy54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnk7XG4gICAgbmV3IEdhdGxpbmdCdWxsZXQoe3gsIHl9KTtcbiAgfVxuXG4gIHVwZGF0ZVBvcyh4ID0gdGhpcy54LCB5ID0gdGhpcy55KSB7XG4gICAgdGhpcy5zaGFwZS54ID0geDtcbiAgICB0aGlzLnNoYXBlLnkgPSB5O1xuICB9XG5cbiAgZGVwbG95KCkge1xuICAgIGNvbnN0IGdyYXBoaWMgPSBuZXcgY3JlYXRlanMuR3JhcGhpY3MoKTtcbiAgICBncmFwaGljLnNldFN0cm9rZVN0eWxlKDEpLmJlZ2luU3Ryb2tlKCd3aGl0ZScpXG4gICAgICAuZHJhd1JlY3QoLVBPRF9XSURUSCAvIDIsIC1QT0RfSEVJR0hUIC8gMiwgUE9EX1dJRFRILCBQT0RfSEVJR0hUKTtcbiAgICB0aGlzLnNoYXBlID0gbmV3IGNyZWF0ZWpzLlNoYXBlKGdyYXBoaWMpO1xuICAgIHRoaXMudGV4dCA9IG5ldyBjcmVhdGVqcy5UZXh0KCcnLCAnYm9sZCA5cHggQXJpYWwnLCAncmVkJyk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnNoYXBlKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMudGV4dCk7XG4gIH1cblxuICBkaWUoKSB7XG4gICAgaWYgKHRoaXMuY2xvY2spIHtcbiAgICAgIHRoaXMuY2xvY2suYWxsT2ZmKCk7XG4gICAgICB0aGlzLmNsb2NrID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGFnZSkge1xuICAgICAgdGhpcy5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnNoYXBlKTtcbiAgICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy50ZXh0KTtcbiAgICAgIHRoaXMuc3RhZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2hhcGUgPSBudWxsO1xuICAgIHRoaXMudGV4dCA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9kO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2xhc3MvUG9kLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQge1dBVkVfVElNRV9MSU1JVH0gZnJvbSAnLi9Db25zdGFudCc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCBXYXZlVXRpbCBmcm9tICcuL1dhdmVVdGlsJztcbmltcG9ydCBBaXJDcmFmdCBmcm9tICcuL0FpckNyYWZ0JztcbmltcG9ydCBFdmVudHNXcmFwcGVyIGZyb20gJy4vRXZlbnRzV3JhcHBlcic7XG5cbmNsYXNzIFdhdmUge1xuICBzdGF0aWMgbmV4dExldmVsKCkge1xuICAgIHJldHVybiAoV2F2ZS5fbGV2ZWwrKyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGxldmVsKCkge1xuICAgIFdhdmUuX2xldmVsID0gV2F2ZS5fbGV2ZWwgfHwgMDtcbiAgICByZXR1cm4gV2F2ZS5fbGV2ZWw7XG4gIH07XG5cbiAgc3RhdGljIHNldCBsZXZlbChsKSB7XG4gICAgV2F2ZS5fbGV2ZWwgPSBsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sZXZlbCA9IFdhdmUubGV2ZWw7XG4gICAgV2F2ZS5uZXh0TGV2ZWwoKTtcbiAgICB0aGlzLnN0YWdlID0gQ2FudmFzLmdldFN0YWdlKCk7XG5cbiAgICAvKlxuICAgICAqIGRpc3BhdGNoIGVuZW15IHdhdmVzIGZyb20gY29uZmlnLlxuICAgICAqL1xuICAgIHRoaXMucHJvbWlzZXMgPSB0aGlzLmNvbWVPdXQoKTtcblxuICAgIC8qXG4gICAgICogc2V0IHdhdmUgdGltZXJcbiAgICAgKi9cbiAgICBjb25zdCB0aW1lciA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIFdBVkVfVElNRV9MSU1JVCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnYW1lT3ZlciA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBFdmVudHNXcmFwcGVyLm9uY2UoJ2dhbWVPdmVyJywgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qXG4gICAgICogd2F2ZSBjbGVhciAuLi4gd2hlbiAoMSkgb3IgKDIpIGRvbmVcbiAgICAgKiAgICgxKSBkZXN0cm95IGFsbCBlbmVteS5cbiAgICAgKiAgICgyKSBhZnRlciAke3RpbWVNc30gbWlsbGkgc2Vjb25kcy5cbiAgICAgKlxuICAgICAqIHdhdmUgZmFpbHMgaW1tZWRpYXRlbHlcbiAgICAgKiAgICgxKSAnZ2FtZU92ZXInIGV2ZW50IGZpcmVkLlxuICAgICAqXG4gICAgICovXG4gICAgdGhpcy5wID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5wcm9taXNlcyksXG4gICAgICAgIHRpbWVyXG4gICAgICBdKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmxldmVsKTtcbiAgICAgIH0pO1xuXG4gICAgICBnYW1lT3Zlci50aGVuKCgpID0+IHtcbiAgICAgICAgcmVqZWN0KHRoaXMubGV2ZWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtBcnJheTxQcm9taXNlPn1cbiAgICovXG4gIGNvbWVPdXQoKSB7XG4gICAgY29uc3QgcHJvbWlzZUFycmF5ID0gW107XG5cbiAgICBjb25zdCB3YXZlQ29uZiA9IFdhdmVVdGlsLmdldENvbmZpZyhXYXZlLmxldmVsKTtcblxuICAgIHdhdmVDb25mLmZvckVhY2goKHcpID0+IHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmRlcGxveUVuZW15KHcpO1xuICAgICAgcHJvbWlzZUFycmF5LnB1c2gocHJvbWlzZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZUFycmF5O1xuICB9XG5cbiAgLyoqXG4gICAqIGRpc3BhdGNoIGVuZW15IGZyb20gd2F2ZSBjb25maWcuXG4gICAqIGdldCBwcm9taXNlIGZyb20gaXQgYW5kIHJldHVybi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgZGVwbG95RW5lbXkoY29uZmlnKSB7XG4gICAgY29uc3QgRW5lbXlDbGFzcyA9IGNvbmZpZy5lbmVteUNsYXNzO1xuICAgIGNvbnN0IGRlbGF5TXMgPSBjb25maWcuZGVsYXlNcztcbiAgICBjb25zdCBhcmdzID0gY29uZmlnLmFyZ3M7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFBaXJDcmFmdC5pc0FsaXZlKCkpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlID0gbmV3IEVuZW15Q2xhc3MoYXJncyk7XG4gICAgICAgIGNvbnN0IHAgPSBlLnA7XG4gICAgICAgIHAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGRlbGF5TXMpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9XYXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi9NYXRoVXRpbCc7XG5pbXBvcnQgRGVicmlzIGZyb20gJy4vRGVicmlzJztcbmltcG9ydCBCb21iZXIgZnJvbSAnLi9Cb21iZXInO1xuaW1wb3J0IEFtcGxpZmllciBmcm9tICcuL0FtcGxpZmllcic7XG5pbXBvcnQgQmF0dGVyeSBmcm9tICcuL0JhdHRlcnknO1xuaW1wb3J0IExhdW5jaGVyIGZyb20gJy4vTGF1bmNoZXInO1xuaW1wb3J0IHtcbiAgRUFTWSxcbiAgRU5FTVlfVkFSSUFUSU9OLFxuICBIQVJELFxuICBIVVNILFxuICBNQVhfVElFUixcbiAgU1RBR0VfRURHRV9UT1AsXG4gIFNUQUdFX0ZSQU1FX0JPVFRPTSxcbiAgU1RBR0VfRlJBTUVfTEVGVCxcbiAgU1RBR0VfRlJBTUVfUklHSFQsXG4gIFNUQUdFX0ZSQU1FX1RPUCxcbiAgU1RBR0VfTUlERExFX1gsXG4gIFNUQUdFX01JRERMRV9ZLFxuICBUVVRPUklBTFxufSBmcm9tICcuL0NvbnN0YW50JztcbmltcG9ydCBOb2lzZSBmcm9tICcuL05vaXNlJztcblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIHdhdmUgY29uZmlnIHV0aWxpdHkgY2xhc3NcbiAqIEBjbGFzc1xuICovXG5jbGFzcyBXYXZlVXRpbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IEVycm9yKCdXYXZlVXRpbCBjYW5ub3QgYmUgaW5zdGFuY2lhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAgICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAgICovXG4gIHN0YXRpYyBnZXRDb25maWcobGV2ZWwpIHtcbiAgICAvKlxuICAgICAqIGdldCB0aWVyICgwPD10aWVyPD1NQVhfVElFUilcbiAgICAgKi9cbiAgICBsZXQgdGllciA9IE1hdGguZmxvb3IobGV2ZWwgLyA1KTtcbiAgICBpZiAodGllciA+IE1BWF9USUVSKSB7XG4gICAgICB0aWVyID0gTUFYX1RJRVI7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiB0aWVyIDAgaXMgdHV0b3JpYWxcbiAgICAgKi9cbiAgICBpZiAodGllciA9PT0gVFVUT1JJQUwpIHtcbiAgICAgIHJldHVybiBXYXZlVXRpbC50dXRvcmlhbChsZXZlbCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiB0aWVyIDF+TUFYX1RJRVJcbiAgICAgKi9cbiAgICByZXR1cm4gV2F2ZVV0aWwucmFuZG9tQ29uZmlnKGxldmVsLCB0aWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZW5lcmF0ZSB0dXRvcmlhbCBlbmVteSBjb25maWcuXG4gICAqICAgZXZlcnkgZW5lbXkgY29uZmlnIGFyZSBzdGF0aWMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICAgKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fVxuICAgKi9cbiAgc3RhdGljIHR1dG9yaWFsKGxldmVsKSB7XG4gICAgY29uc3Qgd2F2ZUNvbmZpZyA9IFtdO1xuICAgIHN3aXRjaCAobGV2ZWwpIHtcbiAgICBjYXNlIDE6XG4gICAgICAvLyBcIndoYXQgaXMgYmF0dGVyeVwiXG4gICAgICB3YXZlQ29uZmlnLnB1c2goLi4uV2F2ZVV0aWwuZGlzcGF0Y2hCYXR0ZXJ5U29ydGllKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgLy8gXCJsYXVuY2hlciBhbmQgYm9tYmVyXCJcbiAgICAgIHdhdmVDb25maWcucHVzaCguLi5XYXZlVXRpbC5kaXNwYXRjaExhdW5jaGVyU29ydGllKCkpO1xuICAgICAgd2F2ZUNvbmZpZy5wdXNoKC4uLldhdmVVdGlsLmRpc3BhdGNoQm9tYmVyU29ydGllKCkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgLy8gXCJsYXVuY2hlciBhbmQgYW1wbGlmaWVyXCJcbiAgICAgIHdhdmVDb25maWcucHVzaCguLi5XYXZlVXRpbC5kaXNwYXRjaEFtcGxpZmllclNvcnRpZSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIC8vIFwiYm9tYmVyIGFuZCBub2lzZVwiXG4gICAgICB3YXZlQ29uZmlnLnB1c2goLi4uV2F2ZVV0aWwuZGlzcGF0Y2hMYXVuY2hlclNvcnRpZSgpKTtcbiAgICAgIHdhdmVDb25maWcucHVzaCguLi5XYXZlVXRpbC5kaXNwYXRjaEJvbWJlclNvcnRpZSgpKTtcbiAgICAgIHdhdmVDb25maWcucHVzaCguLi5XYXZlVXRpbC5kaXNwYXRjaE5vaXNlU29ydGllKCkpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdW5leHBlY3RlZCBsZXZlbDogJHtsZXZlbH0gaW4gI3R1dG9yaWFsYCk7XG4gICAgfVxuXG4gICAgd2F2ZUNvbmZpZy5wdXNoKC4uLldhdmVVdGlsLmRpc3BhdGNoRGVicmlzU29ydGllKCkpO1xuXG4gICAgcmV0dXJuIHdhdmVDb25maWc7XG4gIH1cblxuICAvKipcbiAgICogZ2VuZXJhdGUgd2F2ZSBjb25maWcgZnJvbSBsZXZlbCBhbmQgdGllclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpZXJcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgcmFuZG9tQ29uZmlnKGxldmVsLCB0aWVyKSB7XG4gICAgY29uc3QgZGVicmlzTGV2ZWwgPSAwO1xuICAgIGNvbnN0IGFtcGxpZmllckxldmVsID0gMDtcbiAgICBjb25zdCBwYXR0ZXJuU2VlZElkID0gTWF0aC5mbG9vcihFTkVNWV9WQVJJQVRJT04gKiBNYXRoLnJhbmRvbSgpICsgMSk7IC8vIDAtOVxuICAgIGxldCB3YXZlQ29uZiA9IFtdO1xuXG4gICAgY29uc3QgcmFuZG9tQ29uZiA9IFdhdmVVdGlsLmdlbmVyYXRlUmFuZG9tUGF0dGVybihsZXZlbCwgdGllciwgcGF0dGVyblNlZWRJZCk7XG4gICAgY29uc3QgZGVicmlzQ29uZiA9IFdhdmVVdGlsLmdlbmVyYXRlRGVicmlzQ29uZihsZXZlbCwgdGllciwgZGVicmlzTGV2ZWwpO1xuICAgIGNvbnN0IGFtcGxpZmllckNvbmYgPSBXYXZlVXRpbC5nZW5lcmF0ZUFtcGxpZmllckNvbmYobGV2ZWwsIHRpZXIsIGFtcGxpZmllckxldmVsKTtcblxuICAgIHdhdmVDb25mID0gd2F2ZUNvbmYuY29uY2F0KHJhbmRvbUNvbmYpO1xuICAgIHdhdmVDb25mID0gd2F2ZUNvbmYuY29uY2F0KGRlYnJpc0NvbmYpO1xuICAgIHdhdmVDb25mID0gd2F2ZUNvbmYuY29uY2F0KGFtcGxpZmllckNvbmYpO1xuXG4gICAgcmV0dXJuIHdhdmVDb25mO1xuICB9XG5cbiAgLyoqXG4gICAqIGdlbmVyYXRlIHdhdmUgY29uZmlnIGJ5IHJhbmRvbSBwYXR0ZXJuU2VlZElkXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGllclxuICAgKiBAcGFyYW0ge251bWJlcn0gcGF0dGVyblNlZWRJZFxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBnZW5lcmF0ZVJhbmRvbVBhdHRlcm4obGV2ZWwsIHRpZXIsIHBhdHRlcm5TZWVkSWQpIHtcbiAgICBjb25zb2xlLmxvZyhgbGV2ZWw6JHtsZXZlbH0sIHRpZXI6JHt0aWVyfSwgcGF0dGVyblNlZWRJZDoke3BhdHRlcm5TZWVkSWR9YCk7IC8vIEBERUxFVEVNRVxuXG4gICAgY29uc3Qgd2F2ZUNvbmZpZyA9IFtdO1xuICAgIHN3aXRjaCAocGF0dGVyblNlZWRJZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHdhdmVDb25maWcucHVzaCguLi5XYXZlVXRpbC5nZW5lcmF0ZUJhdHRlcnlDb25mKGxldmVsLCB0aWVyKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB3YXZlQ29uZmlnLnB1c2goLi4uV2F2ZVV0aWwuZ2VuZXJhdGVMYXVuY2hlckNvbmYobGV2ZWwsIHRpZXIpKTtcbiAgICAgIHdhdmVDb25maWcucHVzaCguLi5XYXZlVXRpbC5nZW5lcmF0ZUJvbWJlckNvbmYobGV2ZWwsIHRpZXIpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHdhdmVDb25maWcucHVzaCguLi5XYXZlVXRpbC5nZW5lcmF0ZUxhdW5jaGVyQ29uZihsZXZlbCwgdGllcikpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgd2F2ZUNvbmZpZy5wdXNoKC4uLldhdmVVdGlsLmdlbmVyYXRlQm9tYmVyQ29uZihsZXZlbCwgdGllcikpO1xuICAgICAgd2F2ZUNvbmZpZy5wdXNoKC4uLldhdmVVdGlsLmdlbmVyYXRlTm9pc2VDb25mKGxldmVsLCB0aWVyKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICB3YXZlQ29uZmlnLnB1c2goLi4uV2F2ZVV0aWwuZ2VuZXJhdGVCb21iZXJDb25mKGxldmVsLCB0aWVyKSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmV4cGVjdGVkIGxldmVsOiAke3BhdHRlcm5TZWVkSWR9IGluICNnZW5lcmF0ZVJhbmRvbUNvbmZgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2F2ZUNvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBFQVNZXG4gICAqICAgZW50cnkgOiBmcm9udFxuICAgKiAgIGhwICAgIDogMlxuICAgKiAgIGNvdW50IDogM1xuICAgKiBIQVJEXG4gICAqICAgZW50cnkgOiBob3Jpem9udGFsXG4gICAqICAgaHAgICAgOiA0XG4gICAqICAgY291bnQgOiA0XG4gICAqIEhVU0g6XG4gICAqICAgZW50cnkgOiBhcm91bmRcbiAgICogICBocCAgICA6IHRpZXIgKiAyXG4gICAqICAgY291bnQgOiA1XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGllclxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBnZW5lcmF0ZUJhdHRlcnlDb25mKGxldmVsLCB0aWVyKSB7XG4gICAgY29uc3QgYXJncyA9IHt9O1xuICAgIHN3aXRjaCAodGllcikge1xuICAgIGNhc2UgRUFTWTpcbiAgICAgIGFyZ3MuZW50cnkgPSAnZnJvbnQnO1xuICAgICAgYXJncy5oaXRQb2ludCA9IDI7XG4gICAgICBhcmdzLmNvdW50ID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgSEFSRDpcbiAgICAgIGFyZ3MuZW50cnkgPSAnaG9yaXpvbnRhbCc7XG4gICAgICBhcmdzLmhpdFBvaW50ID0gNDtcbiAgICAgIGFyZ3MuY291bnQgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBIVVNIOlxuICAgICAgYXJncy5lbnRyeSA9ICdhcm91bmQnO1xuICAgICAgYXJncy5oaXRQb2ludCA9IDIgKiB0aWVyO1xuICAgICAgYXJncy5jb3VudCA9IDU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHRpZXI6ICR7dGllcn1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB3YXZlQ29uZiA9IFdhdmVVdGlsLmRpc3BhdGNoQmF0dGVyeVNvcnRpZShhcmdzKTtcblxuICAgIHJldHVybiB3YXZlQ29uZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFQVNZXG4gICAqICAgZW50cnkgOiBmcm9udFxuICAgKiAgIGhwICAgIDogMlxuICAgKiAgIGNvdW50IDogM1xuICAgKiBIQVJEXG4gICAqICAgZW50cnkgOiBib3RoXG4gICAqICAgaHAgICAgOiA0XG4gICAqICAgY291bnQgOiA0XG4gICAqIEhVU0g6XG4gICAqICAgZW50cnkgOiBhcm91bmRcbiAgICogICBocCAgICA6IDRcbiAgICogICBjb3VudCA6IDZcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aWVyXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGdlbmVyYXRlQm9tYmVyQ29uZihsZXZlbCwgdGllcikge1xuICAgIGNvbnN0IGFyZ3MgPSB7fTtcblxuICAgIHN3aXRjaCAodGllcikge1xuICAgIGNhc2UgRUFTWTpcbiAgICAgIGFyZ3MuZW50cnkgPSAnZnJvbnQnO1xuICAgICAgYXJncy5oaXRQb2ludCA9IDI7XG4gICAgICBhcmdzLmNvdW50ID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgSEFSRDpcbiAgICAgIGFyZ3MuZW50cnkgPSAnaG9yaXpvbnRhbCc7XG4gICAgICBhcmdzLmhpdFBvaW50ID0gNDtcbiAgICAgIGFyZ3MuY291bnQgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBIVVNIOlxuICAgICAgYXJncy5lbnRyeSA9ICdhcm91bmQnO1xuICAgICAgYXJncy5oaXRQb2ludCA9IDQ7XG4gICAgICBhcmdzLmNvdW50ID0gNjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgdGllcjogJHt0aWVyfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHdhdmVDb25mID0gV2F2ZVV0aWwuZGlzcGF0Y2hCb21iZXJTb3J0aWUoYXJncyk7XG5cbiAgICByZXR1cm4gd2F2ZUNvbmY7XG4gIH1cblxuICAvKipcbiAgICogRUFTWVxuICAgKiAgIGVudHJ5IDogZnJvbnRcbiAgICogICBocCAgICA6IDRcbiAgICogICBjb3VudCA6IDNcbiAgICogSEFSRFxuICAgKiAgIGVudHJ5IDogZnJvbnRcbiAgICogICBocCAgICA6IDZcbiAgICogICBjb3VudCA6IDRcbiAgICogSFVTSDpcbiAgICogICBlbnRyeSA6IGZyb250LXZlcnRpY2FsXG4gICAqICAgaHAgICAgOiA4XG4gICAqICAgY291bnQgOiA2XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGllclxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBnZW5lcmF0ZUxhdW5jaGVyQ29uZihsZXZlbCwgdGllcikge1xuICAgIGNvbnN0IGFyZ3MgPSB7fTtcblxuICAgIHN3aXRjaCAodGllcikge1xuICAgIGNhc2UgRUFTWTpcbiAgICAgIGFyZ3MuZW50cnkgPSAnZnJvbnQnO1xuICAgICAgYXJncy5oaXRQb2ludCA9IDQ7XG4gICAgICBhcmdzLmNvdW50ID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgSEFSRDpcbiAgICAgIGFyZ3MuZW50cnkgPSAndmVydGljYWwnO1xuICAgICAgYXJncy5oaXRQb2ludCA9IDY7XG4gICAgICBhcmdzLmNvdW50ID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgSFVTSDpcbiAgICAgIGFyZ3MuZW50cnkgPSAndmVydGljYWwnO1xuICAgICAgYXJncy5oaXRQb2ludCA9IDg7XG4gICAgICBhcmdzLmNvdW50ID0gNjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgdGllcjogJHt0aWVyfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHdhdmVDb25mID0gV2F2ZVV0aWwuZGlzcGF0Y2hMYXVuY2hlclNvcnRpZShhcmdzKTtcblxuICAgIHJldHVybiB3YXZlQ29uZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFQVNZXG4gICAqICAgZW50cnkgOiBmcm9udFxuICAgKiAgIGhwICAgIDogNFxuICAgKiAgIGNvdW50IDogM1xuICAgKiBIQVJEXG4gICAqICAgZW50cnkgOiBmcm9udFxuICAgKiAgIGhwICAgIDogNlxuICAgKiAgIGNvdW50IDogNFxuICAgKiBIVVNIOlxuICAgKiAgIGVudHJ5IDogZnJvbnQtdmVydGljYWxcbiAgICogICBocCAgICA6IDhcbiAgICogICBjb3VudCA6IDZcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aWVyXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGdlbmVyYXRlTm9pc2VDb25mKGxldmVsLCB0aWVyKSB7XG4gICAgY29uc3QgYXJncyA9IHt9O1xuXG4gICAgc3dpdGNoICh0aWVyKSB7XG4gICAgY2FzZSBFQVNZOlxuICAgICAgYXJncy5lbnRyeSA9ICdmcm9udCc7XG4gICAgICBhcmdzLmhpdFBvaW50ID0gNDtcbiAgICAgIGFyZ3MuY291bnQgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBIQVJEOlxuICAgICAgYXJncy5lbnRyeSA9ICdmcm9udCc7XG4gICAgICBhcmdzLmhpdFBvaW50ID0gNjtcbiAgICAgIGFyZ3MuY291bnQgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBIVVNIOlxuICAgICAgYXJncy5lbnRyeSA9ICdmcm9udCc7XG4gICAgICBhcmdzLmhpdFBvaW50ID0gODtcbiAgICAgIGFyZ3MuY291bnQgPSA2O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCB0aWVyOiAke3RpZXJ9YCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2F2ZUNvbmYgPSBXYXZlVXRpbC5kaXNwYXRjaE5vaXNlU29ydGllKGFyZ3MpO1xuXG4gICAgcmV0dXJuIHdhdmVDb25mO1xuICB9XG5cbiAgc3RhdGljIGdlbmVyYXRlRGVicmlzQ29uZihsZXZlbCwgdGllciwgZGVicmlzTGV2ZWwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzdGF0aWMgZ2VuZXJhdGVBbXBsaWZpZXJDb25mKGxldmVsLCB0aWVyLCBhbXBsaWZpZXJMZXZlbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYXJnc1xuICAgKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fVxuICAgKi9cbiAgc3RhdGljIGRpc3BhdGNoQmF0dGVyeVNvcnRpZShhcmdzID0ge30pIHtcbiAgICBjb25zdFxuICAgICAge1xuICAgICAgICBkZWxheU1zID0gMCxcbiAgICAgICAgc3Bhbk1zID0gODAwLFxuICAgICAgICBjb3VudCA9IDEsXG4gICAgICAgIGVudHJ5LFxuICAgICAgICBoaXRQb2ludCA9IDFcbiAgICAgIH0gPSBhcmdzO1xuXG4gICAgY29uc3Qgd2F2ZUNvbmYgPSBXYXZlVXRpbC5kaXNwYXRjaFNvcnRpZSh7XG4gICAgICBlbmVteUNsYXNzOiBCYXR0ZXJ5LFxuICAgICAgZGVsYXlNcyxcbiAgICAgIHNwYW5NcyxcbiAgICAgIGNvdW50LFxuICAgICAgZW50cnksXG4gICAgICBoaXRQb2ludCxcbiAgICB9KTtcblxuICAgIHJldHVybiB3YXZlQ29uZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYXJnc1xuICAgKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fVxuICAgKi9cbiAgc3RhdGljIGRpc3BhdGNoTGF1bmNoZXJTb3J0aWUoYXJncyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgZGVsYXlNcyA9IDAsXG4gICAgICBzcGFuWSA9IDEwMCxcbiAgICAgIGNvdW50ID0gMixcbiAgICAgIGVudHJ5ID0gJ2Zyb250JyxcbiAgICAgIHggPSBTVEFHRV9GUkFNRV9SSUdIVCxcbiAgICAgIHkgPSBTVEFHRV9FREdFX1RPUCxcbiAgICAgIGhpdFBvaW50ID0gMSxcbiAgICB9ID0gYXJncztcblxuICAgIGNvbnN0IHdhdmVDb25mID0gV2F2ZVV0aWwuZGlzcGF0Y2hTb3J0aWUoe1xuICAgICAgZW5lbXlDbGFzczogTGF1bmNoZXIsXG4gICAgICBkZWxheU1zLFxuICAgICAgc3BhblksXG4gICAgICBjb3VudCxcbiAgICAgIGVudHJ5LFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBoaXRQb2ludCxcbiAgICB9KTtcblxuICAgIHJldHVybiB3YXZlQ29uZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYXJnc1xuICAgKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fVxuICAgKi9cbiAgc3RhdGljIGRpc3BhdGNoQm9tYmVyU29ydGllKGFyZ3MgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlbGF5TXMgPSAwLFxuICAgICAgc3BhblkgPSAxMDAsXG4gICAgICBzcGFuTXMgPSA4MDAsXG4gICAgICBjb3VudCA9IDIsXG4gICAgICBlbnRyeSA9ICdmcm9udCcsXG4gICAgICB4ID0gU1RBR0VfRlJBTUVfUklHSFQsXG4gICAgICB5ID0gU1RBR0VfRURHRV9UT1AsXG4gICAgfSA9IGFyZ3M7XG5cbiAgICBjb25zdCB3YXZlQ29uZiA9IFdhdmVVdGlsLmRpc3BhdGNoU29ydGllKHtcbiAgICAgIGVuZW15Q2xhc3M6IEJvbWJlcixcbiAgICAgIGRlbGF5TXMsXG4gICAgICBzcGFuTXMsXG4gICAgICBjb3VudCxcbiAgICAgIGVudHJ5LFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBzcGFuWSxcbiAgICB9KTtcblxuICAgIHJldHVybiB3YXZlQ29uZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYXJnc1xuICAgKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fVxuICAgKi9cbiAgc3RhdGljIGRpc3BhdGNoQW1wbGlmaWVyU29ydGllKGFyZ3MgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlbGF5TXMgPSAwLFxuICAgICAgc3BhblkgPSAxMjAsXG4gICAgICBzcGFuTXMgPSA4MDAsXG4gICAgICBjb3VudCA9IDIsXG4gICAgICB4ID0gU1RBR0VfRlJBTUVfUklHSFQsXG4gICAgICB5ID0gMTIwLFxuICAgICAgaGl0UG9pbnQgPSAzLFxuICAgIH0gPSBhcmdzO1xuXG4gICAgY29uc3Qgd2F2ZUNvbmYgPSBXYXZlVXRpbC5kaXNwYXRjaFNvcnRpZSh7XG4gICAgICBlbmVteUNsYXNzOiBBbXBsaWZpZXIsXG4gICAgICBkZWxheU1zLFxuICAgICAgc3Bhbk1zLFxuICAgICAgc3BhblksXG4gICAgICBjb3VudCxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgaGl0UG9pbnQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gd2F2ZUNvbmY7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3NcbiAgICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAgICovXG4gIHN0YXRpYyBkaXNwYXRjaE5vaXNlU29ydGllKGFyZ3MgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNwYW5ZID0gMTAwLFxuICAgICAgc3Bhbk1zID0gODAwLFxuICAgICAgY291bnQgPSAxLFxuICAgICAgZW50cnkgPSAnZnJvbnQnLFxuICAgICAgeCA9IFNUQUdFX0ZSQU1FX1JJR0hULFxuICAgICAgeSA9IFNUQUdFX0VER0VfVE9QLFxuICAgICAgaGl0UG9pbnQgPSAxLFxuICAgIH0gPSBhcmdzO1xuXG4gICAgY29uc3Qgd2F2ZUNvbmYgPSBXYXZlVXRpbC5kaXNwYXRjaFNvcnRpZSh7XG4gICAgICBlbmVteUNsYXNzOiBOb2lzZSxcbiAgICAgIHNwYW5NcyxcbiAgICAgIGVudHJ5LFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBzcGFuWSxcbiAgICAgIGNvdW50LFxuICAgICAgaGl0UG9pbnQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gd2F2ZUNvbmY7XG4gIH1cblxuICAvKipcbiAgICogZ2VuZXJhdGUgZGVicmlzIHJhaW4uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzXG4gICAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59XG4gICAqL1xuICBzdGF0aWMgZGlzcGF0Y2hEZWJyaXNTb3J0aWUoYXJncyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgbnVtYmVyID0gMTAsXG4gICAgICB4ID0gU1RBR0VfRlJBTUVfUklHSFQsXG4gICAgICB5ID0gU1RBR0VfTUlERExFX1ksXG4gICAgICBkZWxheU1zID0gMTAwLFxuICAgICAgc3Bhbk1zID0gMjAwMCxcbiAgICAgIHNwcmVhZERlZ3JlZSA9IDEwLFxuICAgICAgc3BlZWQgPSAtNyxcbiAgICAgIGhpdFBvaW50ID0gMSxcbiAgICB9ID0gYXJncztcblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlcjsgaSsrKSB7XG4gICAgICBjb25zdCBfeSA9IE1hdGhVdGlsLm5vcm1hbFJhbmRvbSh5LCBTVEFHRV9NSURETEVfWSAqIDAuNik7XG4gICAgICBjb25zdCBhbmdsZURlZ3JlZSA9IE1hdGhVdGlsLm5vcm1hbFJhbmRvbSgwLCBzcHJlYWREZWdyZWUpO1xuICAgICAgY29uc3QgY29uZiA9IHtcbiAgICAgICAgZW5lbXlDbGFzczogRGVicmlzLFxuICAgICAgICBkZWxheU1zOiBkZWxheU1zICsgKGkgKiBzcGFuTXMgLyBudW1iZXIpLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgeCxcbiAgICAgICAgICB5OiBfeSxcbiAgICAgICAgICBzcGVlZCxcbiAgICAgICAgICBhbmdsZURlZ3JlZSxcbiAgICAgICAgICBoaXRQb2ludCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICByZXN1bHQucHVzaChjb25mKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIGRpc3BhdGNoU29ydGllKGFyZ3MpIHtcbiAgICBjb25zdCBlbmVteUNsYXNzID0gYXJncy5lbmVteUNsYXNzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRlbGF5TXMgPSAwLFxuICAgICAgc3Bhbk1zID0gMCxcbiAgICAgIHNwYW5YID0gMCxcbiAgICAgIHNwYW5ZID0gMCxcbiAgICAgIGNvdW50ID0gMSxcbiAgICAgIGhpdFBvaW50ID0gMSxcbiAgICAgIGVudHJ5ID0gJ2Zyb250J1xuICAgIH0gPSBhcmdzO1xuICAgIGxldCBlbnRyeVBvaW50ID0gZW50cnk7XG5cbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuXG4gICAgY29uc3QgcmFuZG9tMHRvMyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuXG4gICAgc3dpdGNoIChlbnRyeSkge1xuICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgIGVudHJ5UG9pbnQgPSAocmFuZG9tMHRvMyAlIDIgPT09IDApID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICBlbnRyeVBvaW50ID0gKHJhbmRvbTB0bzMgJSAyID09PSAwKSA/ICdmcm9udCcgOiAnYmFjayc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2Fyb3VuZCc6XG4gICAgICBzd2l0Y2ggKHJhbmRvbTB0bzMpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZW50cnlQb2ludCA9ICd0b3AnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgZW50cnlQb2ludCA9ICdib3R0b20nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgZW50cnlQb2ludCA9ICdmcm9udCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBlbnRyeVBvaW50ID0gJ2JhY2snO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZW50cnlQb2ludCkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICB4ID0gTWF0aFV0aWwubm9ybWFsUmFuZG9tKFNUQUdFX01JRERMRV9YLCAyMDApO1xuICAgICAgeSA9IFNUQUdFX0ZSQU1FX1RPUDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICB4ID0gTWF0aFV0aWwubm9ybWFsUmFuZG9tKFNUQUdFX01JRERMRV9YLCAyMDApO1xuICAgICAgeSA9IFNUQUdFX0ZSQU1FX0JPVFRPTTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Zyb250JzpcbiAgICAgIHggPSBTVEFHRV9GUkFNRV9SSUdIVDtcbiAgICAgIHkgPSBNYXRoVXRpbC5ub3JtYWxSYW5kb20oU1RBR0VfTUlERExFX1ksIDEwMCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdiYWNrJzpcbiAgICAgIHggPSBTVEFHRV9GUkFNRV9MRUZUO1xuICAgICAgeSA9IE1hdGhVdGlsLm5vcm1hbFJhbmRvbShTVEFHRV9NSURETEVfWSwgMTAwKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHdhdmVDb25mID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbmYgPSB7XG4gICAgICAgIGVuZW15Q2xhc3M6IGVuZW15Q2xhc3MsXG4gICAgICAgIGRlbGF5TXM6IGRlbGF5TXMgKyBzcGFuTXMgKiBpLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgeDogeCArIHNwYW5YICogaSxcbiAgICAgICAgICB5OiB5ICsgc3BhblkgKiBpLFxuICAgICAgICAgIGhpdFBvaW50OiBoaXRQb2ludCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICB3YXZlQ29uZi5wdXNoKGNvbmYpO1xuICAgIH1cblxuICAgIHJldHVybiB3YXZlQ29uZjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXZlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL1dhdmVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9FbmVteSc7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi9NYXRoVXRpbCc7XG5pbXBvcnQge1xuICBkZCxcbiAgREVCUklTX0hFSUdIVCxcbiAgREVCUklTX1dJRFRILFxuICBTQ09SRVxufSBmcm9tICcuL0NvbnN0YW50JztcbmltcG9ydCBIdWUgZnJvbSAnLi9IdWUnO1xuXG4vKipcbiAqIEVuZW15IFwiRGVicmlzXCIgY2xhc3MuXG4gKiBvbmx5IG1vdmUgd2l0aG91dCBzaG90LlxuICogY29tZSBmcm9tIG91dHNpZGUgb2Ygc3RhZ2UsIGdvIG9wcHNpdGUgYW5kIGRpZS5cbiAqL1xuY2xhc3MgRGVicmlzIGV4dGVuZHMgRW5lbXkge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0geCwgeSwgc3RhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLnNwZWVkID0gYXJncy5zcGVlZDtcbiAgICB0aGlzLmFuZ2xlRGVncmVlID0gYXJncy5hbmdsZURlZ3JlZTtcbiAgICB0aGlzLmFuZ2xlUmFkaWFuID0gTWF0aFV0aWwuZDJyKHRoaXMuYW5nbGVEZWdyZWUpO1xuICAgIHRoaXMudlggPSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5hbmdsZVJhZGlhbik7XG4gICAgdGhpcy52WSA9IHRoaXMuc3BlZWQgKiBNYXRoLnNpbih0aGlzLmFuZ2xlUmFkaWFuKTtcbiAgICB0aGlzLmRlcGxveSgpO1xuICAgIHRoaXMuYXNzaWduVGlja0xpc3RlbmVyKCk7XG4gIH1cblxuICBkZXBsb3koKSB7XG4gICAgdGhpcy5zaGFwZSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuc2hhcGUuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwoSHVlLmdldEh1ZSgpKVxuICAgICAgLmRyYXdSZWN0KDAgLSBERUJSSVNfV0lEVEggLyAyLCAwIC0gREVCUklTX0hFSUdIVCAvIDIsIERFQlJJU19XSURUSCwgREVCUklTX0hFSUdIVCk7XG5cbiAgICB0aGlzLmhpdEFyZWEgPSB0aGlzLnNoYXBlLmNsb25lKHRydWUpO1xuICAgIHRoaXMuaGl0QXJlYS5hbHBoYSA9IDA7XG4gICAgdGhpcy50ZXh0ID0gbmV3IGNyZWF0ZWpzLlRleHQoZGQoJ2RlYnJpcycpLCAnYm9sZCA5cHggQXJpYWwnLCAnbGlnaHRncmF5Jyk7XG5cbiAgICB0aGlzLnVwZGF0ZVBvcygpO1xuXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnNoYXBlKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuaGl0QXJlYSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnRleHQpO1xuICB9XG5cbiAgYXNzaWduVGlja0xpc3RlbmVyKCkge1xuICAgIHRoaXMuY2xvY2sub25UaWNrKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5hbGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hhcGUucm90YXRpb24gKz0gMTI7XG5cbiAgICAgIGlmICh0aGlzLmlzRnJhbWVPdXQpIHtcbiAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWJyaXMgc2hvdCBub3RoaW5nLlxuICAgKi9cbiAgdHJpZ2dlcigpIHtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMudlg7XG4gICAgdGhpcy55ICs9IHRoaXMudlk7XG4gICAgdGhpcy51cGRhdGVQb3MoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWJyaXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9EZWJyaXMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15JztcbmltcG9ydCB7XG4gIEJPTUJFUl9IRUlHSFQsXG4gIEJPTUJFUl9MQVNUX1NIT1RfQ09VTlQsXG4gIEJPTUJFUl9MQVNUX1NIT1RfREVQVEgsXG4gIEJPTUJFUl9TUEVFRCxcbiAgQk9NQkVSX1dJRFRILFxuICBkZFxufSBmcm9tICcuL0NvbnN0YW50JztcbmltcG9ydCBNYXRoVXRpbCBmcm9tICcuL01hdGhVdGlsJztcbmltcG9ydCBGaXJlV29ya3MgZnJvbSAnLi9GaXJlV29ya3MnO1xuaW1wb3J0IEFpckNyYWZ0IGZyb20gJy4vQWlyQ3JhZnQnO1xuaW1wb3J0IEh1ZSBmcm9tICcuL0h1ZSc7XG5cbi8qKlxuICogRW5lbXkgXCJCb21iZXJcIiBjbGFzcy5cbiAqIGhlIGRpZXMgbmFzdHkuXG4gKi9cbmNsYXNzIEJvbWJlciBleHRlbmRzIEVuZW15IHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIHgsIHksIHN0YWdlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy50aGV0YSA9IDA7XG4gICAgdGhpcy5kZXBsb3koKTtcbiAgICB0aGlzLmFzc2lnblRpY2tMaXN0ZW5lcigpO1xuICB9XG5cbiAgYXNzaWduVGlja0xpc3RlbmVyKCkge1xuICAgIHRoaXMuY2xvY2sub25UaWNrKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5hbGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnRleHQudGV4dCA9IGRkKGBib21iOntocDogJHt0aGlzLmhpdFBvaW50fWApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGZpcmluZyBjb250cm9sIGtpY2tlZCBldmVyeSB0aWNrXG4gICAqL1xuICB0cmlnZ2VyKCkge1xuXG4gIH1cblxuICAvKipcbiAgICogbW92aW5nIGNvbnRyb2wga2lja2VkIGV2ZXJ5IHRpY2tcbiAgICovXG4gIG1vdmUoKSB7XG4gICAgY29uc3QgYWlyQ3JhZnQgPSBBaXJDcmFmdC5nZXRJbnN0YW5jZSgpO1xuXG4gICAgaWYgKCFhaXJDcmFmdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aFV0aWwuZ2V0QW5nbGVEZWdyZWUodGhpcy54LCB0aGlzLnksIGFpckNyYWZ0LngsIGFpckNyYWZ0LnkpO1xuICAgIGNvbnN0IHNpblRoZXRhID0gMSAtIE1hdGguc2luKHRoaXMudGhldGEpO1xuICAgIGNvbnN0IHNwZWVkID0gQk9NQkVSX1NQRUVEO1xuXG4gICAgdGhpcy54IC09IHNwZWVkICogc2luVGhldGEgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgdGhpcy55IC09IHNwZWVkICogc2luVGhldGEgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgdGhpcy50aGV0YSArPSBNYXRoVXRpbC5kMnIoMSk7XG5cbiAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hc3R5IGxhc3RTaG90XG4gICAqL1xuICBsYXN0KCkge1xuICAgIEZpcmVXb3Jrcy5zdW5GbG93ZXIoXG4gICAgICB0aGlzLngsXG4gICAgICB0aGlzLnksXG4gICAgICBCT01CRVJfTEFTVF9TSE9UX0NPVU5ULFxuICAgICAgQk9NQkVSX0xBU1RfU0hPVF9ERVBUSFxuICAgICk7XG4gIH1cblxuICBkZXBsb3koKSB7XG4gICAgdGhpcy5zaGFwZSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuc2hhcGUuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwoSHVlLmdldEh1ZSgpKVxuICAgICAgLmRyYXdSZWN0KDAgLSBCT01CRVJfV0lEVEggLyAyLCAwIC0gQk9NQkVSX0hFSUdIVCAvIDIsIEJPTUJFUl9XSURUSCwgQk9NQkVSX0hFSUdIVCk7XG5cbiAgICB0aGlzLmhpdEFyZWEgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICB0aGlzLmhpdEFyZWEuYWxwaGEgPSAwO1xuICAgIHRoaXMuaGl0QXJlYS5ncmFwaGljc1xuICAgICAgLmJlZ2luRmlsbCgncHVycGxlJylcbiAgICAgIC5kcmF3UmVjdCgtQk9NQkVSX1dJRFRIIC8gMiwgLUJPTUJFUl9IRUlHSFQgLyAyLCBCT01CRVJfV0lEVEgsIEJPTUJFUl9IRUlHSFQpO1xuXG4gICAgdGhpcy50ZXh0ID0gbmV3IGNyZWF0ZWpzLlRleHQoZGQoJ2JvbWJlcicpLCAnYm9sZCA5cHggQXJpYWwnLCAnd2hpdGUnKTtcblxuICAgIHRoaXMudXBkYXRlUG9zKCk7XG5cbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuc2hhcGUpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5oaXRBcmVhKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMudGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9tYmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2xhc3MvQm9tYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgRW5lbXlCdWxsZXQgZnJvbSAnLi9FbmVteUJ1bGxldCc7XG5pbXBvcnQge1xuICBHVU5QT1dERVJfQlVMTEVUX1JBRElVUyxcbiAgR1VOUE9XREVSX0JVTExFVF9TUEVFRCxcbn0gZnJvbSAnLi9Db25zdGFudCc7XG5pbXBvcnQgQW1wbGlmaWVyIGZyb20gJy4vQW1wbGlmaWVyJztcbmltcG9ydCBIdWUgZnJvbSAnLi9IdWUnO1xuXG4vKipcbiAqIG9ubHkgdXNlIGZvciBGaXJlV29ya3MuXG4gKiBAcmVxdWlyZXMgQW1wbGlmaWVyXG4gKi9cbmNsYXNzIEd1blBvd2RlciBleHRlbmRzIEVuZW15QnVsbGV0IHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIHgsIHksIHN0YWdlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy5hbmdsZSA9IGFyZ3MuYW5nbGU7XG4gICAgdGhpcy5kZWxheU1zID0gYXJncy5kZWxheU1zO1xuICAgIHRoaXMuc3BlZWQgPSBHVU5QT1dERVJfQlVMTEVUX1NQRUVEICogKGFyZ3Muc3BlZWRDb2VmZmljaWVudCB8fCAxKTtcbiAgICB0aGlzLmRlcGxveSgpO1xuICAgIHRoaXMuYXNzaWduVGlja0xpc3RlbmVyKCk7XG4gIH1cblxuICBhc3NpZ25UaWNrTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jbG9jay5vblRpY2soKCkgPT4ge1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcbiAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy5hbmdsZSk7XG4gICAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICAgICAgdGhpcy5nZXRPdXRIYW5kbGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBkZXBsb3koKSB7XG4gICAgY29uc3QgYW1wbGlmeSA9IEFtcGxpZmllci5nZXRSYXRpbygpO1xuXG4gICAgdGhpcy5zaGFwZSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuc2hhcGUuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwoSHVlLmdldEh1ZSgpKVxuICAgICAgLmRyYXdDaXJjbGUoMCwgMCwgYW1wbGlmeSAqIEdVTlBPV0RFUl9CVUxMRVRfUkFESVVTKTtcblxuICAgIHRoaXMudGV4dC50ZXh0ID0gJyc7XG5cbiAgICB0aGlzLmhpdEFyZWEgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICB0aGlzLmhpdEFyZWEuYWxwaGEgPSAwO1xuICAgIHRoaXMuaGl0QXJlYS5ncmFwaGljc1xuICAgICAgLmJlZ2luRmlsbCgncHVycGxlJylcbiAgICAgIC5kcmF3Q2lyY2xlKDAsIDAsIGFtcGxpZnkgKiBHVU5QT1dERVJfQlVMTEVUX1JBRElVUyk7XG5cbiAgICB0aGlzLnVwZGF0ZVBvcygpO1xuXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnNoYXBlKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuaGl0QXJlYSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEd1blBvd2RlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0d1blBvd2Rlci5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IEVuZW15IGZyb20gJy4vRW5lbXknO1xuaW1wb3J0IEVuZW15QmF0dGVyeUJ1bGxldCBmcm9tICcuL0VuZW15QmF0dGVyeUJ1bGxldCc7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi9NYXRoVXRpbCc7XG5pbXBvcnQge1xuICBCQVRURVJZX0hFSUdIVCxcbiAgQkFUVEVSWV9XSURUSCxcbiAgZGQsXG4gIFNUQUdFX0VER0VfQk9UVE9NLFxuICBTVEFHRV9FREdFX0xFRlQsXG4gIFNUQUdFX0VER0VfUklHSFQsXG4gIFNUQUdFX0VER0VfVE9QLFxufSBmcm9tICcuL0NvbnN0YW50JztcbmltcG9ydCBBaXJDcmFmdCBmcm9tICcuL0FpckNyYWZ0JztcbmltcG9ydCBIdWUgZnJvbSAnLi9IdWUnO1xuXG4vKipcbiAqIEVuZW15IFwiQmF0dGVyeVwiIGNsYXNzLlxuICogc2hvb3QgYSBidWxsZXQgYXQgeW91LlxuICovXG5jbGFzcyBCYXR0ZXJ5IGV4dGVuZHMgRW5lbXkge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0geCwgeVxuICAgKi9cbiAgY29uc3RydWN0b3IoYXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMuZGlyZWN0aW9uWCA9IDE7XG4gICAgdGhpcy5kaXJlY3Rpb25ZID0gMTtcbiAgICB0aGlzLmRlcGxveSgpO1xuICAgIHRoaXMuYXNzaWduVGlja0xpc3RlbmVyKCk7XG4gIH1cblxuICBhc3NpZ25UaWNrTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jbG9jay5vblRpY2soKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGV4dC50ZXh0ID0gZGQoYGJhdHRlcnk6e2hwOiAke3RoaXMuaGl0UG9pbnR9YCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZmlyaW5nIGNvbnRyb2wga2lja2VkIGV2ZXJ5IHRpY2tcbiAgICovXG4gIHRyaWdnZXIoKSB7XG4gICAgaWYgKHRoaXMuY2xvY2suZ2V0VGljaygpICUgMTIwICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYWlyQ3JhZnQgPSBBaXJDcmFmdC5nZXRJbnN0YW5jZSgpO1xuXG4gICAgY29uc3QgdGhldGEgPSBNYXRoVXRpbC5nZXRBbmdsZURlZ3JlZShcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIGFpckNyYWZ0LngsXG4gICAgICBhaXJDcmFmdC55XG4gICAgKTtcbiAgICB0aGlzLnNoYXBlLnJvdGF0aW9uID0gTWF0aFV0aWwucjJkKHRoZXRhKTtcblxuICAgIGNvbnN0IHNoYWtlID0gTWF0aFV0aWwuZDJyKDMpO1xuICAgIG5ldyBFbmVteUJhdHRlcnlCdWxsZXQoe1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgYW5nbGU6IHRoZXRhLFxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXG4gICAgfSk7XG5cbiAgICBuZXcgRW5lbXlCYXR0ZXJ5QnVsbGV0KHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIGFuZ2xlOiB0aGV0YSArIHNoYWtlLFxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXG4gICAgfSk7XG5cbiAgICBuZXcgRW5lbXlCYXR0ZXJ5QnVsbGV0KHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIGFuZ2xlOiB0aGV0YSAtIHNoYWtlLFxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogbW92aW5nIGNvbnRyb2wga2lja2VkIGV2ZXJ5IHRpY2tcbiAgICovXG4gIG1vdmUoKSB7XG4gICAgdGhpcy53YWxrQXJvdW5kKFNUQUdFX0VER0VfTEVGVCwgU1RBR0VfRURHRV9SSUdIVCwgU1RBR0VfRURHRV9UT1AsIFNUQUdFX0VER0VfQk9UVE9NKTtcbiAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICB9XG5cbiAgd2Fsa0Fyb3VuZChtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uWCA9PT0gMSAmJiB0aGlzLnggPj0gbWF4WCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb25YID0gLTE7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvblggPT09IC0xICYmIHRoaXMueCA8PSBtaW5YKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvblggPSAxO1xuICAgIH1cbiAgICB0aGlzLnggKz0gdGhpcy5kaXJlY3Rpb25YO1xuXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uWSA9PT0gMSAmJiB0aGlzLnkgPj0gbWF4WSkge1xuICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gLTE7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvblkgPT09IC0xICYmIHRoaXMueSA8PSBtaW5ZKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvblkgPSAxO1xuICAgIH1cbiAgICB0aGlzLnkgKz0gdGhpcy5kaXJlY3Rpb25ZO1xuICB9XG5cbiAgZGVwbG95KCkge1xuICAgIHRoaXMuc2hhcGUgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICB0aGlzLnNoYXBlLmdyYXBoaWNzLmJlZ2luRmlsbChIdWUuZ2V0SHVlKCkpLmRyYXdSZWN0KDAgLSBCQVRURVJZX1dJRFRIIC8gMiwgMCAtIEJBVFRFUllfSEVJR0hUIC8gMiwgQkFUVEVSWV9XSURUSCwgQkFUVEVSWV9IRUlHSFQpO1xuXG4gICAgdGhpcy5oaXRBcmVhID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgdGhpcy5oaXRBcmVhLmFscGhhID0gMDtcbiAgICB0aGlzLmhpdEFyZWEuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwoJ3B1cnBsZScpXG4gICAgICAuZHJhd1JlY3QoLUJBVFRFUllfV0lEVEggLyAyLCAtQkFUVEVSWV9IRUlHSFQgLyAyLCBCQVRURVJZX1dJRFRILCBCQVRURVJZX0hFSUdIVCk7XG5cbiAgICB0aGlzLnRleHQgPSBuZXcgY3JlYXRlanMuVGV4dChkZCgnYmF0dGVyeScpLCAnYm9sZCA5cHggQXJpYWwnLCAnYmxhY2snKTtcblxuICAgIHRoaXMudXBkYXRlUG9zKCk7XG5cbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuc2hhcGUpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5oaXRBcmVhKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMudGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmF0dGVyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0JhdHRlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBFbmVteUJ1bGxldCBmcm9tICcuL0VuZW15QnVsbGV0JztcbmltcG9ydCB7XG4gIEJBVFRFUllfQlVMTEVUX1NQRUVELFxuICBCQVRURVJZX0JVTExFVF9SQURJVVMsXG59IGZyb20gJy4vQ29uc3RhbnQnO1xuaW1wb3J0IEFtcGxpZmllciBmcm9tICcuL0FtcGxpZmllcic7XG5pbXBvcnQgSHVlIGZyb20gJy4vSHVlJztcblxuLyoqXG4gKiBlbmVteSBiYXR0ZXJ5IHNob290IGl0LlxuICovXG5jbGFzcyBFbmVteUJhdHRlcnlCdWxsZXQgZXh0ZW5kcyBFbmVteUJ1bGxldCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGFyZ3MgLSB4LCB5LCBzdGFnZVxuICAgKi9cbiAgY29uc3RydWN0b3IoYXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMuYW5nbGUgPSBhcmdzLmFuZ2xlO1xuICAgIHRoaXMuZGVwbG95KCk7XG4gICAgdGhpcy5hc3NpZ25UaWNrTGlzdGVuZXIoKTtcbiAgfVxuXG4gIGFzc2lnblRpY2tMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmNsb2NrLm9uVGljaygoKSA9PiB7XG4gICAgICB0aGlzLnggLT0gQkFUVEVSWV9CVUxMRVRfU1BFRUQgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcbiAgICAgIHRoaXMueSAtPSBCQVRURVJZX0JVTExFVF9TUEVFRCAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xuICAgICAgdGhpcy51cGRhdGVQb3MoKTtcbiAgICAgIHRoaXMuZ2V0T3V0SGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVwbG95KCkge1xuICAgIGNvbnN0IGFtcGxpZnkgPSBBbXBsaWZpZXIuZ2V0UmF0aW8oKTtcblxuICAgIHRoaXMuc2hhcGUgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICB0aGlzLnNoYXBlLmdyYXBoaWNzXG4gICAgICAuYmVnaW5GaWxsKEh1ZS5nZXRIdWUoKSlcbiAgICAgIC5kcmF3Q2lyY2xlKDAsIDAsIGFtcGxpZnkgKiBCQVRURVJZX0JVTExFVF9SQURJVVMpO1xuXG4gICAgdGhpcy50ZXh0LnRleHQgPSAnJztcblxuICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuaGl0QXJlYS5hbHBoYSA9IDA7XG4gICAgdGhpcy5oaXRBcmVhLmdyYXBoaWNzXG4gICAgICAuYmVnaW5GaWxsKCdwdXJwbGUnKVxuICAgICAgLmRyYXdDaXJjbGUoMCwgMCwgYW1wbGlmeSAqIEJBVFRFUllfQlVMTEVUX1JBRElVUyk7XG5cbiAgICB0aGlzLnVwZGF0ZVBvcygpO1xuXG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnNoYXBlKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuaGl0QXJlYSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZW15QmF0dGVyeUJ1bGxldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0VuZW15QmF0dGVyeUJ1bGxldC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IEVuZW15IGZyb20gJy4vRW5lbXknO1xuaW1wb3J0IHtcbiAgTEFVTkNIRVJfV0lEVEgsXG4gIExBVU5DSEVSX0hFSUdIVCxcbiAgQk9NQkVSX1NIT1RfREVQVEgsXG4gIEJPTUJFUl9TSE9UX0NPVU5ULFxuICBMQVVOQ0hFUl9ERUxBWSxcbiAgZGRcbn0gZnJvbSAnLi9Db25zdGFudCc7XG5pbXBvcnQgU2lnbiBmcm9tICcuL1NpZ24nO1xuaW1wb3J0IEVuZW15TWFya2VyIGZyb20gJy4vRW5lbXlNYXJrZXInO1xuaW1wb3J0IEZpcmVXb3JrcyBmcm9tICcuL0ZpcmVXb3Jrcyc7XG5pbXBvcnQgQWlyQ3JhZnQgZnJvbSAnLi9BaXJDcmFmdCc7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi9NYXRoVXRpbCc7XG5pbXBvcnQgSHVlIGZyb20gJy4vSHVlJztcblxuLyoqXG4gKiBFbmVteSBcIkxhdW5jaGVyXCIgY2xhc3MuXG4gKiBPbmNlIGxvY2tlZCB5b3UsIGhlIGxhdW5jaCBtaXNzaWxlcyByYXBpZGx5LlxuICovXG5jbGFzcyBMYXVuY2hlciBleHRlbmRzIEVuZW15IHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIHgsIHksIHN0YWdlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy5kZXBsb3koKTtcbiAgICB0aGlzLmFzc2lnblRpY2tMaXN0ZW5lcigpO1xuICAgIHRoaXMuYWltVGltZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gIH1cblxuICBhc3NpZ25UaWNrTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jbG9jay5vblRpY2soKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmFsaXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGV4dC50ZXh0ID0gZGQoYGxhdW5jaGVyOntocDogJHt0aGlzLmhpdFBvaW50fWApO1xuXG4gICAgICBjb25zdCB0aWNrID0gdGhpcy5jbG9jay5nZXRUaWNrKCk7XG4gICAgICBjb25zdCByYWRpYW4gPSBNYXRoVXRpbC5kMnIodGljayk7XG4gICAgICBjb25zdCBzaW5lV2F2ZSA9IE1hdGguc2luKHJhZGlhbik7XG4gICAgICB0aGlzLnNoYXBlLnJvdGF0aW9uID0gOTAgKiBzaW5lV2F2ZTtcbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAqIGZpcmluZyBjb250cm9sIGtpY2tlZCBldmVyeSB0aWNrXG4gICAqL1xuICB0cmlnZ2VyKCkge1xuICAgIGlmICgoY3JlYXRlanMuVGlja2VyLmdldFRpY2tzKCkgKyB0aGlzLmFpbVRpbWUpICUgTEFVTkNIRVJfREVMQVkgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWlyQ3JhZnQgPSBBaXJDcmFmdC5nZXRJbnN0YW5jZSgpO1xuXG4gICAgLypcbiAgICAgKiBsb2NrIG1hcmtlciBvbiB5b3UuXG4gICAgICovXG4gICAgY29uc3QgbWFya2VyID0gbmV3IEVuZW15TWFya2VyKHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICB9KTtcbiAgICBtYXJrZXIucC50aGVuKCgpID0+IHtcblxuICAgICAgLypcbiAgICAgICAqIGVmZmVjdCBzaWduIG9uIHlvdS5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgc2lnblggPSBhaXJDcmFmdC54O1xuICAgICAgY29uc3Qgc2lnblkgPSBhaXJDcmFmdC55O1xuICAgICAgY29uc3Qgc2lnbiA9IG5ldyBTaWduKHtcbiAgICAgICAgeDogc2lnblgsXG4gICAgICAgIHk6IHNpZ25ZLFxuICAgICAgfSk7XG4gICAgICBzaWduLnAudGhlbigoKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIGJvbWIgb24geW91LlxuICAgICAgICAgKi9cbiAgICAgICAgRmlyZVdvcmtzLmNvbmNoKFxuICAgICAgICAgIHNpZ25YLFxuICAgICAgICAgIHNpZ25ZLFxuICAgICAgICAgIEJPTUJFUl9TSE9UX0NPVU5ULFxuICAgICAgICAgIEJPTUJFUl9TSE9UX0RFUFRIXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQWlyQ3JhZnQgYWxyZWFkeSBkaWVkJyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogbW92aW5nIGNvbnRyb2wga2lja2VkIGV2ZXJ5IHRpY2tcbiAgICovXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5zbGlkZUluKCk7XG4gICAgdGhpcy5kcmlmdCgpO1xuICAgIHRoaXMudXBkYXRlUG9zKCk7XG4gIH1cblxuICBkZXBsb3koKSB7XG4gICAgdGhpcy5zaGFwZSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuc2hhcGUuZ3JhcGhpY3MuYmVnaW5GaWxsKEh1ZS5nZXRIdWUoKSkuZHJhd1JlY3QoMCAtIExBVU5DSEVSX1dJRFRIIC8gMiwgMCAtIExBVU5DSEVSX0hFSUdIVCAvIDIsIExBVU5DSEVSX1dJRFRILCBMQVVOQ0hFUl9IRUlHSFQpO1xuXG4gICAgdGhpcy5oaXRBcmVhID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgdGhpcy5oaXRBcmVhLmFscGhhID0gMDtcbiAgICB0aGlzLmhpdEFyZWEuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwoJ3B1cnBsZScpXG4gICAgICAuZHJhd1JlY3QoLUxBVU5DSEVSX1dJRFRIIC8gMiwgLUxBVU5DSEVSX0hFSUdIVCAvIDIsIExBVU5DSEVSX1dJRFRILCBMQVVOQ0hFUl9IRUlHSFQpO1xuXG4gICAgdGhpcy50ZXh0ID0gbmV3IGNyZWF0ZWpzLlRleHQoZGQoJ2xhdW5jaGVyJyksICdib2xkIDlweCBBcmlhbCcsICdibGFjaycpO1xuXG4gICAgdGhpcy51cGRhdGVQb3MoKTtcblxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zaGFwZSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmhpdEFyZWEpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy50ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXVuY2hlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL0xhdW5jaGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7XG4gIFNJR05fSU5ORVJfUkFESVVTLFxuICBTSUdOX09VVEVSX1JBRElVUyxcbn0gZnJvbSAnLi9Db25zdGFudCc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcblxuLyoqXG4gKiBlbmVteSBidWxsZXQtc3Rvcm0gZHJvcCB6b25lLlxuICovXG5jbGFzcyBTaWduIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7e3N0YWdlLCB4LCB5fX0gYXJnc1xuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICB0aGlzLnN0YWdlID0gQ2FudmFzLmdldFN0YWdlKCk7XG5cbiAgICB0aGlzLnNoYXBlID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG4gICAgdGhpcy5zaGFwZS54ID0gYXJncy54IHx8IDA7XG4gICAgdGhpcy5zaGFwZS55ID0gYXJncy55IHx8IDA7XG4gICAgdGhpcy5vdXRsaW5lID0gdGhpcy5zaGFwZS5jbG9uZSgpO1xuXG4gICAgdGhpcy5zaGFwZS5hbHBoYSA9IDAuMTtcbiAgICB0aGlzLnNoYXBlLmdyYXBoaWNzXG4gICAgICAuc2V0U3Ryb2tlU3R5bGUoMSlcbiAgICAgIC5iZWdpblN0cm9rZSgnd2hpdGUnKVxuICAgICAgLmRyYXdDaXJjbGUoMCwgMCwgU0lHTl9PVVRFUl9SQURJVVMpO1xuXG4gICAgdGhpcy5vdXRsaW5lLmFscGhhID0gMC4zO1xuICAgIHRoaXMub3V0bGluZS5ncmFwaGljc1xuICAgICAgLnNldFN0cm9rZVN0eWxlKDEpXG4gICAgICAuYmVnaW5TdHJva2UoJ3doaXRlJylcbiAgICAgIC5kcmF3Q2lyY2xlKDAsIDAsIFNJR05fSU5ORVJfUkFESVVTKTtcblxuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zaGFwZSk7XG4gICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLm91dGxpbmUpO1xuXG4gICAgdGhpcy5wID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY29tcGxldGVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjcmVhdGVqcy5Ud2Vlbi5yZW1vdmVUd2VlbnModGhpcy5zaGFwZSk7XG4gICAgICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5zaGFwZSk7XG4gICAgICAgIHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5vdXRsaW5lKTtcbiAgICAgICAgdGhpcy5zaGFwZSA9IG51bGw7XG4gICAgICAgIHRoaXMub3V0bGluZSA9IG51bGw7XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LnNldFRpbWVvdXQoY29tcGxldGVIYW5kbGVyLmJpbmQodGhpcyksIDYwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NsYXNzL1NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15JztcbmltcG9ydCB7XG4gIE5PSVNFX1dJRFRILFxuICBOT0lTRV9IRUlHSFQsXG4gIGRkLFxuICBOT0lTRV9PVVRFUl9IRUlHSFQsXG4gIE5PSVNFX09VVEVSX1dJRFRILFxufSBmcm9tICcuL0NvbnN0YW50JztcbmltcG9ydCBNYXRoVXRpbCBmcm9tICcuL01hdGhVdGlsJztcbmltcG9ydCBFbmVteU1hcmtlciBmcm9tICcuL0VuZW15TWFya2VyJztcbmltcG9ydCBKYW1tZXIgZnJvbSAnLi9KYW1tZXInO1xuaW1wb3J0IEFpckNyYWZ0IGZyb20gJy4vQWlyQ3JhZnQnO1xuaW1wb3J0IEh1ZSBmcm9tICcuL0h1ZSc7XG5cbi8qKlxuICogRW5lbXkgXCJOb2lzZVwiIGNsYXNzLlxuICogaGUgdXNlIGVjbShlbGVjdHJpY2FsIGNvdW50ZXIgbWVhc3VyZSkuXG4gKiBpdHMgc2xvd3MgeW91ciBhaXJjcmFmdC5cbiAqL1xuY2xhc3MgTm9pc2UgZXh0ZW5kcyBFbmVteSB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGFyZ3MgLSB4LCB5LCBzdGFnZVxuICAgKi9cbiAgY29uc3RydWN0b3IoYXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMuZGVwbG95KCk7XG4gICAgdGhpcy5hc3NpZ25UaWNrTGlzdGVuZXIoKTtcbiAgfVxuXG4gIGFzc2lnblRpY2tMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmNsb2NrLm9uVGljaygoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy50ZXh0LnRleHQgPSBkZChgbm9pc2U6e2hwOiAke3RoaXMuaGl0UG9pbnR9YCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZmlyaW5nIGNvbnRyb2wga2lja2VkIGV2ZXJ5IHRpY2tcbiAgICovXG4gIHRyaWdnZXIoKSB7XG4gICAgaWYgKGNyZWF0ZWpzLlRpY2tlci5nZXRUaWNrcygpICUgMTIwICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWlyQ3JhZnQgPSBBaXJDcmFmdC5nZXRJbnN0YW5jZSgpO1xuXG4gICAgY29uc3QgdGhldGEgPSBNYXRoVXRpbC5nZXRBbmdsZURlZ3JlZShcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIGFpckNyYWZ0LngsXG4gICAgICBhaXJDcmFmdC55XG4gICAgKTtcblxuICAgIC8qXG4gICAgICogbG9jayBtYXJrZXIgb24geW91LlxuICAgICAqL1xuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBFbmVteU1hcmtlcih7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBhbmdsZTogdGhldGEsXG4gICAgfSk7XG4gICAgbWFya2VyLnAudGhlbigoKSA9PiB7XG4gICAgICAvKlxuICAgICAgICogamFtbWVyIG9uIHlvdS5cbiAgICAgICAqL1xuICAgICAgY29uc3QgeCA9IGFpckNyYWZ0Lng7XG4gICAgICBjb25zdCB5ID0gYWlyQ3JhZnQueTtcbiAgICAgIG5ldyBKYW1tZXIoeCwgeSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogbW92aW5nIGNvbnRyb2wga2lja2VkIGV2ZXJ5IHRpY2tcbiAgICovXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5zbGlkZUluKCk7XG4gICAgdGhpcy5kcmlmdCgpO1xuICAgIHRoaXMudXBkYXRlUG9zKCk7XG4gIH1cblxuICBkZXBsb3koKSB7XG4gICAgdGhpcy5zaGFwZSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuc2hhcGUuZ3JhcGhpY3NcbiAgICAgIC5iZWdpbkZpbGwoSHVlLmdldEh1ZSgpKS5kcmF3UmVjdCgwIC0gTk9JU0VfV0lEVEggLyAyLCAwIC0gTk9JU0VfSEVJR0hUIC8gMiwgTk9JU0VfV0lEVEgsIE5PSVNFX0hFSUdIVClcbiAgICAgIC5lbmRGaWxsKCk7XG4gICAgdGhpcy5zaGFwZS5ncmFwaGljcy5zZXRTdHJva2VTdHlsZSgxKS5iZWdpblN0cm9rZSgnd2hpdGUnKVxuICAgICAgLmRyYXdSZWN0KDAgLSBOT0lTRV9PVVRFUl9XSURUSCAvIDIsIDAgLSBOT0lTRV9PVVRFUl9IRUlHSFQgLyAyLCBOT0lTRV9PVVRFUl9XSURUSCwgTk9JU0VfT1VURVJfSEVJR0hUKTtcblxuICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgIHRoaXMuaGl0QXJlYS5hbHBoYSA9IDA7XG4gICAgdGhpcy5oaXRBcmVhLmdyYXBoaWNzXG4gICAgICAuYmVnaW5GaWxsKCdwdXJwbGUnKVxuICAgICAgLmRyYXdSZWN0KC1OT0lTRV9XSURUSCAvIDIsIC1OT0lTRV9IRUlHSFQgLyAyLCBOT0lTRV9XSURUSCwgTk9JU0VfSEVJR0hUKTtcblxuICAgIHRoaXMudGV4dCA9IG5ldyBjcmVhdGVqcy5UZXh0KGRkKCdub2lzZScpLCAnYm9sZCA5cHggQXJpYWwnLCAnYmxhY2snKTtcblxuICAgIHRoaXMudXBkYXRlUG9zKCk7XG5cbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuc2hhcGUpO1xuICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5oaXRBcmVhKTtcbiAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMudGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jbGFzcy9Ob2lzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==