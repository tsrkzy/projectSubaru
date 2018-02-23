module.exports = {
  "extends"      : "google",
  "env"          : {
    "es6"    : true,
    "browser": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType" : "module",
  },
  "rules"        : {
    "indent": 2,
    "semi"  : ["error", "always"],
    "quotes": ["error", "single"],
  }
};