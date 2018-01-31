import Vue from 'vue'
import Vuex from 'vuex'
import low from 'lowdb'
import lodashId from 'lodash-id'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import wilddog from 'wilddog'
import key from '@/key.js'

// 野狗
const sync = wilddog.initializeApp({
  syncURL: key.wilddog.syncURL
}).sync()

const vuexUpload = (state) => {
  return sync.ref('data/backup').push({
    projects: state.vuexProjects
  })
}

const db = low(new LocalStorage('db'))
db._.mixin(lodashId)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 物品列表 全部的
    vuexProjects: []
  },
  getters: {
    // 物品列表 有效的 (过滤掉删除的)
    vuexProjectsValid: state => state.vuexProjects.filter(e => !e.delFlag)
  },
  mutations: {
    // 从数据库重新读物品列表
    vuexProjectLoad (state) {
      state.vuexProjects = db
        .get('projects')
        .sortBy('id')
        .value() || []
      // 倒序
      state.vuexProjects.reverse()
    },
    // 清空数据库中的物品表
    vuexProjectReset (state) {
      db.set('projects', [])
        .write()
    }
  },
  actions: {
    // [整体] 将本地数据库备份到云端
    vuexUpload (context) {
      return vuexUpload(context.state)
    },
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
    // 物品列表中新增条目
    vuexProjectsPush (context, item) {
      return new Promise((resolve, reject) => {
        // 在数据库中新增
        db
          .get('projects')
          // .push({
          //   ...item,
          //   id: context.state.vuexProjects.length,
          //   delFlag: false
          // })
          .insert({
            ...item,
            delFlag: false
          })
          .write()
        // 同步数据库到state
        context.commit('vuexProjectLoad')
        resolve()
      })
    },
    vuexProjectsDelete (context, id) {
      return new Promise((resolve, reject) => {
        // 在数据库中标记删除
        db
          .get('projects')
          .find({id: id})
          .assign({delFlag: true})
          .write()
        // 同步数据库到state
        context.commit('vuexProjectLoad')
        resolve()
      })
    }
  }
})
