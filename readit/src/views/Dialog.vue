<!--
 * @Author: shulu
 * @Date: 2023-04-07 16:22:35
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-07 17:43:19
 * @Description: file content
 * @FilePath: /readit/src/views/Dialog.vue
-->
<script setup lang="ts">
import { ref, inject } from 'vue';

const { isShow, setIsShow } = inject('dialog-show')
</script>
<template>
    <div class="dialog-wrap"
         v-if="isShow">
        <div class="content">
            <div class="input">
                <input type="text"
                       name=""
                       id=""
                       placeholder="请输入网址">
            </div>
            <div class="button">
                <button class="add">add</button>
                <button class="cancel"
                        @click="setIsShow(!isShow.value)">cancel</button>
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
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
