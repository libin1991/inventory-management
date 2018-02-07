<template>
  <Container>
    <el-date-picker
      v-model="filterDate"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
    <template v-if="moStartDate && moEndDate">
      <el-alert :title="`你选择的是 ${moStartDate} - ${moEndDate} 之间的数据 (包括起止)`" style="margin: 20px 0px;"></el-alert>
      <el-tabs v-model="tabs" type="card">
        <el-tab-pane label="历史记录" name="history">
          <TableOut :data="vuexHistoryOutFilter"></TableOut>
        </el-tab-pane>
        <el-tab-pane label="分类汇总" name="class">
          <ClassView :data="vuexHistoryOutFilter"></ClassView>
        </el-tab-pane>
      </el-tabs>
    </template>
  </Container>
</template>

<script>
import moment from 'moment'
import vuex from '@/mixins/vuex.js'
import ClassView from './components/ClassView'
moment.locale('zh-cn')
export default {
  mixins: [
    vuex
  ],
  components: {
    ClassView
  },
  data () {
    return {
      tabs: 'history',
      filterDate: null
    }
  },
  computed: {
    moStartDate () {
      if (this.filterDate) {
        const date = this.filterDate[0]
        return isNaN(date) ? false : moment(date).format('YYYY年MMMMDo')
      } else {
        return false
      }
    },
    moEndDate () {
      if (this.filterDate) {
        const date = this.filterDate[1]
        return isNaN(date) ? false : moment(date).format('YYYY年MMMMDo')
      } else {
        return false
      }
    },
    vuexHistoryOutFilter () {
      return this.vuexHistoryOut.filter(e => {
        const tempDateMo = moment(Date.parse(e.date))
        if (this.filterDate) {
          return tempDateMo.isBetween(moment(this.filterDate[0]).subtract(1, 'days'), moment(this.filterDate[1]).add(1, 'days'), 'day')
        }
      })
    }
  }
}
</script>
