<template>
  <Container>
    <p style="margin-top: 0px;">本地数据</p>
    <el-button type="danger" icon="el-icon-delete" @click="handleResetLocalDB">重置本地数据库</el-button>
    <p>云端数据</p>
    <el-button type="danger" icon="el-icon-delete" @click="handleClearCloud">清空云端备份</el-button>
    <el-button type="success" icon="el-icon-circle-plus-outline" @click="handleUpload">新建云端备份</el-button>
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
      this.$confirm('此操作将会把存在浏览器中的数据清空', '重置本地数据库?', {
        confirmButtonText: '我要清空数据',
        cancelButtonText: '点错了',
        type: 'warning'
      }).then(() => {
        this.vuexResetAll()
          .then(() => {
            this.vuexLoadAll()
            this.$message({
              message: '重置本地数据库成功',
              type: 'success'
            })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    // 清空云端备份
    handleClearCloud () {
      this.$confirm('此操作将会把存在云端的数据清空', '清空云端备份?', {
        confirmButtonText: '我要清空云端备份',
        cancelButtonText: '点错了',
        type: 'warning'
      }).then(() => {
        this.vuexClearCloud()
          .then(() => {
            this.$message({
              message: '清空云端备份成功',
              type: 'success'
            })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    // 新建云端备份
    handleUpload () {
      this.$confirm('把本地数据上传至云端，不会覆盖之前的备份记录', '在云端建立新的数据备份?', {
        confirmButtonText: '备份',
        cancelButtonText: '点错了',
        type: 'warning'
      }).then(() => {
        this.vuexUpload()
          .then(() => {
            this.$message({
              message: '新建云端备份成功',
              type: 'success'
            })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}
</script>
