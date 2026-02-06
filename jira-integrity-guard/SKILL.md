---
name: jira-integrity-guard
description: Zero-tolerance policy for Jira ID mismatch and task hallucination.
version: 1.1.0
author: Sovereign OS Agent
tags: [jira, process, verification, safety]
---

# 🛡️ Jira Integrity Guard (Arbiter Standard)

## 1. Core Philosophy (The "Why")
A wrong ticket number leads to wrong code, wrong billing, and chaos. This skill, while part of the **Arbiter Workspace Registry**, is a **Global Mandate** for the Sovereign Agent. It prevents "False Task" disasters by enforcing a mandatory API Cross-Verification protocol. Trust but Verify.

## 2. Capabilities & Rules (The "What")

### Rule 1: Identification Lock
- **Trigger**: Before creating a branch or writing code.
- **Action**: Call `getJiraIssue(ID)` to fetch live metadata.
- **Verify**: Does Title match intent? Is status `TODO` or `IN PROGRESS`?
- **Branch Validation**: Ensure the branch name strictly follows the pattern `{prefix}/{username}/{JIRA-ID}-{desc}`. If the JIRA ID in the branch name doesn't match the focus task, ABORT.

### Rule 2: Hallucination Guard
- **Source of Truth**: JIRA API Results (via MCP).
- **Forbidden**: Guessing IDs from memory or branch names.
- **Constraint**: If `ASD-100` is "Fix Bug" in Jira but user called it "New Feature", STOP and ASK.

## 3. Usage Instructions (The "How")

### Starting a Task
1.  **User**: "Start 1050".
2.  **Agent**: "Checking Jira..." (Calls `getJiraIssue`).
3.  **Agent**: " > 🛡️ **Integrity Check: ASD-1050**\n > **Summary**: Fix Upload Button\n > **Correct?**"

### Generating Reports
- Always use `getJiraIssue` to populate titles/status in Markdown tables. Never hardcode.

## 4. Maintenance
- **Sync**: If Jira is down, fallback to `[AGENT_ROOT]/data/current-context.json`, but flag as `[OFFLINE]`.
