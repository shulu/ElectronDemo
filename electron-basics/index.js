/*
 * @Author: shulu
 * @Date: 2023-04-01 22:56:02
 * @LastEditors: shulu
 * @LastEditTime: 2023-04-07 10:56:42
 * @Description: file content
 * @FilePath: /electron-basics/index.js
 */
const path = require("path");
const {
  app,
  BrowserWindow,
  ipcMain,
  webContents,
  globalShortcut,
  Menu,
} = require("electron");
const mainMenu = require("./mainMenu");
const WinState = require("electron-win-state").default;

const contextMenu = Menu.buildFromTemplate([
  {
    label: "Item 1",
    role: "editMenu",
  },
]);

//与原生宽高冲突
const winState = new WinState({
  defaultWidth: 800,
  defaultHeight: 600,
});

const mainWindow = () => {
  const createTray = require("./tray");
  const win = new BrowserWindow({
    ...winState.winOptions,
    // width: 800,
    // height: 800,
    x: 1600,
    frame: true,
    show: false,
    //titleBarStyle:'hidden',
    backgroundColor: "#7fffd4",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, "./preload.js"),
    },
  });

  win.once("ready-to-show", () => {
    win.show();
  });

  win.loadFile("./index.html");
  // win.loadURL('https://www.github.com')
  const wc = win.webContents;
  wc.openDevTools({ mode: "bottom", activate: true });
  wc.on("did-finish-load", () => {
    console.log("finish");
  });
  wc.on("dom-ready", () => {
    console.log("dom ready");
  });
  wc.on("context-menu", (e, params) => {
    //console.log(params);
    //wc.executeJavaScript(`alert('${params.selectionText}')`);
    contextMenu.popup();
  });

  winState.manage(win);
  globalShortcut.register("CommandOrControl+Y", () => {
    console.log("User press  Y with combination key");
    globalShortcut.unregister("CommandOrControl+Y");
  });
  Menu.setApplicationMenu(
    mainMenu("my message box", (args) => {
      console.log(args);
    })
  );
  createTray(app, win);
};

app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    app.quit();
  }
  console.log(100);
});
ipcMain.handle("send-event", (e, msg) => {
  console.log(msg);
});

app.whenReady().then(mainWindow);

// Attach the required event listeners
