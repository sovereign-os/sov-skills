---
name: dual-sync-commander
description: Enforces mandatory synchronization between Jira tickets and Local Task Management files.
version: 1.1.0
author: Sovereign OS Agent
tags: [jira, synchronization, task-management, workflow]
---

# 🔄 Dual Sync Commander


## 1. Core Philosophy (The "Why")
A Jira comment without a local log is a whisper in the wind. Both systems (Jira & Local) must be identical. Jira is the Stakeholder's view; Local is the Agent's memory.

## 2. When to use this skill
This skill is activated when the task requires Enforces mandatory synchronization between Jira tickets and Local Task Management files..
- Detected when the user's intent matches the semantic domain of 🔄 Dual Sync Commander.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Atomic Update
- **Trigger**: Any Jira update (comment, status, worklog).
- **Action**: Update local task file simultaneously.
- **Format**: Use Smart Links for mentions (`[Name](URL)`).

### Rule 2: Consistency Check
- **Verification**: Before finishing, verify Jira status matches local status.
- **Source of Truth**: Jira wins conflicts.

### Usage Instructions
### Updating Jira
1.  **Draft**: Write comment in chat.
2.  **Approve**: User confirms.
3.  **Post**: Use `addCommentToJiraIssue`.
4.  **Sync**: Update local `YYYY-MM-DD.md`.

## 4. Maintenance
- **Audit**: Weekly check for drift between Jira and Local.

## Agent-Agnostic Execution Layer

This skill supports multi-agent execution through:

- Core guidance in SKILL.md
- Machine contract in skill.contract.json
- Agent adapters in adapters/
- Canonical script entrypoint in scripts/run.sh
