import Vue from 'vue'
import Vuex from 'vuex'
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const db = low(new LocalStorage('db'))

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 商品列表
    projects: []
  },
  mutations: {
    // 从数据库重新读商品列表
    vuexProjectLoad (state) {
      state.projects = db
        .get('projects')
        .value() || []
    }
  },
  actions: {
    // 商品列表中新增条目
    vuexProjectsPush (context, item) {
      db
        .get('projects')
        .push(item)
        .write()
      context.commit('vuexProjectLoad')
    }
  }
})
