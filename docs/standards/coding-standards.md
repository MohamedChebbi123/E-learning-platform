# Coding Standards

## General Principles

1. Readability > Cleverness
2. Consistency > Personal Preference
3. Simplicity First
4. Small Focused Functions
5. Single Responsibility Principle

---

# Java Standards

## Naming

Classes:

```java
CourseService
CourseController
CourseRepository
```

Variables:

```java
courseId
userProfile
```

Constants:

```java
MAX_FILE_SIZE
JWT_EXPIRATION
```

---

## Dependency Injection

Only constructor injection.

✅

```java
@RequiredArgsConstructor
@Service
public class CourseServiceImpl {}
```

❌

```java
@Autowired
private CourseRepository repository;
```

---

## DTO Usage

Never expose entities.

✅

```java
CourseResponse
```

❌

```java
Course
```

---

## Formatting

Auto-enforced via Spotless (Google Java Format):

```bash
mvn spotless:check   # verify
mvn spotless:apply   # auto-fix
```

## Logging

Use:

```java
@Slf4j
```

Never log:

- Passwords
- Tokens
- Secrets

---

# Frontend Standards

## Component Naming

```tsx
CourseCard.tsx
CourseForm.tsx
EnrollmentButton.tsx
```

---

## Hooks

```tsx
useCourses()
useCourse()
useAuth()
```

---

## Types

```tsx
Course
User
ApiResponse<T>
```

No `any`.

---

## Formatting

Auto-enforced via Prettier:

```bash
npm run format       # auto-fix
npm run format:check # verify
```

## State Management

React Query:

```tsx
Server State
```

Zustand:

```tsx
Client State
```

Never mix both.
