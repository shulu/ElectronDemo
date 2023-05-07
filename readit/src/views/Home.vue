<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:55:50
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-07 16:03:07
 * @Description: file content
 * @FilePath: \readit\src\views\Home.vue
-->
<script setup lang="ts">
import Dialog from './Dialog.vue';
import List from './List.vue';
import SearchBar from './SearchBar.vue';
</script>
<template>
    <main>
        <SearchBar />
        <teleport to="body">
            <Dialog />
        </teleport>
        <List />
    </main>
</template>
<style scoped lang="scss"></style>
