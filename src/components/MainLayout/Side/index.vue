<template>
  <el-menu
    default-active="2"
    @select="selectHandle"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :unique-opened="true">
    <!-- 循环 -->
    <template v-for="(menu, menuIndex) in menu">
      <!-- 有子菜单 -->
      <el-submenu v-if="menu.children" :key="'submenu' + menuIndex" :index="menu.value">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{menu.label}}</span>
        </template>
        <el-menu-item
          v-for="(menuChildren, menuChildrenIndex) in menu.children"
          :key="'menu-item' + menuChildrenIndex"
          :index="menuChildren.value">
          {{menuChildren.label}}
        </el-menu-item>
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
    selectHandle (index, path) {
      this.$router.push({
        name: index
      })
    }
  }
}
</script>
