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



## Profile Picture Upload

### POST /users/profile/photo

Uploads a profile picture for the authenticated user. The file is saved to the `/uploads/` folder and the user's `photo` field is updated. The uploaded image is then publicly accessible at `http://localhost:3000/uploads/<filename>`.

**Headers**
```
Authorization: Bearer <your_token_here>
```
> Do NOT set `Content-Type` manually — Postman sets it automatically to `multipart/form-data` with the correct boundary when you use the form-data body type.

**Body** — `form-data`
| Key   | Type | Value                  |
|-------|------|------------------------|
| photo | File | _(select an image file)_ |

**Success Response** `200`
```json
{
  "_id": "69df9bf80b4f8fdeaeb113ec",
  "name": "John Doe",
  "email": "john@example.com",
  "photo": "user-69df9bf80b4f8fdeaeb113ec-1776945862000.jpg"
}
```

**Error Responses**
- `400` — No file uploaded, or file is not an image
- `401` — Missing or invalid token
- `404` — User not found
- `500` — Server error

---

## Testing Profile Picture Upload in Postman (Step-by-Step)

Use this pre-made token to test without logging in first:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZGY5YmY4MGI0ZjhmZGVhZWIxMTNlYyIsImlhdCI6MTc3Njk0NTg2MiwiZXhwIjoxNzc3NTUwNjYyfQ.G65CIc9fhZwmh_C2o_ZC3kudvNqXWycEQbWX4j9GiOM
```

**Step 1 — Create a new request**
- Click **New** → **HTTP Request**
- Set the method to **POST**
- Enter the URL: `http://localhost:3000/users/profile/photo`

**Step 2 — Add the Authorization header**
- Click the **Headers** tab
- Add a new header:
  - Key: `Authorization`
  - Value: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZGY5YmY4MGI0ZjhmZGVhZWIxMTNlYyIsImlhdCI6MTc3Njk0NTg2MiwiZXhwIjoxNzc3NTUwNjYyfQ.G65CIc9fhZwmh_C2o_ZC3kudvNqXWycEQbWX4j9GiOM`

**Step 3 — Set up the body**
- Click the **Body** tab
- Select **form-data** (not raw, not x-www-form-urlencoded)
- Add a new row:
  - Key: `photo` — hover over the key field and change the type dropdown from **Text** to **File**
  - Value: click **Select Files** and choose any `.jpg`, `.png`, or `.gif` from your computer

**Step 4 — Send**
- Click **Send**
- A `200` response with the updated user object confirms success
- Your uploaded file will be accessible at `http://localhost:3000/uploads/<photo_filename>`
