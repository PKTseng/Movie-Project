"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APIPATH: '"https://vue-course-api.hexschool.io"', // 這是伺服器路徑
  THEO: '"http://localhost:3000"', // 這是伺服器路徑
  COSTOMPATH: '"pkt"' // 這是自定義的路徑
});
