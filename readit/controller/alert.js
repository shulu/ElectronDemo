const { dialog, ipcMain } = require('electron');

ipcMain.handle('on-alert-event', (e, msg) => {
    dialog.showMessageBox({
        title: '系统提示',
        message: msg,
        type: 'error',
    });
});
