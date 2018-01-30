<template>
  <Container>
    <el-button type="success" icon="el-icon-upload" @click="upload">备份数据库到云端</el-button>
    <el-button type="danger" icon="el-icon-delete" @click="reset">重置数据库</el-button>
  </Container>
</template>

<script>
export default {
  methods: {
    reset () {
      this.$sync.ref('data').set({})
    },
    upload () {
      console.group('备份数据库到云端')
      console.log('还没做')
      console.groupEnd()
    }
  }
}
</script>
