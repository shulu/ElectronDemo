/*
 * @Author: shulu
 * @Date: 2023-04-07 14:27:32
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-17 21:22:12
 * @Description: file content
 * @FilePath: \readit\src\main.js
 */
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import '@/assets/scss/common.scss';
import 'normalize.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
