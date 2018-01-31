<template>
  <Container>
    <el-button type="danger" icon="el-icon-upload" @click="clearCloud">重置云端备份</el-button>
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
        .then(() => {
          this.vuexLoadAll()
          this.vuexUpload()
        })
    },
    clearCloud () {
      this.vuexClearCloud()
        .then()
    }
  }
}
</script>
