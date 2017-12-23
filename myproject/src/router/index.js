import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home'
import CityInfo from '../components/Home/City'
import VideoInfo from '../components/Home/VideoInfo'
import Use from '../components/Use/Use'
import Login from '../components/Use/Login'
import Profile from '../components/Use/Profile'
import main from '../components/Num/main'
import shop from '../components/Shop/shop'
import Classify from '../components/Classify/Classify'
import hot from '../components/Classify/hot'
import news from '../components/Classify/news'
import free from '../components/Classify/free'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      name: 'Use',
      path: '/use',
      component: Use,
      children: [
        {
          name: 'profile',
          path: 'profile',
          component: Profile
        }
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      path: '/classify',
      component: Classify,
      children: [
        {
          path: '/classify',
          redirect: 'hot'
        },
        {
          name: 'hot',
          path: 'hot',
          component: hot
        },
        {
          name: 'new',
          path: 'news',
          component: news
        },
        {
          name: 'free',
          path: 'free',
          component: free
        }
      ]
    },
    {
      name: 'videoInfo',
      path: '/videoInfo/:vid',
      component: VideoInfo
    },
    {
      name: 'city',
      path: '/city',
      component: CityInfo
    },
    {
      name: 'shop',
      path: '/shop',
      component: shop
    },
    {
      name: 'num',
      path: '/num',
      component: main
    }
  ]
})
