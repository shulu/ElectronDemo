<!--
 * @Author: shulu
 * @Date: 2023-04-07 15:55:50
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-05 22:03:23
 * @Description: file content
 * @FilePath: \readit\src\views\Home.vue
-->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import Dialog from './Dialog.vue';
import List from './List.vue';
import SearchBar from './SearchBar.vue';

const action = ref('');

onMounted(async () => {
    mainApi.dialogTest()
    mainApi.showDialogMain();
    const result = await mainApi.dialogShow();
    console.log(`output->result`, result);
    action.value = result;
});

watch(action, async () => {
    console.log(`output->watch result`, action);
});
</script>
<template>
    <main>
        <SearchBar v-model="action" />
        <teleport to="body">
            <Dialog />
        </teleport>
        <List />
    </main>
</template>
<style scoped lang="scss"></style>
