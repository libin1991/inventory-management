<template>
  <Container>
    <Xform v-model="form" @submit="handleSave"></Xform>
    <el-table
      :data="vuexDepartmentsValid"
      style="width: 100%"
      max-height="500"
      size="mini"
      stripe
      border>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column label="操作" width="160" align="center">
        <template slot-scope="scope">
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
        name: ''
      }
    }
  },
  computed: {
    formValid () {
      return this.form.name
    }
  },
  methods: {
    // 保存
    handleSave () {
      if (this.formValid) {
        this.vuexDepartmentsPush(this.form)
        this.vuexDepartmentsLoad()
      }
    },
    // 编辑
    handleEdit (index, row) {
      this.$router.push({
        name: 'business-manage-department-edit',
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
        this.vuexDepartmentsDelete(row.id)
        this.vuexDepartmentsLoad()
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
