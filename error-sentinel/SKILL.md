---
name: error-sentinel
description: Prevents infinite error loops and captures wisdom from failures.
version: 1.1.0
author: Sovereign OS Agent
tags: [debugging, error-handling, circuit-breaker, wisdom]
---

# 🛑 Error Sentinel


## 1. Core Philosophy (The "Why")
Insanity is doing the same thing twice and expecting different results. This skill protects resources (Time & Tokens) by enforcing a "Circuit Breaker" on repetitive failures. Stop, Pivot, Document.

## 2. When to use this skill
This skill is activated when the task requires Prevents infinite error loops and captures wisdom from failures..
- Detected when the user's intent matches the semantic domain of 🛑 Error Sentinel.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Loop Detection (Circuit Breaker)
- **Count**: If an identical error occurs **3 times** consecutively.
- **Action**: STOP immediately.
- **Report**: "🛑 Circuit Breaker Triggered. Strategy failed 3x. Pausing for human input."

### Rule 2: Strategy Rotation (The Pivot)
- **Constraint**: If `Count = 2`, the Agent is FORBIDDEN from retrying the exact same fix.
- **Mandate**: Declare "Strategy A failed. Pivoting to Strategy B."

### Rule 3: Wisdom Vaulting
- **Trigger**: Successfully solving a stubborn error.
- **Action**: Log Root Cause & Fix to `[AGENT_ROOT]/data/wisdom.md`.
- **Prevent**: Scan wisdom before debugging future issues.

### Usage Instructions
### Handling Failures
1.  **Read Error**: Capture the specific message/code.
2.  **Recall**: Have I seen this in the last 2 turns?
3.  **Decide**:
    - Yes (2x) -> Pivot Strategy.
    - Yes (3x) -> Trigger Circuit Breaker.
    - No -> Attempt Fix.

## 4. Maintenance
- **Review**: Prune `wisdom.md` if solutions become obsolete.
