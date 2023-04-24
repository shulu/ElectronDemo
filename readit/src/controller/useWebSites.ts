/*
 * @Author: shulu
 * @Date: 2023-04-22 20:51:39
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-22 22:01:09
 * @Description: file content
 * @FilePath: \readit\src\controller\useWebSites.ts
 */
import useWebSiteStore from '@/store/websiteStore';
import { onMounted } from 'vue';
import _ from 'lodash';


const useWebSites = () => {
    const webSiteStore = useWebSiteStore();
    const changeSelected = (index: number, url: string) => {
        webSiteStore.nowSelected = index;
        window.open(url, '_blank', 'width=1300,height=800');
    };
    const removeWebsite = (item: any) => {
        webSiteStore.rmWebsites(item);
    };
    const filterWebSites = (name: string) => {
        webSiteStore.filterWebSites(name.toLowerCase());
    };
    onMounted(() => {
        webSiteStore.initSites();
    });
    return {
        webSiteStore,
        changeSelected,
        removeWebsite,
        filterWebSites,
    };
};

export default useWebSites;
