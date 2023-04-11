const { contextBridge, ipcRenderer } = require("electron");

const sendUrl = (url) => {
  //66console.log(url);
  const result = ipcRenderer.invoke("on-url-event", url);
  return result;
};

contextBridge.exposeInMainWorld("mainApi", {
  sendUrl,
});
