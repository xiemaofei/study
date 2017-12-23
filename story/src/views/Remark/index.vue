<template>
  <div>
    <home/>
    <div class="box">
      <div class="word">
        <h5>感谢您对故事大赛的支持,</h5>
        <h5>点击下方查阅您的分数和老师独家点评</h5>
        <router-link to="/TeacheRreviews"><button>查看老师点评</button></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import home from '../Home/home.vue'
export default{
  name: 'Attention',
  components: {
    home
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    show () {
      this.dialog = true
    }
  }
}
</script>
<style lang="less" scoped>
.box {
    position: fixed;
    width: 90%;
    top: 50%;
    height: 50%;
    background: #fff;
    margin-left: 5%;
    margin-top: -9%;
    text-align: center;

  }
  .word{
    margin-top: 38%;
  }
  button{
        width: 70%;
        height:45px;
        line-height: 45px;
        outline: none;
        border: none;
        background: #46C18C;
        margin-left: 15%;
        border-radius: 20px;
        color: #fff;   
    }
</style>