// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import echarts from 'echarts'
import App from './App'
//import store from './vuex/store.js'
import Public from './assets/js/public.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(echarts);
Vue.use(Public);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
 // store,
  template: '<App/>',
  render:r => r(App)
})
