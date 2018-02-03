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
  console.log(state)
  return new Promise((resolve, reject) => {
    sync.ref('data/backup').push({
      jsonStr: JSON.stringify(state)
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
    vuexProjects: [],
    // [部门列表] 全部
    vuexDepartments: [],
    // [历史 入库] 全部
    vuexHistoryIn: [],
    // [历史 出库] 全部
    vuexHistoryOut: []
  },
  getters: {
    // [物品列表] 有效
    vuexProjectsValid: state => {
      return state.vuexProjects.filter(e => !e.delFlag)
    },
    // [部门列表] 有效
    vuexDepartmentsValid: state => {
      return state.vuexDepartments.filter(e => !e.delFlag)
    }
  },
  mutations: {
    // [整体] 完全赋值
    vuexDefault (state, item) {
      db
        .setState(item)
        .write()
    },
    // ----------------------------------------------------------------------------------------------------
    // [物品列表] 增
    vuexProjectsPush (state, item) {
      db
        .get('vuexProjects')
        .insert({
          ...item,
          delFlag: false
        })
        .write()
    },
    // [物品列表] 删 (只是标记删除)
    vuexProjectsDelete (state, id) {
      db
        .get('vuexProjects')
        .find({
          id: id
        })
        .assign({delFlag: true})
        .write()
    },
    // [物品列表] 改
    vuexProjectsUpdate (state, item) {
      db
        .get('vuexProjects')
        .find({
          id: item.id
        })
        .assign(item)
        .write()
    },
    // [物品列表] 改存量 id是物品id change是表示变化的数字
    vuexProjectsUpdateNum (state, {id, change}) {
      db
        .get('vuexProjects')
        .find({
          id: id
        })
        .update('num', n => n + change)
        .write()
    },
    // [物品列表] 载入
    vuexProjectsLoad (state) {
      state.vuexProjects = (
        db
          .get('vuexProjects')
          .value() || []
      ).reverse()
    },
    // [物品列表] 清空
    vuexProjectsReset (state) {
      db.set('vuexProjects', [])
        .write()
    },
    // ----------------------------------------------------------------------------------------------------
    // [部门列表] 增
    vuexDepartmentsPush (state, item) {
      db
        .get('vuexDepartments')
        .insert({
          ...item,
          delFlag: false
        })
        .write()
    },
    // [部门列表] 删 (只是标记删除)
    vuexDepartmentsDelete (state, id) {
      db
        .get('vuexDepartments')
        .find({
          id: id
        })
        .assign({delFlag: true})
        .write()
    },
    // [部门列表] 改
    vuexDepartmentsUpdate (state, item) {
      db
        .get('vuexDepartments')
        .find({
          id: item.id
        })
        .assign(item)
        .write()
    },
    // [部门列表] 载入
    vuexDepartmentsLoad (state) {
      state.vuexDepartments = (
        db
          .get('vuexDepartments')
          .value() || []
      ).reverse()
    },
    // [部门列表] 清空
    vuexDepartmentsReset (state) {
      db.set('vuexDepartments', [])
        .write()
    },
    // ----------------------------------------------------------------------------------------------------
    // [历史 入库] 增
    vuexHistoryInPush (state, item) {
      db
        .get('vuexHistoryIn')
        .insert({
          ...item,
          delFlag: false
        })
        .write()
    },
    // [历史 入库] 载入
    vuexHistoryInLoad (state) {
      state.vuexHistoryIn = (
        db
          .get('vuexHistoryIn')
          .value() || []
      ).reverse()
    },
    // [历史 入库] 清空
    vuexHistoryInReset (state) {
      db.set('vuexHistoryIn', [])
        .write()
    },
    // ----------------------------------------------------------------------------------------------------
    // [历史 出库] 增
    vuexHistoryOutPush (state, item) {
      db
        .get('vuexHistoryOut')
        .insert({
          ...item,
          delFlag: false
        })
        .write()
    },
    // [历史 出库] 载入
    vuexHistoryOutLoad (state) {
      state.vuexHistoryOut = (
        db
          .get('vuexHistoryOut')
          .value() || []
      ).reverse()
    },
    // [历史 出库] 清空
    vuexHistoryOutReset (state) {
      db.set('vuexHistoryOut', [])
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
        context.commit('vuexProjectsReset')
        context.commit('vuexDepartmentsReset')
        context.commit('vuexHistoryInReset')
        context.commit('vuexHistoryOutReset')
        resolve()
      })
    },
    // [整体] 从数据库中载入所有需要的数据
    vuexLoadAll (context) {
      return new Promise((resolve, reject) => {
        context.commit('vuexProjectsLoad')
        context.commit('vuexDepartmentsLoad')
        context.commit('vuexHistoryInLoad')
        context.commit('vuexHistoryOutLoad')
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
