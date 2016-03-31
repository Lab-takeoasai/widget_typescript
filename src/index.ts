/// <reference path="../typings/main.d.ts" />
"use strict";

import * as Electron from "electron";
const app = Electron.app;

let mainWindow: Electron.BrowserWindow = null;



app.on("ready", () => {
    // const htmlPath = "file://" + app.getPath("appData") + "/index.html";
    const htmlPath = "http://www.google.com/";
    mainWindow = new Electron.BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(htmlPath);

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

});