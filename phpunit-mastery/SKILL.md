---
name: phpunit-mastery
description: Advanced PHPUnit testing framework expertise for robust backends.
version: 1.2.0
author: Sovereign OS Agent
tags: [php, testing, phpunit, tdd, backend]
infrastructure_requirements:
  - php
  - composer
capabilities:
  - unit-testing
  - integration-testing
  - coverage-reporting
---

# 🧪 PHPUnit Mastery


## 1. Core Philosophy (The "Why")
Untested code is broken code. PHPUnit is our safety net. We don't just "write tests"; we write **specifications** that verify behavior, prevent regression, and document the system.

## 2. When to use this skill
This skill is activated when the task requires Advanced PHPUnit testing framework expertise for robust backends..
- Detected when the user's intent matches the semantic domain of 🧪 PHPUnit Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Anatomy of a Test

- **Structure**: Arrange, Act, Assert (AAA).
- **Naming**: `test_it_does_x_when_y`. Snake_case is readable for test names.
- **Assertion**: Use specific assertions. `assertSame` over `assertEquals`. `assertCount` over `assertTrue(count($x) == 5)`.

### Rule 2: Mocking Strategy

- **Isolation**: Unit tests MUST NOT touch the DB. Mock repositories.
- **Tool**: `createMock(Service::class)`.
- **expectation**: `$mock->expects($this->once())->method('save')->with($entity)`.

### Rule 3: Integration Tests

- **Scope**: Database interactions, API endpoints.
- **Traits**: Use `RefreshDatabase` to reset state between tests.
- **Performance**: Keep them separate from Unit tests (`phpunit --testsuite=Feature`).

### Usage Instructions
### Writing a Unit Test (Service)

```php
public function test_it_registers_user_successfully(): void
{
    // Arrange
    $repo = $this->createMock(UserRepo::class);
    $repo->expects($this->once())->method('save')->willReturn($user);
    $service = new RegisterService($repo);

    // Act
    $result = $service->execute($dto);

    // Assert
    $this->assertSame($user->id, $result->id);
}
```

### Writing a Feature Test (API)

```php
public function test_api_returns_users(): void
{
    // Arrange
    User::factory()->count(3)->create();

    // Act
    $response = $this->getJson('/api/users');

    // Assert
    $response->assertOk()
             ->assertJsonCount(3, 'data');
}
```

## 4. Maintenance
- **Speed**: Unit suite must run in < 2s. If slow, you are testing IO.
- **Coverage**: Aim for 80%+, but logic coverage > line coverage.
- **Deprecation**: Watch out for deprecated assertions in new PHPUnit versions.
