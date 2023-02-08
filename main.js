const { app, BrowserWindow } = require('electron');

const {getExams} = require('./call')

const createWindow = () => {
    const win = new BrowserWindow();
    win.maximize();
    getExams(win)
    win.setBackgroundColor('#2f8a4c');
    win.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();
});
