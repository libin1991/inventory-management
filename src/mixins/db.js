export default {
  data () {
    return {
      projects: []
    }
  },
  mounted () {
    this.getProjects()
  },
  methods: {
    getProjects () {
      this.projects = this.$db
        .get('projects')
        .value() || []
    }
  }
}
