---
name: quality-assurance-mastery
description: "A comprehensive protocol for ensuring software quality through rigorous Use Case definition, Test Specification mapping, and Evidence-based Verification."
version: 1.0.0
dependencies:
  - uml-mastery
  - iso-standard-mastery
---

# 🛡️ Quality Assurance Mastery

This skill defines the Sovereign Standard for software quality. It shifts the focus from "Output Oriented" (Does it run?) to "Specification Oriented" (Does it fulfill the contract?).

It is composed of three mandatory pillars:
1.  **Use Case Specification (UCS)**: Defining the "Contract" (Based on **ISO/IEC/IEEE 29148:2018**).
2.  **Test Specification Document (TSD)**: Defining the "Proof" (Based on **ISO/IEC/IEEE 29119-3:2021**).
3.  **Verification Report (VR)**: Providing the "Evidence".

---

## 🏗️ Pillar 1: Use Case Specification (The Contract)

**When to use:** BEFORE implementing a feature or fixing a complex bug.
**Goal:** Define Normal, Alternative, and Exception flows to prevent "Happy Path" coding.

### 📝 Instructions
1.  Analyze the Jira Ticket, Requirements, or existing Code (for refactoring).
2.  Identify the **Actors** (User/System).
3.  Map the **Flow of Events**:
    *   **Normal Flow**: The perfect path used 80% of the time.
    *   **Alternative Flows**: Valid variations (e.g., "Data already exists", "User cancels").
    *   **Exception Flows**: Error states (e.g., "Network timeout", "Validation failed").
4.  Define strict **Pre-conditions** and **Post-conditions**.
5.  **Generate UML Diagrams** (invoke `uml-mastery`):
    *   **Use Case Diagram**: Show actors and their interactions.
    *   **Sequence Diagram**: Visualize Normal Flow and key Alternative Flows.
    *   Save diagrams to `artifacts/uml/[project]/`.

### 📄 Template: `USE_CASE.md`

```markdown
# 📋 Use Case Specification: [Name]

| Field | Description |
| :--- | :--- |
| **Use Case Name** | [Action Verb] + [Noun] (e.g., "Migrate Event Images") |
| **Realized User Task** | High-level goal (e.g., "Move files to S3 and update DB") |
| **Initiating Actor** | Who starts it? (e.g., Admin, Scheduler) |
| **Participating Actors** | Who else is involved? (e.g., System, S3 Service) |
| **Preconditions** | What MUST be true before starting? |
| **Postconditions** | What MUST be true after finishing? |

### 🔄 Flow of Events

| Step | Actor | Action | System Response |
| :--- | :--- | :--- | :--- |
| **Normal Flow** | | | |
| 1 | Actor | Trigger Action | |
| 2 | System | | Validates input |
| ... | ... | ... | ... |

### 🔀 Alternative Flows
*   **[A1: Name]**: At Step X, if [Condition], then [Action].
*   **[A2: Name]**: At Step Y, if [Condition], then [Action].

### ⚠️ Exception Flows
*   **[E1: Name]**: At Step Z, if [Error], system logs error and aborts.
```

---

## 🧪 Pillar 2: Test Specification Document (The Proof)

**When to use:** BEFORE testing (can be drafted in parallel with Implementation).
**Goal:** Translate every Use Case Flow into a verifiable Test Case.

### 📝 Instructions
1.  **Map Flows to Tests**:
    *   Every **Normal Flow** -> Must have at least 1 Positive Test Case.
    *   Every **Alternative Flow** -> Must have at least 1 Positive/Negative Test Case.
    *   Every **Exception Flow** -> Must have at least 1 Negative Test Case.
2.  Define **Test Data**: specific IDs, inputs, or files needed.
3.  Define **Expected Result**: What exactly should happen? (Log message, DB change, UI update).

### 📄 Template: `TSD.md`

```markdown
# 🧪 Test Specification Document (TSD)

**Use Case ID**: [ID]
**Feature**: [Feature Name]

## 1. Test Coverage Strategy
*   **Normal Flows Covered**: [List]
*   **Edge Cases Covered**: [List]

## 2. Test Cases

| ID | Type | Scenario | Steps | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-01** | POS | Normal Flow Execution | 1. ...<br>2. ... | System updates DB. | [ ] |
| **TC-02** | NEG | Exception Flow E1 | 1. ... | System shows Error X. | [ ] |
| **TC-03** | ALT | Alternative Flow A1 | 1. ... | System skips process. | [ ] |
```

---

## 📸 Pillar 3: Verification Report (The Evidence)

**When to use:** AFTER executing tests.
**Goal:** Capture irrefutable proof that the software behaves as specified.

### 📝 Instructions
1.  Execute every Test Case in the TSD.
2.  **Capture Evidence**:
    *   **Logs**: Copy relevant log segments (use `grep`).
    *   **Screenshots**: For UI elements.
    *   **DB Records**: Select query results.
    *   **Terminal Output**: Command execution results.
3.  Mark Pass/Fail in the TSD.
4.  Compile into a Final Report.

### 📄 Template: `VERIFICATION_REPORT.md`

```markdown
# ✅ Verification Report: [Task ID]

**Date**: [YYYY-MM-DD]
**Environment**: [Staging/Production]

## 📊 Summary
*   **Tests Executed**: [N]
*   **Passed**: [N]
*   **Failed**: [N]

## 📝 Detailed Evidence

### 🟢 TC-01: [Scenario Name]
**Status**: PASSED

**Evidence**:
> [Insert Log/Screenshot/Code Block here]

### 🔴 TC-02: [Scenario Name]
**Status**: FAILED
**Observation**: System crashed with Error 500.
**Action Item**: Created Bug Ticket [BUG-123].
```

---

## 🚀 Protocol for Agents

When assigned a Feature or Bug Fix:
1.  **STOP**. Do not code yet.
2.  **READ** this skill.
3.  **CREATE** the Use Case Specification (`USE_CASE.md`) in the task folder.
4.  **CONFIRM** the spec with the user.
5.  **IMPLEMENT** the code.
6.  **CREATE** the TSD and **EXECUTE** verification.
7.  **GENERATE** the Verification Report (`REPORT.md`).
