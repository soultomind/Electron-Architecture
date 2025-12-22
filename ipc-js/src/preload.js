const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, data) => ipcRenderer.send(channel, data),

  on: (channel, callback) => {
  ipcRenderer.on(channel, (event, ...args) => {
    tartgetRenderConsole(
      `ipcRenderer.on → channel="${channel}"`,
      args
    );

    callback(...args);
  });
}
});

const preloadTarget = "[PRELOAD]";
function tartgetRenderConsole(text) {
  console.log(`${preloadTarget}: ${text}`);
}

document.addEventListener('DOMContentLoaded', () => {
    tartgetRenderConsole("Document Load!");
});