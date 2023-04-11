<!--
 * @Author: shulu
 * @Date: 2023-04-07 17:30:50
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-11 22:12:46
 * @Description: file content
 * @FilePath: \readit\src\views\List.vue
-->
<script setup lang="ts">
import { ref } from 'vue';
</script>
<template>
    <div>
        <div class="no-items"
             v-if="false">暂无数据</div>
        <div class="item">
            <div class="read-item  selected">
                <img src="http://placekitten.com/100/50"
                     alt="">
                <h2>百度一下 你就知道</h2>
                <button>X</button>
            </div>
            <div class="read-item">
                <img src="http://placekitten.com/100/50"
                     alt="">
                <h2>百度一下 你就知道</h2>
                <button>X</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.no-item {
    font-weight: bold;
    color: silver;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 100px;
    z-index: 1;
}

.item {
    margin: 0;
    padding: 0;

    .read-item {
        display: flex;
        align-items: center;
        align-content: center;
        border-bottom: lightgray 2px solid;
        background: #fafafa;
        border-left: 10px solid lightgray;
        -webkit-user-select: none;
        position: relative;
        padding: 10px;
        cursor: pointer;

        img {
            width: 20%;
            margin-right: 25px;
            border: solid 1px #ccc;
        }

        button {
            position: absolute;
            display: none;
            right: 10px;
            top: 10px;
            width: 30px;
            height: 30px;
            background: #f44336;
            border: none;
            border-radius: 50%;
            color: white;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
        }

        &:hover {
            background: #eee;
        }

        &.selected {
            border-left-color: dodgerblue !important;
        }

        &:hover button {
            display: inline-block;
        }
    }
}
</style>
