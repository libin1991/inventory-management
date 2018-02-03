<template>
  <Container>
    <el-table
      v-if="tableShow"
      :data="vuexHistoryOutValid"
      style="width: 100%"
      size="mini"
      stripe
      border>
      <el-table-column prop="department" label="部门">
        <template slot-scope="scope">{{dictDepartment(scope.row.department)}}</template>
      </el-table-column>
      <el-table-column prop="project" label="物品">
        <template slot-scope="scope">{{dictProject(scope.row.project)}}</template>
      </el-table-column>
      <el-table-column prop="num" label="数量" width="100">
        <template slot-scope="scope">{{scope.row.num}}</template>
      </el-table-column>
      <el-table-column prop="date" label="出库日期">
        <template slot-scope="scope">{{mo(scope.row.date)}}</template>
      </el-table-column>
      <el-table-column prop="creatDate" label="记录日期">
        <template slot-scope="scope">{{mo(scope.row.creatDate)}}</template>
      </el-table-column>
      <!-- <el-table-column label="操作" width="160" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </Container>
</template>

<script>
import moment from 'moment'
import vuex from '@/mixins/vuex.js'
import dict from '@/mixins/dict.js'
moment.locale('zh-cn')
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
    mo (date) {
      return moment(Date.parse(date)).format('YYYY年MMMMDo dddd h:mm:ss a')
    }
    // handleEdit () {},
    // handleDelete () {}
  }
}
</script>
