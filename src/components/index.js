import Vue from 'vue'

Vue.component('Container', resolve => { require(['@/components/Container/index.vue'], resolve) })

Vue.component('ProjectSelect', resolve => { require(['@/components/ProjectSelect/index.vue'], resolve) })
Vue.component('DepartmentSelect', resolve => { require(['@/components/DepartmentSelect/index.vue'], resolve) })
Vue.component('ImportUploader', resolve => { require(['@/components/ImportUploader/index.vue'], resolve) })
Vue.component('ImportJson', resolve => { require(['@/components/ImportJson/index.vue'], resolve) })
