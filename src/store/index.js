import Vue from 'vue'
import Vuex from 'vuex'
import low from 'lowdb'
import lodashId from 'lodash-id'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import wilddog from 'wilddog'
import key from '@/key.js'

Vue.use(Vuex)

// 野狗
const sync = wilddog.initializeApp({
  syncURL: key.wilddog.syncURL
}).sync()

// 上传数据
const vuexUpload = (state) => {
  return new Promise((resolve, reject) => {
    sync.ref('data/backup').push({
      projects: state.vuexProjects
    })
      .then(() => {
        console.log('数据已经上传到 data/backup')
        resolve()
      })
  })
}

const db = low(new LocalStorage('db'))
db._.mixin(lodashId)

export default new Vuex.Store({
  state: {
    // [物品列表] 全部
    vuexProjects: []
  },
  getters: {
    // [物品列表] 有效
    vuexProjectsValid: state => {
      return state.vuexProjects.filter(e => !e.delFlag)
    }
  },
  mutations: {
    // [物品列表] 增
    vuexProjectsPush (state, item) {
      db
        .get('projects')
        .insert({
          ...item,
          delFlag: false
        })
        .write()
    },
    // [物品列表] 删
    vuexProjectsDelete (state, id) {
      db
        .get('projects')
        .find({id: id})
        .assign({delFlag: true})
        .write()
    },
    // [物品列表] 载入
    vuexProjectLoad (state) {
      state.vuexProjects = (
        db
          .get('projects')
          .sortBy('id')
          .value() || []
      ).reverse()
    },
    // [物品列表] 清空
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
    // [云数据操作] 清空云端备份
    vuexClearCloud () {
      return new Promise((resolve, reject) => {
        sync.ref('data/backup').set([])
          .then(resolve)
      })
    }
  }
})
