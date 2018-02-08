<template>
  <el-table
    :data="data"
    size="mini"
    stripe
    border>
    <el-table-column v-if="showName" label="部门">
      <template slot-scope="scope">{{dictDepartment(scope.row.department, 'name')}}</template>
    </el-table-column>
    <el-table-column label="物品">
      <template slot-scope="scope">{{dictProject(scope.row.project, 'name')}}</template>
    </el-table-column>
    <el-table-column label="数量" width="100">
      <template slot-scope="scope">{{scope.row.num}}{{dictProject(scope.row.project, 'unit')}}</template>
    </el-table-column>
    <el-table-column label="出库日期">
      <template slot-scope="scope">{{mo(scope.row.date)}}</template>
    </el-table-column>
    <el-table-column label="记录日期">
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
    },
    showName: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
