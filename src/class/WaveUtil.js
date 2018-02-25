import MathUtil from './MathUtil';
import Debris from './Debris';
import Bomber from './Bomber';
import Amplifier from './Amplifier';
import Battery from './Battery';
import Launcher from './Launcher';
import {
  EASY,
  ENEMY_VARIATION,
  HARD,
  HUSH,
  MAX_TIER,
  STAGE_EDGE_TOP,
  STAGE_FRAME_BOTTOM,
  STAGE_FRAME_LEFT,
  STAGE_FRAME_RIGHT,
  STAGE_FRAME_TOP,
  STAGE_MIDDLE_X,
  STAGE_MIDDLE_Y,
  TUTORIAL
} from './Constant';
import Noise from './Noise';

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
    if (tier > MAX_TIER) {
      tier = MAX_TIER;
    }

    /*
     * tier 0 is tutorial
     */
    if (tier === TUTORIAL) {
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
      waveConfig.push(...WaveUtil.dispatchLauncherSortie());
      waveConfig.push(...WaveUtil.dispatchAmplifierSortie());
      break;
    case 4:
      // "bomber and noise"
      waveConfig.push(...WaveUtil.dispatchBomberSortie());
      waveConfig.push(...WaveUtil.dispatchNoiseSortie());
      break;
    default:
      throw new Error(`unexpected level: ${level} in #intro`);
    }

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
    const patternSeedId = Math.floor(ENEMY_VARIATION * Math.random() + 1); // 0-9
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
    case EASY:
      args.entry = 'front';
      args.hitPoint = 2;
      args.count = 3;
      break;
    case HARD:
      args.entry = 'horizontal';
      args.hitPoint = 4;
      args.count = 4;
      break;
    case HUSH:
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
    case EASY:
      args.entry = 'front';
      args.hitPoint = 2;
      args.count = 3;
      break;
    case HARD:
      args.entry = 'horizontal';
      args.hitPoint = 4;
      args.count = 4;
      break;
    case HUSH:
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
    case EASY:
      args.entry = 'front';
      args.hitPoint = 4;
      args.count = 3;
      break;
    case HARD:
      args.entry = 'vertical';
      args.hitPoint = 6;
      args.count = 4;
      break;
    case HUSH:
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
    case EASY:
      args.entry = 'front';
      args.hitPoint = 4;
      args.count = 3;
      break;
    case HARD:
      args.entry = 'front';
      args.hitPoint = 6;
      args.count = 4;
      break;
    case HUSH:
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
    const spanMs = args.spanMs || 800;
    const count = args.count || 1;
    const entry = args.entry;
    const hitPoint = args.hitPoint || 1;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: Battery,
      delayMs: 0,
      spanMs: spanMs,
      count: count,
      entry: entry,
      hitPoint: hitPoint,
    });

    return waveConf;
  }

  /**
   * @param {object} args
   * @return {Array<Object>}
   */
  static dispatchLauncherSortie(args = {}) {
    const spanY = args.spanY || 80;
    const count = args.count || 5;
    const entry = args.entry || 'front';
    const x = args.x || STAGE_FRAME_RIGHT;
    const y = args.y || STAGE_EDGE_TOP;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: Launcher,
      delayMs: 0,
      spanY: spanY,
      count: count,
      entry: entry,
      x: x,
      y: y,
      hitPoint: 1,
    });

    return waveConf;
  }

  /**
   * @param {object} args
   * @return {Array<Object>}
   */
  static dispatchBomberSortie(args = {}) {
    const spanY = args.spanY || 100;
    const spanMs = args.spanMs || 800;
    const count = args.count || 3;
    const entry = args.entry || 'front';
    const x = args.x || STAGE_FRAME_RIGHT;
    const y = args.y || STAGE_EDGE_TOP;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: Bomber,
      delayMs: 0,
      spanMs: spanMs,
      count: count,
      entry: entry,
      x: x,
      y: y,
      spanY: spanY,
    });

    return waveConf;
  }

  /**
   * @return {Array<Object>}
   */
  static dispatchAmplifierSortie() {
    const spanY = 120;
    const spanMs = 800;
    const count = 2;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: Amplifier,
      delayMs: 0,
      spanMs: spanMs,
      spanY: spanY,
      count: count,
      x: STAGE_FRAME_RIGHT,
      y: 120,
      hitPoint: 3,
    });

    return waveConf;
  }

  /**
   * @param {object} args
   * @return {Array<Object>}
   */
  static dispatchNoiseSortie(args = {}) {
    const spanY = args.spanY || 100;
    const spanMs = args.spanMs || 800;
    const count = args.count || 3;
    const entry = args.entry || 'front';
    const x = args.x || STAGE_FRAME_RIGHT;
    const y = args.y || STAGE_EDGE_TOP;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: Noise,
      spanMs: spanMs,
      entry: entry,
      x: x,
      y: y,
      spanY: spanY,
      count: count,
      hitPoint: 1,
    });

    return waveConf;
  }

  /**
   * generate debris rain.
   * @param {Object} args
   * @return {Array<Object>}
   */
  static dispatchDebrisSortie(args) {
    const number = args.number;
    const _y = args.y;
    const delayMs = args.delayMs;
    const spanMs = args.spanMs;
    // let direction = args.direction;
    const spreadDegree = args.spreadDegree || 10;
    // let speed = args.speed;

    const result = [];
    for (let i = 1; i <= number; i++) {
      const y = MathUtil.normalRandom(_y, 100);
      const angleDegree = MathUtil.normalRandom(0, spreadDegree);
      const conf = {
        enemyClass: Debris,
        delayMs: delayMs + (i * spanMs / number),
        args: {
          x: 740,
          y: y,
          speed: -7,
          angleDegree: angleDegree,
          hitPoint: 1,
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
    const delayMs = args.delayMs || 0;
    const spanMs = args.spanMs || 0;
    const spanX = args.spanX || 0;
    const spanY = args.spanY || 0;
    const count = args.count || 1;
    const hitPoint = args.hitPoint || 1;
    let entry = args.entry || 'front';

    let x = 0;
    let y = 0;

    const random0to3 = Math.floor(Math.random() * 4);

    switch (entry) {
    case 'vertical':
      entry = (random0to3 % 2 === 0) ? 'top' : 'bottom';
      break;

    case 'horizontal':
      entry = (random0to3 % 2 === 0) ? 'front' : 'back';
      break;

    case 'around':
      switch (random0to3) {
      case 0:
        entry = 'top';
        break;
      case 1:
        entry = 'bottom';
        break;
      case 2:
        entry = 'front';
        break;
      case 3:
        entry = 'back';
        break;
      }
      break;

    default:
      break;
    }

    switch (entry) {
    case 'top':
      x = STAGE_MIDDLE_X;
      y = STAGE_FRAME_TOP;
      break;
    case 'bottom':
      x = STAGE_MIDDLE_X;
      y = STAGE_FRAME_BOTTOM;
      break;
    case 'front':
      x = STAGE_FRAME_RIGHT;
      y = STAGE_MIDDLE_Y;
      break;
    case 'back':
      x = STAGE_FRAME_LEFT;
      y = STAGE_MIDDLE_Y;
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

export default WaveUtil;
