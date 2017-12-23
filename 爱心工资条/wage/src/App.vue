<template>
  <div id="app">
    <template v-if="$route.path != '/login'">
      <Headerbar/>
      <Sections/>
    </template>
    <template v-else>
       <router-view/>
    </template>
   
  </div>
</template>
<script>
import './static/css/reset.css'
import './static/css/index.css'
import './static/fonts/iconfont.css'
import Headerbar from '@/components/headerBar'
import Sections from '@/components/Section'
export default {
  name: 'app',
  components: {
    Headerbar,
    Sections
  }
}
</script>
<style>
#app {
  
}
</style>
