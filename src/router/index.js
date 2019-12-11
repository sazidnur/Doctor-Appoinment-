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

import PatientDashboard from '../views/patient/patient-dashboard'
import PrimaryTreatment from '../views/patient/primary-treatment'
import PatientPrescription from '../views/patient/prescription'
import PatientRiskAnalysis from '../views/patient/risk-analysis'
import PatientNotification from '../views/patient/notifications'
import PatientReportSubmit from '../views/patient/report-submit'
import PataientProfile from '../views/patient/patient-profile'
import PatientDoctorChatBox from '../views/chat/chat-box'

import DoctorPrivateProfile from '../views/doctor/private-profile'
import DoctorDashboard from '../views/doctor/doctor-dashboard'
import DoctorConsultation from '../views/doctor/consultation'
import DoctorPatients from '../views/doctor/patients'
import DoctorProfileEdit from '../views/doctor/edit-profile'
import DoctorPrescriptionMake from '../views/doctor/make-prescription'

import AdminLogin from '../views/admin/login'
import AdminRouting from '../views/admin/menu/admin-routing'
import AdminDashboard from '../views/admin/menu/dashboard'
import DoctorAccountRequests from '../views/admin/menu/doctor/approve-requests'
import CreateAdmin from '../views/admin/menu/new-admin/create-admin'


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
        component: PatientDashboard,
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('token')) {
            next()
          } else {
            next('/login')
          }
        },
        children: [
          { path: '', redirect: '/patient/primary-treatment' },
          { path: 'primary-treatment', component: PrimaryTreatment },
          { path: 'prescription', component: PatientPrescription },
          { path: 'risk', component: PatientRiskAnalysis },
          { path: 'notification', component: PatientNotification },
          { path: 'report-submit', component: PatientReportSubmit },
          { path: 'profile', component: PataientProfile }
        ]
      },
      // Doctor
      {
        path: 'doctor',
        component: DoctorPrivateProfile,
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('token')) {
            next()
          } else {
            next('/login')
          }
        },
        children: [
          { path: '', redirect: '/doctor/dashboard' },
          { path: 'dashboard', component: DoctorDashboard },
          { path: 'consultation', component: DoctorConsultation },
          { path: 'patients', component: DoctorPatients },
          { path: 'edit', component: DoctorProfileEdit }
        ]
      }
    ]
  },
  {
    path: '/start-consulnt/:patientid',
    component: DoctorPrescriptionMake,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/chat/:doctorid',
    component: PatientDoctorChatBox,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }
  },
  // Admin
  { path: '/admin', component: AdminLogin },
  {
    path: '/menu',
    component: AdminRouting,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/admin')
      }
    },
    children: [
      { path: '', redirect: '/menu/dashboard' },
      { path: 'dashboard', component: AdminDashboard },
      { path: 'requests/:type', component: DoctorAccountRequests },
      { path: 'create-admin', component: CreateAdmin }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
