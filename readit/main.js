/*
 * @Author: shulu
 * @Date: 2023-04-07 14:31:24
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-07 17:15:36
 * @Description: file content
 * @FilePath: \readit\main.js
 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const WinState = require('electron-win-state').default;
const createTray = require('./tray');

require('./controller/mainMenu');
require('./controller/captureUrl');
require('./controller/alert');
require('./controller/openWindow');
require('./controller/imageList');

const createWindow = () => {
    const winState = new WinState({
        defaultWidth: 1000,
        defaultHeight: 1200,
        electronStoreOptions: {
            name: 'win-state-main',
        },
    });
    const mainWindow = new BrowserWindow({
        ...winState.winOptions,
        icon: './icon@2x.png',
        webPreferences: {
            preload: path.resolve(__dirname, './preload/index.js'),
        },
        autoHideMenuBar: true,
        show: false,
    });
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
    mainWindow.on('close', () => {
        winState.saveState(mainWindow);
    });
    mainWindow.loadURL('http://localhost:5173/');
    mainWindow.webContents.openDevTools({ mode: 'bottom', activate: true });
    winState.manage(mainWindow);

    createTray(app, mainWindow);
};

// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
