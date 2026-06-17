# E-Learning Platform

> Production-grade microservices-based E-Learning Platform built to demonstrate Software Architecture, System Design, Full-Stack Development, DevOps, Security, AI Integration, and Web3 concepts.

---

# Project Overview

This project is a summer engineering initiative focused on building an enterprise-style online learning platform similar to Udemy or Coursera.

The platform allows:

### Students
- Register and login
- Browse courses
- Enroll in courses
- Watch lessons
- Complete quizzes
- Track learning progress
- Receive certificates

### Instructors
- Create and manage courses
- Upload lessons and videos
- Create quizzes
- Monitor student progress

### Administrators
- Manage users
- Moderate courses
- View platform analytics
- Manage notifications

---

# Architecture

```text
Frontend (Next.js)
       |
API Gateway
       |
------------------------------------------------
| User Service | Course Service | Quiz Service |
| Payment      | Notification   | Analytics    |
------------------------------------------------
       |
 Message Broker (RabbitMQ)
       |
PostgreSQL + Redis + MinIO
```

---

# Technology Stack

## Frontend

- Next.js 14
- TypeScript
- TailwindCSS
- React Query
- Zustand
- React Hook Form
- Zod

## Backend

- Java 21
- Spring Boot 3.4
- Spring Cloud Gateway
- Spring Security
- Spring Data JPA
- RabbitMQ
- MapStruct
- Lombok

## Infrastructure

- Docker Compose
- Dev Containers
- PostgreSQL
- Redis
- RabbitMQ
- MinIO

---

# Repository Structure

```text
elearning-platform/
│
├── docs/
├── frontend/
│   └── web/
│
├── backend/
│   ├── api-gateway/
│   ├── services/
│   │   ├── user-service/
│   │   ├── course-service/
│   │   ├── quiz-service/
│   │   ├── payment-service/
│   │   ├── notification-service/
│   │   └── analytics-service/
│   │
│   └── shared/
│
├── infrastructure/
│
├── scripts/
│
├── docker-compose.yml
└── README.md
```

---

# Getting Started

## Prerequisites

Install:

- Docker Desktop
- Docker Compose
- Git
- VS Code
- Dev Containers Extension

---

# Clone Repository

```bash
git clone <repository-url>
cd elearning-platform
```

---

# Environments

## Development

Run infrastructure in Docker, services locally with hot reload:

```bash
make infra
make frontend   # terminal 1
make backend    # terminal 2
```

## Staging

Full environment — all services build from source and run inside Docker. This is the pre-production staging environment.

```bash
make staging
```

Or directly:

```bash
docker compose up -d --build
```

Verify containers:

```bash
docker ps
```

---

# Stop Environment

```bash
make down
# or
docker compose down
```

---

# Service Ports

| Service | Port |
|----------|--------|
| Frontend | 3000 |
| API Gateway | 8080 |
| User Service | 8081 |
| Course Service | 8082 |
| Quiz Service | 8083 |
| Payment Service | 8084 |
| Notification Service | 8085 |
| Analytics Service | 8086 |
| PostgreSQL | 5432 |
| Redis | 6379 |
| RabbitMQ | 5672 |
| RabbitMQ Management | 15672 |
| MinIO API | 9000 |
| MinIO Console | 9001 |

---

# Development Workflow

### Create Feature Branch

```bash
git checkout develop
git pull

git checkout -b feature/my-feature
```

### Commit Changes

```bash
git add .
git commit -m "feat: add course enrollment"
```

### Push Branch

```bash
git push origin feature/my-feature
```

### Open Pull Request

Requirements:

- Code reviewed
- CI passing
- Documentation updated

---

# Project Phases

## Phase 0
- Discovery
- Requirements
- Architecture
- Backlog
- Diagrams

## Phase 1
- Authentication

## Phase 2
- Course Management

## Phase 3
- Enrollment

## Phase 4
- Video Streaming

## Phase 5
- Quiz System

## Phase 6
- Notifications

## Phase 7
- Payments

## Phase 8
- Analytics

## Phase 9
- AI Features

## Phase 10
- Web3 Features

## Phase 11
- Security Hardening

## Phase 12
- Production Readiness

---

# Team Members

| Name | Role |
|--------|--------|
| Iyadh | Backend / Architecture |
| Hunter | Frontend / Full Stack |

> Update this section as new contributors join the project.

---

# Documentation

Project documentation is located inside:

```text
docs/
```

Including:

- Architecture Diagrams
- ER Diagrams
- API Specifications
- Security Documentation
- Sprint Planning
- Product Backlog
- ADRs (Architecture Decision Records)

---

# Definition of Done

A feature is complete only if:

- [ ] Implementation completed
- [ ] Unit tests added
- [ ] Integration tests pass
- [ ] Documentation updated
- [ ] Code reviewed
- [ ] CI pipeline passes
- [ ] Feature tested locally
- [ ] No critical bugs remain

---

# License

This project is developed for educational, portfolio, and learning purposes.