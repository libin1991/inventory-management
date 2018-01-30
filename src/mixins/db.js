import vuexSetting from '@/store'
import { mapMutations, mapActions } from 'vuex'
export default {
  methods: {
    ...mapMutations(Object.keys(vuexSetting._mutations)),
    ...mapActions(Object.keys(vuexSetting._actions))
  }
}
