<template>
  <el-select
    v-model="currentValue"
    filterable
    placeholder="请选择部门"
    no-data-text="请先录入备选部门">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import vModel from '@/mixins/v-model.js'
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vModel,
    vuex
  ],
  props: {
    value: {
      required: false,
      default: ''
    }
  },
  data () {
    return {
      currentValue: {}
    }
  },
  computed: {
    options () {
      return this.vuexDepartmentsValid.map(e => ({
        value: e.id,
        label: e.name,
        price: e.price,
        num: e.num
      }))
    }
  }
}
</script>

<style lang="scss">
.project-select-num {
  background-color: #909399;
  color: #FFF;
  padding: 0px 6px;
  border-radius: 2px;
  font-size: 12px;
  &.none {
    background-color: #F56C6C;
  }
}
</style>
