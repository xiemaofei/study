<template>
  <div id="app">
    <router-view/> 
  </div>
</template>
<script>

export default {
  name: 'app'
}
</script>
<style lang="less">
 @import './static/less/base.less'; 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: .12rem;
}
</style>
