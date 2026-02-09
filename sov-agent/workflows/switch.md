---
description: Unified Switching Protocol (Workspace, Project, Context)
---

# 🧠 Workflow: /switch

This workflow handles all context transitions within the Sovereign OS ecosystem.

## 1. Project/Context Switch (`/switch [project]`)

1. **💾 Memory Dump**: Save current task state and cursor position to `current-context.json`.
2. **🔄 Env Binding**: Detect infrastructure (Docker/Local) and load environment maps.
3. **📂 Dynamic Loading**:
   - Parse `tags` from the project manifest in Registry.
   - **Auto-Load Skills**: Activate relevant skills based on `skill-map.json`.
   - Update `current-context.json` with the new project path and active skills.
4. **⚓ Focus Reset**: Set `focus-anchor` to READY.

## 2. Workspace Switch (`/switch-workspace [workspace]`)

1. **💾 State Save**: Save progress in the current workspace.
2. **📂 Layer Rescan**:
   - Reload Global `rules.md`.
   - Scan Workspace-specific rules/skills/workflows.
   - Update `active-workspace.txt`.
3. **📜 Contract Renewal**: Output the Mandatory Allegiance Declaration.

## ⚡ Commands

```bash
# Switch Project
/home/puterakahfi/.agent/scripts/switch-context.sh "{project}"

# Switch Workspace
/home/puterakahfi/.agent/scripts/switch-workspace.sh "{workspace}"
```
