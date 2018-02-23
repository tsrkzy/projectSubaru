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
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'prefer-const': ['error'],
    'camelcase': 0,
    'comma-spacing': 0,
    'comma-dangle': 0,
    'require-jsdoc': 0,
    'max-len': 0,
  }
};