import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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
          component: resolve => { require(['@/page/index.vue'], resolve) }
        },
        {
          path: 'business/in',
          name: 'business-in',
          component: resolve => { require(['@/page/business/in/index.vue'], resolve) }
        },
        {
          path: 'business/manage/project',
          name: 'business-manage-project',
          component: resolve => { require(['@/page/business/manage/project/index.vue'], resolve) }
        },
        {
          path: 'business/manage/project/edit',
          name: 'business-manage-project-edit',
          component: resolve => { require(['@/page/business/manage/project/edit.vue'], resolve) }
        },
        {
          path: 'business/history/in',
          name: 'business-history-in',
          component: resolve => { require(['@/page/business/history/in/index.vue'], resolve) }
        },
        {
          path: 'setting/db',
          name: 'setting-db',
          component: resolve => { require(['@/page/setting/db/index.vue'], resolve) }
        },
        {
          path: 'setting/import',
          name: 'setting-import',
          component: resolve => { require(['@/page/setting/import/index.vue'], resolve) }
        }
      ]
    }
  ]
})
