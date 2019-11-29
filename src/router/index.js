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

import PatientRouting from '../views/patient/patient-routing'
import PatientDashboard from '../views/patient/patient-dashboard'
import PataientProfile from '../views/patient/patient-profile'

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
      // Doctors in public
      { path: 'doctors', component: DoctorList },
      { path: 'doctor-profile/:id', component: DoctorProfile },
      { path: 'report/:doctorid', component: PatientReport },
      // Paitaint
      {
        path: 'patient',
        component: PatientRouting,
        children: [
          { path: '', redirect: '/patient/dashboard' },
          { path: 'dashboard', component: PatientDashboard },
          { path: 'profile', component: PataientProfile },
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
