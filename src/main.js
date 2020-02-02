import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api/v1'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
