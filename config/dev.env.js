'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  USERAPI:
    '"http://ec2-35-73-107-34.ap-northeast-1.compute.amazonaws.com:8080/"',
})
