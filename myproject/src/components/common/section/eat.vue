<template>
    <div class="content-eat" >
        <p>猜你喜欢 <span>EXPLORE</span></p>
         <div class="tuwen">
             <dl  v-for = "(val, key) in eatList">
              <dt>
                <!-- <router-link to="/videoInfo/111"> -->
                  <img :src="val.img" alt="">
                <!-- </router-link> -->
              </dt>
              <dd>
                  <p>{{val.cname}}</p>
                  <p>{{val.word2}}</p>
              </dd>
            </dl> 
        </div>                    
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'eatList',
  props: ['city'],
  data () {
    return {
      eatList: []
    }
  },
  mounted () {
    // console.log(this.city)
    axios.get('/renderCity', {params: {cname: this.city.cname}})
    .then((res) => {
      // console.log(res)
      this.eatList = res.data.eatlist
    })
    .catch((error) => {
      console.log(error)
    })
  },
  watch: {
    city (n, o) {
      axios.get('/renderCity', {params: {cname: this.city.cname}})
      .then((res) => {
        console.log(res)
        this.eatList = res.data.eatlist
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style>
section .content-eat p {
  line-height: .3rem;
  padding: 0 10px;
  box-sizing: border-box;
  color: #000;
}

section .content-eat .tuwen {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

section .content-eat .tuwen dl {
  padding: 10px 0;
  box-sizing: border-box;
  width: 33.33333%;
}

section .content-eat .tuwen dl dt img {
  width: 50%;
}

section .content-eat .tuwen dl dd {
  flex: 1;
}

</style>