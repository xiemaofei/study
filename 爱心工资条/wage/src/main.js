// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
// import axios from './api'
import axios from 'axios'
import VueECharts from 'vue-echarts'
Vue.use(VueECharts)
Vue.component('chart', VueECharts)
let vm = ''
axios.interceptors.request.use(function (config) {
  console.log('请求前')
  return config
}, function (error) {
  console.log('请求前错误')
  return Promise.reject(error)
})
Vue.use(Element)
Vue.prototype.$http = axios
Vue.config.productionTip = false
console.log(Vue.prototype)
/* eslint-disable no-new */
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data
}, function ({response}) {
  console.log(response)
  if (response.status === 403) {
    vm.$router.replace('/login')
  } else {
    vm.$message.error(response.data.msg)
  }
  return Promise.reject(response)
})
vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
