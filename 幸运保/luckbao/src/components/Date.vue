<template>
<div class="submit-page"> 
  <ul>
    <li>
      <span><i>*</i>起保日期</span>
      <input type="text">
      <b>></b>
    </li>
    <h1>投保人信息</h1>
  </ul>
  <ol>
    <li><span><i>*</i>姓名</span></li>
    <li>
      <span><i>*</i>证件类型</span>
      <input type="text" value="请选择">
      <b>></b>
    </li>
    <li><span><i>*</i>证件号码</span></li>
    <li>
      <span><i>*</i>出生日期</span>
       <input type="date">
      <b>></b>
    </li>
    <li>
      <span><i>*</i>性别</span>
      <input type="text" value="请选择">
      <b>></b>
    </li>
     <li><span><i>*</i>手机号码</span></li>
     <li><span><i>*</i>电子邮箱</span></li>
  </ol>
  <h2>被保险人信息</h2>
  <ol>
    <li><span><i>*</i>姓名</span></li>
    <li><span><i>*</i>证件号码</span></li>
    <li>
      <span><i>*</i>出生日期</span>
       <input type="date">
      <b>></b>
    </li>
    <li>
      <span><i>*</i>性别</span>
      <input type="text" value="请选择">
      <b>></b>
    </li>
     <li><span><i>*</i>手机号码</span></li>
     <li><span><i>*</i>电子邮箱</span></li>
  </ol>
  <div class="btns"> 
    <div class="left">
      ￥<span>15</span>
    </div>
    <div class="right">
      <button>提交</button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'submit'
}
</script>

<style scoped lang="less">
.submit-page{
  width: 100%;
  height: 100%;
}
ul{
  margin-top: 10px;
  h1{
    color: #999;
    font-size: 14px;
    line-height: 30px;
    padding-left: 6px;
  }
  li{
    line-height: 30px;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    padding-left: 4px;
    box-sizing: border-box;
    background: #fff;
    i{
      padding-right: 4px;
    }
    span{
      font-size: 12px;
      color: #999;
      i{
        color: deeppink;
      }
    }
    input{
      margin-left: 140px;
      width: 90px;
      border-width: 0;
      background: #fff;
    }
    b{
      color: #999;
      font-size: 13px;
      float: right;
      padding-right: 8px;
      box-sizing: border-box;
    }
  }
}
ol{
  list-style: none;
  background: #fff;
  border-top: 1px solid #ccc;
  padding-left: 6px;
  box-sizing: border-box;
  li{
    line-height: 35px;
    border-bottom: 1px solid #ccc;
    i{
      padding-right: 6px;
      box-sizing: border-box;
      color: deeppink;
    }
    span{
      color: #000;
    }
    input{
      margin-left: 140px;
      width: 90px;
      border-width: 0;
      background: #fff;
    }
    b{
      color: #999;
      font-size: 13px;
      float: right;
      padding-right: 8px;
      box-sizing: border-box;
    }
  }
}
h2{
  color: #999;
  font-size: 13px;
  line-height: 30px;
  padding-left: 6px;
}
.btns{
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  display: -webkit-flex;
  .left{
    width: 70%;
    background:#333;
    color: #fff;
    span{
      color: #fff;
    }
  }
  .right{
    width: 30%;
    text-align: center;
    background:deeppink;
    button{
      background:deeppink;
      color: #fff;
      border-width: 0;
      font-size: 13px;
    }
  }
}
</style>
