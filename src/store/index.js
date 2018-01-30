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
        .filter({delFlag: false})
        .sortBy('id')
        .value() || []
    },
    // 清空数据库中的商品表
    vuexProjectReset (state) {
      db.set('projects', [])
        .write()
    }
  },
  actions: {
    // [整体] 重置数据库中的数据
    vuexResetAll (context) {
      return new Promise((resolve, reject) => {
        context.commit('vuexProjectReset')
        resolve()
      })
    },
    // [整体] 从数据库中载入所有需要的数据
    vuexLoadAll (context) {
      return new Promise((resolve, reject) => {
        context.commit('vuexProjectLoad')
        resolve()
      })
    },
    // 商品列表中新增条目
    vuexProjectsPush (context, item) {
      // 在数据库中新增
      db
        .get('projects')
        .push({
          ...item,
          id: context.state.projects.length,
          delFlag: false
        })
        .write()
      // 同步数据库到state
      context.commit('vuexProjectLoad')
    }
  }
})
