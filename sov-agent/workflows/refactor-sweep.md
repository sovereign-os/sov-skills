---
description: Periodic Code Hygiene & Refactoring Sweep
---

# 🧹 Workflow: /refactor-sweep

This workflow performs periodic maintenance on the codebase to prevent technical debt and maintain "Elite Engineering" standards.

## 🛠️ Engaged Skills

- `clean-code-mastery`: For readability and maintainability enforcement.
- `solid-principles-mastery`: To verify class and function responsibilities.
- `legacy-refactor`: For safe, progressive refactoring of aging code.
- `typescript-mastery`: To ensure strict type safety and eliminate `any` usage.

## 🔄 Sequence

1.  **Technical Debt Audit**:
    - Search for "Code Smells" (God Classes, long functions, duplicate logic).
    - Check for type violations or weak typing.

2.  **Safety Verification**:
    - Ensure tests are passing via `test-driven-mastery` or `testing-mastery` before modification.

3.  **Refactoring Execution**:
    - Apply small, safe changes following the "Boy Scout Rule".
    - Standardize naming conventions and directory structures.

4.  **Quality Gate**:
    - Run `quality-gatekeeper` to ensure no linting or build regressions occur.

## 🚀 Usage

Trigger: `/refactor-sweep`
