<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:57:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-05 18:01:18
 * @Description: file content
 * @FilePath: \readit\src\views\SearchBar.vue
-->
<script setup lang="ts">
import useWebSites from '@/controller/useWebSites';
import { inject, ref, watch } from 'vue';
const { setIsShow, setKeyword } = inject('dialog-show');

const props = defineProps<{
    modelValue: string;
}>();
const emits = defineEmits(['update:modelValue']);

const handleClick = () => {
    setIsShow(true);
    emits('update:modelValue', '');
};
// 方式1
const { filterWebSites } = useWebSites();
// const webTitle = ref('');
// watch(webTitle, () => {
//     filterWebSites(webTitle.value);
// });
//方式2
const kw = ref('');
watch(
    [kw, () => props.modelValue],
    ([kw, action]) => {
        if (kw) filterWebSites(kw);
        if (action == 'add') {
            handleClick();
        }
    },
    { deep: true },
);
</script>
<template>
    <div class="search-container">
        <div class="button" @click="handleClick">+</div>
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
