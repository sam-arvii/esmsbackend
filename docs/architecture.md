# System Architecture

## High-Level Architecture

The ESMS backend follows a layered architecture to ensure scalability, maintainability, and separation of concerns.

![docs/ESMS Backend architecture .drawio (1) (1).png](docs/ESMS Backend architecture .drawio (1) (1).png)

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
