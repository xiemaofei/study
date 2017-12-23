// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mock from './mock'
import mint from 'mint-ui'
import store from './Store'
import './assets/css/common.css'
import './assets/css/font-awesome.min.css'
import './assets/css/reset.css'
mock.bootstrap()
Vue.use(mint)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
