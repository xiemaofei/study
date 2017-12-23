<template>
  <div >
    <imgs :urls="url"/>
    <p><input type="text" placeholder="请输入视频的名称" v-model="name"></p>
    <button @click="subVideo">提交</button>
    <button>重新录制</button>
    <!-- <div class="word">
      <h5>记录我们绚丽的童年 蒋大为 小学五年级</h5>
    </div>
    <div class="list">
       <h6>宝贝分数：<span>98分</span></h6>
       <ul>
         <li>老师评语</li>
         <li>将宝宝你的童年</li>
       </ul>
    </div> -->
  </div>
</template>
<script>
import imgs from './component/img'
export default{
  name: 'Video',
  components: {
    imgs
  },
  data () {
    return {
      url: '',
      name: ''
    }
  },
  mounted () {
    // console.log(data)
    this.url = 'http://39.106.70.14:3000/' + this.$route.params.url
    // console.log(this.$route)
  },
  methods: {
    subVideo () {
      this.$http.post('http://39.106.70.14:3000/api/addVideo', {
        name: this.name,
        video_src: this.url
      }).then((data) => {
        // console.log(data)
        this.$router.push({name: 'Success', params: {obj: data}})
      })
    }
  }
}
</script>
<style lang="less" scoped>
p{
  height: .4rem;
  line-height: .4rem;
  padding: 0 20px;
  box-sizing: border-box;
  input{
    border-width: 0;
    width: 100%;
    outline: none;
  }
}
button{
    width: 90%;
    margin-left: 5%;
    border-radius: 20px;
    color: #fff;
    margin-top: 20px;
    height: 35px;
    line-height: 35px;
    background: #46C18C;
    outline: none;
    border:none;
}
</style>