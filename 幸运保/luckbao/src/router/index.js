import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Discovery from '@/views/Discovery'
import Detail from '@/views/Detail'
import Me from '@/views/Me'
import Dates from '@/components/Date'
import Login from '@/components/Login'
Vue.use(Router)
const newRouter = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/Home',
      meta: {
        alive: false
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        alive: true
      }
    },
    {
      path: '/Discovery',
      name: 'Discovery',
      component: Discovery,
      meta: {
        alive: false
      }
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me,
      meta: {
        alive: false
      }
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail,
      meta: {
        alive: false
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        alive: false
      }
    },
    {
      path: '/Date',
      name: 'Dates',
      component: Dates,
      meta: {
        alive: false
      }
    }
  ]
})
newRouter.beforeEach((to, from, next) => {
  if (window.localStorage.getItem('use')) {
    next()
  } else {
    if (to.path === '/Login') {
      next()
    } else {
      next('/Login')
    }
  }
})
export default newRouter
