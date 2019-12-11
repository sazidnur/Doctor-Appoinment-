import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueSimpleAlert from "vue-simple-alert";


Vue.prototype.$axios = axios
Vue.prototype.$admin_api = "http://localhost:3000/api/admin/"
Vue.prototype.$doctor_api = "http://localhost:3000/api/doctor/"
Vue.prototype.$patient_api = "http://localhost:3000/api/patient/"
Vue.prototype.$login_api = "http://localhost:3000/api/login/"
Vue.use(VueSimpleAlert, { reverseButtons: true });
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
