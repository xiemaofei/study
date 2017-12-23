<template>
  <div class="home-page">
      <Response class="scene">
        <img src="../../static/img/场景背景@2x.png" />
      </Response>
      <div class="content">
        <template>
          <require></require>
          <UploadBtn @uploadOk="uploadOk">
           <i class="iconfont icon-video-conferencing-upload"></i>上传视频
          </UploadBtn>
          <UploadBtn><i class="iconfont icon-shipinluzhi"></i> 录制视频</UploadBtn>
        </template>
      </div>
  </div>
</template>
<script>
import Response from '@/components/Response'
import require from './component/require'
import UploadBtn from './component/UploadBtn'
export default {
  name: 'notAttention',
  components: {
    Response,
    require,
    UploadBtn
  },
  methods: {
    uploadOk (result) {
      // console.log(result)
      if (result.data.ok === true) {
        // localStorage.setItem('src', result.data.data.url)
        this.$router.push({name: 'Video', params: {url: result.data.data.url}})
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../static/less/base.less';
.home-page{
  width: 100%;
  min-height: 100%;
  .gradient(top);
  .scene{
    padding:0 15px;
    box-sizing: border-box;
    img {
      width: 100%;
      display: block;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
    }
  }
  .content{
    width: 90%;
    margin-left: 5%;
    height: 3.5rem;
    background: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>