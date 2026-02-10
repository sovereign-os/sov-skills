---
name: data-migration-mastery
description: Zero-downtime migrations and backfill strategies.
version: 1.0.0
author: Sovereign OS Agent
tags: [migration, database, zero-downtime, backfill]
---

# 🔄 Data Migration Mastery


## 1. Core Philosophy (The "Why")
Schema changes in production are risky. We use expand-contract pattern for zero-downtime migrations.

## 2. When to use this skill
This skill is activated when the task requires Zero-downtime migrations and backfill strategies..
- Detected when the user's intent matches the semantic domain of 🔄 Data Migration Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Expand-Contract Pattern
1. **Expand**: Add new column (nullable).
2. **Migrate**: Backfill data.
3. **Contract**: Remove old column.

### Rule 2: Backfill
- **Batch**: Process in chunks (1000 rows/batch).
- **Idempotent**: Safe to re-run.

### Rule 3: Rollback Plan
- **Always**: Have a rollback script ready.

### Usage Instructions
```sql
-- Step 1: Expand
ALTER TABLE users ADD COLUMN email_verified BOOLEAN DEFAULT FALSE;

-- Step 2: Backfill
UPDATE users SET email_verified = TRUE WHERE email_confirmed_at IS NOT NULL;

-- Step 3: Contract (later)
ALTER TABLE users DROP COLUMN email_confirmed_at;
```

## 4. Maintenance
- **Test**: Run migration on staging first.
