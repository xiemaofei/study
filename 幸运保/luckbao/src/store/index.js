import Vue from 'vue'
import Vuex from 'Vuex'
import product from './module/product'
import user from './module/user'
Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    product,
    user
  }
})
store.registerModule('vux', {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})
export default store

