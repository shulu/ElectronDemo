const path = require('path')
const { app, BrowserWindow,ipcMain, webContents } = require('electron')
const WinState = require('electron-win-state').default;


//与原生宽高冲突
const winState = new WinState({
  defaultWidth:800,
  defaultHeight:600
})

const createWindow = () => {
  const win = new BrowserWindow({
    ...winState.winOptions,
    // width: 800,
    // height: 800,
    frame:true,
    show:false,
    //titleBarStyle:'hidden',
    backgroundColor:'#7fffd4',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, './preload.js')
    }
  }
  )
 
  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadFile('./index.html')
  // win.loadURL('https://www.github.com')
  const wc = win.webContents;
  wc.openDevTools({mode:'bottom', activate:true})
  wc.on('did-finish-load', () => {
    console.log('finish')
  })
  wc.on('dom-ready', () => {
    console.log('dom ready')
  })
  wc.on('context-menu', (e, params) => {
    console.log(params)
    wc.executeJavaScript(`alert('${params.selectionText}')`)
  })
  winState.manage(win)

}



app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    app.quit()
  }
  console.log(100)
})
ipcMain.handle('send-event', (e, msg) => {
  console.log(msg)
})
app.whenReady().then(createWindow)
// Attach the required event listeners