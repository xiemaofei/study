<template>
    <div class="banner">  
       <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(v, k) in banner" :key="k">
            <img :src="v.img" alt="">
          </mt-swipe-item>
       </mt-swipe>
    </div> 
</template>
<script>
import '../../../assets/css/style.min.css'
import Vue from 'vue'
import {Swipe, SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  name: 'sections',
  data () {
    return {
      banner: [
        {
          img: './src/assets/images/banner/banner1.jpg_.webp'
        },
        {
          img: './src/assets/images/banner/banner2.jpg_.webp'
        },
        {
          img: './src/assets/images/banner/banner3.jpg_.webp'
        },
        {
          img: './src/assets/images/banner/banner4.jpg_.webp'
        },
        {
          img: './src/assets/images/banner/banner5.jpg_.webp'
        }
      ]
    }
  }
}
</script>
<style lang="css" scoped>
.banner{
  height: 1.9rem;
}
.banner img {
    width: 100%;
    height: auto;
}
</style>