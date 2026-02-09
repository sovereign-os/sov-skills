---
description: Context Cleaning & Memory Defragmentation
---

# 🧹 Workflow: /context-gc

This workflow optimizes the agent's context window by archiving finished tasks and cleaning up system noise.

## 🛠️ Engaged Skills

- `context-archivist`: For automatic reconstruction of project memory and situational awareness.
- `ops-center`: For centralized task orchestration and context anchoring.
- `kaizen-log`: To capture wisdom from completed cycles.

## 🔄 Sequence

1.  **Task Audit**:
    - Scan local task logs (Jira/Markdown).
    - Identify tasks marked as `DONE` or `ARCHIVED`.

2.  **Memorialization**:
    - Summarize major achievements into a `.memorial` file in the current workspace.
    - Extract "Lessons Learned" into `kaizen-log`.

3.  **Workspace Cleanup**:
    - Clear dangling terminal processes.
    - Remove temporary logs or build artifacts (respecting `.gitignore`).

4.  **Context Reset**:
    - Acknowledge the clean slate and reload current "Active Objectives".

## 🚀 Usage

Trigger: `/context-gc`
