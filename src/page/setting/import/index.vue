<template>
  <Container>
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="物品" name="1">物品</el-tab-pane>
      <el-tab-pane label="部门" name="2">部门</el-tab-pane>
      <el-tab-pane label="入库记录" name="3">入库记录</el-tab-pane>
      <el-tab-pane label="出库记录" name="4">出库记录</el-tab-pane>
    </el-tabs>
  </Container>
</template>

<script>
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vuex
  ],
  data () {
    return {
      activeTab: '1'
    }
  }
}
</script>
