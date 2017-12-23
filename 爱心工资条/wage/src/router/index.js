import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import login from '@/views/Login'
import SalaryStripe from '@/views/SalaryStripe'
import Payroll from '@/views/SalaryStripe/children/Payroll'
import Staff from '@/views/SalaryStripe/children/Staff'
import BusinessService from '@/views/BusinessService'
import Payservice from '@/views/BusinessService/children/Payservice'
import Statement from '@/views/BusinessService/children/Statement'
import BusinessAdministration from '@/views/BusinessAdministration'
import account from '@/views/BusinessAdministration/children/account'
import personnel from '@/views/BusinessAdministration/children/personnel'
Vue.use(Router)
let newRouter = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'home',
      path: '/SalaryStripe',
      component: SalaryStripe,
      meta: {
        title: '工资条'
      },
      children: [
        {
          name: 'Payroll',
          path: 'Payroll',
          component: Payroll,
          meta: {
            title: '工资条管理'
          }
        },
        {
          name: 'Staff',
          path: 'Staff',
          component: Staff,
          meta: {
            title: '员工管理'
          }
        }
      ]
    },
    {
      name: 'BusinessService',
      path: '/BusinessService',
      component: BusinessService,
      meta: {
        title: '企业服务'
      },
      children: [
        {
          name: 'Payservice',
          path: 'Payservice',
          component: Payservice,
          meta: {
            title: '薪水服务'
          }
        },
        {
          name: 'Statement',
          path: 'Statement',
          component: Statement,
          meta: {
            title: '报表'
          }
        }
      ]
    },
    {
      name: 'BusinessAdministration',
      path: '/BusinessAdministration',
      component: BusinessAdministration,
      meta: {
        title: '企业管理'
      },
      children: [
        {
          name: 'account',
          path: 'account',
          component: account,
          meta: {
            title: '企业账户'
          }
        },
        {
          name: 'personnel',
          path: 'personnel',
          component: personnel,
          meta: {
            title: '员工档案'
          }
        }
      ]
    }
  ]
})
// newRouter.beforeEach((to, from, next) => {
//   if (window.localStorage.getItem('user')) {
//     next()
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
export default newRouter
