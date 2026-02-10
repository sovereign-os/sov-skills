---
name: git-sentinel
description: Strict governance for branch management, commit purity, and pre-push audits.
version: 1.1.0
author: Sovereign OS Agent
tags: [git, workflow, safety, auditing]
---

# 🛡️ Git Sentinel


## 1. Core Philosophy (The "Why")
This skill acts as the gatekeeper of the codebase. It enforces strict discipline in version control operations to prevent pipeline pollution, maintain clean history, and prevent "broken builds" from reaching shared branches.

## 2. When to use this skill
This skill is activated when the task requires Strict governance for branch management, commit purity, and pre-push audits..
- Detected when the user's intent matches the semantic domain of 🛡️ Git Sentinel.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: The Pre-Push Audit (Golden Rule)
**NEVER PUSH code until verified and cross-referenced with Workspace Policy.**
Before executing `git push`, you MUST verify:
1.  **Vortex Policy Check [MANDATORY]**: Query the **Memory Vortex** for any workspace-specific push policies (e.g., Arbiter's "No Direct Push to Staging" rule).
2.  **Compilation**: No syntax errors.
3.  **Execution**: Code runs as expected locally.
4.  **Tests**: PHPUnit/Jest pass.
5.  **Hygiene**: Linting (PHPCS/ESLint) is clean.
6.  **Consent**: User confirms "Ready to push".

### Rule 2: Anti-Pollution Protocol (NON-NEGOTIABLE)
**NEVER merge environment branches (`staging`, `master`, `main`, `beta`) into feature branches.**
- **Reason**: Server branches contain mixed code and environment configs. Merging them backwards pollutes feature purity.
- **The Bridge Pattern (Conflict Resolution)**:
    - If a conflict occurs with a server branch (e.g., `staging`), **DO NOT merge it into your feature**.
    - **Step 1**: Checkout a new branch from the server branch: `bridge/<target>-<JIRA-ID>`.
    - **Step 2**: Merge your feature branch into the `bridge` branch.
    - **Step 3**: Resolve conflicts in the `bridge` branch.
    - **Step 4**: Push the `bridge` branch.
- **Enforcement**:
    - Use **Cherry-Pick** for specific commits needed from staging.
    - If merged accidentally: **Hard Reset** immediately.

### Rule 3: Commit Hygiene
- **Granular**: One logical change per commit.
- **Mandatory Jira ID**: Every commit message **MUST** include a valid Jira ID.
- **Format**: Follow the workspace standard. (Arbiter Standard: `JIRA-ID: description`).
    - ✅ `ASD-1234: implement s3 migration`
    - ✅ `feat(auth): add login [ASD-123]` (If non-Arbiter)
    - ❌ `fix critical bug` (REJECTED)

### Rule 4: Branch Strategy
- **Feature**: `feature/sprint-{N}/{username}/{JIRA-ID}-{desc}`
- **Bugfix**: `hotfix/sprint-{N}/{username}/{JIRA-ID}-{desc}`
- **WIP**: Prefix commits with `WIP:` and DO NOT PUSH unless necessary for backup.

### Rule 5: Branch Focus Lock (BFL) [CRITICAL]
- **Mechanism**: Before editing ANY file, the Agent **MUST** verify the current git branch.
- **Verification**: `current_branch` **MUST** contain the Jira ID of the focus-locked task (e.g., from `daily-scrum.md` or `current-context.json`).
- **Enforcement**: If the ID is missing or incorrect (e.g., working on `ASD-123` while branch is `ASD-124`):
    1.  **HALT** all write operations.
    2.  **Report**: "⚠️ **Branch Mismatch!** Active task is `[ID]`, but current branch is `[BranchName]`."
    3.  **Resolve**: Checkout the correct branch or create it before proceeding.
- **Exception**: Emergency hotfixes or "Hacker Speed" (only if explicitly authorized by User).

### Rule 6: Automated Enforcement (Git Hooks)
- **commit-msg Hook**: Rejects any commit where the JIRA ID in the message does not match the JIRA ID in the branch name.
- **pre-push Hook**: Final check for JIRA ID consistency and quality gates (Lint/DI) before pushing to remote.
- **Enforcement**: Never use `--no-verify` to bypass these checks unless it's a confirmed emergency.

### Usage Instructions
### General Workflow
1.  **Start**: Checkout a fresh feature branch from `master`.
2.  **Work**: Edit code -> `git add` -> `git commit`.
3.  **Sync**: `git fetch origin` -> `git merge origin/master` (Receive Only).
4.  **Finish**: Run Pre-Push Audit -> `git push`.

### Handling Conflicts
1.  **With Standard Branches**:
    - `git fetch origin` -> `git merge origin/master`.
2.  **With Server Branches (Staging/Main)**:
    - **Protocol**: Use the **Bridge Pattern** (see Rule 2). 
    - Create `bridge/<server>-<JIRA-ID>` from `<server>`.
    - Merge `<feature>` into `bridge`.
    - Resolve -> Push.

### Exceptions
- **"Hacker Speed"**: If User says "Just push it", bypass audit (Log as technical debt).

