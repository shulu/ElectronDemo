/*
 * @Author: shulu
 * @Date: 2023-04-07 14:31:24
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-07 16:22:22
 * @Description: file content
 * @FilePath: /readit/main.js
 */
const { app, BrowserWindow } = require("electron");
const path = require("path");
const WinState = require("electron-win-state").default;

const createWindow = () => {
  const winState = new WinState({
    defaultWidth: 1000,
    defaultHeight: 800,
  });
  const mainWindow = new BrowserWindow({
    ...winState.winOptions,
    webPreferences: {
      preload: path.resolve(__dirname, "./preload/index.js"),
    },
    show: false,
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.on("close", () => {
    winState.saveState(mainWindow);
  });
  mainWindow.loadURL("http://localhost:5173/");
  mainWindow.webContents.openDevTools({ mode: "right", activate: true });
  winState.manage(mainWindow);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
