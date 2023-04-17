/*
 * @Author: shulu
 * @Date: 2023-04-17 21:17:06
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-17 23:36:17
 * @Description: file content
 * @FilePath: \readit\src\store\websiteStore.ts
 */
import { defineStore } from 'pinia';

import store from 'store2';

interface IWebContens {
    url: string;
    title: string;
    screenShot: string;
}

const useWebSiteStore = defineStore('websiteStore', {
    state() {
        return {
            websites: [] as IWebContens[],
            nowSelected: 0,
        };
    },
    actions: {
        add(item: IWebContens) {
            this.websites.unshift(item);
            store.local.set('websites', this.websites);
        },
        rmWebsites(item: IWebContens) {
            const websites = this.websites.filter(function (val) {
                console.log(`output->val`, val.url);
                console.log(`output->item`, item.url);
            });
            console.log(`output->`, websites);
            store.local.set('websites', this.websites);
        },
        initSites() {
            this.websites = store.local.get('websites');
        },
    },
});

export default useWebSiteStore;
