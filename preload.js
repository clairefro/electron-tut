const { contextBridge, ipcRenderer } = require("electron");

// code that runs before your web page is loaded into the browser window

// can expose almost anything here (vars, etc), not just functions
contextBridge.exposeInMainWorld("deai", {
  versions: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
  },
  ping: () => ipcRenderer.invoke("ping"),
});
