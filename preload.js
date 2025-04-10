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

// ----- SEND -------
// // Sender (renderer)
// ipcRenderer.send('save-note', content);

// // Receiver (main)
// ipcMain.on('save-note', (event, content) => {
//   // Handle saving note
// });

// ------- INVOKE -------
// diff between ipcRenderer.invoke and ipcRenderer.send

// // Sender (renderer)
// const response = await ipcRenderer.invoke('chat', messages);

// // Receiver (main)
// ipcMain.handle('chat', async (event, messages) => {
//   // Do something
//   return result;
// });
