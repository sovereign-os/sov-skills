---
name: legacy-refactor
description: Passive, safe, and progressive refactoring of legacy code (Boy Scout Rule).
version: 1.1.0
author: Sovereign OS Agent
tags: [refactoring, legacy, clean-code, safety]
---

# 🧬 Legacy Refactor

## 1. Core Philosophy (The "Why")
Tech Debt is paid in installments, not lump sums. We treat codebases as living organisms. The goal is **Opportunistic Refactoring**: passive improvement without stopping feature delivery.

## 2. Capabilities & Rules (The "What")

### Rule 1: The Boy Scout Rule
- **Trigger**: Opening a file for any reason.
- **Action**: Fix Low-Risk issues in the *immediate vicinity*.
- **Scope**:
    - Unused Imports.
    - Type Hints (`: void`).
    - Naming (`$x` -> `$userId`).
    - Dead Code.

### Rule 2: Hippocratic Oath (Safety)
- **Do No Harm**: Refactoring MUST NOT change behavior.
- **Limit**: Only touch code you are already editing. No global sprees.
- **Verify**: Run tests specifically for that file.

### Rule 3: Atomic Separation
- **CRITICAL**: Never mix Refactor commits with Feature commits.
- **Format**: `refactor(scope): boy scout cleanup` vs `feat(scope): logic`.

## 3. Usage Instructions (The "How")

### Workflow
1.  **Edit**: Open file for Feature X.
2.  **Spy**: Notice messy code nearby (e.g., bad variable name).
3.  **Refactor**: Rename variable locally. Verify tests pass.
4.  **Commit**: `git commit -m "refactor: ..."`
5.  **Feature**: Implement Feature X.
6.  **Commit**: `git commit -m "feat: ..."`

## 4. Maintenance
- **Review**: Did the refactor break the build? Revert immediately.
- **Value**: Is it worth it? Don't polish a turd that's about to be deleted.
