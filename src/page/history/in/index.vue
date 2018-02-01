<template>
  <Container>
    <el-table
      v-if="tableShow"
      :data="vuexHistoryInValid"
      style="width: 100%"
      max-height="500"
      size="mini"
      stripe
      border>
      <el-table-column prop="id" label="ID">
        <template slot-scope="scope">
          {{dictProject(scope.row.project)}}
        </template>
      </el-table-column>
      <el-table-column prop="num" label="数量"></el-table-column>
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
import dict from '@/mixins/dict.js'
export default {
  mixins: [
    vuex,
    dict
  ],
  data () {
    return {
      tableShow: false
    }
  },
  mounted () {
    this.tableShow = true
  },
  methods: {
    handleEdit () {},
    handleDelete () {}
  }
}
</script>
