```mermaid
flowchart TD

Developer[Developer]

DockerCompose[Docker Compose]

Frontend[Frontend :3000]

Gateway[Gateway :8080]

UserService[User Service :8081]
CourseService[Course Service :8082]
QuizService[Quiz Service :8083]
PaymentService[Payment Service :8084]
NotificationService[Notification Service :8085]
AnalyticsService[Analytics Service :8086]

Postgres[(PostgreSQL)]
Redis[(Redis)]
RabbitMQ[(RabbitMQ)]
MinIO[(MinIO)]

Developer --> DockerCompose

DockerCompose --> Frontend
DockerCompose --> Gateway

DockerCompose --> UserService
DockerCompose --> CourseService
DockerCompose --> QuizService
DockerCompose --> PaymentService
DockerCompose --> NotificationService
DockerCompose --> AnalyticsService

DockerCompose --> Postgres
DockerCompose --> Redis
DockerCompose --> RabbitMQ
DockerCompose --> MinIO
```
