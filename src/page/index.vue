<template>
  <Container>
    <el-button @click="handleLogout">退出登录</el-button>
  </Container>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  methods: {
    handleLogout () {
      Cookies.remove('login')
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>
