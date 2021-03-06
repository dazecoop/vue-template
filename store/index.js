import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: '',
  },
  mutations: {
    setPath(state, val) {
      state.path = val;
    },
  },
  getters: {
    getPath(state) {
      return state.path;
    },
  },
})
