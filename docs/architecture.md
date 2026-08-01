# System Architecture

## High-Level Architecture

The ESMS backend follows a layered architecture to ensure scalability, maintainability, and separation of concerns.

![System Architecture](./ESMS%20Backend%20architecture%20.drawio%20(1)%20(1).png)

---

## Request Flow

Client

↓

Express Router

↓

Authentication Middleware

↓

Authorization Middleware

↓

Validation

↓

Controller

↓

Service

↓

Repository

↓

Prisma ORM

↓

PostgreSQL
