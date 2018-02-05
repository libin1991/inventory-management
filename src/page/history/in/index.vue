<template>
  <Container>
    <TableIn :data="vuexHistoryIn"></TableIn>
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
