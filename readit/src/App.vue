<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:54:42
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-10 20:59:43
 * @Description: file content
 * @FilePath: \readit\src\App.vue
-->
<script setup lang="ts">
import { ref, provide } from "vue";
import Home from "./views/Home.vue";
const isShow = ref(false);
const setIsShow = (val) => {
  isShow.value = val
}
provide('dialog-show', {
  isShow,
  setIsShow
})
</script>
<template>
  <Home />
</template>
<style scoped lang="scss"></style>
