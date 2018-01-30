<template>
  <Container>
    <el-button
      type="danger"
      icon="el-icon-delete"
      @click="reset">
      重置数据库
    </el-button>
  </Container>
</template>

<script>
export default {
  methods: {
    reset () {
      this.$sync.ref('data').set({})
    }
  }
}
</script>
