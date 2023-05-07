/*
 * @Author: shulu
 * @Date: 2023-05-07 16:36:56
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-07 16:37:00
 * @Description: file content
 * @FilePath: \readit\tray.js
 */
const { Menu, Tray, app } = require('electron');

const trayMenu = Menu.buildFromTemplate([{ label: 'Item 1' }, { role: 'quit' }]);

function createTray(app, win) {
    const tray = new Tray('./icon@2x.png');
    tray.setToolTip('ReadIt');
    tray.on('click', (e) => {
        if (e.shiftKey) {
            app.quit();
        } else {
            win.isVisible() ? win.hide() : win.show();
        }
    });
    tray.setContextMenu(trayMenu);
}

module.exports = createTray;
