<template>
  <Container>
    <Xform v-model="form" @submit="handleSave"></Xform>
    <el-table
      :data="vuexProjectsValid"
      style="width: 100%"
      max-height="500"
      size="mini"
      stripe
      border>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="num" label="当前数量"></el-table-column>
      <el-table-column label="操作" width="220" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleCopy(scope.$index, scope.row)">复制</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </Container>
</template>

<script>
import vuex from '@/mixins/vuex.js'
import Xform from './components/Form'
export default {
  mixins: [
    vuex
  ],
  components: {
    Xform
  },
  data () {
    return {
      form: {
        name: '',
        price: 1,
        num: 0
      }
    }
  },
  computed: {
    formValid () {
      return this.form.name &&
        this.form.price > 0 &&
        this.form.num >= 0
    }
  },
  methods: {
    // 保存
    handleSave () {
      if (this.formValid) {
        this.vuexProjectsPush(this.form)
        this.vuexProjectsLoad()
      }
    },
    // 复制
    handleCopy (index, row) {
      this.form.name = row.name
      this.form.price = row.price
    },
    // 编辑
    handleEdit (index, row) {
      this.$router.push({
        name: 'business-manage-project-edit',
        params: {
          id: row.id
        }
      })
    },
    // 删除
    handleDelete (index, row) {
      this.$confirm(`确定删除${row.name}吗`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.vuexProjectsDelete(row.id)
        this.vuexProjectsLoad()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
