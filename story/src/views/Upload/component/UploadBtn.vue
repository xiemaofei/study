<template>
     <a href="javascript:;" class="file">
       <input type="file" ref="file" :capture="capture" @change="changeFile">
       <slot>上传文件</slot>
     </a>
</template>
<script>
export default {
  name: 'UploadBtn',
  props: {
    capture: {
      default: ''
    }
  },

  methods: {
    changeFile () {
      let file = this.$refs.file.files[0]
      let newFile = new FormData()
      newFile.append('test-upload', file)
      this.$http.post('http://39.106.70.14:3000/api/upload', newFile).then((data) => {
        // console.log(data)
        this.$emit('uploadOk', data)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../static/less/base.less';
.file{
  width: 100px;
  height:30px;
  line-height: 30px;
  /* margin-left: 35px;  */
  border-radius: 20px;
  color: #fff;
  display: inline-block;
  position: relative;
  margin-top: 20px;
  text-align: center;
  .gradient(top);
   input{
    opacity: 0;
    position: absolute;
  }  
}
</style>