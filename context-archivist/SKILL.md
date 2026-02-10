---
name: context-archivist
description: Automatic reconstruction of project memory and situational awareness.
version: 1.1.0
author: Sovereign OS Agent
tags: [memory, context, logging, situational-awareness]
---

# 📚 Context Archivist


## 1. Core Philosophy (The "Why")
This skill powers **The Oracle**. It ensures the Agent never suffers from amnesia by automatically rebuilding "Sovereign Context" upon boot, switching, or query. Context is King; assumption is the enemy.

## 2. When to use this skill
This skill is activated when the task requires Automatic reconstruction of project memory and situational awareness..
- Detected when the user's intent matches the semantic domain of 📚 Context Archivist.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: The Oracle Handshake (Boot-up)
Upon session start or project switch, MUST scan:
1.  **Vault**: `[AGENT_ROOT]/data/current-context.json` (Immediate state).
2.  **History**: Latest daily logs in `[AGENT_ROOT]/workspace/.../history/tasks/`.
3.  **Git Pulse**: `git log -n 5` (Verify local truth).

### Rule 2: Situational Awareness (The Recap)
Provide a "Memory Flash" when context is vague:
> "Memory Restored: I recall we were working on [Task ID]. The last local commit was [Hash]. Focusing on [Env/Branch]."

### Rule 3: Memory Persistence
- **Auto-Save**: Updates to `current-context.json` happen on every Task Switch or significant Context Change.
- **Log**: Daily work is logged in `history/tasks/YYYY/MM/YYYY-MM-DD.md`.

### Usage Instructions
### Retrieving Context
1.  **Read**: `view_file [AGENT_ROOT]/data/current-context.json` to get Active Tasks & Commit Hash.
2.  **Verify**: Cross-check `lastCommit` with actual `git log`.
3.  **Load**: Read the daily log file for detailed "What I Did" notes.

### Writing Context
1.  On Task Update: Update `activeTasks` array in JSON.
2.  On Commit: Update `lastCommit` and `uncommittedChanges` boolean.

## 4. Maintenance
- **Schema**: Keep `current-context.json` schema rigid (Project, Branch, Tasks).
- **Archival**: Old logs are kept forever as "Project Memory".
