<template>
  <el-table
    :data="data"
    style="width: 100%"
    size="mini"
    stripe
    border>
    <el-table-column prop="project" label="物品">
      <template slot-scope="scope">{{dictProject(scope.row.project)}}</template>
    </el-table-column>
    <el-table-column prop="num" label="数量" width="100">
      <template slot-scope="scope">{{scope.row.num}}</template>
    </el-table-column>
    <el-table-column prop="date" label="入库日期">
      <template slot-scope="scope">{{mo(scope.row.date)}}</template>
    </el-table-column>
    <el-table-column prop="creatDate" label="记录日期">
      <template slot-scope="scope">{{mo(scope.row.creatDate)}}</template>
    </el-table-column>
  </el-table>
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
  props: {
    data: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    mo (date) {
      return moment(Date.parse(date)).format('YYYY年MMMMDo dddd h:mm:ss a')
    }
  }
}
</script>
