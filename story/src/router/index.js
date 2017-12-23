import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../views/Home'
// import notAttention from '../views/Notattention'
// import Attention from '../views/Attention'
import Upload from '../views/Upload'
// import Remark from '../views/Remark'
import Video from '../views/Video'
import Success from '../views/Video/component/Success'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success
    }
     // ,
    // {
    //   path: '/Attention',
    //   name: 'Attention',
    //   component: Attention
    // },
    // {
    //   path: '/Upload',
    //   name: 'Upload',
    //   component: Upload
    // },
    // {
    //   path: '/Remark',
    //   name: 'Remark',
    //   component: Remark
    // },
    // {
    //   path: '/TeacheRreviews',
    //   name: 'TeacheRreviews',
    //   component: TeacheRreviews
    // }

  ]
})
