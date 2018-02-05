<template>
  <Container>
    <el-date-picker
      v-model="filterDate"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
    <template v-if="moStartDate && moEndDate">
      <el-alert :title="`你选择的是 ${moStartDate} - ${moEndDate} 之间的数据`" style="margin: 20px 0px;"></el-alert>
      <el-tabs v-model="tabs" type="card">
        <el-tab-pane label="历史记录" name="history">
          <TableIn :data="vuexHistoryInFilter"></TableIn>
        </el-tab-pane>
      </el-tabs>
    </template>
  </Container>
</template>

<script>
import moment from 'moment'
import vuex from '@/mixins/vuex.js'
moment.locale('zh-cn')
export default {
  mixins: [
    vuex
  ],
  data () {
    return {
      tabs: 'history',
      filterDate: []
    }
  },
  computed: {
    moStartDate () {
      const date = this.filterDate[0]
      return isNaN(date) ? false : moment(date).format('YYYY年MMMMDo a H:mm:ss')
    },
    moEndDate () {
      const date = this.filterDate[1]
      return isNaN(date) ? false : moment(date).format('YYYY年MMMMDo a H:mm:ss')
    },
    vuexHistoryInFilter () {
      return this.vuexHistoryIn.filter(e => {
        const tempDateMo = moment(Date.parse(e.date))
        if (this.filterDate.length === 2) {
          return tempDateMo.isBetween(this.filterDate[0], this.filterDate[1])
        } else {
          return false
        }
      })
    }
  }
}
</script>
