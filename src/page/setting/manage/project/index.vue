<template>
  <Container>
    <div>
      {{addForm}}
    </div>
    <Xform v-model="addForm" @submit="save"></Xform>
  </Container>
</template>

<script>
import db from '@/mixins/db.js'
import Xform from './components/Form'
export default {
  mixins: [
    db
  ],
  components: {
    Xform
  },
  data () {
    return {
      addForm: {
        name: '物品名称',
        price: 1
      },
      projects: []
    }
  },
  methods: {
    save () {
      this.$db.defaults({ posts: [] })
        .write()
    }
  }
}
</script>
