<template>
    <div class="nav">
          <ul>
            <li v-for = "(val, key) in navList">
                <span>
                  <router-link :to="`/videoInfo/${val.vid}`">
                     <img :src="val.img" alt="">
                  </router-link>
                 
                </span>
                <span>{{val.des}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'navLists',
  mounted () {
    axios.get('/api/login')
    .then((res) => {
      this.navList = res.data
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  data () {
    return {
      navList: []
    }
  }
}
</script>
<style lang="css" scoped>
section .nav {
  padding: 10px 10px;
  box-sizing: border-box;
}
section .nav ul {
  display: flex;
  text-align: center;
}
section .nav ul li {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
}
section .nav ul li span:nth-child(1) {
  margin-right: 5px;
}
section .nav ul li span:nth-child(1) img {
  width: 100%;
}
</style>