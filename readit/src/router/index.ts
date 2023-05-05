/*
 * @Author: shulu
 * @Date: 2023-05-02 21:33:27
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-03 16:07:33
 * @Description: file content
 * @FilePath: \readit\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/imageGallery',
        name: 'imageGallery',
        component: () => import('@/views/imageGallery.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;
