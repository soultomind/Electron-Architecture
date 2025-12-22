const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, data) => ipcRenderer.send(channel, data)
});

const renderTarget = "[RENDER]";
function tartgetRenderConsole(text) {
  console.log(`${renderTarget}: ${text}`);
}

document.addEventListener('DOMContentLoaded', () => {
    tartgetRenderConsole("Document Load!");
});