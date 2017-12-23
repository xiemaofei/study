<template>
  <div class="footer">
      <Tabbar>
        <TabbarItem link="../Home"> 
          <img slot="icon" src="../static/images/icons/home.png">
          <span slot="label">首页</span>
        </TabbarItem>
        <TabbarItem show-dot link="../Discovery">
          <img slot="icon" src="../static/images/icons/share.png">
          <span slot="label">发现</span>
        </TabbarItem>
        <TabbarItem selected link="../Me">
          <img slot="icon" src="../static/images/icons/zoom.png">
          <span slot="label">我的</span>
        </TabbarItem>
      </Tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'footer',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style lang="less" scoped>
.weui-tabbar{
  position: fixed;
  bottom: 0;
}
</style>
