// import { contextBridge, ipcRenderer } from 'electron';
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {});
