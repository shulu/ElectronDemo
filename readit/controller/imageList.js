/*
 * @Author: shulu
 * @Date: 2023-05-05 11:39:48
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-05 11:59:03
 * @Description: file content
 * @FilePath: \readit\controller\imageList.js
 */

const { ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');
const { readdir } = require('fs/promises');

ipcMain.handle('on-img-filelist-event', async () => {
    //const files = fs.readdirSync(path.resolve(__dirname, '../public/download/'));
    const files = await readdir(path.resolve(__dirname, '../public/download/'));
    return files;
});
