# 💬 Chatify — Real-Time Chat Application

A modern real-time chat application built using the **MERN stack** and **Socket.IO**, enabling instant messaging, secure authentication, online presence, typing indicators, and media sharing.

---

## ✨ **Features**

* 🔐 **Secure user authentication (JWT)**
* ⚡ **Real-time messaging with Socket.IO**
* 🟢 **Online / offline user status**
* ✍️ **Typing Indicators**
* 📨 **Persistent chat history (MongoDB)**
* 📸 **Image & file uploads (Cloudinary)**
* 🎨 **Modern Responsive UI (React + Vite)**

---

## 📁 **Project Structure**

```
chattify-web-app-main/
├── server/         # Express API + Socket.IO
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   └── lib/
│   └── package.json
├── client/        # React (Vite)
│   ├── src/
│   └── package.json
└── package.json     # root scripts
```

---

## 🛠️ **Tech Stack**

| Layer            | Tools Used                        |
| ---------------- | --------------------------------- |
| 🎨 **Frontend**  | React, Vite, Tailwind / Custom UI |
| 🧠 **Backend**   | Node.js, Express                  |
| ⚡ **Realtime**   | Socket.IO                         |
| 🗄️ **Database** | MongoDB + Mongoose                |
| 🔐 **Auth**      | JWT, bcrypt                       |
| ☁️ **Storage**   | Cloudinary                        |

---

## 🚀 **Getting Started**

### **1️⃣ Install dependencies**

```bash
npm build
```

### **2️⃣ Run the project**

```bash
npm start
```

---

## ⚙️ **Environment Variables**

Create a `.env` inside `/server`:

```env
PORT=5000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
```

---

## 📄 **License**
This project is open-source under the **MIT License**.

---
