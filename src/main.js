// 全域載入
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import VueAxios from 'vue-axios'
import currencyFilter from './filter/currency'
window.Vue = Vue

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from 'vuex'
Vue.use(VueAxios, axios, VueAwesomeSwiper, Vuex)

Vue.component('Loading', Loading) // loading 全域啟用

Vue.filter('currency', currencyFilter)
//這樣所有頁面只要加上( | currency ) ，就套上千分號了。
Vue.config.productionTip = false

axios.defaults.withCredentials = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
