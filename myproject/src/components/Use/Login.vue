<template>
   <div class="login">
       <input type="text" v-model="uname">
       <input type="button" value="登录" @click="login">
   </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      uname: ''
    }
  },
  methods: {
    login () {
      axios.post('/login', {
        username: this.uname
      }).then((res) => {
        if (res.data.code === 0) {
          this.$store.dispatch('updateUserName', res.data.username)
          this.$router.push('/use')
        }
      })
    }
  }

}
</script>
<style>

</style>