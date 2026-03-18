---
name: swe-standard-mastery
description: "High-fidelity governance for Software Engineering documentation based on the latest ISO/IEC/IEEE international standards."
version: 1.0.0
---

# 📚 Software Engineering Standards Mastery

This skill establishes software engineering documentation governance compliant with the latest international standards. This skill must be used as the primary reference when creating UCS, TSD, and Verification Reports.


## 2. When to use this skill
This skill is activated when the task requires High-fidelity governance for Software Engineering documentation based on the latest ISO/IEC/IEEE international standards..
- Detected when the user's intent matches the semantic domain of 📚 Software Engineering Standards Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### 🏛️ Core Standards Reference
### 1. ISO/IEC/IEEE 29148:2018 (Requirements Engineering)
Supersedes IEEE 830. This standard governs how requirements are defined with precision.
- **UCS Application**: Must define *Pre-conditions*, *Post-conditions*, and atomic *Flow of Events*.
- **Characteristics**: Requirements must be *Verifiable*, *Unambiguous*, and *Traceable*.

### 2. ISO/IEC/IEEE 29119-3:2021 (Software Testing Documentation)
The current active gold standard for test documentation (Replacing ISO/IEC/IEEE 29119-3:2013 & IEEE 829).
- **TSD Application**: Must include *Test Case Specification* covering Context, Inputs, and strict *Expected Results* vs *Actual Results*.
- **Verification Criteria**: Test results must have physical *Evidence* traceable back to the original requirement (*Traceability*).


### 3. ISO/IEC/IEEE 12207:2017 (Software Life Cycle Processes)
Governs the software life cycle from concept to retirement.
- **Process Application**: Every code change must pass through a documented technical verification gate.

### 🏛️ Latest & Emerging Standards
### 4. IEEE 1012-2024 (System, Software, and Hardware Verification and Validation)
Released in 2024, this standard refines V&V processes across high-integrity systems.
- **V&V Application**: Critical for verifying *System Integrity* and valid *User Needs* satisfaction.

### 5. ISO/IEC/IEEE 29119-5:2024 (Keyword-Driven Testing)
New standard (Dec 2024) for modular, keyword-driven test specifications.
- **Automation Strategy**: Encourages modular test case descriptions for scalable automation frameworks.

### 6. ISO/IEC/IEEE 14764:2014 (Software Maintenance)
Specifically details the **Maintenance Process** defined in **ISO/IEC/IEEE 12207**.
- **IAR Application**: Critical for analyzing the impact of infrastructure, library, or version upgrades before execution to ensure lifecycle continuity.

### 📋 Document Structure Protocols

All technical documentation MUST follow the **Date-Prefix** naming convention: `[YYYY-MM-DD]_[TASK_ID]_[DocType].md`.

### A. Use Case Specification (UCS) Protocol
**Template**: `resources/templates/ISO-29148-UCS.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_UCS.md`
Every UCS must include:
1. **Identification**: Unique ID and Verb-Noun based naming.
2. **Context**: Clear Pre/Post Conditions.
3. **Operational Flows**: Detailed Normal, Alternative, and Exception flows.

### B. Test Specification Document (TSD) Protocol
**Template**: `resources/templates/ISO-29119-TSD.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_TSD.md`
Every TSD must include:
1. **Traceability Matrix (RTM)**: Mapping Requirements to Tests.
2. **Technical Verification Criteria**: Success definition at the database/system state level.
3. **Data Evidence Requirement**: Mandatory attachment of real logs or data snapshots.

### C. Software Architecture Document (SAD) Protocol
**Template**: `resources/templates/ISO-42010-SAD.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_SAD.md`
Describes the software architecture from multiple viewpoints.

### D. Software Verification and Validation Plan (SVVP) Protocol
**Template**: `resources/templates/IEEE-1012-SVVP.md` (Plan)  
**Template**: `resources/templates/IEEE-1012-SVVR.md` (Report/Results)  
**Filename (Report)**: `[YYYY-MM-DD]_[TASK_ID]_[BRANCH_SLUG]_TestReport.md`
Defines the scope, tasks, and final reporting for V&V activities.
- **Mandatory Metadata**: Task ID, Project, Branch, Date, Status.
- **Optional Metadata**: Verifier (assigned human engineer), Reviewer, Environment Details.
- **Zero Improvisation Rule**: Do NOT add extra metadata fields (like agent names) unless explicitly commanded by the user. "Ngide" (improvisation) in documentation is strictly forbidden.

### E. Software Configuration Management Plan (SCMP) Protocol
**Template**: `resources/templates/IEEE-828-SCMP.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_SCMP.md`
Establishes rules for version control and change management.

### F. Software Design Description (SDD) Protocol
**Template**: `resources/templates/IEEE-1016-SDD.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_SDD.md`
Details the system design, data structures, and component interfaces.

### G. Software Requirements Specification (SRS) Protocol
**Template**: `resources/templates/IEEE-830-SRS.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_SRS.md`
Defines the functional and non-functional requirements.

### H. Software Project Management Plan (SPMP) Protocol
**Template**: `resources/templates/IEEE-1058-SPMP.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_SPMP.md`
Outlines the project plan, schedule, and resources.

### I. Software Quality Assurance Plan (SQAP) Protocol
**Template**: `resources/templates/IEEE-730-SQAP.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_SQAP.md`
Defines the SQA activities, reviews, and audits.

### J. User Documentation Protocol
**Template**: `resources/templates/ISO-26514-USER-DOC.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_USER-DOC.md`
Standard structure for user manuals and guides.

### K. Impact Analysis Report (IAR) Protocol
**Template**: `resources/templates/ISO-14764-IAR.md`  
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_IAR.md`
Standard structure for analyzing the impact of upgrades or significant changes.

### 🚀 Integration Rules
- Always include the standard version used at the beginning of the document.
- **Naming Rule**: Documentation filenames MUST start with the current date in `YYYY-MM-DD` format to prevent overwrites and ensure chronological sorting.
- Use precise technical language (avoid ambiguous words like "fast", "easy", "some").
- Every verification result must have a direct link to the original *Requirement ID*.

### 💡 Reference Examples
*See `resources/examples/` for full content.*
- **UCS Example**: `resources/examples/EXAMPLE-UCS-Login.md` (Authentication Flow)
- **TSD Example**: `resources/examples/EXAMPLE-TSD-Search.md` (Search API Verification)
- **SVVR Example**: `resources/examples/EXAMPLE-SVVR-Payment.md` (Payment Gateway Report)

### 🛠️ Tools & Automation
**RTM Generator Script**:
- Location: `workspace/arbiter/operations/scripts/generate-rtm.ts`
- Usage: `npx tsx workspace/arbiter/operations/scripts/generate-rtm.ts <path-to-migration.log>`
- Function: Automatically parses migration logs and generates the ISO 29119-3 RTM Markdown table with "Actual Results" populated.

---
*Maintained by **Sovereign OS** Integrated Engineering System.*


## Agent-Agnostic Execution Layer

This skill supports multi-agent execution through:

- Core guidance in SKILL.md
- Machine contract in skill.contract.json
- Agent adapters in adapters/
- Canonical script entrypoint in scripts/run.sh
