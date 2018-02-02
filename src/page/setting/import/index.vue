<template>
  <Container>
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="导入云端备份" name="1">
        <ImportJson></ImportJson>
      </el-tab-pane>
      <el-tab-pane label="物品" name="2">
        <ImportUploader type="projects" name="物品"></ImportUploader>
      </el-tab-pane>
      <el-tab-pane label="部门" name="3">部门</el-tab-pane>
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
