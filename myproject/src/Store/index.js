import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
const state = {
  count: 0,
  username: '',
  cityFlag: false,
  city: {
    cid: 0,
    cname: '北京'
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
