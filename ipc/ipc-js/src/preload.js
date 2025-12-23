const { contextBridge, ipcRenderer } = require('electron');

const preloadTarget = "[PRELOAD]";
function tartgetRenderConsole(text) {
  console.log(`${preloadTarget} ${text}`);
}

contextBridge.exposeInMainWorld('electronAPI', {
  
  /*
  invoke: (channel, data) => {
    return ipcRenderer.invoke(channel, data);
  },
  */
  invoke: function (channel, data) {
    return ipcRenderer.invoke(channel, data);
  },

  /*
  on: (channel, callback) => {
  ipcRenderer.on(channel, (event, ...args) => {
      tartgetRenderConsole(
        `ipcRenderer.on(channel=${channel}, event=${JSON.stringify(event)}, args=${JSON.stringify(args)})`);
      callback(...args);
    });
  },
  */
  on: function (channel, callback) {
  ipcRenderer.on(channel, function (event, ...args) {
      tartgetRenderConsole(
        `ipcRenderer.on(channel=${channel}, event=${JSON.stringify(event)}, args=${JSON.stringify(args)})`);
      callback(...args);
    });
  },

  //send: (channel, data) => ipcRenderer.send(channel, data),
  send: function (channel, data) {
    ipcRenderer.send(channel, data);
  } 
});

document.addEventListener('DOMContentLoaded', () => {
    tartgetRenderConsole("Document Load!");
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // 화면에 실제로 표시됐다고 거의 확신 가능

        tartgetRenderConsole("Document Visible!");

        ipcRenderer.invoke('cmd', 
          { 
            data : {
              message : 'Hello from Preload Process!'
            }            
          });
      })
  });
});

