export default [
  {
    label: '测试',
    value: 'test',
    icon: 'el-icon-menu'
  },
  {
    label: '日常业务',
    value: 'business',
    icon: 'el-icon-menu',
    children: [
      {
        label: '入库',
        value: 'business-in'
      }
    ]
  },
  {
    label: '设置',
    value: 'setting',
    icon: 'el-icon-menu',
    children: [
      {
        label: '云端同步',
        value: 'setting-db'
      }
    ]
  }
]
