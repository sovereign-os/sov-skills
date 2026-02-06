---
name: ide-sync
description: Enforce global coding standards across different IDEs using .editorconfig and local settings.
version: 1.1.0
author: Sovereign OS Agent
tags: [ide, vscode, editorconfig, git, standard]
---

# 🖥️ IDE Sync

## 1. Core Philosophy (The "Why")
Whitespace wars end here. Regardless of Editor (VSCode, PhpStorm) or OS (Win, Mac, Linux), file formatting must be identical. This prevents Git churn and makes code reviews purely about logic.

## 2. Capabilities & Rules (The "What")

### Rule 1: The Standard Enforcer (.editorconfig)
- **Mandate**: Every project root MUST have a `.editorconfig`.
- **Standards**:
    - `indent_style = space`
    - `end_of_line = lf` (Force Linux LF everywhere).
    - `trim_trailing_whitespace = true`
    - `insert_final_newline = true`

### Rule 2: VSCode Binding
- **Settings**: `.vscode/settings.json` must enforce `editor.formatOnSave: true`.
- **Extensions**: Recommend project-specific extensions (e.g., Intelephense for PHP).

### Rule 3: Line Ending Defender
- **Global Git**: Enforce `core.autocrlf = input` (on Mac/Linux) or `false` (on Windows).
- **Goal**: Prevent Windows CRLF pollution.

## 3. Usage Instructions (The "How")

### Initialization
1.  **Scan**: Check for `.editorconfig` upon project entry.
2.  **Generate**: If missing, create the Gold Standard config.
3.  **Remind**: Suggest user to install recommended extensions.

## 4. Maintenance
- **Update**: If a new file type is added (e.g., `.yml`), update `.editorconfig` indent rules (usually 2 spaces).
