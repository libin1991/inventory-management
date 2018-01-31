<template>
  <Container>
    <p style="margin-top: 0px;">本地数据</p>
    <el-button type="danger" @click="handleResetLocalDB">重置本地数据库</el-button>
    <p>云端数据</p>
    <el-button type="danger" @click="handleClearCloud">重置云端备份</el-button>
    <el-button type="success" @click="handleUpload">新建云端备份</el-button>
  </Container>
</template>

<script>
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vuex
  ],
  methods: {
    // 重置本地数据库
    handleResetLocalDB () {
      this.vuexResetAll()
        .then(() => {
          this.$message({
            message: '重置本地数据库成功',
            type: 'success'
          })
          this.vuexLoadAll()
        })
    },
    // 重置云端备份
    handleClearCloud () {
      this.vuexClearCloud()
        .then(() => {
          this.$message({
            message: '重置云端备份成功',
            type: 'success'
          })
        })
    },
    // 新建云端备份
    handleUpload () {
      this.vuexUpload()
        .then(() => {
          this.$message({
            message: '新建云端备份成功',
            type: 'success'
          })
        })
    }
  }
}
</script>
