<template>
  <div id="app">
    <City v-if="cityFlag"/>
    <Heades :city="city"/>
    <Sections :city="city"/>
    <footers/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import City from './City'
import Heades from '../common/header'
import Sections from '../common/section'
import footers from '../common/footer'
import '../../assets/css/swiper.min.css'
// import bus from '../../bus'
export default {
  name: 'app',
  components: {
    City,
    Heades,
    Sections,
    footers
  },
  computed: mapState({
    cityFlag: state => state.cityFlag,
    city: state => state.city
  }),
  mounted () {
    // let that = this
    // bus.$on('changeCityName', function (data) {
    //   console.log(data)
    //   that.city = data
    //   that.cityFlag = false
    // })
  }
}
</script>
<style>
</style>
