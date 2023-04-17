<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:54:42
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-17 23:10:16
 * @Description: file content
 * @FilePath: \readit\src\App.vue
-->
<script setup lang="ts">
import { provide, ref } from 'vue';
import Home from './views/Home.vue';
const isShow = ref(false);
const setIsShow = (val: boolean) => {
    isShow.value = val;
};
provide('dialog-show', {
    isShow,
    setIsShow,
});
</script>
<template>
    <Home />
</template>
<style scoped lang="scss"></style>
