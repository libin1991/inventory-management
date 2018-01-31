// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import wilddog from 'wilddog'
import store from '@/store'
import '@/components'
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import key from '@/key.js'

// Element
Vue.use(ElementUI)

// 野狗
wilddog.initializeApp({
  syncURL: key.wilddog.syncURL
})
Vue.prototype.$sync = wilddog.sync()

// 本地数据库
Vue.prototype.$db = low(new LocalStorage('db'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
