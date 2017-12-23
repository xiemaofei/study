<template>
   <div>
     <video :src="src" controls="controls" class="videoImg"></video>
     <h5>{{name}}</h5>
      <div class="info">
        <img src="../../../static/img/成功.png" alt="">
        <p>上传成功！</p>
        <p>活动初赛结果将于11月13日公布，敬请期待！</p>
      </div>
   </div>
</template>
<script>
export default {
  name: 'img',
  data () {
    return {
      src: '',
      name: ''

    }
  },
  mounted () {
    this.src = JSON.parse(this.$route.params.obj.config.data).video_src
    this.name = JSON.parse(this.$route.params.obj.config.data).name
  }
}
</script>
<style lang="less" scoped>
.videoImg{
  width: 100%;
}
h5{
  text-align: center;
}
.info{
  width: 100%;
  text-align: center;
  margin-top: 30%;
  padding: 0 0 134px 0;
  p{
    color: #454545; 
    line-height: 2em;
  }
} 
</style>