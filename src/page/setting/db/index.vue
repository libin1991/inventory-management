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
      this.vuexUpload()
        .then(() => {
          this.$message({
            message: '数据已经备份到云端',
            type: 'success'
          })
        })
    }
  }
}
</script>
