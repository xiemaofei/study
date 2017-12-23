export default {
  namespaced: true,
  statue: {

  },
  mutations: {

  },
  actions: {
    getProductList ({store}, {page, pageSize, id}) {
      return new Promise((resolve, reject) => {
        // resolve('asdfgs')
        this._vm.$http.get('/api/product/list', {
          params: {
            page: page,
            pageSize: pageSize,
            cat_id: id
          }
        }).then((res) => {
          resolve(res.data)
        })
      })
    },
    getHomeIndex ({store}) {
      return new Promise((resolve, reject) => {
        // resolve('asdfgs')
        this._vm.$http.get('/api/home/index').then((res) => {
          resolve(res.data)
        })
      })
    },
    getDetail ({store}, {id}) {
      return new Promise((resolve, reject) => {
        // resolve('asdfgs')
        this._vm.$http.get('/api/product/view', {
          params: {
            product_id: id
          }
        }).then((res) => {
          resolve(res.data)
        })
      })
    },
    getLogin ({store}) {
      return new Promise((resolve, reject) => {
        // resolve('asdfgs')
        this._vm.$http.get('/api/test-login').then((res) => {
          resolve(res.data)
        })
      })
    },
    GetPrice ({store}, postData) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/trial/submit', postData).then((res) => {
          resolve(res.data)
        })
      })
    },
    getHealth ({store}, {
      product_id
    }) {
      return new Promise((resolve, reject) => {
        // resolve('asdfgs')
        this._vm.$http.post('/api/health-state/view', {
          product_id
        }).then((res) => {
          resolve(res.data)
        })
      })
    },
    PostHealth ({store}, healthState) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/health-state/submit', healthState).then((res) => {
          resolve(res.data)
        })
      })
    }

  }
}
