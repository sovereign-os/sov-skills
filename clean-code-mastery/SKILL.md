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

## 2. Capabilities & Rules (The "What")

### Rule 1: Meaningful Names
- **Intention-Revealing**: NO `data`, `item`, `temp`, `manager` (unless specific).
- **Structure**:
    - Classes: Nouns (`UserRepo`, `InvoiceFactory`).
    - Functions: Verbs (`calculateTotal`, `fetchUser`).
    - Booleans: Questions (`isActive`, `hasPermission`).

### Rule 2: Single Responsibility (SRP)
- **Functions**: Do ONE thing. Max 15 lines. Max 2 indentation levels.
- **Extract**: If you need comments to explain a block, extract it to a function named after the comment.

### Rule 3: Guard Clauses
- **Flatten Logic**: Avoid nested `if/else`. Return early.
  ```php
  // ✅ Good
  if (!$user) return;
  if (!$user->isActive()) return;
  doWork();
  ```

### Rule 4: No Magic Values
- Use **Constants** or **Enums**. Never hardcode numbers or strings in logic.

## 3. Usage Instructions (The "How")

### Usage in Refactoring
1.  **Read**: Understand the function goal.
2.  **Lint**: Run standard linters first.
3.  **Extract**: Identify blocks -> Move to private methods.
4.  **Rename**: Better names for clearer intent.
5.  **Simplify**: Remove dead code, simplify conditionals.

## 4. Maintenance
- **Review**: Does this function signature tell the whole story?
- **Legacy**: Don't refactor the WHOLE file. Refactor only what you touch (Boy Scout).
