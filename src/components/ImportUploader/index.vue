<template>
  <div>
    <!-- <el-upload :before-upload="handleUpload" action="default">
      <el-button type="success">选择 CSV 文件</el-button>
    </el-upload> -->
    <el-upload
      drag
      action="default"
      :before-upload="handleUpload">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将 CSV 文件拖到此处，或 <em>点击上传</em></div>
    </el-upload>
    <el-table
      v-bind="table"
      style="width: 100%"
      max-height="300">
      <el-table-column
        v-for="(item, index) in table.columns"
        :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import papa from 'papaparse'
export default {
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
    download () {
      window.location.href = 'http://fairyever.qiniudn.com/d2admin-vue-demo.csv'
    }
  }
}
</script>
