<!--
 * @Author: shulu
 * @Date: 2023-05-03 16:09:47
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-03 22:21:37
 * @Description: file content
 * @FilePath: \readit\src\views\Header.vue
-->
<script setup lang="ts"></script>
<template>
    <div class="header-container">
        <router-link to="/home" custom v-slot="{ isActive, navigate }">
            <div :class="{ active: isActive }" @click="navigate">
                <svg
                    t="1683123559032"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6232"
                    width="20"
                    height="20"
                >
                    <path
                        d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z"
                        p-id="6233"
                    ></path>
                </svg>
                网站收藏
            </div>
        </router-link>
        <router-link to="/imageGallery" custom v-slot="{ isActive, navigate }">
            <div :class="{ active: isActive }" @click="navigate">
                <svg
                    t="1683123607371"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1658"
                    width="20"
                    height="20"
                >
                    <path
                        d="M588.8 721.92q30.72 0 52.224 22.016t21.504 52.736l0 153.6q0 30.72-21.504 52.224t-52.224 21.504l-154.624 0q-29.696 0-51.712-21.504t-22.016-52.224l0-153.6q0-30.72 22.016-52.736t51.712-22.016l154.624 0zM226.304 721.92q31.744 0 53.248 22.016t21.504 52.736l0 153.6q0 30.72-21.504 52.224t-53.248 21.504l-152.576 0q-30.72 0-52.224-21.504t-21.504-52.224l0-153.6q0-30.72 21.504-52.736t52.224-22.016l152.576 0zM950.272 0q29.696 0 51.2 21.504t21.504 52.224l0 153.6q0 30.72-21.504 52.736t-51.2 22.016l-153.6 0q-31.744 0-53.248-22.016t-21.504-52.736l0-153.6q0-30.72 21.504-52.224t53.248-21.504l153.6 0zM580.608 0q33.792 0 57.856 24.064t24.064 56.832l0 499.712q0 34.816-24.064 58.368t-57.856 23.552l-499.712 0q-33.792 0-57.344-23.552t-23.552-58.368l0-499.712q0-32.768 23.552-56.832t57.344-24.064l499.712 0zM950.272 721.92q29.696 0 51.2 22.016t21.504 52.736l0 153.6q0 30.72-21.504 52.224t-51.2 21.504l-153.6 0q-31.744 0-53.248-21.504t-21.504-52.224l0-153.6q0-30.72 21.504-52.736t53.248-22.016l153.6 0zM950.272 361.472q29.696 0 51.2 21.504t21.504 52.224l0 153.6q0 30.72-21.504 52.224t-51.2 21.504l-153.6 0q-31.744 0-53.248-21.504t-21.504-52.224l0-153.6q0-30.72 21.504-52.224t53.248-21.504l153.6 0z"
                        p-id="1659"
                    ></path>
                </svg>
                图片收藏
            </div>
        </router-link>
    </div>
</template>
<style scoped lang="scss">
.header-container {
    display: flex;
    background: #1e90ff;
    height: 44px;
    div {
        padding-left: 10px;
        padding-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ccc;
        cursor: pointer;
        user-select: none;

        &.active {
            color: #fff;
        }
        svg {
            margin: 0.2rem;
            fill: #ccc;
        }
        &.active svg {
            fill: #fff;
        }
    }
}
</style>
