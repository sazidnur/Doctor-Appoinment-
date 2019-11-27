import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from '../views/home/home-routing'
import Home from '../views/home/home'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: '/' },
  {
    path: '/',
    component: HomeRouter,
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', component: Home }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
