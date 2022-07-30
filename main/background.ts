import { app, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

import path from 'path';
import fs from 'fs/promises';



const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}


(async () => {
  
  let iconPath = __dirname + 'resources/icon.png';

  await app.whenReady();
  await app.getFileIcon(iconPath, { size: 'normal' });

  // console.log(iconPath);

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    icon:iconPath,
    minWidth: 700,
    minHeight: 700,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
    // mainWindow.setMenuBarVisibility(false)
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
    mainWindow.setMenuBarVisibility(true)
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow('main', {
      width: 1000,
      height: 600,
    });
  }
});
