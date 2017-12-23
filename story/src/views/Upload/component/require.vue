<template>
  <div class="strogMsg">
    <h6>上传视频要求</h6>
    <ul>
      <li>
        <span></span>上传视频时长为3-5分钟；
      </li>
      <li>
        <span></span>声音清晰洪亮，仪态端庄富有感情，可自带背景
      </li>
      <li>
        <span></span>每一位学员只能上传一条视频，确认提交后不能
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'require'
}
</script>
<style lang="less" scoped>
  .strogMsg {
    margin-left: 5%;
    h6 {
      margin: 0;
      padding: 20px 10px;
      box-sizing: border-box;
    }
    ul {
      padding: 0 10px;
      box-sizing: border-box;
      li {
        line-height: 25px;
         font-size:.12rem; 
        span {
          width: 8px;
          height: 8px;
          background: #dedede;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
        }
      }
    }
  }
</style>