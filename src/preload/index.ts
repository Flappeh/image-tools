import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
    getSourceList: () => ipcRenderer.invoke('select-source'),
    saveRecordedData: async (path: string, e: Buffer) =>
        await ipcRenderer.invoke('saveVideoFile', { filepath: path, buffer: e }),
    showSaveDialog: () => ipcRenderer.invoke('showSaveDialog'),
    showInputDialog: () => ipcRenderer.invoke('showInputDialog')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', electronAPI)
        contextBridge.exposeInMainWorld('api', api)
    } catch (error) {
        console.error(error)
    }
} else {
    // @ts-ignore (define in dts)
    window.electron = electronAPI
    // @ts-ignore (define in dts)
    window.api = api
}
