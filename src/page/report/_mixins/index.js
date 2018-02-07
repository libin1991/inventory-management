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
  }
}
