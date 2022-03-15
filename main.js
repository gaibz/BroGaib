const {app, BrowserWindow} = require("electron")
const windowStateKeeper = require('electron-window-state');
const path = require("path")

function createWindow() {
    // Get window state
    const mainWindowStateKeeper = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 800
    });

    const mainWindow = new BrowserWindow({
        x: mainWindowStateKeeper.x,
        y: mainWindowStateKeeper.y,
        width: mainWindowStateKeeper.width,
        height: mainWindowStateKeeper.height,
        title: "BroGaib",
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // Track Window
    mainWindowStateKeeper.manage(mainWindow)


    mainWindow.loadFile('index.html')
}

/**
 * Initialize
 */
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

/**
 * Deinitialize
 */
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})

