<template>
  <Container>
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="物品" prop="project">
        <ProjectSelect v-model="form.project"></ProjectSelect>
      </el-form-item>
      <el-form-item label="数量" prop="num">
        <el-input-number v-model="form.num" :step="10"></el-input-number>
      </el-form-item>
    </el-form>
  </Container>
</template>

<script>
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
export default {
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
