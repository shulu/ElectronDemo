const { contextBridge, ipcRenderer, clipboard } = require("electron");

const handleSend = () => {
  ipcRenderer.invoke("send-event", "hahaha");
};

contextBridge.exposeInMainWorld("myAPI", {
  platform: process.platform,
  handleSend,
  readTextFromClipboard: () => clipboard.readText(),
  writeTextToClipboard: (text) => clipboard.writeText(text),
});
