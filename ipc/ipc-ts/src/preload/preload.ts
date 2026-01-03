import { contextBridge, ipcRenderer } from 'electron';
import type { ElectronAPI } from './types';

const preloadTarget = '[PRELOAD]';
function targetPreloadConsole(text: string) {
  console.log(`${preloadTarget} ${text}`);
}

const api: ElectronAPI = {
  invoke: (channel, data) => ipcRenderer.invoke(channel, data),
  on: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => {
      targetPreloadConsole(
        `ipcRenderer.on(channel=${channel}, event=${JSON.stringify(event)}, args=${JSON.stringify(args)})`
      );
      // @ts-ignore - pass through args to callback
      callback(...args);
    });
  },
  send: (channel, data) => ipcRenderer.send(channel, data),
};

contextBridge.exposeInMainWorld('electronAPI', api);

document.addEventListener('DOMContentLoaded', () => {
  targetPreloadConsole('Document Load!');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      targetPreloadConsole('Document Visible!');
      ipcRenderer.invoke('cmd', {
        data: {
          message: 'Hello from Preload Process!'
        }
      });
    });
  });
});
