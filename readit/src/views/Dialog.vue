<!--
 * @Author: shulu
 * @Date: 2023-04-07 16:22:35
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-22 21:04:33
 * @Description: file content
 * @FilePath: \readit\src\views\Dialog.vue
-->
<script setup lang="ts">
import useWebSiteStore from '@/store/websiteStore';
import { inject, ref } from 'vue';
const websiteStore = useWebSiteStore();
const { webUrl, isShow, setIsShow } = inject('dialog-show');

const isSubmit = ref(false);
const handleAddClick = async () => {
    isSubmit.value = true;
    const result = await mainApi.sendUrl(webUrl.value);
    result && websiteStore.add(result);
    isSubmit.value = false;
    setIsShow(false);
};
</script>
<template>
    <div class="dialog-wrap" v-if="isShow">
        <div class="content">
            <div class="input">
                <input type="text" name="" id="" v-model="webUrl" placeholder="请输入网址" :disabled="isSubmit" />
            </div>
            <div class="button">
                <button class="add" @click="handleAddClick" :disabled="isSubmit">新增</button>
                <button class="cancel" @click="setIsShow(false)" :disabled="isSubmit">取消</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.dialog-wrap {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: rgba($color: #000000, $alpha: 0.5);

    .content {
        width: 100%;
        height: 7em;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;

        .input {
            // flex: 1;
            height: 3em;
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

        .button {
            display: flex;
            justify-content: center;
            align-items: center;

            button {
                width: 5em;
                height: 2.5em;
                margin: 0.5em 0.5em;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            button:hover {
                background-color: aqua;
            }
        }
    }
}
</style>
