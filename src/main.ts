/// <reference path="./../typings/globals/github-electron/index.d.ts" />
/// <reference path="./../typings/globals/node/index.d.ts" />

import * as electron from 'electron';
import {app, globalShortcut, BrowserWindow} from 'electron';

let mainWindow:Electron.BrowserWindow;

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 900,
		show: false
	});

	mainWindow.loadURL(`file://${__dirname}/app/main.html`);
	
	mainWindow.on('ready-to-show', () => {
  		mainWindow.show()
	});

	mainWindow.on("closed", () => {
		mainWindow = null;
	});

});

app.on("will-quit", () => {
	globalShortcut.unregisterAll();
});

app.on("window-all-closed", () => {
	app.quit();
});