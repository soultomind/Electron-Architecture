const { app, ipcMain, BrowserWindow } = require("electron");
const path = require('path');

const mainTarget = "[MAIN]";
function tartgetMainConsole(text) {
  console.log(`${mainTarget}: ${text}`);
}

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload:path.join(__dirname, './preload.js'),
      nodeIntegration: true,
    },
  });

  win.loadFile(path.join(__dirname, 'index.html'));

  ipcMain.on('cmd', (event, data) => {
    tartgetMainConsole(`ipcMain.on cmd: ${JSON.stringify(data)}`);
    
    //event.sender.send('cmd', JSON.stringify(data));
    //reply 사용시 보낸 쪽으로 다시 보낸다. (event.sender.send를 래핑함)
    event.reply('cmd', JSON.stringify(data))
  });

  ipcMain.handle('cmd', async (event, payload) => {
    tartgetMainConsole(`ipcMain.handle cmd: ${JSON.stringify(payload)}`);
    return { success: true, payload };
  });

  win.on("closed", () => {
    win = null;
  });
}

//app.on("ready", createWindow);
app.whenReady().then(createWindow);

app.on("window-all-closed", () => { // 모든 창이 닫혔을 때 발생하는 이벤트
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => { // app이 활성화될 때 발생하는 이벤트
  if (win === null) {
    createWindow();
  }

  tartgetMainConsole("createWindow!");
});