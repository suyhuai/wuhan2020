import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/needs',
    name: 'needs',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "needs" */ '../views/Needs.vue')
  },
  {
    path: '/supply',
    name: 'supply',
    component: () => import(/* webpackChunkName: "supply" */ '../views/Supply.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
