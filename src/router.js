import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

import Error404 from './views/errors/error404.vue'
import Maintenance from './views/errors/maintenance.vue'

Vue.use(Router)

/**
 * Routing
 */
let routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '*',
    component: Error404,
  }
];

/**
 * Down for maintenance mode via .env
 */
if (process.env.VUE_APP_MAINTENANCE_MODE) {
  routes = [
    {
      path: '*',
      component: Maintenance,
    }
  ];
}

let router = new Router({
  mode: 'history',
  routes,
})
export default router
