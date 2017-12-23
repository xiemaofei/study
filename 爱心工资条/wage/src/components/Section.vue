<template>
  <section class="section">
    <el-menu :default-active="defaultActive" :router='true' class="el-menu-vertical-demo left-menu" @open="handleOpen" @close="handleClose">
      <template v-for="(item, index) in $router.options.routes" v-if="item.meta">
        {{setActive(item.path, (index+''))}}
        <el-submenu :index="(index+'')" :key="index" v-if="item.children">
          <template slot="title">
            <i class="iconfont icon-qiyefuwu"></i>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item v-for="(item2, index2) in item.children" :key="index" :index="(index+'-'+index2+1)" :route="{path: item.path+'/'+item2.path}">{{setActive(item.path+'/'+item2.path, (index+'-'+index2+1))}}{{item2.meta.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="(index+'')" v-else :route="{path: item.path}">
          <template slot="title">
            <i class="iconfont icon-shouye"></i>
            <span>{{item.meta.title}}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="right-content">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'sections',
    data () {
      return {
        defaultActive: '2'
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      setActive (path, index) {
        if (path === this.$route.path) {
          this.defaultActive = index + ''
        }
       // console.log(path, this.defaultActive)
        return ''
      }
    },
    created () {
      // console.log(this.$route.matched)
    }
  }
</script>
<style lang="less" scoped>
  .section {
    height: 100%;
    .left-menu {
      width: 200px;
      position: fixed;
      top: 51px;
      bottom: 0;
    }
    .right-content {
      padding: 20px;
      float: left;
      position: absolute;
      top: 51px;
      left: 200px;
      right: 0;
      bottom: 0;
    }
  }
</style>