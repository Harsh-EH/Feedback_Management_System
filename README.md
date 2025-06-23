# 🛡️ Secure Feedback API – Mini Project

## 🎯 Objective

A secure, full-stack feedback management system where users can submit feedback and an admin can view and manage it. This system demonstrates the use of **RESTful APIs**, **MongoDB integration**, **JWT authentication**, and **secure backend development**.

---

## 🧑‍💻 Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT, bcrypt
- **Testing Tool:** Postman
- **Deployment:** Render (API), Vercel/Netlify (Frontend)

---

## 🗂️ Folder Structure

```
Secure_Feedback_API_Mini-Project/
│
├── secure-feedback-api/       ← Backend API (Node.js + Express)
└── secure-feedback-client/    ← Frontend (React.js)
```

---

## 🚀 Getting Started

### ⚙️ Backend Setup

```bash
cd secure-feedback-api
npm install
cp .env.example .env
# Edit .env and add your Mongo URI and JWT secret
node server.js
```

---

### 🌐 Frontend Setup

```bash
cd secure-feedback-client
npm install
npm start
```

---

## 📦 .env.example (Backend)

Create a `.env` file in `secure-feedback-api/` like this:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📮 API Endpoints

### ✅ USER ROUTES

| Method | Route            | Description                      |
|--------|------------------|----------------------------------|
| POST   | /api/feedback     | Submit feedback (public)         |

### 🔐 ADMIN ROUTES (JWT Protected)

| Method | Route                       | Description                  |
|--------|-----------------------------|------------------------------|
| POST   | /api/auth/login             | Admin login                  |
| GET    | /api/feedback/admin         | Get all feedback             |
| GET    | /api/feedback/:id           | Get single feedback by ID    |
| DELETE | /api/feedback/:id           | Delete feedback by ID        |

---

## 🧪 Postman Collection

Test the API using Postman. Import this file:

📁 `SecureFeedback.postman_collection.json` (Add your exported collection here)

---

## 🔐 Security

- All sensitive routes are protected using **JWT**.
- Admin passwords are **hashed using bcrypt**.
- Environment secrets are handled using **dotenv**.

---

## 🚀 Deployment

- Backend hosted on [Render](https://render.com)
- Frontend hosted on [Vercel](https://vercel.com) or [Netlify](https://netlify.com)

---

## 👨‍💻 Author

**Harsh Kasana**  
📧 harshkasana94@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/harsh-kasana-0328b030a) | [GitHub](https://github.com/Harsh-EH)