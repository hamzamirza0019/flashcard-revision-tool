# Student Flashcard & Revision Tool - Backend

A scalable backend API for a Student Flashcard & Revision Tool built using **Express.js**, **TypeScript**, and **PostgreSQL**.
The project follows a clean architecture approach with proper route separation, service layers, centralized error handling, and UUID-based relational database design.

---

# 🚀 Features

* Deck Management APIs
* Flashcard CRUD APIs
* PostgreSQL Database Integration
* UUID-based Schema Design
* RESTful API Architecture
* Centralized Error Handling
* Async Error Wrapper
* Structured API Responses
* Clean Folder Structure
* TypeScript Support

---

# 🛠️ Tech Stack

* Node.js
* Express.js
* TypeScript
* PostgreSQL
* pg (node-postgres)
* UUID
* ts-node-dev

---

# 📁 Project Structure

```bash
src/
├── config/
│   └── db.ts
│
├── controllers/
│   └── flashcard.controllers.ts
│
├── middlewares/
│   └── error.middlewares.ts
│
├── routes/
│   └── flashcard.routes.ts
│
├── services/
│   └── flashcard.services.ts
│
├── types/
│   └── flashcard.types.ts
│
├── utils/
│   ├── ApiError.ts
│   ├── ApiResponce.ts
│   └── asyncHandler.ts
│
├── app.ts
└── server.ts
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000
DATABASE_URL=postgresql://postgres:your_password@localhost:5000/flashcards
```

---

# 🧩 Database Schema

## Decks Table

```sql
CREATE TABLE decks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## Flashcards Table

```sql
CREATE TABLE flashcards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    deck_id UUID NOT NULL REFERENCES decks(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

---

# 📌 API Endpoints

## Deck APIs

### Create Deck

```http
POST /api/decks
```

### Get All Decks

```http
GET /api/decks
```

### Delete Deck

```http
DELETE /api/decks/:id
```

---

## Flashcard APIs

### Create Flashcard

```http
POST /api/decks/:id/cards
```

### Get Cards By Deck

```http
GET /api/decks/:id/cards
```

### Get Single Flashcard

```http
GET /api/decks/:id/cards/:cardId
```

### Update Flashcard

```http
PUT /api/decks/:id/cards/:cardId
```

### Delete Flashcard

```http
DELETE /api/decks/:id/cards/:cardId
```

---

# ▶️ Running Locally

## 1. Clone Repository

```bash
git clone <your-repository-url>
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create `.env` file and add:

```env
PORT=8000
DATABASE_URL=postgresql://postgres:your_password@localhost:5000/flashcards
```

---

## 4. Start Development Server

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:8000
```

---

# 🧪 API Testing

All endpoints were tested using:

* Postman
* PostgreSQL (pgAdmin)

Edge cases tested:

* Invalid UUID handling
* Missing required fields
* Empty responses
* Database connection failures
* Foreign key constraints

---

# 🧠 Architectural Highlights

* Clean separation of concerns
* Controller-Service architecture
* Reusable async error handling
* Centralized global error middleware
* Parameterized SQL queries (prevents SQL Injection)
* UUID-based relational modeling

---

# 🔐 Current Authentication Status

Authentication is not implemented yet.
A temporary placeholder `userId` is currently used for testing and database ownership simulation.

Example:

```ts
const userId = "11111111-1111-1111-1111-111111111111";
```

This structure allows easy future integration of JWT authentication.

---

# 🚀 Future Improvements

* JWT Authentication
* Validation Middleware (Zod/Joi)
* Pagination
* Swagger API Documentation
* Unit & Integration Testing
* Docker Support
* Rate Limiting
* Logging System

---

# 📚 Learning Outcomes

This project helped strengthen understanding of:

* REST API Design
* Express.js Architecture
* PostgreSQL Relationships
* UUID-based Database Modeling
* Error Handling Strategies
* Git Branching & Pull Requests
* Backend Debugging Techniques

---

# 👨‍💻 Author

Hamza Mirza

---
