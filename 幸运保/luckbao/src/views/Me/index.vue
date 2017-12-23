<template>
  <div>
    <div class="box">
      <div class="img">
        <img src="../../static/images/shan_03.jpg" alt="">
      </div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item, index) in mineList" :key="index">
          <span>
            <img :src="item.imgs" alt="">
          </span>
          <span>
            {{item.con}}
          </span>
        </li>
      </ul>
    </div>
    <Footers></Footers>
  </div>
</template>
<script>
const img1 = require('../../static/images/icon10.png')
const img2 = require('../../static/images/icon5.png')
const img3 = require('../../static/images/icon2.png')
const img4 = require('../../static/images/icon7.png')
const img5 = require('../../static/images/icon11.png')
const img6 = require('../../static/images/icon12.png')
const img7 = require('../../static/images/icon4.png')
import Footers from '../../components/Footer'
export default {
  name: 'me',
  components: {
    Footers
  },
  data () {
    return {
      msg: '我的',
      mineList: [
        {
          imgs: img1,
          con: '我的保单'
        },
        {
          imgs: img2,
          con: '投保人信息'
        },
        {
          imgs: img3,
          con: '申请理赔'
        },
        {
          imgs: img4,
          con: '申请退保'
        },
        {
          imgs: img5,
          con: '申请续保'
        },
        {
          imgs: img6,
          con: '销售记录'
        },
        {
          imgs: img7,
          con: '设置'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.box{
  position: relative;
  text-align: center;
  width: 100%;
  height: 300px;
  line-height: 300px;
  background: #fe4773;
}
.box .img{
  position: absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 10px auto;
}
.box .btn{
   position: absolute;
  top: 56px;
  left: 83%;
   margin-left: -150px;
  width: 45px;
  height: 30px;
  border: none;
  color: #fff;
  background: forestgreen; 
}
.box .img img{
  border-radius: 100%;
}
.box p{
  line-height: 20px;
}
.nav ul{
  display: flex;
  width: 100%;
  text-align: center;
  flex-wrap: wrap;
  padding: 10px 0;
  box-sizing: border-box;
}
.nav ul li{
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  box-sizing: border-box;
}
.nav ul li span:nth-child(1){
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: auto;
  margin-bottom: 5px;
  color: #808080;
}
.nav ul li span:nth-child(2){
  font-size: 15px;
  color: #808080;
}
.nav ul li span:nth-child(1) img{
  width: 30px;
  height: 30px;
}
</style>
