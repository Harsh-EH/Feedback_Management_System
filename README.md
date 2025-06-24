# 💬 Feedback Management System

A secure, full-stack Feedback Management System where users can submit feedback and administrators can securely manage submissions. Built with **Node.js**, **Express**, **MongoDB**, and **React.js**, it ensures secure handling of data with JWT authentication and bcrypt encryption.

---

## 🚀 Live Demo

- 🔗 **Frontend**: [feedback-management-system-kappa.vercel.app](https://feedback-management-system-kappa.vercel.app)  
- 🔗 **Backend**: [feedback-management-system-tnca.onrender.com](https://feedback-management-system-tnca.onrender.com)  
- 🔐 **Admin Login**: [/admin/login](https://feedback-management-system-kappa.vercel.app/admin/login)  
- 📝 **User Feedback Form**: [/feedback](https://feedback-management-system-kappa.vercel.app/feedback)

---

## 🧪 Tech Stack

**Backend**:  
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)  
![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white)  
![bcrypt](https://img.shields.io/badge/bcrypt-003A70?style=flat&logo=bcrypt&logoColor=white)
**Frontend**:  
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)  
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
**DevOps & Tools**:  
![Render](https://img.shields.io/badge/Backend-Hosted%20on%20Render-green)  
![Vercel](https://img.shields.io/badge/Frontend-Hosted%20on%20Vercel-black)  
![Postman](https://img.shields.io/badge/Tested%20With-Postman-orange)

---

## 💡 Features

- ✅ **User Feedback Form** (Name, Email, Message, Rating 1–5)
- ✅ **Secure Admin Login** with JWT authentication
- ✅ **Admin Dashboard** to view and delete feedbacks
- ✅ **Password Encryption** using bcrypt
- ✅ **Protected Routes** for administrative actions
- ✅ **Robust Error Handling** and input validation
- ✅ **Environment Configuration** using `dotenv`
- ✅ **Fully Deployed** using Render (API) and Vercel (Frontend)

---

## 📁 Project Structure

```bash
/feedback-management-system
├── secure-feedback-api/         # Backend (Node + Express + MongoDB)
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   └── server.js
├── secure-feedback-client/      # Frontend (React + Bootstrap)
│   ├── components/
│   ├── pages/
│   └── App.js
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Prerequisites

- Node.js & npm
- MongoDB Atlas (or local instance)
- Git

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/your-username/feedback-management-system.git
cd feedback-management-system
```

### 3. Backend Setup (`secure-feedback-api`)

```bash
cd secure-feedback-api
npm install

# Create a .env file using .env.example
cp .env.example .env

# Start the backend server
npm start
```

### 4. Frontend Setup (`secure-feedback-client`)

```bash
cd ../secure-feedback-client
npm install

# Start the React frontend
npm start
```

---

## 📡 API Endpoints

| Method | Route                      | Access      | Description                        |
|--------|----------------------------|-------------|------------------------------------|
| POST   | `/api/feedback`            | Public      | Submit feedback                    |
| GET    | `/api/feedback`            | Admin Only  | Get all feedback                   |
| DELETE | `/api/feedback/:id`        | Admin Only  | Delete feedback by ID              |
| POST   | `/api/admin/login`         | Public      | Admin login (returns JWT)          |

---

## 🖼️ Screenshots

- [📥 User Feedback Page (Form UI)!](image-2.png)
- [🔐 Admin Login Page!](image.png)
- [🗂️ Admin Dashboard (Feedback list with delete)!](image-1.png)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- Bootstrap for styling
- MongoDB Atlas for free cloud DB
- Render & Vercel for deployment
- [jwt.io](https://jwt.io/) and bcrypt.js for secure authentication

👨‍💻 Author
Harsh Kasana
📧 [Mail](harshkasana94@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/harsh-kasana-0328b030a/) | [GitHub](https://github.com/Harsh-EH)