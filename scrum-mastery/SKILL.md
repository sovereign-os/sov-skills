---
name: scrum-mastery
description: Advanced Scrum governance, artifacts management, and strict Definition of Done (DOD).
version: 1.2.0
author: Sovereign OS Agent
tags: [scrum, reporting, productivity, agile]
---

# 🏟️ Scrum Mastery


## 1. Core Philosophy (The "Why")
This skill enforces the official Scrum framework to ensure transparency, inspection, and adaptation. It transforms chaos into structured Increments.

### The 5 Scrum Values
1.  **Commitment**: Dedication to the Goal.
2.  **Focus**: Zeroing in on the Backlog.
3.  **Openness**: Radical transparency.
4.  **Respect**: Acknowledging standards (DOD).
5.  **Courage**: Speaking up about impediments.

## 2. When to use this skill
This skill is activated when the task requires Advanced Scrum governance, artifacts management, and strict Definition of Done (DOD)..
- Detected when the user's intent matches the semantic domain of 🏟️ Scrum Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Zero Hallucination Policy
- **Sprint ID**: NEVER guess. Check `[AGENT_ROOT]/data/current-context.json`.
- **Project Names**: Exact JIRA keys (e.g., `AS-API`, `AS-CORE`).
- **Language**: **ENGLISH ONLY**.

### Rule 2: Definition of Done (DOD) - The Increment
A Task is **DONE** only when:
1.  **Purity**: Clean Code (SOLID, PSR-12).
2.  **Validation**: Tests passed locally.
3.  **Resilience**: Cache cleared & Docker verified.
4.  **Review**: PR Approved & Merged.
5.  **Deployment**: Functional on Staging.

### Rule 3: Report Sorting Algorithm
Tasks in the report MUST be sorted by logic:
1.  **Group 1**: ⟳ **IN PROGRESS** (Priority: ▲ High -> ● Medium)
2.  **Group 2**: ○ **TODO**
3.  **Group 3**: ⏸ **HOLD / PAUSED** (Bottom)
4.  **Group 4**: ✔ **DONE** (Optional/Archived)

### Usage Instructions
### 3.1 Daily Scrum Report Structure
When generating/updating `YYYY-MM-DD.md`, follow this EXACT structure:

1.  **Header**: `🎙️ Daily Scrum Update | Date | Sprint | Name | Role | Confidence`
2.  **Active Tasks Table**:
    - `Jira ID` (Link)
    - `Project` (List ALL affected projects, e.g., "AS-API, PUBLIC")
    - `Task` (Description)
    - `Status` (⟳, ✔, ○, ⏸)
    - `Priority` (▲, ●, ▽)
    - `%` (Progress)
    - `Target Env`
    - `Next Steps`
3.  **What I Did Yesterday**: High-level accomplishments.
4.  **What I Am Doing Today**: Specific activities broken by Team (AS/FS).
5.  **Infrastructure Health**: Docker, Redis, Git Sentinel status.
6.  **Impediments**: Blockers (with time-to-escalate).
7.  **Pull Requests**: List of active PRs.
8.  **Questions**: Discussion points.

### 3.2 Impediment Management
- **Identify**: Flag blockers immediately.
- **Escalate**: If blocked > 4 hours, report in next Handshake.
- **Categorize**: Infra vs Data vs Logic.

## 4. Maintenance
- **Sprint Backlog**: Tasks `IN PROGRESS` or `TODO`.
- **Product Backlog**: All Jira issues mapped.
- **Increment**: Cumulative value of `DONE` tasks.
