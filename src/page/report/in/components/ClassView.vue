<template>
  <div>
    <div
      v-for="(item, index) in projectsClass"
      :key="index">
      <h1>{{item.id}} 总共 {{add(item.data)}}</h1>
      <el-table
        :data="item.data"
        size="mini"
        border>
        <el-table-column prop="date" label="日期">
          <template slot-scope="scope">{{mo(scope.row.date)}}</template>
        </el-table-column>
        <el-table-column prop="num" label="数量"></el-table-column>
      </el-table>
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
    projectsClass () {
      return this.vuexProjectsValid.map(e => {
        return {
          id: this.dictProject(e.id),
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
