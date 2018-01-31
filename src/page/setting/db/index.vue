<template>
  <Container>
    <el-button type="success" icon="el-icon-upload" @click="upload">备份数据库到云端</el-button>
    <el-button type="danger" icon="el-icon-delete" @click="resetLocalDB">重置本地数据库</el-button>
  </Container>
</template>

<script>
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vuex
  ],
  methods: {
    // 初始化本地数据库
    resetLocalDB () {
      this.vuexResetAll()
        .then(this.vuexLoadAll)
    },
    upload () {
      // this.$sync.ref('data').set({}) 清空云端
      console.group('备份数据库到云端')
      console.log('还没做')
      console.groupEnd()
    }
  }
}
</script>
