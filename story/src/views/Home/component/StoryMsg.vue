<template>
  <div class="strogMsg">
    <h6>活动介绍</h6>
    <ul>
      <li>
        <!--<span></span>--> 活动时间：11月6日-11月10日，请在11月10日24日前上传参赛规则; 
      </li>
      <li>
         <!-- <span></span>  --> 故事题材不限,内容应积极向上,富有童趣;
      </li>
      <li>
        <!--<span></span>-->   11月13日，关注公众号查询老师点评及分数。
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'strogMsg'
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
        line-height: 20px;
        &::before{
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 100%;
          background: #dedede;
        }
        /* span {
          width: 8px;
          height: 8px;
          background: #dedede;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
        } */
      }
    }
  }
</style>