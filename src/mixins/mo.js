import moment from 'moment'
moment.locale('zh-cn')
export default {
  methods: {
    mo (date) {
      return moment(Date.parse(date)).format('YYYY年MMMMDo dddd h:mm:ss a')
    }
  }
}
