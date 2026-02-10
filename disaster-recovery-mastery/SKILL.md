---
name: disaster-recovery-mastery
description: Backup, RTO/RPO, and failover strategies.
version: 1.0.0
author: Sovereign OS Agent
tags: [disaster-recovery, backup, rto, rpo, failover]
---

# 🆘 Disaster Recovery Mastery


## 1. Core Philosophy (The "Why")
Hope is not a strategy. We plan for: data loss, region failure, and catastrophic bugs.

## 2. When to use this skill
This skill is activated when the task requires Backup, RTO/RPO, and failover strategies..
- Detected when the user's intent matches the semantic domain of 🆘 Disaster Recovery Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: RTO & RPO
- **RTO (Recovery Time Objective)**: Max downtime (e.g., 1 hour).
- **RPO (Recovery Point Objective)**: Max data loss (e.g., 5 minutes).

### Rule 2: Backup Strategy
- **Frequency**: Daily full, hourly incremental.
- **Retention**: 30 days.
- **Location**: Off-site (different region).

### Rule 3: Failover
- **Active-Passive**: Standby DB replica.
- **Active-Active**: Multi-region (complex).

### Usage Instructions
- **Test**: Quarterly disaster recovery drills.

## 4. Maintenance
- **Verify**: Monthly restore test.
