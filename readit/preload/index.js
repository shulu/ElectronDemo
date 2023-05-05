/*
 * @Author: shulu
 * @Date: 2023-04-07 23:33:53
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-05 23:07:14
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

const showDialogMain = () => {
    ipcRenderer.send('main-on-show-dialog-event', '1');
};

const dialogShow = () => {
    return ipcRenderer.on('on-dialog-show-event', (e, msg) => {
        console.log(`output->msg`, msg);
    });
};

const dialogTest = () => {
    ipcRenderer.on('on-add-show-once', (_event, msg) => {
        console.log(`output->msg`, msg);
    });
};

contextBridge.exposeInMainWorld('mainApi', {
    sendUrl,
    showDialog,
    openUrl,
    imageList,
    showDialogMain,
    dialogShow,
    dialogTest,
});
