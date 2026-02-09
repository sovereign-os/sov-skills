---
description: Automated Code & Hygiene Review for Sovereign OS Project Sanctuary
---

# 🧼 Workflow: /code-review

This workflow audits the physical project directory to ensure it remains a **Sanctuary** (sterile of agent artifacts), enforcing Rule #3 (File Hygiene) and Rule #10 (Governance).

## 🛠️ Engaged Skills

- `security-sentinel`: Ensuring no sensitive agent metadata is leaked into the project.
- `kaizen-log`: Recording hygiene violations to prevent repetition.
- `git-sentinel`: Verifying `.gitignore` protection.

## 🔄 Sequence

1.  **Project Discovery**:
    - Identify current project source path from `current-context.json`.

2.  **Sanctuary Audit**:
    - **Illegal Folders**: Scan for `.agent/` folders within the project root.
    - **Illegal Artifacts**: Scan for task files (`ASD-*.md`), logs (`*_Log.md`), or agent-generated logs (`command_stream.log`, `migration_test.log`).
    - **Metadata Leak**: Check for any JSON files starting with `current-context` or `skill-`.

3.  **Sterilization (The Great Move)**:
    - **Move**: Reposition any found artifacts to `~/.agent/workspaces/[WORKSPACE]/operations/logs/tasks/[PROJECT]/`.
    - **Delete**: Remove the illegal `.agent/` folder from the project source.
    - **Sync**: Verify if the files moved are already tracked in the Workspace Operations.

4.  **Shield Hardening**:
    - Check project's `.gitignore`.
    - Ensure the following are ignored:
      ```gitignore
      .agent/
      data/
      *.log
      ASD-*.md
      *_Log.md
      ```

5.  **Hygiene Report**:
    - Output a summary of moved/deleted items.
    - Declare the project **"STERILE & COMPLIANT"**.

## 🚀 Usage

Trigger: `/code-review`
