<template>
  <div>
    <el-alert
      v-if="classes.length === 0"
      title="设置的过滤条件没有筛选结果"
      type="warning">
    </el-alert>
    <div v-for="(item, index) in classes" :key="index">
      <h1>{{item.name}} 共计{{add(item.data)}}元</h1>
      <TableOut :show-name="false" :data="item.data"></TableOut>
    </div>
  </div>
</template>

<script>
import vuex from '@/mixins/vuex.js'
import dict from '@/mixins/dict.js'
import mo from '@/mixins/mo.js'
export default {
  mixins: [
    vuex,
    dict,
    mo
  ],
  props: {
    data: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    classes () {
      return this.vuexDepartmentsValid.map(e => {
        return {
          name: this.dictDepartment(e.id, 'name'),
          data: this.data.filter(item => item.department === e.id)
        }
      }).filter(e => e.data.length > 0)
    }
  },
  methods: {
    add (data) {
      let add = 0
      data.forEach(e => {
        const price = this.dictProject(e.project, 'price')
        const num = e.num
        add += (price * num)
      })
      return add
    }
  }
}
</script>
