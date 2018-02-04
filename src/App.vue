<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vuex
  ],
  mounted () {
    this.vuexLoadAll()
      .then(() => {
        this.$message({
          message: '本地数据加载成功',
          type: 'success'
        })
      })
      .catch(err => {
        this.$notify({
          title: '提示',
          message: err.message
        })
        this.vuexResetAll()
          .then(() => {
            this.$message({
              message: '数据库初始化完成',
              type: 'success'
            })
          })
      })
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/style.scss';
#app {
  height: 100%;
}
</style>
