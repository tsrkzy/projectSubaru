import MathUtil from "./MathUtil";
import Debris from "./Debris";
import Bomber from "./Bomber";
import Amplifier from "./Amplifier";
import Battery from "./Battery";
import Launcher from "./Launcher";
import {STAGE_FRAME_RIGHT} from "./Constant";
import Noise from "./Noise";

"use strict";

class WaveUtil {
  constructor() {
    throw Error('WaveUtil cannot be instanciate');
  }
  
  static stab() {
    let waveConf = [
      {
        enemyClass: Launcher,
        delayMs   : 0,
        args      : {
          x       : 600,
          y       : 100,
          hitPoint: 2,
        }
      },
      {
        enemyClass: Amplifier,
        delayMs   : 0,
        args      : {
          x       : 600,
          y       : 300,
          hitPoint: 2,
        }
      },
      {
        enemyClass: Battery,
        delayMs   : 0,
        args      : {
          x       : 600,
          y       : -50,
          hitPoint: 2,
        }
      },
      {
        enemyClass: Bomber,
        delayMs   : 0,
        args      : {
          x       : 600,
          y       : -50,
          hitPoint: 2,
        }
      },
    ];
    
    return waveConf
  }
  
  /**
   *
   * @param {number} level
   * @return {Array<Object>}
   */
  static getConfig(level) {
    
    // return this.stab();
    
    let tier = Math.floor(level / 5);
    
    
    // if (tier === 0) {
    return WaveUtil.intro(level);
    // }
    
    return []
  }
  
  /**
   * @param {number} level
   * @return {Array<Object>}
   */
  static intro(level) {
    let waveConfig = [];
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
        break;
    }
    
    return waveConfig
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
    let enemyClass = args.enemyClass;
    let delayMs    = args.delayMs || 0;
    let spanMs     = args.spanMs || 0;
    let spanX      = args.spanX || 0;
    let spanY      = args.spanY || 0;
    let count      = args.count || 1;
    let x          = args.x || 0;
    let y          = args.y || 0;
    let hitPoint   = args.hitPoint || 1;
    
    let waveConf = [];
    
    for (let i = 0; i < count; i++) {
      let conf = {
        enemyClass: enemyClass,
        delayMs   : delayMs + spanMs * i,
        args      : {
          x       : x + spanX * i,
          y       : y + spanY * i,
          hitPoint: hitPoint,
        }
      };
      waveConf.push(conf)
    }
    
    return waveConf
  }
  
  /**
   * @return {Array<Object>}
   */
  static dispatchBatterySortie() {
    
    let spanMs   = 800;
    let count    = 5;
  
    let waveConf = WaveUtil.dispatchSortie({
      enemyClass: Battery,
      spanMs    : spanMs,
      count     : count,
    });
    
    return waveConf;
  }
  
  /**
   * @return {Array<Object>}
   */
  static dispatchLauncherSortie() {
    let spanY    = 80;
    let count    = 5;
  
    let waveConf = WaveUtil.dispatchSortie({
      enemyClass: Launcher,
      spanY     : spanY,
      count     : count,
    });
    
    return waveConf;
  }
  
  /**
   * @return {Array<Object>}
   */
  static dispatchBomberSortie() {
    let spanY    = 100;
    let spanMs   = 800;
    let count    = 3;
  
    let waveConf = WaveUtil.dispatchSortie({
      enemyClass: Bomber,
      spanY     : spanY,
      spanMs    : spanMs,
      count     : count,
    });
    
    return waveConf;
  }
  
  /**
   * @return {Array<Object>}
   */
  static dispatchAmplifierSortie() {
    let spanY    = 120;
    let spanMs   = 800;
    let count    = 3;
  
    let waveConf = WaveUtil.dispatchSortie({
      enemyClass: Amplifier,
      spanY     : spanY,
      spanMs    : spanMs,
      count     : count,
    });
    
    return waveConf;
  }
  
  /**
   * @return {Array<Object>}
   */
  static dispatchNoiseSortie() {
    let spanY    = 100;
    let spanMs   = 800;
    let count    = 3;
  
    let waveConf = WaveUtil.dispatchSortie({
      enemyClass: Noise,
      spanY     : spanY,
      spanMs    : spanMs,
      count     : count,
    });
    
    return waveConf;
  }
  
  /**
   * generate debris rain.
   * @param {Object} args
   * @return {Array<Object>}
   */
  static dispatchDebrisSortie(args) {
  
    // number      : 20,
    //   y           : 250,
    //   delayMs     : 0,
    //   spanMs      : 3000,
    //   spreadDegree: 10,
    
    let number = args.number;
    let _y = args.y;
    let delayMs = args.delayMs;
    let spanMs = args.spanMs;
    let direction = args.direction;
    let spreadDegree = args.spreadDegree || 10;
    let speed = args.speed;
    
    let result = [];
    for (let i = 1; i <= number; i++) {
      
      let y = MathUtil.normalRandom(_y, 100);
      let angleDegree = MathUtil.normalRandom(0, spreadDegree);
      let conf = {
        enemyClass: Debris,
        delayMs: delayMs + (i * spanMs / number),
        args: {
          x: 740,
          y: y,
          speed: -7,
          angleDegree: angleDegree,
          hitPoint: 1
        }
      };
      result.push(conf);
    }
    
    return result
  }
}

export default WaveUtil;