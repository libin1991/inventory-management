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
        <ProjectSelect v-model="project" :simple="true"></ProjectSelect>
      </el-form-item>
    </el-form>
    <el-alert
      v-if="moStartDate && moEndDate"
      :title="`你选择的是 ${moStartDate} - ${moEndDate} 之间的数据 (包括起止)`"
      style="margin-bottom: 20px;">
    </el-alert>
    <el-alert
      v-if="vuexHistoryOutFilter.length === 0"
      title="设置的过滤条件没有筛选结果"
      type="warning">
    </el-alert>
    <el-tabs v-else v-model="tabs" type="card">
      <el-tab-pane label="历史记录" name="history">
        <TableOut :data="vuexHistoryOutFilter"></TableOut>
      </el-tab-pane>
      <el-tab-pane label="按部门分类" name="class">
        <ClassView :data="vuexHistoryOutFilter"></ClassView>
      </el-tab-pane>
    </el-tabs>
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
      return this.dataFilter(this.vuexHistoryOut)
    }
  }
}
</script>
