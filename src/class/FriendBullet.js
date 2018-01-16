"use strict";
import Bullet from "./Bullet";

/**
 * friend bullet base class.
 */
class FriendBullet extends Bullet {
  
  /**
   * @constructor
   * @param {Object} args - x, y, stage
   */
  constructor(args) {
    super(args);
    FriendBullet.instances = FriendBullet.instances || {};
    
    FriendBullet.instances[this.constructor.name] = this.initStaticProperty();
  }
  
  
}

export default FriendBullet;