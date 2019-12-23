import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueSimpleAlert from "vue-simple-alert";
import moment from 'moment'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)


Vue.prototype.$axios = axios
// Vue.prototype.$admin_api = "https://maternal-api.herokuapp.com/api/admin/"
// Vue.prototype.$doctor_api = "https://maternal-api.herokuapp.com/api/doctor/"
// Vue.prototype.$patient_api = "https://maternal-api.herokuapp.com/api/patient/"
// Vue.prototype.$login_api = "https://maternal-api.herokuapp.com/api/login/"
Vue.prototype.$admin_api = "http://localhost:3000/api/admin/"
Vue.prototype.$doctor_api = "http://localhost:3000/api/doctor/"
Vue.prototype.$patient_api = "http://localhost:3000/api/patient/"
Vue.prototype.$login_api = "http://localhost:3000/api/login/"
Vue.prototype.$consult_api = "http://localhost:3000/api/consult/"
Vue.use(VueSimpleAlert, { reverseButtons: true });
Vue.filter("time", function (value) {
  if (value) {
    return moment(String(value)).format('MMMM Do YYYY, h:mm:ss a');
    }
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
