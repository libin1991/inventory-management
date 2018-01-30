import * as tool from '@/assets/library/tool.js'
export default {
  props: {
    // 需要在这里声明一个叫 value 的参数
  },
  data () {
    return {
      // 需要在这里声明一个叫 currentValue 的数据
    }
  },
  created () {
    this.copyValueToCurrentValue()
  },
  watch: {
    value: {
      handler () {
        this.copyValueToCurrentValue()
      },
      deep: true
    },
    currentValue: {
      handler (value) {
        console.group('currentValue handler')
        if (typeof value === 'object') {
          console.log('value 是对象类型')
          if (JSON.stringify(value) !== JSON.stringify(this.value)) {
            console.log('currentValue 不等于 value 所以要 $emit')
            this.$emit('input', value)
          } else {
            console.log('currentValue 等于 value 什么都不做')
          }
        } else {
          console.log('value 不是对象类型')
          if (value !== this.value) {
            console.log('currentValue 不等于 value 所以要 $emit')
            this.$emit('input', value)
          } else {
            console.log('currentValue 等于 value 什么都不做')
          }
        }
        console.groupEnd()
      },
      deep: true
    }
  },
  methods: {
    copyValueToCurrentValue () {
      console.log('开始将 value 复制到 currentValue')
      if (typeof this.value === 'object') {
        this.currentValue = tool.clone(this.value)
      } else {
        this.currentValue = this.value
      }
    }
  }
}
