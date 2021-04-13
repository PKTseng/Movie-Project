import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carts: [],
  },
  mutations: {
    setCarts(state, content) {
      state.carts = content
    },
  },
})

export default store
