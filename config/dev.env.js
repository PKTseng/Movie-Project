"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  THEOAPI: '"http://57a627b7dc91.ngrok.io"'
  // 這是伺服器路徑
});
