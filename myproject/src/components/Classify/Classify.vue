<template>
  <div class="classify">
      <header>
        <router-link tag="span" to="/"><i class="fa fa-angle-left"></i></span></router-link>购物商城</span><span><i class="fa fa-car"></i></span>
      </header>
    <div class="nav">
          <ul>
            <!-- <li v-for="(v, k) in arrlist" :key="k" @click="tab(k)" :class="{{active: isActive}}">{{v.word}}</li> -->
            <router-link active-class="active" v-for="(v, k) in arrlist" :key="k" tag="li" :to="v.path">{{v.word}}</router-link>
            <!-- <router-link tag="li" to="/classify/news">最新</router-link>
            <router-link tag="li" to="/classify/free">免费</router-link>  -->
          </ul>
          
       </div>
   <section>      
       <router-view></router-view>
   </section>
  </div>
</template>
<script>
export default {
  name: 'classify',
  data () {
    return {
      arrlist: [
        {
          word: '最热',
          id: 0,
          path: '/classify/hot'
        },
        {
          word: '最新',
          id: 1,
          path: '/classify/news'
        },
        {
          word: '免费',
          id: 2,
          path: '/classify/free'
        }
      ]
    }
  }
}
</script>
<style scoped>
header {
  height: .4rem;
  line-height: .4rem;
  background: #323136;
  display: -webkit-flex;
  justify-content: space-between;
  color: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: center;
}
header span:nth-child(1) .fa {
  font-size: .15rem;
}
header span:nth-child(2) {
  font-size: .16rem;
}
.nav ul {
  padding: 0 10px;
  box-sizing: border-box;
  display: -webkit-flex;
  height: .5rem;
  line-height: .5rem;
  text-align: center;
  border: 1px solid #cccccc;
}
.nav ul li {
  width: 33.3333%;
  color: #666666;
  font-size: .15rem;
}
.nav ul .active {
  color: #33bdad;
  border-bottom: 3px solid #33bdad;
}
section {
  -webkit-flex: 1;
  overflow-y: scroll;
  background: #fff;
}
section .main {
  display: -webkit-flex;
  flex-wrap: wrap;
  padding: 0 10px;
  box-sizing: border-box;
}
section .main dl {
  width: 33.333%;
  text-align: center;
  padding: 15px 0;
  box-sizing: border-box;
  overflow: hidden;
}
section .main dl dt {
  margin-bottom: 5px;
}
section .main dl dd p {
  line-height: 18px;
}
section .main dl dd p:nth-child(1) {
  color: #666666;
  text-indent: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
section .main dl dd p:nth-child(2) {
  text-align: left;
  color: #42c2b3;
  text-indent: 3px;
}
</style>
