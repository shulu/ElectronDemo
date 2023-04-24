<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:57:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-24 21:07:52
 * @Description: file content
 * @FilePath: \readit\src\views\SearchBar.vue
-->
<script setup lang="ts">
import _ from 'lodash';
import { watch, ref, inject } from 'vue';
import useWebSites from '@/controller/useWebSites';
const { setIsShow, setKeyword } = inject('dialog-show');
// 方式1
// const { filterWebSites } = useWebSites();
// const webTitle = ref('');
// watch(webTitle, () => {
//     filterWebSites(webTitle.value);
// });
//方式2
const kw = ref('');
watch(
    kw,
    _.debounce(() => {
        setKeyword(kw);
    }, 300),
);
</script>
<template>
    <div class="search-container">
        <div class="button" @click="setIsShow(true)">+</div>
        <div class="input">
            <input type="text" name="" id="" placeholder="请输入关键字..." v-model="kw" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.search-container {
    height: 60px;
    background: #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;

    .button {
        width: 40px;
        height: 40px;
        background-color: #1e90ff;
        padding-left: 0px;
        border-radius: 5px;
        font-size: 30px;
        font-weight: bold;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }

    .input {
        flex: 1;
        height: 36px;
        padding: 0 10px;
        border: 1px solod #ccc;
        border-radius: 5px;

        input {
            height: 100%;
            width: 100%;
            border: 1px solid #ccc;
            outline: none;
            border-radius: 5px;
            padding: 0 10px;
        }
    }
}
</style>
