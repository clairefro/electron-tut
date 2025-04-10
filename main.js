// auto aupdater once configged: https://www.electronjs.org/docs/latest/tutorial/tutorial-publishing-updating
require("update-electron-app")();

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // expose context bridge via preload
    webPreferences: { preload: path.join(__dirname, "preload.js") },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  // and context bridge handlers before creating window, which are invoked via preload.js (exposed to renderer process)
  ipcMain.handle("ping", () => "pong");

  createWindow();

  // handle macOS app activation - cannot activate until app is ready
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Other OS specific handlers ------

// handle windws and linux window close
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
