import { app, ipcMain, BrowserWindow } from 'electron';
import fs from 'fs';
import path from 'path';

const mainTarget = '[MAIN]';
function targetMainConsole(text: string) {
  console.log(`${mainTarget} ${text}`);
}

let win: BrowserWindow | null = null;

function createWindow(): void {
  // Resolve preload and renderer index paths. When compiled, __dirname points
  // to dist/main, so the preload and renderer files live in sibling folders
  // (../preload, ../renderer). Keep fallbacks for other run modes.
  const possiblePreloads = [
    path.join(__dirname, '..', 'preload', 'preload.js'),
    path.join(__dirname, 'preload', 'preload.js'),
  ];
  const preloadPath = possiblePreloads.find((p) => fs.existsSync(p)) || possiblePreloads[0];

  const possibleIndexHtml = [
    path.join(__dirname, '..', 'renderer', 'index.html'),
    path.join(__dirname, 'index.html'),
    path.join(__dirname, '..', '..', 'src', 'renderer', 'index.html'),
  ];
  const indexHtmlPath = possibleIndexHtml.find((p) => fs.existsSync(p)) || possibleIndexHtml[0];

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: preloadPath,
      nodeIntegration: true,
    },
  });

  win.loadFile(indexHtmlPath);

  ipcMain.on('cmd', (event, data) => {
    targetMainConsole(`ipcMain.on cmd: ${JSON.stringify(data)}`);
    // event.reply sends back to the sender
    event.reply('cmd', JSON.stringify(data));
  });

  ipcMain.handle('cmd', async (event, payload) => {
    targetMainConsole(`ipcMain.handle cmd: ${JSON.stringify(payload)}`);
    return { success: true, payload };
  });

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
  targetMainConsole('createWindow!');
});