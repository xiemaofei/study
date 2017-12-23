<template>
  <div class="Response">
    <div class="Response-height"></div>
    <div class="Response-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'response'
}
</script>
<style lang="less" scoped>
.Response{
  width: 100%;
  position: relative;
  .Response-height{
    margin-top:67.8%;
  }
  .Response-content{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>