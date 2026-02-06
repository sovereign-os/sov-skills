---
name: test-driven-mastery
description: Mastery of Test-Driven Development (TDD) focusing on Red-Green-Refactor cycles, high coverage, and test reliability.
version: 1.0.0
memory:
  context_tags: ["tdd", "unit-testing", "php", "javascript", "best-practices"]
  surprise_threshold: 0.6
---

# 🧪 Test-Driven Development (TDD) Mastery

The Agent MUST prioritize reliability by following the TDD protocol, especially for risky tasks like migrations or financial logic. "No code without a failing test first."

## 🔄 The Cycle: Red-Green-Refactor

1.  **🔴 RED (Fail)**:
    - Identify a single unit of logic to implement.
    - Write a test that describes that logic.
    - Run the test and watch it fail (proving the test is valid).

2.  **🟢 GREEN (Pass)**:
    - Write the **minimum amount of code** to make the test pass.
    - Do not optimize or add extra features yet.
    - Verify with a green build.

3.  **🔵 REFACTOR (Clean)**:
    - Improve code readability, remove duplication, and ensure SOLID principles.
    - Run tests after every change to ensure they stay green.

## 📜 Procedures

### 1. Requirements Breakdown
- Breakdown tasks into testable units.
- Identify edge cases (empty results, connection failures, invalid inputs).

### 2. Isolation Strategy
- Use **Unit Tests** for business logic and strategies.
- Mock all infrastructure dependencies (Gateways, Repositories, HTTP Clients) using `MockObject` or `Prophecy`.
- For risky migrations, use **Integration Tests** with a real but ephemeral database (e.g., SQLite in-memory).

### 3. Test Coverage Law
- Aim for 100% logic coverage in complex strategies.
- Every `if`, `else`, and `catch` block must be reached by at least one test case.

## ⚖️ The Law
- "A feature is only 'Done' when its tests are merged."
- "Tests are the ultimate documentation of intent."
- "If a bug is found, write a test to reproduce it BEFORE fixing it."
