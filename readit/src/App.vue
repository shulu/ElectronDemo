<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:54:42
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-22 21:01:16
 * @Description: file content
 * @FilePath: \readit\src\App.vue
-->
<script setup lang="ts">
import { provide, ref } from 'vue';
import Home from './views/Home.vue';
const isShow = ref(false);
const webUrl = ref('');
const setIsShow = (val: boolean) => {
    isShow.value = val;
    webUrl.value = !val ? '' : webUrl.value;
};
provide('dialog-show', {
    webUrl,
    isShow,
    setIsShow,
});
</script>
<template>
    <Home />
</template>
<style scoped lang="scss"></style>
