---
name: caching-strategy-mastery
description: Redis, CDN, and Cache Invalidation strategies for high-performance SaaS.
version: 1.0.0
author: Sovereign OS Agent
tags: [caching, redis, cdn, performance, scalability]
---

# ⚡ Caching Strategy Mastery


## 1. Core Philosophy (The "Why")
Caching is the difference between 50ms and 500ms response times. We cache aggressively but invalidate precisely.

## 2. When to use this skill
This skill is activated when the task requires Redis, CDN, and Cache Invalidation strategies for high-performance SaaS..
- Detected when the user's intent matches the semantic domain of ⚡ Caching Strategy Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Cache Layers
- **L1 (Application)**: In-memory (APCu, OPcache).
- **L2 (Distributed)**: Redis/Memcached.
- **L3 (CDN)**: Cloudflare, Fastly.

### Rule 2: Invalidation
- **TTL**: Time-based expiration.
- **Tag-Based**: Invalidate by tags (e.g., `user:123`).
- **Event-Driven**: Invalidate on domain events.

### Rule 3: Cache-Aside Pattern
```php
$data = $cache->get($key);
if (!$data) {
    $data = $db->query(...);
    $cache->set($key, $data, 3600);
}
return $data;
```

### Usage Instructions
- **Read-Heavy**: Cache aggressively.
- **Write-Heavy**: Use write-through or write-behind.

## 4. Maintenance
- **Monitor**: Cache hit rate (target: >80%).
