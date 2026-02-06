---
name: idempotency-and-reliability
description: Guarantees transaction safety and prevents data duplication (Exactly-Once semantics).
version: 1.1.0
author: Sovereign OS Agent
tags: [backend, reliability, idempotency, transactions, payment]
---

# 💎 Idempotency & Reliability

## 1. Core Philosophy (The "Why")
In distributed systems, networks fail. Users double-click. Retries happen. This skill guarantees that no matter how many times a request is repeated, the side-effect (payment, booking) happens **Exactly Once**.

## 2. Capabilities & Rules (The "What")

### Rule 1: Idempotency Keys
- **Definition**: A unique client-generated string (UUID v4) sent in headers (`Idempotency-Key`).
- **Mechanism**:
    1. Check Cache (Redis) for Key.
    2. If found -> Return cached response immediately.
    3. If not -> Process -> Cache Response -> Return.

### Rule 2: ACID Transactions
- **Scope**: All mutation logic spanning multiple tables MUST be wrapped in a Database Transaction.
- **Locking**: Use `SELECT ... FOR UPDATE` (Pessimistic Locking) for stock/balance checks to prevent Race Conditions.

### Rule 3: Database Constraints (The Final Defense)
- **Unique Indexes**: Always enforce uniqueness at the DB level (e.g., `unique(order_id, transaction_type)`). Do not rely solely on code checks.

## 3. Usage Instructions (The "How")

### Implementing a Payment Endpoint
1.  **Extract**: Get `Idempotency-Key` from header.
2.  **Check**: `if ($this->cache->has($key)) return $this->cache->get($key);`
3.  **Lock**: Start Transaction.
4.  **Validate**: Check balance.
5.  **Execute**: Charge card.
6.  **Save**: Commit Transaction.
7.  **Cache**: Store result against Key.

## 4. Maintenance
- **TTL**: Idempotency keys should expire (e.g., 24 hours).
- **Audit**: Monitor Dead Letter Queues (DLQ) for failed async jobs.
