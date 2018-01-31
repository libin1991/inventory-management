<template>
  <el-select v-model="currentValue" filterable placeholder="请选择入库物品">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">¥{{item.price}}</span>
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
      return this.vuexProjectsValid.map(e => ({
        value: e.id,
        label: e.name,
        price: e.price
      }))
    }
  }
}
</script>
