<template>
   <div class="main">
            <dl v-for="(val, k) in sliderList" :key="k">
                <dt><img :src="val.img" alt=""/></dt>
                <dd>
                    <p>中式招聘 中国企业活动招聘</p>
                    <p><i class="fa fa-moon-o"></i> 49:00</p>
                </dd>
            </dl>              
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'news',
  data () {
    return {
      sliderList: []
    }
  },
  mounted () {
    axios.get('/shop').then((res) => {
      this.sliderList = res.data
    })
  }
}
</script>
<style scoped>
.main {
  display: -webkit-flex;
  flex-wrap: wrap;
  padding: 0 10px;
  box-sizing: border-box;
}
.main dl {
  width: 33.333%;
  text-align: center;
  padding: 15px 0;
  box-sizing: border-box;
  overflow: hidden;
}
.main dl dt {
  margin-bottom: 5px;
}
.main dl dd p {
  line-height: 18px;
}
.main dl dd p:nth-child(1) {
  color: #666666;
  text-indent: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.main dl dd p:nth-child(2) {
  text-align: left;
  color: #42c2b3;
  text-indent: 3px;
}
</style>
