<template>
  <div class="login">
    <h2>账号密码登陆</h2>
    <div class="content">
      <input type="text" placeholder="请输入用户名/手机号/邮箱" v-model="use">
    </div>
    <div class="content">
      <input type="text" placeholder="请输入密码">
    </div>
    <div class="button">
      <button @click="logins">登录</button>
    </div>
    <div class="letter">
      <span class="left">忘记密码</span><span class="right">立即注册</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      use: ''
    }
  },
  methods: {
    logins () {
      window.localStorage.setItem('use', this.use)
      this.$store.dispatch('user/getLogin').then((res) => {
        if (res.nickname === '刘于') {
          this.$router.replace('/Home')
        }
      })
      // this.$store.dispatch('login/GetLoginInfo').then((res) => {
      //   // console.log(res)
      //   if (res.statusText === 'OK') {
      //     this.$router.push('/home')
      //   }
      // })
    }
  }
}
</script>
<style scoped lang='less'>
.login{
  h2{
    text-align: center;
    line-height: 150px;
  }
  .content{
    width: 90%;
    border-bottom:1px solid #ccc;
    margin-left: 5%;
    line-height: 60px;
    input{
      border:none;
      outline: none;
      padding-left:9px;
    }
  }
  .button{
    width: 90%;
    height: 40px;
    margin-top:30px;
    background: #ff4774;
    margin-left: 5%;
    button{
      width: 100%;
      height: 40px;
      border:none;
      outline: none;
      background:#ff4774;
      font-size: 12px;
      color:#fff;
    }
  }
  .letter{
    width: 90%;
    margin-left:5%;
    color: #6b6666;
    font-size: 12px;
    margin-top:10px;
    .left{
      float: left;
    }
    .right{
      float: right;
    }
  }
}
</style>
