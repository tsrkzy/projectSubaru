'use strict';
import Bullet from './Bullet';

/**
 * friend bullet base class.
 */
class FriendBullet extends Bullet {
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

export default FriendBullet;
