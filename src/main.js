import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueSimpleAlert from "vue-simple-alert";


Vue.prototype.$axios = axios
Vue.prototype.$admin_api = "https://maternal-api.herokuapp.com/api/admin/"
Vue.prototype.$doctor_api = "https://maternal-api.herokuapp.com/api/doctor/"
Vue.prototype.$patient_api = "https://maternal-api.herokuapp.com/api/patient/"
Vue.prototype.$login_api = "https://maternal-api.herokuapp.com/api/login/"
Vue.use(VueSimpleAlert, { reverseButtons: true });
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
