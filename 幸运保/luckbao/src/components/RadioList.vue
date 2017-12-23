<template>
  <div class="radio">
    <span class="label" v-for="(item, index) in list" :key="index">
      <input type="radio" :value="item.value" :id="'radio'+index" :name="name" v-model="value">
      <label :for="'radio'+index">{{item.value}}</label>
    </span>
  </div>
</template>
<script>
export default {
  name: 'radiolist',
  props: {
    list: {
      default: []
    },
    name: {
      default: ''
    }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value () {
      this.$emit('input', this.value)
    }
  }
}
</script>
<style lang="less" scoped>
.radio{
  display: inline-block;
}
.label{
  display: inline-block;
  input{
    display: none;
  }
  label{
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 5px;
  }
  input:checked + label{
    background: #ff4774;
    color: #fff;
    border-color: #ff4774;
  }
}
</style>
