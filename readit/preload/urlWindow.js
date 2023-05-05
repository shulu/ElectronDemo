const { contextBridge, ipcRenderer } = require('electron');

const close = () => {
    ipcRenderer.invoke('on-url-window-close-event');
};

contextBridge.exposeInMainWorld('urlWindowApi', {
    close,
});
