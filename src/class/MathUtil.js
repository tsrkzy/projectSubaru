"use strict";


const PI = Math.PI;

class MathUtil {
  
  static d2r(degree) {
    let radian = (degree / 180) * PI;
    return radian
  }
  
}

export default MathUtil;