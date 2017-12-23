<template>
   <div class="cont">
       <img v-for = "(val, key) in oneList" :src="val.img">
    </div>
</template>
<script>
export default {
  name: 'navLists',
  data () {
    return {
      oneList: [
        {
          img: './src/assets/images/imgs/content.jpg_.webp'
        }
      ]
    }
  }
}
</script>
<style lang="css" scoped>
section .cont img {
  width: 100%;
}
</style>