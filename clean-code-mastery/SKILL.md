---
name: clean-code-mastery
description: Enterprise-grade coding standards focused on readability, maintainability, and the "Boy Scout Rule".
version: 1.1.0
author: Sovereign OS Agent
tags: [clean-code, refactoring, best-practices, craftsmanship]
---

# ✨ Clean Code Mastery


## 1. Core Philosophy (The "Why")
Code is read much more often than it is written. Therefore, we write for humans first, machines second. Complexity is a bug. We follow the **Boy Scout Rule**: Always leave the campground (codebase) cleaner than you found it.

## 2. When to use this skill
This skill is activated when the task requires Enterprise-grade coding standards focused on readability, maintainability, and the "Boy Scout Rule"..
- Detected when the user's intent matches the semantic domain of ✨ Clean Code Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### When to use this skill
This skill should be active during any coding task, specifically:

- **Feature Implementation**: Ensuring new code is structured correctly from the start.
- **Code Refactoring**: When requested to "fix", "clean", or "refactor" existing logic.
- **Code Review**: When auditing pull requests or providing feedback on code quality.
- **Bug Fixing**: To ensure that the fix doesn't introduce further complexity or technical debt.

### How to use it
### Core Rules (The "What")

#### Rule 1: Meaningful Names

- **Intention-Revealing**: NO `data`, `item`, `temp`, `manager` (unless specific).
- **Structure**:
  - Classes: Nouns (`UserRepo`, `InvoiceFactory`).
  - Functions: Verbs (`calculateTotal`, `fetchUser`).
  - Booleans: Questions (`isActive`, `hasPermission`).

#### Rule 2: Single Responsibility (SRP)

- **Functions**: Do ONE thing. Max 15 lines. Max 2 indentation levels.
- **Extract**: If you need comments to explain a block, extract it to a function named after the comment.

#### Rule 3: Guard Clauses

- **Flatten Logic**: Avoid nested `if/else`. Return early.
  ```php
  // ✅ Good
  if (!$user) return;
  if (!$user->isActive()) return;
  doWork();
  ```

#### Rule 4: No Magic Values

- Use **Constants** or **Enums**. Never hardcode numbers or strings in logic.

### Refactoring Guidelines

1.  **Read**: Understand the function goal.
2.  **Lint**: Run standard linters first.
3.  **Extract**: Identify blocks -> Move to private methods.
4.  **Rename**: Better names for clearer intent.
5.  **Simplify**: Remove dead code, simplify conditionals.

## 4. Maintenance
- **Review**: Does this function signature tell the whole story?
- **Legacy**: Don't refactor the WHOLE file. Refactor only what you touch (Boy Scout).
