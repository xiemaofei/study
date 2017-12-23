export default {
  namespaced: true,
  statue: {

  },
  mutations: {

  },
  actions: {
    getLogin ({store}) {
      return new Promise((resolve, reject) => {
        // resolve('asdfgs')
        this._vm.$http.get('/api/test-login').then((res) => {
          resolve(res.data)
        })
      })
    }
  }
}
