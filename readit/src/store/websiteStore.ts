/*
 * @Author: shulu
 * @Date: 2023-04-17 21:17:06
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-24 21:47:44
 * @Description: file content
 * @FilePath: \readit\src\store\websiteStore.ts
 */
import * as _ from 'lodash';
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
    getters: {
        findWebsites(state): IWebContens[] | any {
            return (titleName: string) => {
                if (titleName !== '') {
                    let pattern = new RegExp(titleName, 'i');
                    const result = _.filter(state.websites, (item) => {
                        return pattern.test(item.title);
                    });
                    return result;
                    //return state.websites.filter((web) => web.title.toLowerCase().includes(titleName));
                } else {
                    return state.websites;
                }
            };
        },
    },
    actions: {
        add(item: IWebContens) {
            if (_.find(this.websites, { url: item.url })) {
                mainApi.showDialog('数据已保存');
                return false;
            }
            this.websites.unshift(item);
            store.local.set('websites', this.websites);
        },
        rmWebsites(item: IWebContens) {
            this.websites = this.websites.filter((val) => val.url != item.url);
            store.local.set('websites', this.websites);
        },
        filterWebSites(name: string) {
            if (name.length > 0) {
                this.websites = this.websites.filter((val) => val.title.toLowerCase().includes(name));
            } else {
                this.websites = store.local.get('websites');
            }
        },
        initSites() {
            this.websites = store.local.get('websites') ?? [];
        },
    },
});

export default useWebSiteStore;
