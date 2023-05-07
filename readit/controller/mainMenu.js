/*
 * @Author: shulu
 * @Date: 2023-05-05 16:06:44
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-07 16:04:08
 * @Description: file content
 * @FilePath: \readit\controller\mainMenu.js
 */
const { app, Menu, ipcMain, webContents } = require('electron');
const { reject } = require('lodash');

const isMac = process.platform === 'darwin';

let event = null;

ipcMain.on('main-on-common-event', (e, msg) => {
    event = e;
});

const template = [
    {
        label: '导航',
        submenu: [
            {
                label: '网站收藏',
                click: () => {
                    event.sender.send('on-navigate-web-event', 'home');
                },
            },
            {
                label: '图片收藏',
                click: () => {
                    event.sender.send('on-navigate-web-event', 'imageGallery');
                },
            },
        ],
    },
    {
        label: 'actions',
        submenu: [
            {
                label: '添加网站',
                click: () => {
                    event.sender.send('on-dialog-show-event', 'add');
                },
                accelerator: 'CommandOrControl+Shift+s',
            },
        ],
    },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
