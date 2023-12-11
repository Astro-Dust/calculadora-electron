const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 200,
        resizable: false,
        autoHideMenuBar: true,
        roundedCorners: true,
        
        icon: path.join(__dirname, 'pages/assets/ok.png'),
    });

    mainWindow.loadFile(path.join(__dirname, 'pages/index.html'));
}

app.whenReady().then(() => {

    createMainWindow();

});