export default {
  ADD (state, num) {
    state.count += num
  },
  CUT (state) {
    state.count--
    if (state.count <= 0) {
      state.count = 0
    }
  },
  UPDATEUSERNAME (state, username) {
    state.username = username
  },
  CITYSHOW (state) {
    state.cityFlag = !state.cityFlag
  },
  UPDATACITY (state, city) {
    state.city = city
  }
}
