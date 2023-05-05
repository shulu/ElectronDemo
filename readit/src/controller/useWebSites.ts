/*
 * @Author: shulu
 * @Date: 2023-04-22 20:51:39
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-05 17:11:59
 * @Description: file content
 * @FilePath: \readit\src\controller\useWebSites.ts
 */
import useWebSiteStore from '@/store/websiteStore';
import { onMounted } from 'vue';

const useWebSites = () => {
    const webSiteStore = useWebSiteStore();
    const changeSelected = (index: number, url: string) => {
        webSiteStore.nowSelected = index;
        //window.open(url, '_blank', 'width=1300,height=800');
        mainApi.openUrl(url);
    };
    const removeWebsite = (item: any) => {
        webSiteStore.rmWebsites(item);
    };
    const filterWebSites = (name: string) => {
        console.log(`output->name`, name);
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
