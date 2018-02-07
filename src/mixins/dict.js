export default {
  methods: {
    dictProject (id) {
      const project = this.vuexProjects.find(e => e.id === id)
      return project ? project.name : '已经不存在的物品'
    },
    dictProjectUnit (id) {
      const project = this.vuexProjects.find(e => e.id === id)
      return project ? project.unit : '已经不存在的物品'
    },
    dictDepartment (id) {
      const department = this.vuexDepartments.find(e => e.id === id)
      return department ? department.name : '已经不存在的部门'
    }
  }
}
