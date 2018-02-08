<template>
  <el-select
    v-model="currentValue"
    placeholder="请选择入库物品"
    no-data-text="请先录入备选物品"
    filterable
    clearable>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <div v-if="!simple" style="width: 300px;">
        <span style="float: left">
          {{item.label}}
          <span class="project-select-num" :class="item.num === 0 ? 'none' : ''">
            {{item.num === 0 ? '无存货' : item.num}}
          </span>
        </span>
        <span style="float: right; color: #8492a6; font-size: 13px">
          ¥{{item.price}}
          <template v-if="item.unit">/{{item.unit}}</template>
        </span>
      </div>
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
    },
    nonempty: {
      type: Boolean,
      required: false,
      default: false
    },
    simple: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      currentValue: {}
    }
  },
  computed: {
    options () {
      const projects = this.nonempty ? this.vuexProjectsValid.filter(e => e.num > 0) : this.vuexProjectsValid
      return projects.map(e => ({
        value: e.id,
        label: e.name,
        price: e.price,
        num: e.num,
        unit: e.unit
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
