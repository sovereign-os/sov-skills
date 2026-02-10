---
name: jira-sync-orchestrator
description: Synchronize task status between Atlassian Jira and local agent documentation.
version: 1.1.0
author: Sovereign OS Agent
tags: [jira, synchronization, reporting, workflow]
---

# 🤖 Jira Sync Orchestrator


## 1. Core Philosophy (The "Why")
This skill bridges the "Single Source of Truth" between Jira (The Organization) and Local Docs (The Agent). Discrepancies lead to confusion.

## 2. When to use this skill
This skill is activated when the task requires Synchronize task status between Atlassian Jira and local agent documentation..
- Detected when the user's intent matches the semantic domain of 🤖 Jira Sync Orchestrator.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Status Reconciliation
- **Fetch**: Use `getJiraIssue(ID)`.
- **Compare**: Check against status in `daily-scrum.md`.
- **Alert**: If stored as `DONE` but Jira says `IN PROGRESS`, flag it.

### Rule 2: Comment Drafting Protocol
- **Tone**: Professional but terse ("Hacker-Hipster").
- **Mention Rule**: NEVER use `[~accountid]`. Use `[Name](URL)` smart links.
- **Approval**: NEVER post without explicit "Proceed".

### Rule 3: Transition Guard
- **Pre-Condition**: Before suggesting "Ready for QA":
    1. PHPCS Clean.
    2. Tests Passed.
    3. `cache:clear` verified.

### Usage Instructions
### Drafting Updates
1.  **Draft**: Write comment in Markdown block.
2.  **Review**: User approves/edits.
3.  **Post**: Use `addCommentToJiraIssue`.

### Progress Checkpoints
- **Trigger**: Merging PR or Unblocking.
- **Action**: Draft comment summarizing resolution.

## 4. Maintenance
- **Sync**: Ensure comments are mirrored in local history (`history/tasks/...`).
