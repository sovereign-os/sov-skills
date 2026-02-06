---
name: log-whisperer
description: Efficiently tail and analyze application logs from Docker containers (fpm, nginx, mongodb).
version: 1.1.0
author: Sovereign OS Agent
tags: [debugging, logs, docker, observability]
---

# 🔍 Log Whisperer

## 1. Core Philosophy (The "Why")
Logs are the voice of the machine. Listening accurately is the key to solving 500 Errors. We do not guess; we `grep`.

## 2. Capabilities & Rules (The "What")

### Rule 1: Multi-Stream Tail
- **Command**: Monitor multiple containers simultaneously to correlate events (e.g., Nginx 500 -> PHP Fatal Error).
- **Target**: `php8.4-fpm`, `nginx`, `mongodb`.

### Rule 2: The "500 Hunter"
- **Filter**: When a 500 occurs, scan FPM logs for `error`, `critical`, `exception`, or `stack trace`.
- **Constraint**: Link Nginx Request ID/Time with PHP Log timestamp.

### Rule 3: Infrastructure Check
- **Connection Refused**: Immediate check of target service (Redis/MySQL) status.
- **OOM**: Look for "Memory Limit Exceeded" or "Exit Code 137".

## 3. Usage Instructions (The "How")

### Tailing Logs
```bash
# General Health
docker compose logs -f --tail=50 php8.4-fpm nginx

# Finding Exceptions
docker logs --since 5m php8.4-fpm 2>&1 | grep -iE "error|critical"
```

### Auditing Workers
```bash
docker exec php8.4-fpm supervisorctl status
```

## 4. Maintenance
- **Rotation**: Recommend `json-file` logging driver with `max-size: 10m` to prevent disk fill-up.
