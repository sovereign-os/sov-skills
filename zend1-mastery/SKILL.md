---
name: zend1-mastery
description: Advanced expertise in legacy Zend Framework 1 (ZF1), focusing on MVC architectural patterns, bootstrap orchestration, and robust unit testing for aging codebases.
version: 1.0.0
author: Sovereign OS Agent
tags: [php, zend, zf1, mvc, legacy]
---

# 🎼 Zend Framework 1 Mastery


## 1. Core Philosophy (The "Why")
Zend Framework 1 is the pioneer of modular, enterprise-grade PHP applications. While legacy, ZF1 codebases (like the Facility Scheduler) often handle critical business logic. This skill ensures that we maintain, refactor, and extend these systems without breaking the "Zend-Way" while gradually introducing modern patterns.

## 2. When to use this skill
This skill is activated when the task requires Advanced expertise in legacy Zend Framework 1 (ZF1), focusing on MVC architectural patterns, bootstrap orchestration, and robust unit testing for aging codebases..
- Detected when the user's intent matches the semantic domain of 🎼 Zend Framework 1 Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: MVC Integrity
- **Controllers**: Keep controllers lean. Business logic should reside in Models.
- **Views**: Always use `Zend_View` (or integrated Smarty) correctly. Never use `echo` in a controller.

### Rule 2: Bootstrap & Configuration
- **Bootstrap.php**: Use `_init` methods to setup dependencies.
- **application.ini**: Manage environment-specific settings (production, staging, development) religiously.

### Rule 3: Database & Models (Zend_Db)
- **Table Data Gateway**: Use `Zend_Db_Table` for CRUD.
- **Database Abstraction**: Always use the adapter's `quote()` or `quoteInto()` to prevent SQL Injection.
- **BaseDBRow**: In FS, we use a custom `BaseDBRow` (Active Record pattern). Respect its lifecycle.

### Rule 4: Folder Structure
Follow the standard `application/` layout:
- `controllers/`
- `models/`
- `views/` (scripts/helpers/filters)
- `modules/` (for modular architecture)

### Usage Instructions
### 3.1 Creating a Controller
```php
class SettingsController extends Zend_Controller_Action
{
    public function init() { /* Setup */ }
    public function indexAction() { /* Logic */ }
}
```

### 3.2 Accessing the Registry
Use `Zend_Registry` for global dependencies, but prefer Dependency Injection where possible during refactors.

### 3.3 Resource Management
Always check `Zend_Application_Resource` for built-in initializers (DB, Log, Cache).

## 4. Maintenance
- **Audit**: Are we using `$this->_getParam()` instead of `$_POST`?
- **Audit**: Are we following the `Zend_` naming convention (Underscore as folder separator)?
- **Audit**: Is `Zend_Log` used for tracking failures?
