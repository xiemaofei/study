<template>
  <div class="userBox">
     <dl>
        <dt><img src="../../../static/img/head_03.jpg" alt=""></dt>
        <dd>
          <p><span>周嘉骏</span><span>1640人</span></p>
          <p><b>5岁</b> <span>已参加</span> </p>
        </dd>
      </dl>
  </div>
</template>
<script>
export default {
  name: 'userBox'
}
</script>
<style lang="less" scoped>
.userBox{
  width: 90%;
  border-bottom:1px solid #E0E0E0;
  margin-left: 5%;
  padding: 5px 0;
  box-sizing: border-box;
  dl {
      display: flex;
      padding: 10px 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #f5f5f5;
      dt {
        margin-right: 5px;
      }
      dd {
        flex: 1;
        p {
          display: flex;
          line-height: 20px;
          justify-content: space-between;
          b {
            padding: 1px 6px;
            background: #fd911f;
            color: #fff;
            border-radius: 8px;
          }
        }
      }
    }
}
</style>