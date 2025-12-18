const { app, BrowserWindow } = require("electron");
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile(path.join(__dirname, 'index.html'));

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
});