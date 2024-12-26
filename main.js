const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Preload script
            contextIsolation: true,                    // Security: Isolate context
            webviewTag: true,                          // Enable webview
        },
    });

    mainWindow.loadFile('index.html'); // Load the frontend HTML
});
