# Backend Practical Exam – Node.js API

## Base URL
http://localhost:5000/v1

---

## 🔐 Authentication APIs

| Method | API Path | Auth Required |
|------|---------|---------------|
| POST | /auth/register | No |
| POST | /auth/login | No |
| GET  | /auth/profile | Yes (JWT) |

---

## 📝 Post APIs

| Method | API Path | Auth Required |
|------|---------|---------------|
| POST | /posts | Yes (JWT) |
| GET  | /posts?limit=&skip= | No |
| POST | /posts/:id/like | Yes (JWT) |
| GET  | /posts/user/:userId | No |

---

## 🛠 Tech Stack
- Node.js (Express.js)
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt
- dotenv

---

## 🚀 Run Project

```bash
npm install
npm start

## 🔑 Authorization Header (Protected APIs)

