---
name: workspace-management-mastery
description: Automated lifecycle management for Sovereign OS workspaces, ensuring uniform structure and elite hygiene.
version: 1.0.0
author: Sovereign OS Agent
tags: [workspace, automation, standardization, hierarchy]
---

# 🏗️ Workspace Management Mastery

This skill ensures that every workspace created within the Sovereign OS ecosystem follows the **Sovereign High-Rise** standard.

## 1. Core Logic (The Scripts)

- **`init-structure.sh`**: Creates the 6-folder hierarchy in the global agent store (`~/.agent/workspaces/[name]`).
- **`link-workspace.sh`**: Creates a symlink in the project root's `workspaces/` folder pointing to the global store.

## 2. The 6-Folder Hierarchy

Every new workspace MUST contain:
1. `registry/` (projects, assets)
2. `operations/` (tasks, logs, history)
3. `brain/` (memory, wisdom)
4. `artifacts/` (specs, verification)
5. `data/` (state, context)
6. `.agent/` (linked engine)

## 3. Usage Guidelines

- Always use the `/init-workspace` workflow to invoke this skill.
- Never manually create root-level folders in a workspace.
- The `workspaces/` folder in the project root is the developer's primary interactive gate.
