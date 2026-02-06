---
name: deep-trace-auditor
description: High-precision code tracing and verification to prevent assumption-based errors.
version: 1.2.0
author: Sovereign OS Agent
tags: [debugging, tracing, verification, auditing, reliability]
---

# 🔍 Deep Trace Auditor

## 1. Core Philosophy (The "Why")

Debugging complex systems requires more than "reading code". It requires **Tracing the Truth**. This skill enforces a "Zero Assumption" policy. We don't believe what the code _should_ do; we verify what it _actually_ does by auditing execution paths and data state at every junction.

## 2. Capabilities & Rules (The "What")

### Rule 1: Zero-Assumption Policy

- **Never guess**: If a value is unknown, log it.
- **Trace the Source**: Follow a variable from the entry point (Request/Event) to the sink (Database/API).

### Rule 2: Junction Auditing

- **Definition**: A junction is any conditional (`if`, `switch`) or loop.
- **Protocol**: At every junction, you MUST verify the input state and why the branch was taken.

### Rule 3: Error Correlation

- **Trace IDs**: Use unique IDs to correlate logs across services.
- **Log Whisperer Integration**: Use `npm run booster:logs` to tail logs while executing a trace.

### Rule 4: Data Integrity Verification

- **Check-After-Write**: After a database write, perform a read (if safe) or verify the returned status/ID.

## 3. Usage Instructions (The "How")

### The Tracing Workflow

1.  **Identify Entry**: Where does the process start? (e.g., `UserController::store`).
2.  **Map Flow**: List the services/methods involved in sequence.
3.  **Insert Probes**: (In dev/staging) Insert temporary log statements or use a debugger.
4.  **Capture Truth**: Trigger the event and capture raw logs.
5.  **Audit**: Compare the captured logs against the expected logic.

### Example Trace

```php
// Phase 1: Input Check
Log::debug("Tracing: Input received", $request->all());

// Phase 2: Junction
if ($user->hasBalance($amount)) {
    Log::debug("Tracing: Balance check passed", ['balance' => $user->balance]);
    // ... logic
} else {
    Log::error("Tracing: Balance check failed", ['required' => $amount]);
}
```

## 4. Maintenance (The Law)

- **Safe Probing**: Always remove temporary trace logs before pushing to production.
- **Log Levels**: Use `debug` for traces, `info` for milestones, `error` for failures.
- **Audit Reports**: For critical bugs, document the "Trace Path" in the Jira comment.
