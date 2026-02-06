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

## 2. Capabilities & Rules (The "What")

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

## 3. Usage Instructions (The "How")
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
