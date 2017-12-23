// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
// import axios from 'axios'
import store from './store'
import { AjaxPlugin } from 'vux'
// Vue.use(router)
let instance = AjaxPlugin.$http.create({
  headers: {'X-Custom-Header': 'foobar'},
  transformRequest: [ function (data) {
    let urlData = ''
    for (let key in data) {
      urlData += key + '=' + JSON.stringify(data[key]) + '&'
    }
    urlData = urlData.slice(0, -1)
    // console.log(urlData)
    return urlData
  }]
})
FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.$http = instance
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
