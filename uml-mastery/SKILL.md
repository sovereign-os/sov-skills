---
name: uml-mastery
description: "Comprehensive UML (Unified Modeling Language) expertise for visualizing system architecture, behavior, and interactions using industry-standard diagrams."
version: 1.0.0
provides:
  - use-case-diagram
  - sequence-diagram
  - activity-diagram
  - class-diagram
  - state-diagram
  - component-diagram
---

# 🎨 UML Mastery

This skill provides comprehensive UML modeling capabilities using **PlantUML** syntax (text-based, version-controllable).


## 2. When to use this skill
This skill is activated when the task requires Comprehensive UML (Unified Modeling Language) expertise for visualizing system architecture, behavior, and interactions using industry-standard diagrams..
- Detected when the user's intent matches the semantic domain of 🎨 UML Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### 📐 Core Diagrams
### 1️⃣ Use Case Diagram
**Purpose**: Show actors and their interactions with the system.
**When to use**: During requirements analysis, to visualize user goals.

**Template**: `templates/use-case-diagram.puml`

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor "System Admin" as admin
actor "Job Scheduler" as scheduler

rectangle "S3 Migration System" {
  usecase "Migrate Event Images" as UC1
  usecase "Verify Migration Status" as UC2
  usecase "Repair Incomplete Migration" as UC3
}

admin --> UC1
scheduler --> UC1
UC1 ..> UC2 : <<include>>
UC1 ..> UC3 : <<extend>>

note right of UC3
  Triggered when file exists
  in S3 but DB is outdated
end note
@enduml
```

---

### 2️⃣ Sequence Diagram
**Purpose**: Show step-by-step interaction between actors and system components over time.
**When to use**: To detail Normal Flow, Alternative Flow, and Exception Flow.

**Template**: `templates/sequence-diagram.puml`

```plantuml
@startuml
actor Admin
participant "Migration Service" as MS
participant "Event Strategy" as ES
participant "S3 Provider" as S3
database "MySQL" as DB

Admin -> MS: Trigger Migration
activate MS

MS -> ES: Generate Tasks
activate ES
ES -> DB: Fetch Events
DB --> ES: Event List
ES -> S3: Check File Exists?
alt File NOT Exists (Normal Flow)
  S3 --> ES: False
  ES -> MS: Dispatch Upload Task
  MS -> S3: Upload File
  S3 --> MS: Success
  MS -> DB: Update image & bus_notes0
else File Exists but DB Outdated (Alternative Flow A2)
  S3 --> ES: True
  ES -> DB: Check bus_notes0
  DB --> ES: Legacy Path
  ES -> MS: Dispatch Repair Task
  MS -> DB: Update bus_notes0 only
end
deactivate ES
MS --> Admin: Report Complete
deactivate MS
@enduml
```

---

### 3️⃣ Activity Diagram
**Purpose**: Show workflow with decision points and parallel processes.
**When to use**: To visualize complex business logic with branches.

**Template**: `templates/activity-diagram.puml`

```plantuml
@startuml
start
:Retrieve Event from DB;
:Check Source File Exists;
if (File Found?) then (yes)
  :Generate S3 Key;
  :Check S3 Object Exists;
  if (Object Exists?) then (yes)
    :Check bus_notes0 in DB;
    if (bus_notes0 Matches S3?) then (yes)
      :Log "SKIPPED";
      stop
    else (no)
      :Log "REPAIRING";
    endif
  else (no)
  endif
  :Dispatch Upload Task;
  fork
    :Upload to S3;
  fork again
    :Update DB (image);
  end fork
  :Update DB (bus_notes0);
  :Log "SUCCESS";
else (no)
  :Log "WARNING: Source Missing";
endif
stop
@enduml
```

---

### 4️⃣ Class Diagram
**Purpose**: Show system structure (entities, value objects, relationships).
**When to use**: Domain modeling, architecture documentation.

**Template**: `templates/class-diagram.puml`

```plantuml
@startuml
class MigrateStorageCommand {
  +strategyType: string
  +sourceStorageId: string
  +destStorageId: string
  +mode: string
  +options: array
}

class StorageMigrationService {
  -strategyFactory: MigrationStrategyFactory
  -bus: MessageBusInterface
  +handle(command: MigrateStorageCommand): MigrationReportDto
}

