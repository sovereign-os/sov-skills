---
name: rbac-logic-design
description: Expertise in building hierarchical Role-Based Access Control.
version: 1.1.0
author: Sovereign OS Agent
tags: [security, rbac, authorization, permissions, roles]
---

# 🔐 RBAC Logic Design


## 1. Core Philosophy (The "Why")
Authorization is not Authentication. RBAC (Role-Based Access Control) ensures users can only access resources they're permitted to. It scales better than ACLs (Access Control Lists) for complex systems.

## 2. When to use this skill
This skill is activated when the task requires Expertise in building hierarchical Role-Based Access Control..
- Detected when the user's intent matches the semantic domain of 🔐 RBAC Logic Design.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: The Hierarchy
- **User** -> **Role** -> **Permission** -> **Resource**.
- **Example**: `User: John` -> `Role: Editor` -> `Permission: article.edit` -> `Resource: Article #123`.

### Rule 2: Principle of Least Privilege
- **Default**: Deny all. Grant explicitly.
- **Granularity**: Permissions should be atomic (`user.create`, not `user.manage`).

### Rule 3: Role Inheritance
- **Hierarchy**: `Admin` inherits all permissions from `Editor`.
- **Constraint**: Avoid circular inheritance.

### Usage Instructions
### Implementing RBAC (Symfony Voters)
```php
class ArticleVoter extends Voter {
    protected function supports(string $attribute, $subject): bool {
        return in_array($attribute, ['EDIT', 'DELETE']) && $subject instanceof Article;
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool {
        $user = $token->getUser();
        return $user->hasRole('ROLE_EDITOR') || $subject->getAuthor() === $user;
    }
}
```

## 4. Maintenance
- **Audit**: Log all permission checks for security review.
- **Review**: Quarterly role permission audit.
