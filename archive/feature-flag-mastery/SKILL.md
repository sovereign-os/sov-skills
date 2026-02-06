---
name: feature-flag-mastery
description: Feature toggles for gradual rollouts and A/B testing.
version: 1.0.0
author: Sovereign OS Agent
tags: [feature-flags, deployment, ab-testing, rollout]
---

# 🚩 Feature Flag Mastery

## 1. Core Philosophy (The "Why")
Deploy code != Release features. Feature flags decouple deployment from release, enabling: gradual rollouts, A/B tests, kill switches.

## 2. Capabilities & Rules (The "What")

### Rule 1: Types
- **Release Flags**: Enable/disable features.
- **Experiment Flags**: A/B testing.
- **Ops Flags**: Circuit breakers.

### Rule 2: Targeting
- **User**: `if (featureEnabled('new-ui', $userId))`
- **Percentage**: 10% of users.
- **Segment**: Premium users only.

### Rule 3: Cleanup
- **Lifecycle**: Remove flags after 100% rollout.

## 3. Usage Instructions (The "How")
```php
if ($this->flags->isEnabled('payment-v2')) {
    return $this->paymentV2Service->charge();
}
return $this->paymentV1Service->charge();
```

## 4. Maintenance
- **Audit**: Monthly cleanup of stale flags.
