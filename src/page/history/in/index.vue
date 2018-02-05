<template>
  <Container>
    <TableIn :data="vuexHistoryIn"></TableIn>
  </Container>
</template>

<script>
import moment from 'moment'
import vuex from '@/mixins/vuex.js'
import dict from '@/mixins/dict.js'
moment.locale('zh-cn')
export default {
  mixins: [
    vuex,
    dict
  ]
}
</script>
