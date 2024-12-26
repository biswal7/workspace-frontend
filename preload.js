const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    openURL: (url) => {
        window.location.href = url; // Navigate to the given URL
    },
});
