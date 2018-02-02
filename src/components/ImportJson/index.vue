<template>
  <div>
    <el-upload
      drag
      action="default"
      :before-upload="handleUpload"
      class="import-uploader">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将野狗下载的备份文件拖到此处，或 <em>点击上传</em></div>
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
        const result = JSON.parse(res.target.result)
        const state = JSON.parse(result.jsonStr)
        console.log(state)
        this.vuexDefault(state)
        this.vuexLoadAll()
      }
      return false
    },
    // 用户触发导入
    handleImport () {
      this.$confirm(`导入数据会覆盖已有${this.name}数据`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.import()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消导入'
        })
      })
    },
    // 导入程序
    import () {
      // 返回传入对象的为空值的key名字数组
      const emptyKey = row => Object.keys(row).filter(e => row[e] === '')
      switch (this.type) {
        // 物品
        case 'projects':
          this.vuexProjectReset()
          this.table.data.filter(e => emptyKey(e).length === 0).forEach(e => {
            this.vuexProjectsPush({
              ...e,
              price: Number(e.price),
              num: Number(e.num)
            })
          })
          this.vuexProjectsLoad()
          this.handleImportFinish()
          break
        default:
          break
      }
    },
    // 在导入完成后执行的程序
    handleImportFinish () {
      this.table.data = []
      this.$message({
        message: `导入${this.name}数据成功`,
        type: 'success'
      })
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
