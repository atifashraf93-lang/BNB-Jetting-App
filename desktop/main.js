const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');
function createWindow() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({
    width: 1100, height: 850, minWidth: 420, minHeight: 600,
    title: 'BNB Jetting Pressure Calculator', icon: path.join(__dirname, 'icon.png'),
    backgroundColor: '#0b1f3a', autoHideMenuBar: true
  });
  w.loadFile(path.join(__dirname, 'index.html'));
  w.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  w.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('file:')) { e.preventDefault(); shell.openExternal(url); } });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
