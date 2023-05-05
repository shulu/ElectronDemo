/*
 * @Author: shulu
 * @Date: 2023-05-05 16:06:44
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-05 22:51:30
 * @Description: file content
 * @FilePath: \readit\controller\mainMenu.js
 */
const { app, Menu, ipcMain, webContents } = require('electron');
const { reject } = require('lodash');

const isMac = process.platform === 'darwin';

let event = null;

ipcMain.on('main-on-show-dialog-event', (e, msg) => {
    event = e;
});

const template = [
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click: async () => {
                    const { shell } = require('electron');
                    await shell.openExternal('https://electronjs.org');
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
            {
                label: '添加网站2',
                click: () => {
                    webContents.send('on-add-show-once', 'add2');
                },
            },
        ],
    },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
