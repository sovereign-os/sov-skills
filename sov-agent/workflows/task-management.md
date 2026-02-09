---
description: Workflow for Managing and Updating Daily/Weekly Tasks
---

# 📋 Task Management Workflow

This workflow defines how to track progress using a **One File Per Task** strategy in the Agent Workspace.

**Path Template**: `.agent/workspaces/[WORKSPACE_NAME]/operations/tasks/[PROJECT_NAME]/`

## 1. Starting a Task

1.  **Check Jira**: Verify ticket details.
2.  **Create Task File**:
    - Create a new `{ID}-{slug}.md` file in the project task folder.
    - **MUST** include YAML frontmatter.
    - Template:
      ```markdown
      ---
      id: [ID]
      status: [IN_PROGRESS | DONE | TODO]
      title: [Title]
      priority: [LOW | MEDIUM | HIGH | CRITICAL]
      assignee: [Name]
      created_at: [YYYY-MM-DD]
      tags: []
      ---
      ```
3.  **Create Branch**: Follow `git_flow.md` to create the correct feature branch.

## 2. Planning & Approval (The "Stop-Ngide" Gate)

If a task is initialized in `PLAN` status:

1.  **Draft Implementation Plan**: Outline the steps, files, and architecture.
2.  **STOP**: Do NOT proceed with implementation.
3.  **Wait for User Signal**: You MUST receive explicit approval (e.g., "Lanjut bang", "Gas", "Approved") before changing status to `IN_PROGRESS` and starting coding.
4.  **No Exceptions**: Proceeding without approval while in `PLAN` is a violation of the Constitution.

## 2. Daily Status Update (Start of Day / End of Day)

1.  **Reflect**: Review work done yesterday and plan for today.
2.  **Update Daily Log**:
    - Use `/update-scrum` to generate or update the current day's log.
    - Ensure "What I Did Yesterday" and "What I Am Doing Today" are accurate.
    - Update "Active Tasks" table (Status, %, Next Steps).
3.  **Sync `MISSION_CONTROL.md`** (Optional/High-Level):
    - Ensure the "Weekly Goals" alignment.

## 3. Completing a Task / Milestone

1.  **Update Daily Log**:
    - Update active task status (e.g., `CODE REVIEW`, `DONE`) in the current day's file.
    - Add relevant PR links if applicable.
2.  **Update `Weekly Report`** (`[AGENT_ROOT]/reports/weekly/...`):
    - Add a new entry for the current day.
    - Summarize the completed key items.
    - Format: `### [Task Name] (Status)` followed by bullet points of actions.

## 4. Weekly Review (End of Week)

1.  **Consolidate**: Ensure `Weekly Report` captures all major events from `SCRUM_DAILY.md`.
2.  **Clean Up**: Archive closed tasks in `SCRUM_DAILY.md` (remove them from the active table for the next week's start, or keep until Monday reset).
