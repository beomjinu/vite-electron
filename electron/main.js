const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev")

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })
    
    const url = isDev
                ? "http://localhost:5173/"
                : `file://${path.join(__dirname, '../dist/index.html')}`;

    win.loadURL(url);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})
