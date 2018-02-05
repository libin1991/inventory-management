<template>
  <Container>
    <TableOut :data="vuexHistoryOut"></TableOut>
  </Container>
</template>

<script>
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vuex
  ]
}
</script>
