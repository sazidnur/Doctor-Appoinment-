import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from '../views/home/home-routing'
import Home from '../views/home/home'
import UserRagistration from '../views/home/auth/user-registartion'
import UserLogin from '../views/home/auth/user-login'
import ResetPassword from '../views/home/auth/password-reset'
import DoctorList from '../views/home/doctor-lists'
import DoctorProfile from '../views/doctor/public-profile'
import PatientReport from '../views/patient/patient-report'

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
      { path: 'reset', component: ResetPassword },
      { path: 'doctors', component: DoctorList },
      { path: 'doctor-profile/:id', component: DoctorProfile },
      { path: 'report/:doctorid', component: PatientReport },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
