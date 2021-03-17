/* eslint-disable semi */
/* eslint-disable prettier/prettier */
module.exports = {
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // eslint-disable-next-line prettier/prettier
    semi: ['error', 'off'],
    quotes: ['error', 'single'],
    'no-console': ['warn'],
  },
}
