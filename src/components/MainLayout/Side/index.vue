<template>
  <el-menu
    default-active="2"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <!-- 循环 -->
    <template v-for="(menu, menuIndex) in menu">
      <!-- 有子菜单 -->
      <el-submenu v-if="menu.children" :key="'submenu' + menuIndex" :index="menu.value">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!-- 没有子菜单 -->
      <el-menu-item v-else :key="'menu-item' + menuIndex" :index="menu.value">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.label}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import menu from './menu'
export default {
  data () {
    return {
      menu
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
