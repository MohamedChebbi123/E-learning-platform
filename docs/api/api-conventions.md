# API Conventions

## Base URL

```text
/api/v1
```

Examples:

```text
/api/v1/auth
/api/v1/courses
/api/v1/quizzes
```

---

## Resource Naming

### Correct

```text
GET    /courses
GET    /courses/{id}
POST   /courses
PUT    /courses/{id}
DELETE /courses/{id}
```

### Incorrect

```text
/getCourses
/createCourse
/deleteCourse
```

---

## Response Format

Success:

```json
{
  "success": true,
  "message": "Course created",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": []
}
```

---

## HTTP Status Codes

| Code | Usage |
|--------|--------|
| 200 | Success |
| 201 | Created |
| 204 | Deleted |
| 400 | Validation Error |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 500 | Internal Error |

---

## Pagination

```text
GET /courses?page=0&size=20&sort=title,asc
```

Response:

```json
{
  "content": [],
  "page": 0,
  "size": 20,
  "totalElements": 100
}
```

---

## Versioning

```text
/api/v1/*
```

Future:

```text
/api/v2/*
```
