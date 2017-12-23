<template>
   <div>
     <video :src="newUrl" controls="controls" class="videoImg"></video>
   </div>
</template>
<script>
export default {
  name: 'img',
  props: ['urls'],
  data () {
    return {
      newUrl: this.urls
    }
  },
  mounted () {
    console.log(this.newUrl + '....')
  }
}
</script>
<style>
.videoImg{
  width: 100%;
}
</style>