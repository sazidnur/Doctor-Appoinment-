import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from '../views/home/home-routing'
import Home from '../views/home/home'
import UserRagistration from '../views/home/user-registartion'
import UserLogin from '../views/home/user-login'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: '/' },
  {
    path: '/',
    component: HomeRouter,
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', component: Home },
      { path: 'registration', component: UserRagistration },
      { path: 'login', component: UserLogin },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
