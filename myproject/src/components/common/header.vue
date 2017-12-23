<template>
  <header>
     <span @click="cityShow">{{city.cname}}</span><span>天猫超市</span><span><i class="fa fa-shopping-cart"></i></span>
  </header>
</template>
<script>
import bus from '../../bus'
export default {
  name: 'Heades',
  props: ['city'],
  methods: {
    cityShow () {
      this.$store.dispatch('cityShow')
      bus.$on('changeCityName', function (cid) {
        this.cityname = cid
      })
    },
    renderCity () {
      // console.log('111')
    }
  },
  mounted () {
    this.renderCity()
  },
  beforeUpdate () {
    this.renderCity()
  }
}
</script>
<style lang="css" scoped>
header {
  height: .4rem;
  line-height: .4rem;
  background: #ffffff;
  display: -webkit-flex;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: .19rem;
  color: #11BB55;
}
header .fa {
  color: #cccccc;
}
header .fa {
  color: #cccccc;
}
</style>