---
name: react-clean-craft
description: Standards for clean, composable, and performant React components.
version: 1.2.0
author: Sovereign OS Agent
tags: [react, frontend, clean-code, hooks, components]
---

# ⚛️ React Clean Craft

## 1. Core Philosophy (The "Why")

React makes it easy to write spaghetti code. We fight this with strict component composition and hook separation. A component should describe **what** it looks like, not **how** it behaves.

## 2. Capabilities & Rules (The "What")

### Rule 1: The Container/Presentation Pattern

- **Container**: Handles Logic, State, Data Fetching. Returns a Presentation component.
- **Presentation**: Pure UI. Receives data via props. No Side Effects.

### Rule 2: Custom Hooks Extraction

- **Constraint**: If `useEffect` is longer than 3 lines, extract it to a hook (`useUserProfile`).
- **Benefit**: Reusability and easier testing.

### Rule 3: Prop Hygiene

- **Naming**: `onEvent` (e.g., `onSave`) for callbacks. `isState` (e.g., `isLoading`) for booleans.
- **Destructuring**: Always destructure props in the function signature.
- **Types**: Always define an interface for Props.

### Rule 4: Performance

- **Memoization**: Use `useMemo` for expensive calculations. Use `useCallback` for functions passed as props.
- **Keys**: Never use `index` as a key for dynamic lists. Use a stable ID.

## 3. Usage Instructions (The "How")

### Component Anatomy

```tsx
// Interface
interface UserCardProps {
  user: User;
  onEdit: (id: string) => void;
}

// Presentation Component
export const UserCard = ({ user, onEdit }: UserCardProps) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <Button onClick={() => onEdit(user.id)}>Edit</Button>
    </div>
  );
};
```

### Custom Hook

```tsx
export const useUser = (id: string) => {
  const { data, error } = useSWR(`/api/users/${id}`);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
```

## 4. Maintenance (The Law)

- **Review**: If a component exceeds 100 lines, split it.
- **Audit**: Check for inline arrow functions in render (causes re-renders).
