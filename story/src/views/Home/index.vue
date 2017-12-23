<template>
  <div class="home-page">
    <Login v-show="markShow"></Login>
    <Response class="scene">
      <img src="../../static/img/场景背景@2x.png" />
    </Response>
    <div class="content">
      <UserInfo></UserInfo>
      <StoryMsg></StoryMsg>
      <template>
        <div class="erweima" v-if="follow == 1">
          <i class="iconfont icon-erweima"></i>
          <div class="word">
            <p>关注21天表达训练营</p>
            <p>专注提高儿童表达能力</p>
          </div>
        </div>
       <button v-else @click="getMark" class="btn">参加故事大赛</button>
      </template>
    </div>
  </div>
</template>
<script>
import Response from '@/components/Response'
import UserInfo from './component/UserInfo'
import StoryMsg from './component/StoryMsg'
import Login from './component/Login'
export default {
  name: 'home',
  components: {
    Response,
    UserInfo,
    StoryMsg,
    Login
  },
  data () {
    return {
      follow: 1,
      isLogin: 1,
      markShow: false
    }
  },
  created () {
    this.getfollow()
  },
  methods: {
    getRandom (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    getfollow () {
      this.follow = this.getRandom(1, 2)
      this.isLogin = this.getRandom(1, 2)
    },
    getMark () {
      this.markShow = true
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../static/less/base.less';
.home-page{
  width: 100%;
  min-height: 100%;
  .gradient(top);
  .scene{
    padding:0 15px;
    box-sizing: border-box;
    img {
      width: 100%;
      display: block;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
    }
  }
  .content{
    width: 90%;
    margin-left: 5%;
    height: 3.5rem;
    background: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .erweima {
      text-align: center;
      .iconfont {
        font-size: 65px;
      }
      .word {
        p {
          color: #afafaf;
          line-height: 25px;
          text-align: center;
          line-height: 25px;
        }
      }
    }
    /* button{
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
    } */
}
</style>