import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store'

/**
 * Setup axios globally
 */
import axios from 'axios'
Vue.prototype.$axios = axios;

/**
 * Moment.js for date manipulation
 * @source https://www.npmjs.com/package/vue-moment
 */
Vue.use(require('vue-moment'))

/**
 * VueMeta for meta tag manipulation
 * @source https://vue-meta.nuxtjs.org/
 */
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

/**
 * VueSmoothScroll
 * @source https://www.npmjs.com/package/vue2-smooth-scroll
 */
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)

/**
 * SCSS file(s)
 */
import './assets/main.scss'

/**
 * Global modules & other config's
 */
import './modules/filters'
import './modules/tailwind'
import './modules/fontawesome'

/**
 * Global variables
 */
Vue.prototype.$siteName = process.env.VUE_APP_SITE_NAME;
Vue.prototype.$siteDomain = process.env.VUE_APP_SITE_DOMAIN;

Vue.config.productionTip = false

import { i18n } from './modules/i18n'

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
