---
description: Generate weekly performance audit report based on KPI metrics
---

# Performance Audit Workflow

This workflow generates a comprehensive performance report analyzing the last 7-30 days of work.

## Prerequisites
- Daily scrum files in `[AGENT_ROOT]/workspaces/{project}/history/tasks/YYYY/MM/`
- Git commit history
- Jira access (optional, for priority data)

## Steps

// turbo-all

### 1. Set Time Range
```bash
# Default: Last 7 days
START_DATE=$(date -d '7 days ago' +%Y-%m-%d)
END_DATE=$(date +%Y-%m-%d)
```

### 2. Collect Task Data
Scan daily scrum files for completed tasks:
```bash
grep -r "✅\|DONE" [AGENT_ROOT]/workspaces/*/history/tasks/2026/01/*.md | wc -l
```

### 3. Calculate KPIs
Run the performance audit script:
```bash
[AGENT_ROOT]/skills/performance-audit-mastery/scripts/audit.sh
```

### 4. Generate Report
Output saved to:
```
[AGENT_ROOT]/reports/performance/YYYY-MM-DD-audit.md
```

### 5. Review & Action
- Read the report
- Identify bottlenecks
- Set improvement goals for next week

## Manual Trigger
Ask the Agent: "Generate my performance audit report for the last week"

## Automation (Optional)
Add to crontab for Friday 5pm:
```bash
0 17 * * 5 [AGENT_ROOT]/skills/performance-audit-mastery/scripts/audit.sh
```
