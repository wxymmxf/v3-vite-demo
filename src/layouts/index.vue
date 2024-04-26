<template>
  <div class="main-layout">
    <div class="menu-view">
      <aside-menu></aside-menu>
    </div>
    <div class="main-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import asideMenu from '@/layouts/components/asideMenu.vue'
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
}
.menu-view {
  border: solid 1px;
  height: 400px;
}
.main-view {
  flex: 1;
  border: solid 1px;
}
</style>
