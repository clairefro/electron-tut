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

// diff between ipcRenderer.invoke and ipcRenderer.send

// ----- SEND -------
// - One-way communication (fire and forget)
// - No return value
// - Asynchronous
// - Good for events that don't need a response

// // Sender (renderer)
// ipcRenderer.send('save-note', content);

// // Receiver (main)
// ipcMain.on('save-note', (event, content) => {
//   // Handle saving note
// });

// ------- INVOKE -------
// - Two-way communication (request/response pattern)
// - Returns a Promise
// - Async/await support
// - Good for ops that need a response

// // Sender (renderer)
// const response = await ipcRenderer.invoke('chat', messages);

// // Receiver (main)
// ipcMain.handle('chat', async (event, messages) => {
//   // Do something
//   return result;
// });
