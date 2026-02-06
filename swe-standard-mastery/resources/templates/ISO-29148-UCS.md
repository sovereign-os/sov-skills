# 📋 Use Case Specification: [UCS_ID] (Title)
*Compliant with ISO/IEC/IEEE 29148:2018 (Requirements Engineering)*

| Field | Description |
| :--- | :--- |
| **Use Case ID** | [UCS_ID] |
| **Use Case Name** | [Verb-Noun Phrase, e.g., Migrate Storage Objects] |
| **Realized User Task** | [Detailed description of the user goal achieved] |
| **Initiating Actor** | [Who starts this?] |
| **Participating Actors** | [Other systems/users involved] |
| **Preconditions** | 1. [Condition 1]<br>2. [Condition 2] |
| **Postconditions** | 1. [Specific measurable outcome 1]<br>2. [Specific measurable outcome 2] |

### 📊 UCS UML Models (PlantUML)

#### **Use Case Diagram**
![Use Case Diagram](../../../uml/rendered/[PROJECT]/[TASK-ID]/use-case-diagram.png)

#### **Sequence Diagram (Normal Flow)**
![Sequence Normal](../../../uml/rendered/[PROJECT]/[TASK-ID]/sequence-normal-flow.png)

### 🔄 Flow of Events

| Step | Actor | Action | System Response |
| :--- | :--- | :--- | :--- |
| **Normal Flow** | | | |
| 1 | [Actor] | [Action] | [Response] |
| 2 | System | [Action] | [Response] |

### 🔀 Alternative Flows

#### **[A1: Scenario Name]**
*   **Trigger**: At Step X, [Condition].
*   **Context**: [When does this happen?]
*   **Logic**:
    1.  [Step 1]
    2.  [Step 2]

### ⚠️ Exception Flows

#### **[E1: Scenario Name]**
*   **Trigger**: At Step Y, [Error Condition].
*   **Action**: [Recovery or Failure Action].
