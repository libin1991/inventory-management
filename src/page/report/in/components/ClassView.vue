<template>
  <div>
    <p v-for="(item, index) in projectsClass" :key="index">{{item}}</p>
  </div>
</template>

<script>
import vuex from '@/mixins/vuex.js'
import dict from '@/mixins/dict.js'
export default {
  mixins: [
    vuex,
    dict
  ],
  props: {
    data: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    projectsClass () {
      return this.vuexProjectsValid.map(e => this.data.filter(item => item.project === e.id)).filter(e => e.length > 0)
    }
  }
}
</script>
