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
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/style.scss';
#app {
  height: 100%;
}
</style>
