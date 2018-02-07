<template>
  <el-table
    :data="data"
    size="mini"
    stripe
    border>
    <el-table-column prop="department" label="部门">
      <template slot-scope="scope">{{dictDepartment(scope.row.department, 'name')}}</template>
    </el-table-column>
    <el-table-column prop="project" label="物品">
      <template slot-scope="scope">{{dictProject(scope.row.project, 'name')}}</template>
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
  </el-table>
</template>

<script>
import vuex from '@/mixins/vuex.js'
import dict from '@/mixins/dict.js'
import mo from '@/mixins/mo.js'
export default {
  mixins: [
    vuex,
    dict,
    mo
  ],
  props: {
    data: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>
