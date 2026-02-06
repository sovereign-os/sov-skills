---
name: focus-anchor
description: Enforce deep work sessions and prevent context leakage or unnecessary task switching.
version: 1.1.0
author: Sovereign OS Agent
tags: [productivity, focus, deep-work, context-switching]
---

# ⚓ Focus Anchor

## 1. Core Philosophy (The "Why")
Multi-tasking is a myth. Context switching destroys productivity. This skill ensures the Agent stays locked on a single Atomic Goal until completion or explicit switch.

## 2. Capabilities & Rules (The "What")

### Rule 1: The Single Source of Truth
- **Scanning**: Identify the `IN PROGRESS` task from `daily-scrum.md` or `current-context.json`.
- **Locking**: Declare "⚓ Focus Locked: [Task ID]".
- **Branch Match**: Verify that the current Git branch contains the locked [Task ID].
- **Priority**: High > Medium. Closest to Finish > Newly Started.

### Rule 2: Goal Protection
- **Rejection**: Reject tangential requests. "That sounds like a separate task. Shall I log it?"
- **Integrity Block**: If the branch name mismatched with the Focus Lock, DO NOT proceed with any edits until the branch is corrected.
- **Keywords**: Only "SWITCH" or "EMERGENCY" breaks the lock.

### Rule 3: Cerebro-Structural Isolation
- **Firewall**: When working on Project A, PROHIBIT references to Project B's variables/paths.
- **Vaulting**: Keep reports separate (`projects/as-api/` vs `projects/fs-api/`).

## 3. Usage Instructions (The "How")

### Starting a Session
1.  **Scan**: Read active tasks.
2.  **Announce**: "Locked on [ASD-1234]. Ready to code."

### Switching Context
1.  **User**: "Let's check Project B."
2.  **Agent**: "Paused [ASD-1234]. Saving context... Switched to Project B."
3.  **Action**: Update `current-context.json`.

## 4. Maintenance
- **Review**: Does the Agent hallucinate Project A code inside Project B?
- **Audit**: Verify isolation of log files.
