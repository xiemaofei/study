<template>
   <div class="mark" v-show="close">
      <div class="dialogBox">
        <span class="del" @click="getClose"> <i class="iconfont icon-delete"></i> </span>
        <h5>登录</h5>
        <div class="form">
          <p><i class="iconfont icon-shouji"></i> <input type="text" placeholder="手机号码">  </p>
          <p class="ding"><i class="iconfont icon-duanxinyanzhengma"></i> <input type="text" placeholder="短信验证码"> <span>获取验证码</span> </p>
        </div>
        <button @click="getVideo">登录</button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      close: true
    }
  },
  methods: {
    getClose () {
      this.close = false
    },
    getVideo () {
      this.$router.push('/Upload')
    }
  }
}
</script>
<style lang="less" scoped>
.mark{
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0,0,0,.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left:0;
  right: 0;
  .dialogBox{
    width: 300px;
    height: 300px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -150px;
    margin-top: -150px;
    border-radius: 8px;
    .del{
      position: absolute;
      top: 8px;
      right: 10px;
      color: #ccc;
    }
    h5{
      font-size: 20px;
    }
    .form{
      p{
        width: 90%;
        height:45px;
        margin-left: 5%;
        line-height: 45px;
        text-align: left;
        border-bottom: 1px solid #CCCCCC;
        input{
          width: 70%;
          border-width: 0;
          background: #fff;
        }
      }
      .ding{
        position: relative;
        span{
          position:absolute;
          right: 5px;
          top: 3px;
          color:#454545;
        }
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
  }
}
</style>