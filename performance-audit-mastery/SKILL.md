---
name: performance-audit-mastery
description: KPI-based performance audit to measure developer velocity, quality, and impact (Low/Average/Excellent).
version: 1.0.0
author: Sovereign OS Agent
tags: [kpi, performance, audit, metrics, productivity]
---

# 📊 Performance Audit Mastery

## 1. Core Philosophy (The "Why")
You can't improve what you don't measure. This skill audits developer performance using objective KPIs to identify: bottlenecks, strengths, and areas for growth. The goal is continuous improvement, not punishment.

## 2. Capabilities & Rules (The "What")

### Rule 1: The 5 KPI Pillars

#### 1. Velocity (Speed)
- **Metric**: Tasks completed per week.
- **Excellent**: ≥ 8 tasks/week (atomic tasks).
- **Average**: 4-7 tasks/week.
- **Low**: < 4 tasks/week.

#### 2. Quality (Correctness)
- **Metric**: Bug rate (bugs introduced per 10 tasks).
- **Excellent**: < 1 bug/10 tasks.
- **Average**: 1-3 bugs/10 tasks.
- **Low**: > 3 bugs/10 tasks.

#### 3. Efficiency (Accuracy)
- **Metric**: Actual time vs Estimated time.
- **Excellent**: Actual ≤ 110% of Estimate.
- **Average**: Actual 110-150% of Estimate.
- **Low**: Actual > 150% of Estimate.

#### 4. Impact (Value)
- **Metric**: % of tasks that are High-Priority (🔥).
- **Excellent**: ≥ 60% High-Priority.
- **Average**: 30-60% High-Priority.
- **Low**: < 30% High-Priority.

#### 5. Consistency (Reliability)
- **Metric**: Days with commits / Total working days.
- **Excellent**: ≥ 90% (4.5 days/week).
- **Average**: 70-90%.
- **Low**: < 70%.

### Rule 2: Scoring System
- **Excellent**: 4-5 pillars in "Excellent" range.
- **Average**: 3 pillars in "Average" or better.
- **Low**: < 3 pillars in "Average".

### Rule 3: Data Sources
- **Jira**: Task completion, priority.
- **Git**: Commit frequency, PR merge rate.
- **Daily Logs**: Time tracking, blockers.

## 3. Usage Instructions (The "How")

### Running an Audit
1.  **Collect Data**: Scan last 30 days of `daily-scrum.md` files.
2.  **Calculate KPIs**: Aggregate metrics per pillar.
3.  **Generate Report**:
    ```markdown
    # Performance Audit Report (2026-01-23)
    
    ## Summary: **EXCELLENT** (4/5 Pillars)
    
    | Pillar       | Score      | Metric                |
    |--------------|------------|-----------------------|
    | Velocity     | Excellent  | 9 tasks/week          |
    | Quality      | Excellent  | 0.5 bugs/10 tasks     |
    | Efficiency   | Average    | 120% of estimate      |
    | Impact       | Excellent  | 70% High-Priority     |
    | Consistency  | Excellent  | 95% commit days       |
    
    ## Recommendations:
    - Improve estimation accuracy (Efficiency).
    ```

### Automation
- **Weekly**: Auto-generate report every Friday.
- **Monthly**: Deep dive with trend analysis.

## 4. Maintenance
- **Calibration**: Adjust thresholds based on team baseline.
- **Feedback Loop**: Use audit results to update workflows (e.g., better estimation).
