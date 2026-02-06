---
name: testing-mastery
description: Comprehensive testing strategies for legacy enterprise systems, including unit, integration, and end-to-end verification.
version: 1.1.0
author: Sovereign OS Agent
tags: [testing, phpunit, qa, verification, docker]
---

# 🧪 Testing Mastery

## 1. Core Philosophy (The "Why")
Every change is verified across multiple layers to prevent regressions. Tests are not optional; they are the safety net. Mock heavy dependencies; verify real behavior.

## 2. Capabilities & Rules (The "What")

### Rule 1: Isolation Tests
- **Unit**: Test logic in isolation (Mock DB, Mock HTTP).
- **Integration**: Test with real DB (Use Fixtures).
- **E2E**: Test via Browser/Curl (Real Environment).

### Rule 2: Docker-First Execution
- **Constraint**: ALWAYS run tests inside the container.
- **Command**: `docker exec php8.4-fpm vendor/bin/phpunit`.
- **Why**: Ensures path consistency and environment parity.

### Rule 3: Verification Scripts
- **Critical Changes**: Include `verify_[feature].php` for manual smoke tests.
- **Cleanup**: Remove temp scripts after verification.

## 3. Usage Instructions (The "How")

### Running PHPUnit
```bash
docker exec php8.4-fpm vendor/bin/phpunit tests/Unit/
```

### CSRF Verification (Example)
```bash
curl -s https://staging.example.com | grep "_CSRF_INDEX"
# Must return unique token each time
```

## 4. Maintenance
- **Coverage**: Aim for >70% on critical paths (Payment, Auth).
- **Speed**: Unit tests should run <5s total.
