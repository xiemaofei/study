<template>
  <div class="video">
   <h3> {{videoInfo.title}}</h3>
   <h3> {{videoInfo.nums}}</h3>
  </div>
</template>
<script>
import axiso from 'axios'
export default {
  name: 'videoInfo',
  data () {
    return {
      videoInfo: ''
    }
  },
  methods: {
    getVideo () {
      axiso.get('/getVideoInfo', {params: {vid: this.$route.params.vid}}).then((res) => {
       // console.log(res.data)
        this.videoInfo = res.data[0]
      })
    }
  },
  mounted () {
    this.getVideo()
  },
  beforeRouteUpdata (to, from, next) {
    this.getVideo()
  }
}
</script>
<style scoped>
h3{
  font-size: 25px;
}
</style>
