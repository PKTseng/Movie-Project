// 全域載入
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import currencyFilter from "./filter/currency";
window.Vue = Vue;

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

Vue.use(VueAxios, axios);
//這樣所有頁面只要加上( | currency ) ，就套上千分號了。
Vue.filter("currency", currencyFilter);
Vue.config.productionTip = false;

axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
