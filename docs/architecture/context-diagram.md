```mermaid
flowchart TD

Student[Student]
Instructor[Instructor]
Admin[Admin]

Frontend[Next.js Frontend]

Gateway[API Gateway]

UserService[User Service]
CourseService[Course Service]
QuizService[Quiz Service]
PaymentService[Payment Service]
NotificationService[Notification Service]
AnalyticsService[Analytics Service]

RabbitMQ[RabbitMQ]

Student --> Frontend
Instructor --> Frontend
Admin --> Frontend

Frontend --> Gateway

Gateway --> UserService
Gateway --> CourseService
Gateway --> QuizService
Gateway --> PaymentService
Gateway --> NotificationService
Gateway --> AnalyticsService

UserService --> RabbitMQ
CourseService --> RabbitMQ
QuizService --> RabbitMQ
PaymentService --> RabbitMQ
NotificationService --> RabbitMQ
AnalyticsService --> RabbitMQ
```
