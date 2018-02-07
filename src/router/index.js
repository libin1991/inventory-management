import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

Vue.use(Router)

const metaAuth = {
  meta: {
    requiresAuth: true
  }
}

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => { require(['@/page/login/index.vue'], resolve) }
    },
    {
      path: '/',
      component: resolve => { require(['@/components/MainLayout/index.vue'], resolve) },
      redirect: {
        name: 'index'
      },
      children: [
        {
          path: 'index',
          name: 'index',
          ...metaAuth,
          component: resolve => { require(['@/page/index.vue'], resolve) }
        },
        {
          path: 'business/in',
          name: 'business-in',
          ...metaAuth,
          component: resolve => { require(['@/page/business/in/index.vue'], resolve) }
        },
        {
          path: 'business/out',
          name: 'business-out',
          ...metaAuth,
          component: resolve => { require(['@/page/business/out/index.vue'], resolve) }
        },
        {
          path: 'business/manage/project',
          name: 'business-manage-project',
          ...metaAuth,
          component: resolve => { require(['@/page/business/manage/project/index.vue'], resolve) }
        },
        {
          path: 'business/manage/project/edit',
          name: 'business-manage-project-edit',
          ...metaAuth,
          component: resolve => { require(['@/page/business/manage/project/edit.vue'], resolve) }
        },
        {
          path: 'business/manage/department',
          name: 'business-manage-department',
          ...metaAuth,
          component: resolve => { require(['@/page/business/manage/department/index.vue'], resolve) }
        },
        {
          path: 'business/manage/department/edit',
          name: 'business-manage-department-edit',
          ...metaAuth,
          component: resolve => { require(['@/page/business/manage/department/edit.vue'], resolve) }
        },
        {
          path: 'history/in',
          name: 'history-in',
          ...metaAuth,
          component: resolve => { require(['@/page/history/in/index.vue'], resolve) }
        },
        {
          path: 'history/out',
          name: 'history-out',
          ...metaAuth,
          component: resolve => { require(['@/page/history/out/index.vue'], resolve) }
        },
        {
          path: 'setting/db',
          name: 'setting-db',
          ...metaAuth,
          component: resolve => { require(['@/page/setting/db/index.vue'], resolve) }
        },
        {
          path: 'setting/import',
          name: 'setting-import',
          ...metaAuth,
          component: resolve => { require(['@/page/setting/import/index.vue'], resolve) }
        },
        {
          path: 'report/in',
          name: 'report-in',
          ...metaAuth,
          component: resolve => { require(['@/page/report/in/index.vue'], resolve) }
        },
        {
          path: 'report/out',
          name: 'report-out',
          ...metaAuth,
          component: resolve => { require(['@/page/report/out/index.vue'], resolve) }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 需要身份校验
  if (to.meta.requiresAuth) {
    if (Cookies.get('login')) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})

export default router
