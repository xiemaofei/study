<template>
    <Tab :line-width=2 active-color='#fc378c' custom-bar-width="60px">
      <TabItem 
        @on-item-click="onItemClick"
        v-for="(item, index) in cartList"
        :key="index"
      >{{item.cat_name}}</TabItem>
    </Tab>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
  name: 'tab',
  props: ['cartList'],
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      index: 0
    }
  },
  created () {
    // this.getNav()
  },
  methods: {
    onItemClick (index) {
      // this.index = index
      console.log('on item click:', index)
    }
  }
}
</script>
<style lang="less" scoped>
.active{
  color: #fc378c;
}
</style>

