<template>
  <el-container class="main-layout">
    <el-aside width="200px">
      <Side></Side>
    </el-aside>
    <el-container>
      <!-- <el-header>Header</el-header> -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Side from './_side'
export default {
  components: {
    Side
  }
}
</script>

<style lang="scss">
.el-container {
  &.main-layout {
    height: 100%;
    .el-aside {
      background-color: rgb(84, 92, 100);
      .el-menu {
        border-right: none;
      }
    }
  }
}
</style>


