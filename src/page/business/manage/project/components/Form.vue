<template>
  <el-form :inline="true" :model="currentValue" class="demo-form-inline">
    <el-form-item label="物品名称">
      <el-input v-model="currentValue.name" placeholder="物品名称"></el-input>
    </el-form-item>
    <el-form-item v-if="mode === 'new'" label="价格">
      <el-input-number v-model="currentValue.price" :step="0.1"></el-input-number>
    </el-form-item>
    <el-form-item v-if="mode === 'new'" label="数量">
      <el-input-number v-model="currentValue.num" :step="1"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import vModel from '@/mixins/v-model.js'
export default {
  mixins: [
    vModel
  ],
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    mode: {
      type: String,
      required: false,
      default: 'new'
    }
  },
  data () {
    return {
      currentValue: {}
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('submit', this.currentValue)
    }
  }
}
</script>
