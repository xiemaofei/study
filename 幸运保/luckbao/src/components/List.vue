<template>
  <div class="list"> 
    <dl class="dl" v-for="(item, index) in productList" :key="index" @click="detail(item.product_id)">
        <dt><img :src="item.cover"/></dt> 
        <dd>
          <p class="hei">{{item.title}}</p>
          <p>{{item.features}}</p>
          <p class="bian"><span>{{item.price}}</span><span>{{item.sale_num}}</span></p>
        </dd>
   </dl> 
  </div>
</template>
<script>
// import Detail from '../views/Detail'
export default {
  name: 'list',
  props: {
    productList: {
      default: []
    }
  },
  data () {
    return {
      array: [],
      flage: true
    }
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    },
    detail (id) {
      this.$router.push({name: 'Detail', params: {id: id}})
    }
  }
}
</script>
<style lang="less" scoped>
.dl{
  display: flex;
  font-size: 15px;
  padding: 10px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;

}
.dl dd{
  display: flex;
  flex-direction: column;
  flex: 1;
}
.dl dt{
  margin-right:8px;
}
.dl dd p{
  line-height: 25px;
  color: #bebebe;
}
.dl dd .hei{
  color: #3b3b3b;
}
.dl dd .bian{
  display: flex;
  justify-content: space-between;
}
.dl dd .bian span:nth-child(1){
  color: #fb3f7c;
}
.dl dt img{  
    width: 150px;
    height: 100px;  
}
</style>

