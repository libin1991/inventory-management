export default {
  methods: {
    dictProject (id, keyName) {
      const project = this.vuexProjects.find(e => e.id === id)
      return project ? project[keyName] : '已经不存在的物品'
    },
    dictDepartment (id, keyName) {
      const department = this.vuexDepartments.find(e => e.id === id)
      return department ? department[keyName] : '已经不存在的部门'
    }
  }
}
