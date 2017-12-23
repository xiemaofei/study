<template>
  <div>
    <el-form ref="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="user.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="user.userpwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginDo">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        userpwd: ''
      }
    }
  },
  created () {
    this.$http.get('/api/getlist', this.user).then((data) => {
      console.log(data)
    })
  },
  methods: {
    loginDo () {
      this.$http.post('/api/login', this.user).then((data) => {
        console.log(data)
        this.$router.replace('/home')
      })
      // window.localStorage.setItem('user', JSON.stringify(this.user))
      // this.$router.replace('/home')
    }
  }
}
</script>
<style>

</style>