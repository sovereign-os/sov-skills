# 📋 Standard Task Tracking: Summary vs Logging

This document defines how task files (JIRA ID based) should be managed within the Sovereign OS ecosystem to maintain "Focus Locking" and high-level clarity.

---

## 1. The Core Split (Clean Architecture for Tasks)

To prevent task files from becoming cluttered with historical noise, we enforce a strict separation between **State (Summary)** and **History (Progress Log)**.

### A. The Summary File (`/operations/tasks/active/[module]/ASD-XXXX.md`)
- **Focus**: The "What" and the "Now".
- **Primary Content**:
    - YAML Metadata (ID, Status, Assignee, Priority).
    - Executive Summary (High-level goal).
    - Status Checklist (Done/Working).
    - Technical Metrics (Final specs).
    - PR & Report Links.
- **Rule**: NO historical logs or dated notes here. Only a link to the Log file.

### B. The Progress Log (`/operations/logs/tasks/[module]/ASD-XXXX_Log.md`)
- **Focus**: The "How" and the "Then".
- **Primary Content**:
    - Categorized Progress by Date (Descending or Ascending).
    - Conflict resolution details.
    - Specific test failures/fixes encountered.
    - Temporary blockers and "Mental Notes".
- **Rule**: This file captures the "War Story" of the task.

### C. The History Archive (`/operations/history/[module]/ASD-XXXX.md`)
- **Focus**: Long-term memory and "Wisdom".
- **Purpose**: Once a task is SHIPPED/DONE, the summary is moved here.
- **Rule**: This is the final resting place for completed tasks to keep the `active` folder lean.

---

## 2. Directory Structure

```bash
operations/
├── tasks/
│   ├── active/ (Working on it)
│   └── done/   (Verification finished)
├── logs/
│   └── tasks/ (Daily progress story)
└── history/ (Archived wisdom for permanent reference)
```

---

## 3. The Lifecycle
1.  **START**: Create `Summary` in `tasks/active` and `Log` in `logs/tasks`.
2.  **WORK**: Update `Log` daily. Keep `Summary` status correct.
3.  **FINISH**: Submit PR + Delivery Report.
4.  **ARCHIVE**: Move `Summary` to `history/` and delete from `active/`. The `Log` can stay in `logs/tasks` or be merged into history.
