<template>
  <div id="city">
      <h3>选择您所在的城市</h3> 
      <div v-for="(item, k) in cityArr" :key="k">
        <h4 class="province">{{item.name}}</h4>
        <div class="city" v-for="(city, k) in item.city" :key="k">
         <p @click="changeCityName(city.cid, city.name, item.id)">{{city.name}}</p> 
        </div>
      </div>
      <div class="tos">
        <p v-for="(item, k) in cityArr" :key="k">
          {{k}}
        </p>
      </div>
  </div>
</template>
<script>
import bus from '../../bus'
import axios from 'axios'
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
      bus.$emit('changeCityName', {cid: cid, cname: cname, pid: pid})
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
h3{
    color: #fff;
    line-height: 30px;
    padding: 0 10px;
    box-sizing: border-box;
    background: #ccc;
}
.province{
  color: #fff;
  background: orange;
  line-height: 35px;
  padding: 0 10px;
  border-bottom: 2px solid #000;
}
.city{
  background: pink;
  line-height: 20px;
  color: #fff;
  font-size: 18px;
  border-bottom: 1px solid #000;
}
.city p{
  line-height: 36px;
  text-align: left;
  padding: 0 10px;
}
.tos{
  width: 30px;
  height: 420px;
  position: fixed;
  right: 10px;
  top:50%;
  margin-top: -150px;
  background: blue;
}
.tos p{
  line-height: 21px;
  color: #fff;
}
</style>