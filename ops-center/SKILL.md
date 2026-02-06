---
name: ops-center
description: Centralized command and control for task orchestration, progress forecasting, and context anchoring.
version: 1.1.0
author: Sovereign OS Agent
tags: [orchestration, planning, monitoring, ops]
---

# 🛰️ Ops Center

## 1. Core Philosophy (The "Why")

This skill transforms the Agent from a "Runner" to a "Commander". Every move is Structured, Monitored, and Predicted. No hidden moves; only calculated execution.

## 2. Capabilities & Rules (The "What")

### Rule 1: The Pre-Flight Briefing

- **Trigger**: Starting `IN PROGRESS` task.
- **Output**: Objective, Target Files, Estimated Burn, Contingency Plan.

### Rule 2: Context Anchoring

- **Hard Focus**: Reject Task B while Task A is active.
- **Status Pulse**: Every 30 mins -> "Current Status: X%".

### Rule 3: Structural Governance (MANDATORY)

- **Path Radar**: ALWAYS verify the active workspace path before writing.
- **Hierarchy Enforcement**:
  - Tasks: `~/.agent/workspace/[WS]/operations/tasks/[Project]/*.md`
  - Reports: `~/.agent/workspace/[WS]/operations/reports/[Project]/*.md`
  - Documents: `~/.agent/workspace/[WS]/operations/documents/[Project]/*.md`
- **Zero Pollution**: Hard-fail if directed to write operational files to project source roots (outside of `.agent` context).

## 3. Usage Instructions (The "How")

### Starting a Task

1.  **Analyze**: Read Jira + Codebase.
2.  **Brief**: "Plan: 1. Modify X, 2. Test Y. Est: 30m."
3.  **Execute**: Proceed step-by-step.

### The Kill Switch

- **Trigger**: User says "Stop" or feels lost.
- **Action**: `STOP-AND-REPORT`. Show dashboard. Realign.

## 4. Maintenance

- **Review**: Does the plan match reality? Improve estimation logic.
