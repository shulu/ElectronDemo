<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:54:42
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-07 16:23:26
 * @Description: file content
 * @FilePath: \readit\src\App.vue
-->
<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import { Router, useRouter } from 'vue-router';
import Header from './views/Header.vue';
const webUrl = ref('');
const isShow = ref(false);
const keyword = ref('');
const routeName = ref('');
const router: Router = useRouter();
const setIsShow = (val: boolean) => {
    isShow.value = val;
    webUrl.value = !val ? '' : webUrl.value;
};
const setKeyword = (kw: string) => {
    keyword.value = kw;
};
const cb = () => {
    setIsShow(true);
};
const cbNavigate = (routeName: string) => {
    router.push({ path: '/' + routeName + '' });
};
onMounted(async () => {
    mainApi.bindMainEvent();
    mainApi.dialogShow(cb);
    mainApi.navigateMan(cbNavigate);
});
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
