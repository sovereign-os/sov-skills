---
name: rate-limiting-mastery
description: API Throttling and DDoS protection for SaaS platforms.
version: 1.0.0
author: Sovereign OS Agent
tags: [rate-limiting, api, security, throttling, ddos]
---

# 🚦 Rate Limiting Mastery


## 1. Core Philosophy (The "Why")
Protect resources from abuse. Rate limiting prevents: DDoS, brute force, and resource exhaustion.

## 2. When to use this skill
This skill is activated when the task requires API Throttling and DDoS protection for SaaS platforms..
- Detected when the user's intent matches the semantic domain of 🚦 Rate Limiting Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Algorithms
- **Token Bucket**: Smooth bursts (recommended).
- **Leaky Bucket**: Constant rate.
- **Fixed Window**: Simple but has edge-case issues.

### Rule 2: Limits
- **Per User**: 100 req/min.
- **Per IP**: 1000 req/min.
- **Per Endpoint**: `/api/expensive` -> 10 req/min.

### Rule 3: Response
- **Status**: 429 Too Many Requests.
- **Headers**: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`.

### Usage Instructions
```php
if (!$rateLimiter->attempt($userId, 100)) {
    throw new TooManyRequestsException();
}
```

## 4. Maintenance
- **Monitor**: Track 429 responses. High rate = adjust limits.
