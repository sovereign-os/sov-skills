---
name: jira-workflow-mastery
description: Unified Jira workflow management (Integrity, Sync, Dual-Sync).
version: 1.0.0
author: Sovereign OS Agent
tags: [jira, workflow, synchronization, integrity, task-management]
---

# 🔄 Jira Workflow Mastery

## 1. Core Philosophy (The "Why")
This skill consolidates all Jira operations: Integrity checks, synchronization with local tasks, and dual-sync protocols. One skill to rule all Jira interactions.

## 2. Capabilities & Rules (The "What")

### Rule 1: Integrity Guard (Zero Hallucination)
- **Verification**: Always call `getJiraIssue(ID)` before working.
- **Forbidden**: Guessing IDs from memory or branch names.

### Rule 2: Sync Orchestrator
- **Status Reconciliation**: Jira status MUST match local task status.
- **Comment Protocol**: Use the **[JIRA Communication Standard](../../workspace/arbiter/registry/standards/JIRA_COMMUNICATION_STANDARD.md)** for all technical deliveries. Draft -> Approve -> Post -> Log locally.

### Rule 3: Dual-Sync Commander
- **Atomic Update**: Every Jira update triggers local log update.
- **Consistency**: Weekly audit for drift.

## 3. Usage Instructions (The "How")

### Starting a Task
1.  **Verify**: `getJiraIssue('ASD-1234')`.
2.  **Lock**: Update `current-context.json`.
3.  **Work**: Code changes.
4.  **Sync**: Comment to Jira + Update local `YYYY-MM-DD.md`.

## 4. Maintenance
- **Audit**: Check for tasks marked DONE in local but IN PROGRESS in Jira.
