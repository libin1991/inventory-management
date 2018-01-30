<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import db from '@/mixins/db.js'
export default {
  mixins: [
    db
  ],
  mounted () {
    this.vuexProjectLoad()
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/style.scss';
#app {
  height: 100%;
}
</style>
