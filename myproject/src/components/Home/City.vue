<template>
  <div id="city">
     <mt-index-list> 
       <mt-index-section v-for="(v, k) in cityArr" :index="v.name" :key="k"> 
         <mt-cell v-for="(item, k) in v.city" :title="item.name" :key="k">
           <p  style="width:150px;height:20px;" @click="changeCityName(item.cid, item.name, v.id)"></p>
         </mt-cell>  
       </mt-index-section> 
    </mt-index-list>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
// import bus from '../../bus'
import '../../assets/css/style.min.css'
import { IndexList, IndexSection } from 'mint-ui'
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
export default {
  name: 'city',
  data () {
    return {
      cityArr: []
    }
  },
  mounted () {
    axios.get('/getCityList')
    .then((res) => {
      this.cityArr = res.data.province
    })
    .catch((error) => {
      console.log(error)
    })
  },
  methods: {
    changeCityName (cid, cname, pid) {
      this.$store.dispatch('updataCity', {cid, cname})
      // bus.$emit('changeCityName', {cid: cid, cname: cname, pid: pid})
    }
  }
}
</script>
<style scoped>
#city{
 width: 100%;
 height: 2500px;
 overflow-y: scroll;
 z-index: 999;
 position: fixed;
 top: 0;
 left: 0;
 background: rgba(0, 0, 0, .7)
}
p{
  text-align: left;
}
</style>