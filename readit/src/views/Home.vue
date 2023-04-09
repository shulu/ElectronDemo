<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:55:50
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-07 15:59:14
 * @Description: file content
 * @FilePath: /readit/src/views/Home.vue
-->
<script setup lang="ts">
import { ref } from "vue";
import SearchBar from "./SearchBar.vue";
import Dialog from "./Dialog.vue";
</script>
<template>
  <main>
    <SearchBar />
    <Dialog />
  </main>
</template>
<style scoped lang="scss"></style>