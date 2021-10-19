import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autologin_url: '',
  },
  mutations: {
    setAutoLoginUrl(state, url) {
      state.autologin_url = url;
    },
  },
  getters: {
    autoLoginUrl(state) {
      return state.autologin_url;
    },
  },
})
