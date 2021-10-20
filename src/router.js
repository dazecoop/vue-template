import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Error404 from './views/errors/404.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '*',
      component: Error404,
    },
  ]
})
export default router
