<template>
  <Container>
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="物品" prop="project">
        <ProjectSelect v-model="form.project"></ProjectSelect>
      </el-form-item>
      <el-form-item label="数量" prop="num">
        <el-input-number v-model="form.num" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit('form')">保存</el-button>
      </el-form-item>
    </el-form>
  </Container>
</template>

<script>
import vuex from '@/mixins/vuex.js'
export default {
  mixins: [
    vuex
  ],
  data () {
    return {
      form: {
        project: null,
        num: 1
      },
      rules: {
        project: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        num: [
          { required: true, message: '请输入活动名称', trigger: 'change' },
          { type: 'number', min: 1, message: '最小是1', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 更新存量
          this.vuexProjectsUpdateNum({
            id: this.form.project,
            change: this.form.num
          })
          this.vuexProjectsLoad()
          // 历史
          this.vuexHistoryInPush(this.form)
          this.vuexHistoryInLoad()
          // 结束
          this.form.project = null
          this.form.num = 1
          this.$message({
            message: '保存成功',
            type: 'success'
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
