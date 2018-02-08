import moment from 'moment'
moment.locale('zh-cn')
export default {
  computed: {
    moStartDate () {
      if (this.filterDate) {
        const date = this.filterDate[0]
        return isNaN(date) ? false : moment(date).format('YYYY年MMMMDo')
      } else {
        return false
      }
    },
    moEndDate () {
      if (this.filterDate) {
        const date = this.filterDate[1]
        return isNaN(date) ? false : moment(date).format('YYYY年MMMMDo')
      } else {
        return false
      }
    }
  },
  methods: {
    dataFilter (array) {
      return array.filter(e => {
        const tempDateMo = moment(Date.parse(e.date))
        const isBetween = this.filterDate ? tempDateMo.isBetween(
          moment(this.filterDate[0]).subtract(1, 'days'),
          moment(this.filterDate[1]).add(1, 'days'),
          'day') : true
        const isProject = this.project ? e.project === this.project : true
        return isBetween && isProject
      })
    }
  }
}
