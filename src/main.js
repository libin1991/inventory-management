// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import wilddog from 'wilddog'

import '@/components'

// 这个文件不会上传到git
import key from '@/key.js'

Vue.use(ElementUI)

Vue.config.productionTip = false

var config = {
  syncURL: key.wilddog.syncURL
}
wilddog.initializeApp(config)

Vue.prototype.$sync = wilddog.sync()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
