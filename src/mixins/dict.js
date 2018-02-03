export default {
  methods: {
    dictProject (id) {
      const project = this.vuexProjects.find(e => e.id === id)
      return project ? project.name : 'undefined'
    },
    dictDepartment (id) {
      const department = this.vuexDepartments.find(e => e.id === id)
      return department ? department.name : 'undefined'
    }
  }
}
