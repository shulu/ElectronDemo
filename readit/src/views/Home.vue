<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:55:50
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-11 21:36:06
 * @Description: file content
 * @FilePath: \readit\src\views\Home.vue
-->
<script setup lang="ts">
import { ref } from "vue";
import SearchBar from "./SearchBar.vue";
import Dialog from "./Dialog.vue";
import List from "./List.vue";
</script>
<template>
  <main>
    <SearchBar />
    <Dialog />
    <List />
  </main>
</template>
<style scoped lang="scss"></style>