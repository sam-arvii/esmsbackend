# Elevator Service Management System (ESMS)

 A scalable, production-ready Elevator Service Management System (ESMS) built with **Node.js**, **Express.js**, **TypeScript**, **Prisma**, and **PostgreSQL** following clean architecture, layered design, and enterprise software engineering principles.

---

## Overview

The Elevator Service Management System (ESMS) is a backend platform designed to digitize and automate elevator maintenance operations for service companies.

The system replaces manual complaint handling, technician assignment, paper-based job cards, and invoice generation with a centralized RESTful API that manages the complete service lifecycle.

The project is designed with scalability, maintainability, and security in mind, making it suitable for deployment in real-world enterprise environments.

---

## Key Features

### Authentication & Authorization

- JWT Authentication
- Refresh Token Support
- Role-Based Access Control (RBAC)
- Secure Password Hashing (bcrypt)

### Customer Management

- Customer Registration
- Building Management
- Elevator Registration
- AMC Tracking

### Job Management

- Job Card Creation
- Technician Assignment
- Repair Tracking
- Fault Recording
- Service Completion Workflow

### Technician Management

- Technician Profiles
- Assigned Jobs
- Service History
- Work Status

### Inventory Management

- Spare Part Catalog
- Repair Master
- Fault Master

### Invoice & Payments

- Invoice Generation
- Payment Tracking
- GST Ready
- QR Payment Support

### Media Management

- Upload Service Images
- Store Job Attachments

### Notifications

- Service Notifications
- Invoice Notifications
- Complaint Updates

---

# Technology Stack

| Layer | Technology |
|--------|------------|
| Language | TypeScript |
| Runtime | Node.js |
| Framework | Express.js |
| Database | PostgreSQL |
| ORM | Prisma ORM |
| Authentication | JWT |
| Validation | Zod |
| Logging | Pino |
| HTTP Logging | Morgan |
| Security | Helmet, CORS |
| Password Encryption | bcrypt |

---

# Project Structure

```
esmsbackend/

├── assets/
├── docs/
├── prisma/
├── scripts/
├── src/
│
├── config/
├── controllers/
├── middleware/
├── repositories/
├── routes/
├── services/
├── utils/
├── validators/
│
├── app.ts
└── server.ts
```

---

# System Architecture

The backend follows a **Layered Architecture** to ensure separation of concerns and maintainability.

```
Client

↓

Express Router

↓

Authentication Middleware

↓

Authorization Middleware

↓

Validation Middleware

↓

Controller Layer

↓

Service Layer

↓

Repository Layer

↓

Prisma ORM

↓

PostgreSQL
```

A detailed architecture diagram is available in:

```
docs/architecture.md
```

---

# Request Lifecycle

1. Client sends HTTP Request

2. Express Router identifies endpoint

3. Authentication Middleware verifies JWT

4. Authorization Middleware checks user permissions

5. Validation Middleware validates request body

6. Controller handles HTTP request

7. Service executes business logic

8. Repository communicates with database

9. Prisma generates SQL

10. PostgreSQL returns response

11. Controller sends HTTP Response

---

# Database Design

The database is designed following **Third Normal Form (3NF)** to reduce redundancy and maintain data consistency.

### Master Tables

- Users
- Roles
- Customers
- Buildings
- Elevators
- Fault Master
- Repair Master
- Spare Part Master
- Payment Methods

### Transaction Tables

- Complaints
- Job Cards
- Job Repairs
- Invoices
- Invoice Items
- Payments

### System Tables

- Notifications
- Sessions
- Refresh Tokens
- Media
- Audit Logs
- Settings

The complete ER Diagram can be found in:

```
docs/database.md
```

---

# API Modules

```
/api/v1/auth

/api/v1/users

/api/v1/customers

/api/v1/buildings

/api/v1/elevators

/api/v1/jobcards

/api/v1/faults

/api/v1/repairs

/api/v1/technicians

/api/v1/invoices

/api/v1/payments

/api/v1/media

/api/v1/notifications
```

---

# Backend Design Principles

- Clean Architecture
- Layered Architecture
- Repository Pattern
- Service Layer Pattern
- SOLID Principles
- DRY Principle
- RESTful API Design
- Modular Codebase
- Type Safety
- Centralized Error Handling

---

# Security Features

- JWT Authentication
- Role-Based Authorization
- Password Hashing using bcrypt
- Input Validation using Zod
- Secure HTTP Headers (Helmet)
- CORS Protection
- Environment-Based Configuration
- Request Logging
- Error Logging

---

# Logging

The application uses structured logging with **Pino**.

HTTP requests are logged using **Morgan**.

Application logs include:

- Request Logs
- Error Logs
- Warning Logs
- Database Errors
- Authentication Events

---

# Error Handling

The backend uses centralized error handling.

Errors are categorized as:

- Validation Errors
- Authentication Errors
- Authorization Errors
- Business Logic Errors
- Database Errors
- Internal Server Errors

---

# Configuration

Environment variables are managed using `.env` files.

Example:

```
PORT=5000

DATABASE_URL=

JWT_SECRET=

JWT_REFRESH_SECRET=

NODE_ENV=development
```

---

# Installation

Clone repository

```bash
git clone https://github.com/sam-arvii/esmsbackend.git
```

Install dependencies

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Start development server

```bash
npm run dev
```

---

# Documentation

Additional documentation is available inside the **docs** directory.

```
docs/

├── architecture.md

├── api-design.md

├── deployment.md

├── swagger.yaml
```

---

# Roadmap

## Version 1 (Current)

- Authentication
- Customer Management
- Complaint Management
- Job Cards
- Invoice Module
- Payment Module

## Version 2

- Technician GPS Tracking
- Push Notifications
- WhatsApp Integration
- SMS Integration

## Version 3

- IoT Sensor Integration
- Predictive Maintenance
- AI Fault Detection
- Analytics Dashboard

---

# Future Improvements

- Docker
- Docker Compose
- Kubernetes
- Redis Caching
- RabbitMQ
- CI/CD Pipeline
- Unit Testing
- Integration Testing
- API Rate Limiting
- OpenTelemetry
- Prometheus
- Grafana

---

# License

This project is licensed under the MIT License.

---

# Author

**Samruddhi Karkande**

B.Tech – Artificial Intelligence & Data Science

KJ Somaiya Institute of Technology

---

# Acknowledgements

This project was developed as a real-world backend solution to modernize elevator maintenance operations through scalable software architecture and enterprise backend engineering practices.
