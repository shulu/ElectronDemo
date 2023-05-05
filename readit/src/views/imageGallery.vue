<!--
 * @Author: shulu
 * @Date: 2023-05-02 21:39:08
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-05 12:32:34
 * @Description: file content
 * @FilePath: \readit\src\views\imageGallery.vue
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const list = ref([]);

onMounted(async () => {
    const result = await mainApi.imageList();
    list.value = result;
});
</script>
<template>
    <div class="image-container">
        <img v-for="img in list" :src="`/public/download/${img}`" alt="" srcset="" />
    </div>
</template>
<style scoped lang="scss">
.image-container {
    img {
        width: 300px;
        height: 200px;
        padding: 5px 5px;
    }
}
</style>
