---
name: compliance-mastery
description: GDPR, SOC2, and data residency for enterprise SaaS.
version: 1.0.0
author: Sovereign OS Agent
tags: [compliance, gdpr, soc2, security, privacy]
---

# 📋 Compliance Mastery


## 1. Core Philosophy (The "Why")
Compliance is not optional for enterprise SaaS. GDPR fines can be 4% of revenue. SOC2 is required for enterprise deals.

## 2. When to use this skill
This skill is activated when the task requires GDPR, SOC2, and data residency for enterprise SaaS..
- Detected when the user's intent matches the semantic domain of 📋 Compliance Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: GDPR
- **Right to Access**: Users can export their data.
- **Right to Erasure**: Delete user data on request.
- **Consent**: Explicit opt-in for data processing.

### Rule 2: SOC2
- **Access Control**: RBAC, MFA.
- **Audit Logs**: Immutable logs of all data access.
- **Encryption**: At rest and in transit.

### Rule 3: Data Residency
- **Constraint**: EU data stays in EU (for GDPR).
- **Implementation**: Multi-region deployment.

### Usage Instructions
```php
// GDPR: Export user data
public function exportUserData($userId) {
    return [
        'profile' => $this->userRepo->find($userId),
        'orders' => $this->orderRepo->findByUser($userId),
    ];
}
```

## 4. Maintenance
- **Audit**: Annual SOC2 audit.
