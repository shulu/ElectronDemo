<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:54:42
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-24 21:39:20
 * @Description: file content
 * @FilePath: \readit\src\App.vue
-->
<script setup lang="ts">
import { provide, ref } from 'vue';
import Header from './views/Header.vue';
const webUrl = ref('');
const isShow = ref(false);
const setIsShow = (val: boolean) => {
    isShow.value = val;
    webUrl.value = !val ? '' : webUrl.value;
};
const keyword = ref('');
const setKeyword = (kw: string) => {
    keyword.value = kw;
};
provide('dialog-show', {
    webUrl,
    isShow,
    setIsShow,
    keyword,
    setKeyword,
});
</script>
<template>
    <Header />
    <router-view></router-view>
</template>
<style scoped lang="scss"></style>