interface MigrationStrategyInterface {
  +generateItemsToMigrate(command): Generator
  +countItemsToMigrate(command): array
}

class EventMigrationStrategy {
  -eventGateway: EventGateway
  -logger: LoggerInterface
  +generateItemsToMigrate(command): Generator
}

class UpdateEventTableStrategy {
  -entityManager: EntityManagerInterface
  +onComplete(identifier, context): void
}

MigrateStorageCommand --> StorageMigrationService
StorageMigrationService --> MigrationStrategyInterface
EventMigrationStrategy ..|> MigrationStrategyInterface
UpdateEventTableStrategy ..> EventMigrationStrategy : <<uses>>
@enduml
```

---

### 5️⃣ State Diagram
**Purpose**: Show object lifecycle and state transitions.
**When to use**: For entities with complex state management.

**Template**: `templates/state-diagram.puml`

```plantuml
@startuml
[*] --> Pending : Migration Task Created

Pending --> Uploading : Worker Picks Task
Uploading --> Uploaded : S3 Upload Success
Uploading --> Failed : Upload Error

Uploaded --> DBUpdating : Trigger Post-Migration
DBUpdating --> Complete : DB Update Success
DBUpdating --> Failed : DB Error

Failed --> Pending : Retry (Max 3x)
Failed --> [*] : Max Retries Exceeded

Complete --> [*]

note right of Complete
  bus_notes0 = S3 URL (Public)
  OR NULL (Private)
end note
@enduml
```

---

### 6️⃣ Component Diagram
**Purpose**: Show high-level system architecture and dependencies.
**When to use**: Architecture overview, deployment planning.

**Template**: `templates/component-diagram.puml`

```plantuml
@startuml
package "Presentation Layer" {
  [Console Command]
  [REST API]
}

package "Application Layer" {
  [StorageMigrationService]
  [MigrationStrategyFactory]
}

package "Domain Layer" {
  [MigrationStrategy Interface]
  [EventMigrationStrategy]
}

package "Infrastructure Layer" {
  [S3StorageProvider]
  [EventGateway]
  [UpdateEventTableStrategy]
  database "MySQL" as DB
  cloud "AWS S3" as S3
}

[Console Command] --> [StorageMigrationService]
[StorageMigrationService] --> [MigrationStrategyFactory]
[MigrationStrategyFactory] --> [EventMigrationStrategy]
[EventMigrationStrategy] --> [EventGateway]
[EventMigrationStrategy] --> [S3StorageProvider]
[S3StorageProvider] --> S3
[EventGateway] --> DB
[UpdateEventTableStrategy] --> DB
@enduml
```

---

### 🔧 Usage Protocol
### For Agents:
1. **Identify Diagram Need**: Based on task context (requirements, design, testing).
2. **Select Template**: Choose appropriate diagram type from above.
3. **Customize**: Replace placeholder names with actual system entities.
4. **Save**: Store `.puml` files alongside documentation (e.g., `artifacts/uml/`).
5. **Render** (Optional): Use PlantUML CLI/online to generate PNG/SVG.

### Integration with Other Skills:
- **quality-assurance-mastery**: Auto-generate Use Case + Sequence diagrams during spec creation.
- **architecture-blueprint-mastery**: Use Component + Class diagrams for design phase.
- **ddd-mastery**: Use Class diagrams for Domain Model visualization.

---

### 📦 Output Structure
When creating UML artifacts, save them in:
```
/home/puterakahfi/.agent/workspace/arbiter/artifacts/uml/
├── [project-id]/
│   ├── use-case/
│   │   └── ASD-5921-migration.puml
│   ├── sequence/
│   │   └── ASD-5921-normal-flow.puml
│   └── class/
│       └── storage-migration-domain.puml
```

---

### 🎯 Best Practices
1. **Keep it Simple**: Don't over-complicate diagrams. Focus on clarity.
2. **Version Control**: `.puml` files are text, perfect for Git.
3. **Consistency**: Use same naming conventions across all diagrams.
4. **Annotations**: Add notes for non-obvious logic or business rules.
5. **Layering**: Separate concerns (don't mix Use Case with Class diagrams).

