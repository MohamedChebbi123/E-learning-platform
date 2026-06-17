# ADR-0001: Project Foundations

## Status

Accepted

## Date

2026-06-17

---

## Context

The project requires:

- Scalability
- Maintainability
- Team collaboration
- Portfolio-quality architecture

The team consists of 2 developers building an E-Learning Platform over a summer period.

---

## Decision

Adopt:

- Microservices Architecture
- Event-Driven Communication
- Database Per Service
- Next.js Frontend
- Spring Boot Backend
- RabbitMQ Messaging
- PostgreSQL Databases
- Docker Compose for Local Development

---

## Consequences

### Positive

- Independent service ownership
- Clear domain boundaries
- Easier future scaling
- Real-world architecture experience

### Negative

- Increased complexity
- Service communication overhead
- More deployment artifacts

---

## Alternatives Considered

- Modular Monolith
- Serverless Architecture

Rejected because the goal is learning distributed systems and microservices.
