export default [
  {
    label: '日常业务',
    value: 'business',
    icon: 'el-icon-menu',
    children: [
      {
        label: '入库',
        value: 'business-in'
      },
      {
        label: '物品管理',
        value: 'business-manage-project'
      }
    ]
  },
  {
    label: '设置',
    value: 'setting',
    icon: 'el-icon-menu',
    children: [
      {
        label: '备份与还原',
        value: 'setting-db'
      },
      {
        label: '数据导入',
        value: 'setting-import'
      }
    ]
  }
]
