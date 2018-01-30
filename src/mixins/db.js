export default {
  data () {
    return {
      // 商品列表
      projects: []
    }
  },
  mounted () {
    // 从数据库重新获得数据
    this.reloadDataFromDB()
  },
  methods: {
    // 从数据库重新获得数据
    reloadDataFromDB () {
      this.getProjects()
    },
    // 从数据库获得商品列表
    getProjects () {
      this.projects = this.$db
        .get('projects')
        .value() || []
    }
  }
}
