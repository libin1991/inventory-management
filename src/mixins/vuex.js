import vuexSetting from '@/store'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([Object.keys(vuexSetting.state)])
  },
  methods: {
    ...mapMutations(Object.keys(vuexSetting._mutations)),
    ...mapActions(Object.keys(vuexSetting._actions))
  }
}
