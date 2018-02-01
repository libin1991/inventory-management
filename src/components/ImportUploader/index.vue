<template>
  <div>
    <el-upload
      drag
      action="default"
      :before-upload="handleUpload"
      class="import-uploader">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将{{name}}数据CSV文件拖到此处，或 <em>点击上传</em></div>
    </el-upload>
    <template v-if="table.data.length > 0">
      <br>
      <el-table
        v-bind="table"
        style="width: 100%"
        max-height="200">
        <el-table-column
          v-for="(item, index) in table.columns"
          :key="index"
          :prop="item.prop"
          :label="item.label">
        </el-table-column>
      </el-table>
      <br>
      <el-button type="success" @click="handleImport">确定导入{{table.data.length}}条数据</el-button>
    </template>
  </div>
</template>

<script>
import papa from 'papaparse'
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vuex
  ],
  props: {
    type: {
      type: String,
      required: false,
      default: 'projects'
    },
    name: {
      type: String,
      required: false,
      default: '物品'
    }
  },
  data () {
    return {
      table: {
        columns: [],
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      }
    }
  },
  methods: {
    // 获取文件
    handleUpload (file) {
      papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results, file) => {
          this.table.columns = Object.keys(results.data[0]).map(e => ({
            label: e,
            prop: e
          }))
          this.table.data = results.data
        }
      })
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
        case 'projects':
          this.vuexProjectReset()
          this.table.data.filter(e => emptyKey(e).length === 0).forEach(e => {
            this.vuexProjectsPush({
              ...e,
              price: Number(e.price),
              num: Number(e.num)
            })
          })
          this.handleImportFinish()
          break
        default:
          break
      }
    },
    // 在导入完成后执行的程序
    handleImportFinish () {
      this.vuexProjectLoad()
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
