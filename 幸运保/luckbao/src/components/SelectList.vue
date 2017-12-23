<template>
  <PopupPicker 
  :title="title" 
  :data="selectArr"
  v-model='val'
  >
</PopupPicker>
</template>
<script>
import { PopupPicker } from 'vux'
export default {
  name: 'selectlist',
  props: {
    step: {
      default: ''
    }
  },
  data () {
    return {
      title: '选择天数',
      selectArr: [],
      val: []
    }
  },
  components: {
    PopupPicker
  },
  watch: {
    val (newVal) {
      // console.log(this.val)
      this.$emit('input', this.val[0])
    }
  },
  created () {
    let {
      min,
      max,
      step,
      unit
    } = this.step
    let arr = []
    for (let i = min; i < max; i += step) {
      arr.push({
        name: i + unit,
        value: i
      })
    }
    this.selectArr.push(arr)
  }
}
</script>
<style lang="less" scoped>
.vux-popup-dialog{
  z-index: 555 !important;
}
</style>
