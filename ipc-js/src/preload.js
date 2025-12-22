const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, data) => ipcRenderer.send(channel, data)
});

const rendererTarget = "[RENDERER]";
function tartgetRenderConsole(text) {
  console.log(`${rendererTarget}: ${text}`);
}

document.addEventListener('DOMContentLoaded', () => {
    tartgetRenderConsole("Document Load!");
});