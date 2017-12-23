<template>
  <div class="home-page">
    <Swiper></Swiper>
   <Sticky :check-sticky-support="false">
      <Tab2 :cartList="cartList"></Tab2> 
   </Sticky>
   <List :productList="productList"></List>
     <LoadMore tip="正在加载" v-show="flg"></LoadMore>
     <Footers></Footers>
  </div>
</template>
<script>
import { LoadMore, Sticky } from 'vux'
import Tab2 from '../../components/Tab2'
import List from '../../components/List'
import Swiper from '../../components/Swiper'
import Footers from '../../components/Footer'
export default {
  name: 'home-page',
  components: {
    Swiper,
    Sticky,
    Tab2,
    List,
    LoadMore,
    Footers
  },
  data () {
    return {
      msg: 'Hello World!',
      cartList: [],
      productList: [],
      flg: true,
      page: 0,
      pageSize: 10,
      catId: 0
    }
  },
  created () {
    this.getHomeIndex()
    this.getProductList()
    this.initScroll()
    // this.scrollLoad()
  },
  methods: {
    getHomeIndex () {
      this.$store.dispatch('product/getHomeIndex').then((res) => {
        this.cartList = res.cart_list
      })
    },
    getProductList (page = 0, pageSize = 10, id = 0) {
      this.$store.dispatch('product/getProductList', {
        page,
        pageSize,
        id
      }).then((res) => {
        this.productList = [...this.productList, ...res.list]
        this.page++
        if (res.list.length < this.pageSize || res.list.length === 0) {
          this.flg = true
          this.productList = [...this.productList, ...res.list]
          return false
        }
        this.flg = true
      })
    },
    scrollLoad () {
      // 滚动条滚动的距离
      let scrollY = window.scrollY
      // iphone 的高
      let clientH = window.innerHeight
      // if (!this.loadFlg) return false
      if (scrollY + clientH >= document.body.offsetHeight && this.flg) {
        this.flg = false
        this.getProductList(this.page, this.pageSize, this.catId)
      }
    },
    initScroll () {
      document.addEventListener('scroll', this.scrollLoad, false)
    }
  }
}
</script>
<style lang="less" scoped>
.home-page {
  padding-bottom: 59px;
}
</style>
