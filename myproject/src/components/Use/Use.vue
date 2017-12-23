<template>
  <div>
    <section>
      <div class="nav">
          <a href="javascript:;" class="active">美团账号登录</a><a href="javascript:;">手机验证登录</a>
      </div>
      <div class="input-list">
          <p><span><input type="text" placeholder="请输入手机号"/></span><span>获取验证码</span></p>
          <p class="inp-two"><input type="text" placeholder=" 请输入短信验证码"/></p>
      </div>
      <div class="btn">
          <p><button>{{username}}登录</button></p>
          <p class="two"><span>立即注册</span><span>找回密码</span></p>
      </div>
    </section>
  </div> 
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Use',
  mounted () {
    // console.log(this.$route)
  },
  computed: mapState({
    username: state => state.username
  })
}
</script>
<style scoped>
section {
-webkit-flex: 1;
background: #f0efed; }
section .nav {
height: 0.4rem;
line-height: 0.4rem;
text-align: center;
background: #ffffff;
display: -webkit-flex; }
section .nav a {
width: 50%;
text-decoration: none;
color: #000;
font-size: 0.14rem; }
section .nav .active {
color: #06c1ae;
border-bottom: 2px solid #06c1ae; }
section .input-list {
height: 0.8rem;
margin-top: 5px;
background: #ffffff;
padding-left: 10px;
box-sizing: border-box; }
section .input-list p {
height: 0.4rem;
line-height: 0.4rem;
border-bottom: 1px solid #cccccc;
padding: 0 10px;
box-sizing: border-box;
display: -webkit-flex;
justify-content: space-between; }
section .input-list p > :nth-child(1) {
  display: -webkit-flex; }
section .input-list p > :nth-child(1) input {
    -webkit-flex: 1; }
section .input-list p > :nth-child(1) input {
    border-width: 0;
    -webkit-flex: 1; }
section .input-list p > :nth-child(1) input::-webkit-input-placeholder {
    color: #858585; }
section .input-list p > :nth-child(2) {
  width: 89px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #cccccc;
  border-radius: 5px;
  margin-top: 5px; }
section .input-list .inp-two {
width: 90%;
display: -webkit-flex; }
section .input-list .inp-two input {
  -webkit-flex: 1;
  background: #f0efed;
  border-radius: 5px;
  border-width: 0;
  margin-top: 5px;
  height: 0.3rem;
  line-height: 0.3rem; }
section .input-list .inp-two input::-webkit-input-placeholder {
  color: #858585; }
section .btn {
height: 1rem;
margin-top: 10px; }
section .btn .two {
width: 90%;
margin-left: 5%;
display: -webkit-flex;
justify-content: space-between;
height: 0.4rem;
line-height: 0.4rem; }
section .btn .two span {
  color: #06c1ae;
  font-size: 0.15rem; }
section .btn button {
width: 90%;
margin-left: 5%;
height: 0.4rem;
line-height: 0.4rem;
text-align: center;
background: #06c1ae;
color: #ffffff;
border: none;
outline: none; }
</style>
