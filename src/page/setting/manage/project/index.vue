<template>
  <Container>
    <div>
      {{addForm}}
    </div>
    <Xform v-model="addForm"></Xform>
  </Container>
</template>

<script>
import Xform from './components/Form'
export default {
  components: {
    Xform
  },
  data () {
    return {
      addForm: {
        name: '物品名称',
        price: 1
      }
    }
  }
}
</script>
