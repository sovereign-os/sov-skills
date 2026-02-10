---
name: sov-agent
description: The core operating system skill for the Sovereign OS Agent, managing rules, workflows, and standards.
version: 1.2.0
author: Sovereign OS Agent
tags: [core, system, sovereign-os, automation, management]
---

# 🧠 Sovereign Agent Core

## 1. Core Philosophy (The "Why")

The Sovereign Agent is not just a tool, but an autonomous engineering entity. This skill provides the "Kernel" of the agent—its constitution, its procedural workflows, and its engineering standards. It ensures that every action taken by the agent is governed by the Sovereign OS laws.

## 2. When to use this skill

This skill is a **Base Skill** and must be active at all times.

- **System Boot**: Initialized during `/start-os` to establish the operational baseline.
- **Workspace Navigation**: Activated when switching between workspaces or projects to ensure context integrity.
- **Rule Enforcement**: Referenced automatically whenever a Constitutional rule (e.g., Absolute Paths, Zero Assumption) needs to be validated.
- **Workflow Execution**: Used to discover and trigger central slash commands like `/switch`, `/audit`, or `/task-management`.

## 3. How to use it

### Core Components

- **Rules (`/rules`)**: The Sovereign Constitution (`rules.md`). All tools MUST pass through the "Constitutional Filter" before execution.
- **Workflows (`/workflows`)**: Central slash commands that orchestrate complex multi-step processes.
- **Standards (`/standards`)**: ISO/IEC/IEEE compliant engineering and documentation protocols.

### Operating Protocols

1.  **Integrity Check**: Always perform a visual integrity check at the start of interaction.
2.  **Context Loading**: Automatically ingest local rules from `.agent/rules/` when entering a new workspace.
3.  **Path Hygiene**: Enforce the use of absolute paths for all system operations.

## 4. Maintenance

Update the core workflows and rules only via the official `/refactor-sweep` or manual Constitutional amendments approved by the Commander.
