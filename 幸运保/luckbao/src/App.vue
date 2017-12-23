<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view v-if="$route.meta.alive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.alive"></router-view>
    <Loading v-model="isLoading"></Loading>
  </div>
</template>
<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background-color: #fbf9fe;
}
</style>
