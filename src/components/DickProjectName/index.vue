<template>
  <el-tag type="info" size="small">{{name}}</el-tag>
</template>

<script>
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vuex
  ],
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    name () {
      const project = this.vuexProjects.find(e => e.id === this.value)
      return project ? project.name : 'undefined'
    }
  }
}
</script>
