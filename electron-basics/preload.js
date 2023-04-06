console.log(process.platform);

const { contextBridge, ipcRenderer, clipboard } = require("electron");

let platform = process.platform;

const handleSend = () => {
  ipcRenderer.invoke("send-event", "hahaha");
};

const copyBoard = () => {
  if (platform == "darwin") {
    clipboard.writeFindText("hello");
  } else {
    clipboard.writeText("hello");
  }
};

const showCopy = () => {
  const text = "";
  if (platform == "darwin") {
    text = clipboard.readFindText();
  } else {
    text = clipboard.readText();
  }
  console.log(text);
};

contextBridge.exposeInMainWorld("myApi", {
  platform: process.platform,
  handleSend,
  copyBoard,
  showCopy,
});
