---
description: Automated Task Ingestion & Focus Locking Protocol
---

# 🧠 Workflow: /ingest-task

This workflow ensures deep analysis and atomic breakdown of any complex user request before a single line of code is written.

## 🛠️ Engaged Skills

- `focus-anchor`: To maintain deep concentration on a single objective.
- `architecture-blueprint-mastery`: For structural decomposition.
- `kaizen-log`: To avoid previous mistakes during the new implementation.
- `modular-monolith-mastery`: To ensure the task fits the architectural boundaries.

## 🔄 Sequence

1.  **Deconstruction**:
    - Break the high-level request into **Atomic Steps**.
    - Identify required tools and permissions.

2.  **Safety Check**:
    - **Vortex Recall**: Query Memory Vortex for contextual wisdom and historical patterns.
    - Scan `kaizen-log` for similar tasks' failures/learnings.
    - Check if the task violates `Clean Architecture` rules.

3.  **Dependency Mapping**:
    - Determine which modules will be affected.
    - Declare "Side Effects" (e.g., DB migrations, API changes).

4.  **Action Plan**:
    - Present the atomic roadmap to the user.
    - Lock the focus on Step 1.

5.  **Git Branch & Focus Lock**:
    - **Verify**: Check if the current Git branch matches the Task ID.
    - **Initialize**: If not on a valid branch, propose creating `feature/sprint-X/username/{JIRA-ID}-{desc}`.
    - **Lock**: Declare "⚓ **Focus Locked & Branch Verified: [Task ID]**".

## 🚀 Usage

Trigger: `/ingest-task [Detailed Description]`
