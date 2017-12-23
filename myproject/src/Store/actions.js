export default {
  add ({commit}, num) {
    commit('ADD', num)
  },
  cut ({commit}) {
    commit('CUT')
  },
  updateUserName ({commit}, username) {
    commit('UPDATEUSERNAME', username)
  },
  cityShow ({commit}) {
    commit('CITYSHOW')
  },
  updataCity ({commit}, city) {
    commit('UPDATACITY', city)
    commit('CITYSHOW')
  }
}
