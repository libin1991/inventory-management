<template>
  <Container>
    <el-form label-position="top" :inline="true">
      <el-form-item label="时间范围">
        <el-date-picker
          v-model="filterDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="物品">
        <ProjectSelect v-model="project"></ProjectSelect>
      </el-form-item>
    </el-form>
    <template v-if="moStartDate && moEndDate">
      <el-alert :title="`你选择的是 ${moStartDate} - ${moEndDate} 之间的数据 (包括起止)`" style="margin-bottom: 20px;"></el-alert>
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
import reportMixin from '@/page/report/_mixins'
moment.locale('zh-cn')
export default {
  mixins: [
    vuex,
    reportMixin
  ],
  components: {
    ClassView
  },
  data () {
    return {
      tabs: 'history',
      project: '',
      filterDate: null
    }
  },
  computed: {
    vuexHistoryOutFilter () {
      return this.vuexHistoryOut.filter(e => {
        const tempDateMo = moment(Date.parse(e.date))
        if (this.filterDate) {
          const between = tempDateMo.isBetween(
            moment(this.filterDate[0]).subtract(1, 'days'),
            moment(this.filterDate[1]).add(1, 'days'),
            'day')
          const project = this.project ? e.project === this.project : true
          return between && project
        }
      })
    }
  }
}
</script>
