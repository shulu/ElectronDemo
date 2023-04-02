console.log(process.platform)

const  {contextBridge, ipcRenderer} = require('electron')

const handleSend = () => {
    ipcRenderer.invoke('send-event', 'hahaha')
}

contextBridge.exposeInMainWorld('myapi', {
    platform:process.platform,
    handleSend
})

