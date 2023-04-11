/*
 * @Author: shulu
 * @Date: 2023-04-11 22:37:18
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-11 23:05:09
 * @Description: file content
 * @FilePath: \readit\controller\captureUrl.js
 */

const { ipcMain, BrowserWindow } = require("electron");

const getUrlContent = (url) => {
  return new Promise((resolve, reject) => {
    console.log(url);
    const win = new BrowserWindow({
      width: 500,
      height: 500,
      show: false,
      webPreferences: {
        offscreen: true,
      },
    });
    win.loadURL(url);
    win.webContents.on("did-finish-load", async () => {
      const title = win.getTitle();
      console.log(title);
      try {
        const contentImage = await win.webContents.capturePage();
        const screenShot = contentImage.toDataURL();
        console.log(screenShot);
        resolve({
          title,
          contentImage,
          url,
        });
      } catch (error) {
        reject(error);
      }
      //nativeImage
    });
  });
};

ipcMain.handle("on-url-event", async (e, url) => {
  const result = await getUrlContent(url);
  return result;
});
