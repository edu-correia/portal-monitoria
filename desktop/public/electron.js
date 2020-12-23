const {app, BrowserWindow, Menu} = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ 
        minWidth: 760, 
        minHeight: 600
    });

    mainWindow.maximize();

    
    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
        );
        
        
    if(!isDev) {
        Menu.setApplicationMenu(Menu.buildFromTemplate([{ label: '' }]))
    
        mainWindow.webContents.once('did-finish-load', () => {
            Menu.setApplicationMenu(null)
    
            setTimeout(() => {
            const menu = Menu.buildFromTemplate([{ label: 'File' }])
            Menu.setApplicationMenu(menu)
            Menu.setApplicationMenu(null)
            }, 500)
        })
    }


    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});