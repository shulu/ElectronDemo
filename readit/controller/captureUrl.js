/*
 * @Author: shulu
 * @Date: 2023-04-11 22:37:18
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-20 22:35:23
 * @Description: file content
 * @FilePath: \readit\controller\captureUrl.js
 */

const { ipcMain, dialog, BrowserWindow } = require('electron');
const url = require('node:url');
const http = require('node:http');
const https = require('node:https');
class UrlError extends Error {
    constructor(code, message) {
        super();
        this.code = code;
        this.message = message;
    }
}

function isValidUrl(string) {
    var webUrl = '';
    try {
        webUrl = new url.URL(string);
        return webUrl;
    } catch (_) {
        return false;
    }
}

const showErrorMsg = (msg) => {
    dialog.showMessageBox({
        title: '系统提示',
        message: msg,
        type: 'error',
    });
};

const getUrlContent = (url) => {
    return new Promise((resolve, reject) => {
        const webUrl = isValidUrl(url);
        if (!webUrl) {
            throw new UrlError('404', 'url无法访问');
        }
        const win = new BrowserWindow({
            width: 500,
            height: 500,
            show: false,
            webPreferences: {
                offscreen: true,
            },
        });
        win.webContents.loadURL(webUrl.origin);
        win.webContents.on('did-fail-load', (e) => {
            throw new UrlError('405', '网页加载失败');
        });
        win.webContents.on('did-finish-load', async () => {
            const title = win.getTitle();
            try {
                const contentImage = await win.webContents.capturePage();
                const screenShot = contentImage.toDataURL();
                resolve({
                    title,
                    screenShot,
                    url,
                });
            } catch (e) {
                reject(e);
            }
        });
    });
};

ipcMain.handle('on-url-event', async (e, url) => {
    const result = await getUrlContent(url).catch((error) => {
        showErrorMsg(error.code + '-' + error.message);
        return false;
    });
    return result;
});
