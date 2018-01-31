<template>
  <Container>
    <div>
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        @click="handleBack">
        返回物品管理列表
      </el-button>
    </div>
    <br>
    <Xform v-model="form" @submit="handleSave"></Xform>
  </Container>
</template>

<script>
import vuex from '@/mixins/vuex.js'
import Xform from './components/Form'
export default {
  mixins: [
    vuex
  ],
  components: {
    Xform
  },
  data () {
    return {
      form: {
        name: '物品名称',
        price: 1,
        num: 0
      }
    }
  },
  computed: {
    // 这个页面编辑的数据id 从路由参数中传进来
    id () {
      return this.$route.params.id
    }
  },
  created () {
    // 初始化这个页面
    this.init()
  },
  methods: {
    // 初始化这个页面
    init () {
      if (this.id) {
        const project = this.vuexProjects.find(e => e.id === this.id)
        this.form.name = project.name
        this.form.price = project.price
        this.form.num = project.num
      } else {
        this.handleBack()
      }
    },
    // 返回相关的列表页
    handleBack () {
      this.$router.push({
        name: 'business-manage-project'
      })
    },
    // 保存
    handleSave () {
      // this.vuexProjectsPush(this.form)
      this.vuexProjectLoad()
    }
  }
}
</script>
