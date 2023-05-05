const { ipcMain, BrowserWindow } = require('electron');
const WinState = require('electron-win-state').default;
const path = require('path');
const savesa = require('./saveas.js');

const cssText = `width:60px; height:30px; font-size:0.8rem;border-radius: 5px; line-height: 30px; text-align:center; background-color:cornflowerblue; position:fixed; bottom:50px; right:20px; z-index:999;color:#fff;cursor:pointer;user-select:none;`;

const js = `
    const div = document.createElement('div')
    div.id = 'readit-btn'
    div.innerHTML = '关闭窗口'
    div.addEventListener('click', () => {urlWindowApi.close()})
    div.style.cssText = '${cssText}'
    document.body.appendChild(div)
`;

let win = null;

ipcMain.handle('on-open-event', (e, url) => {
    const winState = new WinState({
        defaultHeight: 800,
        defaultWidth: 1200,
        electronStoreOptions: {
            name: 'win-state-url',
        },
    });

    win = new BrowserWindow({
        ...winState.winOptions,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.resolve(__dirname, '../preload/urlWindow.js'),
        },
    });

    win.on('ready-to-show', () => {
        win.show();
    });

    win.loadURL(url);

    winState.manage(win);
    win.webContents.on('context-menu', (e, args) => {
        savesa(args.srcURL);
    });
    win.webContents.openDevTools({ mode: 'bottom', activate: true });
    win.webContents.executeJavaScript(js).catch(() => {});
});

ipcMain.handle('on-url-window-close-event', () => {
    win.close();
});
