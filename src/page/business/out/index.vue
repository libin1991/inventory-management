<template>
  <Container>
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="日期" prop="date">
        <el-date-picker
          v-model="form.date"
          type="datetime"
          placeholder="选择日期"
          :clearable="false"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="部门" prop="department">
        <DepartmentSelect v-model="form.department"></DepartmentSelect>
      </el-form-item>
      <el-form-item label="物品" prop="project">
        <ProjectSelect v-model="form.project" :nonempty="true"></ProjectSelect>
      </el-form-item>
      <el-form-item v-if="form.project" label="数量" prop="num">
        <el-input-number v-model="form.num" :step="1" :max="numMax"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit('form')">保存</el-button>
      </el-form-item>
    </el-form>
    <el-alert :title="infoTitle"></el-alert>
  </Container>
</template>

<script>
import vuex from '@/mixins/vuex.js'
import dict from '@/mixins/dict.js'
export default {
  mixins: [
    vuex,
    dict
  ],
  data () {
    return {
      numMax: 0,
      form: {
        date: new Date(),
        department: null,
        project: null,
        num: 0
      },
      rules: {
        date: [
          { required: true, message: '请输入日期', trigger: 'blur' }
        ],
        department: [
          { required: true, message: '请输入部门名称', trigger: 'blur' }
        ],
        project: [
          { required: true, message: '请输入物品名称', trigger: 'blur' }
        ],
        num: [
          { required: true, message: '请输入物品数量', trigger: 'change' },
          { type: 'number', min: 1, message: '物品数量最小为1', trigger: 'change' }
        ]
      },
      pickerOptions: {
        disabledDate: time => time.getTime() > Date.now(),
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }
        ]
      }
    }
  },
  computed: {
    infoTitle () {
      const project = this.form.project
      const name = this.dictProject(project, 'name')
      const num = this.dictProject(project, 'num')
      const unit = this.dictProject(project, 'unit')
      return this.form.project ? `${name}剩余${num}${unit}` : '选择物品后 在这里会提示剩余数量'
    }
  },
  watch: {
    // 监听物品变化
    'form.project': {
      handler (value) {
        this.form.num = 0
        this.numMax = value ? this.dictProject(value, 'num') : 0
      },
      deep: true
    }
  },
  methods: {
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 更新存量
          this.vuexProjectsUpdateNum({
            id: this.form.project,
            change: -this.form.num
          })
          this.vuexProjectsLoad()
          // 历史
          this.vuexHistoryOutPush({
            ...this.form,
            date: String(this.form.date),
            creatDate: String(new Date())
          })
          this.vuexHistoryOutLoad()
          // 结束
          this.form.department = null
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
