<template>
  <div class="mark" @click="closeMark"> 
      <div class="box">
        <p>{{label}}</p>
          <div class="boxCont">
           <slot></slot>
           </div>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'detail',
    props: {
      label: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        flage: true
      }
    },
    methods: {
      closeMark () {
        this.$emit('closeMark')
      }
    }
  }

</script>
<style lang="less" scoped>
.mark{
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  z-index: 999;
  
}
.box{
  position: fixed;
  bottom: -300px;
  width: 100%;
  height: 300px;
  background: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  animation: slide .5s linear forwards;
  p{
    line-height: 40px;
    text-align:center;
    border-bottom: 1px solid #ccc;
  }
}
@keyframes slide{
  0% { bottom: -100px}
  50% {bottom: -50px}
  100% {bottom: 0px}
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
