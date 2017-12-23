<template>
  <div>
      <Swiper :list="swiperList" :auto="true" :loop="true" dots-position="center" @on-index-change="gaibian" />
  </div>
</template>
<script>
import { Swiper } from 'vux'
export default{
  name: 'swiper',
  components: {
    Swiper
  },
  data () {
    return {
      swiperList: [
        {
          url: 'javascript:',
          img: 'http://pubsto.datebao.com/ladderUploads/banner/eshun20170526152715.jpg'
        },
        {
          url: 'javascript:',
          img: 'http://pubsto.datebao.com/ladderUploads/banner/fuqinjieapp.jpg'
        },
        {
          url: 'javascript:',
          img: 'http://pubsto.datebao.com/ladderUploads/banner/guoshouebao.jpg',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }
      ]
    }
  },
  methods: {
    gaibian (...reset) {
      // console.log(reset)
    },
    onItemClick (index) {
      console.log('on item click:', index)
    }
  }
}
</script>
<style lang="less" scoped>
.tab-swiper { 
  background-color: #fff;
}
</style>

