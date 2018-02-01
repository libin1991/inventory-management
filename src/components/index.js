import Vue from 'vue'

Vue.component('Container', resolve => { require(['@/components/Container/index.vue'], resolve) })

Vue.component('ProjectSelect', resolve => { require(['@/components/ProjectSelect/index.vue'], resolve) })
Vue.component('ImportUploader', resolve => { require(['@/components/ImportUploader/index.vue'], resolve) })
Vue.component('DickProjectName', resolve => { require(['@/components/DickProjectName/index.vue'], resolve) })
