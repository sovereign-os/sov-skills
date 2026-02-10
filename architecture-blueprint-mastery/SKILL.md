---
name: architecture-blueprint-mastery
description: High-fidelity Technical Design & Discovery protocol for structured task planning.
version: 1.0.0
author: Sovereign OS Agent
tags: [architecture, planning, design, blueprint, technical-analysis]
---

# 📐 Architecture Blueprint Mastery


## 1. Core Philosophy (The "Why")
This skill prevents "Impulsive Coding" by enforcing a systematic analysis phase before implementation. It ensures every change is intentional, optimized, and architecturally sound.

## 2. When to use this skill
This skill is activated when the task requires High-fidelity Technical Design & Discovery protocol for structured task planning..
- Detected when the user's intent matches the semantic domain of 📐 Architecture Blueprint Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: The Pre-Flight Discovery (The Handshake)
Before writing any implementation code, you MUST generate a **Blueprint Proposal**.
- **Vortex Recall [MANDATORY]**: You MUST query the **Memory Vortex** (Qdrant) to retrieve historical patterns or wisdom related to the task. 
- **Classification**: Identify if the task is a `BUG`, `FEATURE`, `IMPROVEMENT`, or `REFACTOR`.
- **System Scan**: Run `grep` or `find` to discover existing patterns related to the task.
- **Dependency Map**: Identify which components, services, or databases will be affected.

### Rule 2: Optimization First
You are NOT allowed to just "fix it". You must "improve it".
- Check for better standards (e.g., UUID5 instead of UUID4, Structured Logs instead of Raw Strings).
- Look for redundant logic that can be simplified.
- Ensure the solution follows **SOLID** and **Clean Architecture**.

### Rule 3: Constraint Identification
- **Backward Compatibility**: Will this break existing users or APIs?
- **Performance Impact**: Will this slow down the application?
- **Security Implications**: Does this touch sensitive data or authentication?

### Usage Instructions
### 3.1 The Blueprint Template
When a new ticket is received, generate a report with this structure:

1.  **Ticket Analysis**:
    - **ID**: [Jira-ID]
    - **Type**: [BUG/FIX/FEAT/IMPR]
    - **Context**: Summary of the current situation.
2.  **Discovery Phase**:
    - **Historical Wisdom (Vortex Recall)**: What did we learn from similar tasks in the past? (Retrieved from Memory Vortex).
    - **Existing Pattern**: How is it handled now?
    - **Bottlenecks**: What is wrong with the current way?
3.  **The Optimization Proposal**:
    - **Core Strategy**: The "Big Idea" (e.g., "Implement Deterministic UUID5").
    - **Technical Details**: Specific classes/interfaces to modify.
    - **Why?**: Rationale for the chosen approach.
4.  **Impact List**:
    - List of Files/Services to be modified.
5.  **Verification Plan**:
    - How will we know it works? (Unit tests, Integration tests, Manual check).

## 4. Maintenance
- Save Blueprints to `[current_workspace]/documents/planning/[JIRA_ID].md`.
- Reference the Blueprint in the Daily Scrum report.
