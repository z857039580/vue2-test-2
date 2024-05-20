import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AaTest from '@/views/AaTest.vue'
import BbTest from '@/views/BbTest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/aa',
    name: 'aa',
    component: AaTest
  },
  {
    path: '/bb',
    name: 'bb',
    component: BbTest
  },
  {
    path: '/cc',
    name: 'cc',
    component: () => import(/* webpackChunkName: "about" */ '../views/CcTest.vue')
  },
]

export {routes};



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
