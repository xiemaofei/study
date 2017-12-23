<template>
  <footer>
       <ul>
           <router-link to="/" tag="li"><i class="fa fa-home"></i><span>首页</span></router-link>
           <router-link to="/shop" tag="li"><i class="fa fa-s15"></i><span>购物车</span></router-link>
           <router-link to="/classify" tag="li"><i class="fa fa-ship"></i><span>商城</span></router-link>
           <router-link to="/use" tag="li"><i class="fa fa-user"></i><span>我的</span></router-link>
       </ul>
   </footer>
</template>
<script>
export default {
  name: 'Footers'
}
</script>
<style lang="css" scoped>
footer {
  background: #fff;
  height: 0.4rem; 
  border-top: 1px solid #ccc;
}
footer ul {
  text-align: center;
  display: -webkit-flex;
  height: 0.4rem; 
}
footer ul li {
  width: 25%;
  display: flex;
  flex-direction: column;
  color: #818180;
  font-size: 0.15rem;
  padding-top: 5px;
}
footer ul li span {
  padding-top: 2px;
  padding-bottom: 2px;
  box-sizing: border-box;
}
</style>