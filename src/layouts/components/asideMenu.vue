<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :default-openeds="['1']"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1" @click="$router.push('/index')">index</el-menu-item>
      <el-menu-item index="1-2" @click="$router.push('/counter')">Counter</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator Two</span>
      </template>
    </el-sub-menu>
  </el-menu>
</template>
<script setup>
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
