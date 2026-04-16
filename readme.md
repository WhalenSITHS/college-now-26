# College Now 26 API

Base URL: `http://localhost:3000`

---

## User Routes

### POST /users/register

Creates a new user account and returns a JWT token.

**Headers**
```
Content-Type: application/json
```

**Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response** `201`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses**
- `400` — Email already in use
- `500` — Server error

---

### POST /users/login

Authenticates an existing user and returns a JWT token.

**Headers**
```
Content-Type: application/json
```

**Body**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response** `200`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses**
- `401` — Invalid credentials
- `500` — Server error

---

## Authentication

Protected routes require a Bearer token in the `Authorization` header. Use the token returned from `/users/register` or `/users/login`.

**Header**
```
Authorization: Bearer <your_token_here>
```

---

## Postman Quick Reference

Paste these directly into Postman:

### Register
```
POST http://localhost:3000/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```
POST http://localhost:3000/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Authenticated Request Example (Pokemon)
```
GET http://localhost:3000/pokemon
Authorization: Bearer <token_from_login>
```
