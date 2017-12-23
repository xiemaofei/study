<template>
  <header class="headerbar">
    <el-row> 
      <el-col :span="12">
        <div class="grid-content bg-purple-dark left-info">
          <div class="logo">
            <img src="https://gztdd.hrwuu.com/Public/news/img/index/index_header_login.png" alt="">
            <span class="color">安心工资条</span>
          </div>
          <small>北京易体保险有限公司</small>
        </div>
      </el-col> 
      <el-col :span="12">
        <div class="grid-content bg-purple-dark right-info">
            <a href="#"><i class="iconfont icon-xinxi"></i></a>
            <a href="#"><i class="iconfont">|</i></a>
            <a href="#">
              <i class="iconfont icon-icon-test"></i>
            </a>
            <a href="#">
              谢茂菲
            </a>
            <a href="#"><i class="iconfont">|</i></a>
            <a href="#"><i class="iconfont icon-tuichu"></i></a>
        </div>
      </el-col>
    </el-row>
  </header>
</template>
<script>
export default{
  name: 'header'
}
</script>
<style lang="less" scoped>
.headerbar{
  background: #999;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  color: #fff;
  .left-info{
    .logo{
      padding-left:40px;
      box-sizing:border-box;
      height: 40px;
      display: inline-block;
      img{
         height: 100%;
         display: inline-block;
         vertical-align: middle;
         margin-right: 5px;
      }
      .color{
        color: orange;
        margin-right: 50px;
      }  
    }  
  }
  .right-info{
      text-align: right;
      padding-right: 30px;
      a{
        color:#fff;
      }
      .iconfont{
        color: #fff;
      }
      img{
        height: 30px;
        border-radius: 50%;
        padding-top: 10px;
        box-sizing: border-box;
      }
  }
}
</style>