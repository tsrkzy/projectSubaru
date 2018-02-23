import MathUtil from './MathUtil';
import Debris from './Debris';
import Bomber from './Bomber';
import Amplifier from './Amplifier';
import Battery from './Battery';
import Launcher from './Launcher';
import {ENEMY_VARIATION, STAGE_FRAME_RIGHT} from './Constant';
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
     * get tier (0<=tier<=3)
     */
    let tier = Math.floor(level / 5);
    if (tier > 3) {
      tier = 3;
    }

    /*
     * tier 0 is tutorial
     */
    if (tier === 0) {
      return WaveUtil.tutorial(level);
    }

    /*
     * tier 1~3
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
    const patternSeedId = Math.floor(ENEMY_VARIATION * Math.random()); // 0-9
    const waveConf = [];

    const randomConf = WaveUtil.generateRandomPattern(level, tier, patternSeedId);
    const debrisConf = WaveUtil.generateDebrisConf(level, tier, debrisLevel);
    const amplifierConf = WaveUtil.generateAmplifierConf(level, tier, amplifierLevel);

    waveConf.concat(randomConf);
    waveConf.concat(debrisConf);
    waveConf.concat(amplifierConf);

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
    const waveConfig = [];
    switch (patternSeedId) {
    case 1:
      waveConfig.push(...WaveUtil.generateBatteryConf());
      break;
    case 2:
      waveConfig.push(...WaveUtil.dispatchLauncherSortie());
      waveConfig.push(...WaveUtil.dispatchBomberSortie());
      break;
    case 3:
      waveConfig.push(...WaveUtil.dispatchLauncherSortie());
      break;
    case 4:
      waveConfig.push(...WaveUtil.dispatchBomberSortie());
      waveConfig.push(...WaveUtil.dispatchNoiseSortie());
      break;
    default:
      throw new Error(`unexpected level: ${patternSeedId} in #generateRandomConf`);
    }

    return waveConfig;
  }

  static generateBatteryConf() {
  }

  static generateDebrisConf(level, tier, debrisLevel) {
  }

  static generateAmplifierConf(level, tier, amplifierLevel) {
  }

  static dispatchSortie(args) {
    /*
     * enemyClass
     * delayMs
     * spanMs
     * spanX
     * spanY
     * count
     * args{
     *   x
     *   y
     *   hitPoint
     * }
     */
    const enemyClass = args.enemyClass;
    const delayMs = args.delayMs || 0;
    const spanMs = args.spanMs || 0;
    const spanX = args.spanX || 0;
    const spanY = args.spanY || 0;
    const count = args.count || 1;
    const x = args.x || 0;
    const y = args.y || 0;
    const hitPoint = args.hitPoint || 1;

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

  /**
   * @return {Array<Object>}
   */
  static dispatchBatterySortie() {
    const spanMs = 800;
    const count = 5;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: Battery,
      delayMs: 0,
      spanMs: spanMs || 800,
      count: count || 1,
      x: 500,
      y: -50,
      hitPoint: 1,
    });

    return waveConf;
  }

  /**
   * @return {Array<Object>}
   */
  static dispatchLauncherSortie() {
    const spanY = 80;
    const count = 5;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: Launcher,
      delayMs: 0,
      spanY: spanY || 80,
      count: count || 1,
      x: STAGE_FRAME_RIGHT,
      y: 100,
      hitPoint: 1,
    });

    return waveConf;
  }

  /**
   * @return {Array<Object>}
   */
  static dispatchBomberSortie() {
    const spanY = 100;
    const spanMs = 800;
    const count = 3;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: Bomber,
      delayMs: 0,
      spanMs: spanMs || 800,
      count: count || 1,
      x: STAGE_FRAME_RIGHT,
      y: 100,
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
    const count = 3;

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
   * @return {Array<Object>}
   */
  static dispatchNoiseSortie() {
    const spanY = 100;
    const spanMs = 800;
    const count = 3;

    const waveConf = WaveUtil.dispatchSortie({
      enemyClass: Noise,
      spanMs: spanMs,
      x: STAGE_FRAME_RIGHT,
      y: 100,
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
}

export default WaveUtil;
