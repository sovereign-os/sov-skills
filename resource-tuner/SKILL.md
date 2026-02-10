---
name: resource-tuner
description: Monitoring and optimizing system resources (CPU, RAM, Disk).
version: 1.2.0
author: Sovereign OS Agent
tags: [devops, optimization, resources, monitoring, docker]
---

# 🔧 Resource Tuner


## 1. Core Philosophy (The "Why")
Bloated containers and memory leaks slow down development and crash production. We aggressively tune resource limits to match the workload, ensuring efficiency without starvation.

## 2. When to use this skill
This skill is activated when the task requires Monitoring and optimizing system resources (CPU, RAM, Disk)..
- Detected when the user's intent matches the semantic domain of 🔧 Resource Tuner.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Docker Limits

- **Constraint**: Every container in `docker-compose` MUST have `mem_limit`.
- **Defaults**:
  - Nginx: 128MB
  - PHP-FPM: 512MB (Development), 256MB/Worker (Production)
  - Redis: 256MB
  - Worker: 128MB

### Rule 2: PHP Tuning

- **memory_limit**: Set to actual need (e.g., `-1` only for heavy CLI jobs).
- **opcache**: `opcache.validate_timestamps=0` in Prod. `1` in Dev.

### Rule 3: Database Optimization

- **Connections**: Limit `max_connections` to prevent OOM.
- **Buffers**: Tune `innodb_buffer_pool_size` to 60-80% of available RAM (on dedicated DB servers).

### Usage Instructions
### Calculating FPM Workers

Formula: `Total RAM / RAM per Worker = Max Children`
Example: `2048MB / 64MB = 32 Workers`.

### Debugging OOM (Out of Memory)

1.  **Check**: `docker stats`.
2.  **Inspect**: `dmesg | grep -i "out of memory"`.
3.  **Action**: Increase limit OR fix memory leak (use profiler).

## 4. Maintenance
- **Review**: Check `docker stats` during load tests.
- **Prune**: Regular `docker system prune` to free disk space.
