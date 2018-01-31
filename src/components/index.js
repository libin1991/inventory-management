import Vue from 'vue'

Vue.component('Container', resolve => { require(['@/components/Container/index.vue'], resolve) })

Vue.component('ProjectSelect', resolve => { require(['@/components/ProjectSelect/index.vue'], resolve) })
