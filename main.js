const {app, BrowserWindow} = require("electron")
const windowStateKeeper = require('electron-window-state');
const path = require("path")
const Migration = require("./main/migration")

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
            preload: path.join(__dirname, 'preload.js'),
            devTools : true
        }
    })

    const migration = new Migration(app.getPath('userData') + "/brogaib.db")

    // Track Window
    mainWindowStateKeeper.manage(mainWindow)

    // Start Migration first
    migration.up().finally(() => {
        migration.seedInit()
        mainWindow.loadFile('public/index.html')
        mainWindow.openDevTools()
    });
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

