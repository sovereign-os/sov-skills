# 📋 Use Case Specification: AUTH-101 (User Login)
*Compliant with ISO/IEC/IEEE 29148:2018 (Requirements Engineering)*

| Field | Description |
| :--- | :--- |
| **Use Case ID** | AUTH-101 |
| **Use Case Name** | User Authentication via Email/Password |
| **Realized User Task** | Allow registered users to securely access their dashboard. |
| **Initiating Actor** | Unauthenticated User |
| **Participating Actors** | Identity Provider (Auth0), Audit Service |
| **Preconditions** | 1. System is online.<br>2. User has a registered account. |
| **Postconditions** | 1. User receives a valid JWT.<br>2. Login timestamp is updated in DB.<br>3. Successful login event is audited. |

### 🔄 Flow of Events

| Step | Actor | Action | System Response |
| :--- | :--- | :--- | :--- |
| **Normal Flow** | | | |
| 1 | User | Enters Email "user@example.com" and Password. | Validates format (RFC 5322). |
| 2 | System | Sends credentials to Auth Provider. | Verifies credentials hash. |
| 3 | System | Generates Session Token (JWT). | Token Generated (Exp: 1h). |
| 4 | System | Returns 200 OK + Token. | Redirects to Dashboard. |

### 🔀 Alternative Flows

#### **[A1: Account Locked]**
*   **Trigger**: At Step 2, Auth Provider detects 5 failed attempts.
*   **Context**: Security policy enforcement.
*   **Logic**:
    1.  System returns 403 Forbidden.
    2.  System sets 'LockedUntil' timestamp in DB.
    3.  User is notified "Account locked for 15 mins".

### ⚠️ Exception Flows

#### **[E1: Service Timeout]**
*   **Trigger**: At Step 2, Auth Provider unresponsive (>5000ms).
*   **Action**: System returns 503 Service Unavailable with "Try again later" message.
