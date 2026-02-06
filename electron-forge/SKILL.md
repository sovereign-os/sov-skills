---
name: electron-forge
description: Best practices for secure, performant, and cross-platform Electron development.
version: 1.1.0
author: Sovereign OS Agent
tags: [electron, desktop, ipc, security, node]
---

# ⚛️ Electron Forge

## 1. Core Philosophy (The "Why")
Electron bridges Web and Native OS. It is inherently risky (Node in Browser). We prioritize **Isolation** and **Performance**. The Browser is the UI; Node is the Backend. Keep them separated.

## 2. Capabilities & Rules (The "What")

### Rule 1: IPC Security
- **Context Isolation**: `contextIsolation: true` is MANDATORY.
- **Node Integration**: `nodeIntegration: false` in Renderer.
- **Protocol**: Use `ipcMain.handle` (Two-way) or `ipcMain.on` (One-way). NEVER use the `remote` module.
- **Preload**: Expose ONLY safe APIs via `contextBridge`.

### Rule 2: Performance
- **Lazy Loading**: `require()` heavy modules inside handlers, not at top-level.
- **Singleton**: `app.requestSingleInstanceLock()` to prevent multi-window chaos.
- **Resources**: Unsubscribe listeners on window close to leak memory.

### Rule 3: Distribution
- **Builder**: Use `electron-builder`.
- **Signing**: Code signing is mandatory for Prod (Win/Mac).

## 3. Usage Instructions (The "How")

### Secure Communication Channel
1.  **Main**: `ipcMain.handle('get-user', ...)`
2.  **Preload**: `contextBridge.exposeInMainWorld('api', { getUser: () => ipcRenderer.invoke('get-user') })`
3.  **Renderer**: `await window.api.getUser()`

## 4. Maintenance
- **Audit**: Scan `package.json` for vulnerable dependencies.
- **Update**: Electron versions deprecate fast. Keep up.
