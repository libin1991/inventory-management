<template>
  <Container>
    <Xform v-model="addForm" @submit="save"></Xform>
    <el-table
      :data="vuexProjectsValid"
      style="width: 100%"
      max-height="400"
      size="mini"
      stripe
      border>
      <el-table-column prop="id" label="ID" width="100" align="center"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
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
      addForm: {
        name: '物品名称',
        price: 1
      }
    }
  },
  methods: {
    save () {
      this.vuexProjectsPush(this.addForm)
    },
    handleEdit (index, row) {

    },
    handleDelete (index, row) {
      this.vuexProjectsDelete(row.id)
        .then(() => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        })
    }
  }
}
</script>
