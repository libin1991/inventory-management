<template>
  <div>
    <el-alert
      v-if="classes.length === 0"
      title="设置的过滤条件没有筛选结果"
      type="warning">
    </el-alert>
    <div v-for="(item, index) in classes" :key="index">
      <h1>{{item.name}} 共入库{{add(item.data)}}{{item.unit}} 总价值{{add(item.data) * item.price}}元</h1>
      <TableIn :show-name="false" :data="item.data"></TableIn>
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
      return this.vuexProjectsValid.map(e => {
        return {
          name: this.dictProject(e.id, 'name'),
          unit: e.unit,
          price: e.price,
          data: this.data.filter(item => item.project === e.id)
        }
      }).filter(e => e.data.length > 0)
    }
  },
  methods: {
    add (data) {
      const fn = (n) => {
        let res = 0
        n.forEach(e => {
          res += Number(e)
        })
        return res
      }
      return fn(data.map(e => e.num))
    }
  }
}
</script>
