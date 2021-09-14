module.exports = {
  extends: ['soraka'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    'no-useless-escape': 0,
  },
  globals: {
    APP_ENV: true,
    APP_GLOBAL_CONFIG: true,
  },
}
