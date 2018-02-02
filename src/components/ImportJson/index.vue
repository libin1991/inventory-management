<template>
  <div>
    <el-upload
      drag
      action="default"
      :before-upload="handleUpload"
      class="import-uploader">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将野狗下载的 .json 文件拖到此处，或 <em>点击上传</em></div>
    </el-upload>
  </div>
</template>

<script>
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vuex
  ],
  methods: {
    // 获取文件
    handleUpload (file) {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = (res) => {
        this.$confirm(`导入数据会覆盖本地数据`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const result = JSON.parse(res.target.result)
          const state = JSON.parse(result.jsonStr)
          this.vuexDefault(state)
          this.vuexLoadAll()
          this.$message({
            message: `导入数据成功`,
            type: 'success'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消导入'
          })
        })
      }
      return false
    }
  }
}
</script>

<style lang="scss">
.import-uploader {
  .el-upload {
    display: block;
    .el-upload-dragger {
      width: auto;
    }
  }
}
</style>
