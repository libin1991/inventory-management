import vuexSetting from '@/store'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
console.log(vuexSetting)
export default {
  computed: {
    ...mapState(Object.keys(vuexSetting.state)),
    ...mapGetters(Object.keys(vuexSetting.getters))
  },
  methods: {
    ...mapMutations(Object.keys(vuexSetting._mutations)),
    ...mapActions(Object.keys(vuexSetting._actions))
  }
}
