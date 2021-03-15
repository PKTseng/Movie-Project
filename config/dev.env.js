"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  THEOAPI: '"http://localhost:3000"' // 這是伺服器路徑s
});
