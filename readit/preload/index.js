/*
 * @Author: shulu
 * @Date: 2023-04-07 23:33:53
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-07 16:19:42
 * @Description: file content
 * @FilePath: \readit\preload\index.js
 */
const { contextBridge, ipcRenderer } = require('electron');

const sendUrl = (url) => {
    const result = ipcRenderer.invoke('on-url-event', url);
    return result;
};

const showDialog = (msg) => {
    ipcRenderer.invoke('on-alert-event', msg);
};

const openUrl = (url) => {
    ipcRenderer.invoke('on-open-event', url);
};

const imageList = () => {
    const result = ipcRenderer.invoke('on-img-filelist-event');
    return result;
};

const bindMainEvent = () => {
    ipcRenderer.send('main-on-common-event');
};

const dialogShow = (cb) => {
    ipcRenderer.on('on-dialog-show-event', (e) => {
        cb();
    });
};

const navigateMan = (cb) => {
    ipcRenderer.on('on-navigate-web-event', (_event, msg) => {
        cb(msg);
    });
};

contextBridge.exposeInMainWorld('mainApi', {
    sendUrl,
    showDialog,
    openUrl,
    imageList,
    bindMainEvent,
    dialogShow,
    navigateMan,
});
