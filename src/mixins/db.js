import { mapMutations, mapActions } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'vuexProjectLoad'
    ]),
    ...mapActions([
      'vuexProjectsPush'
    ])
  }
}
