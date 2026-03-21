# 🛒 CodeAlpha Ecommerce Store

A backend-powered **E-commerce Store API** developed using **Node.js, Express.js, and MongoDB**.  
This project demonstrates how an online store manages users, products, and orders through RESTful APIs.

The application follows a **scalable backend architecture** commonly used in modern e-commerce platforms.
 
---        
  
# 🚀 Features

### 🔐 User Authentication
- Secure user registration and login
- Password hashing using bcryptjs
- Authentication using JWT tokens

### 🛍 Product Management
- Create new products
- View all products
- Update product details
- Delete products

### 📦 Order Management
- Place orders
- Store order details in MongoDB
- Retrieve order history

### 🌐 REST API Architecture
- Modular backend structure
- Scalable Express.js API
- Clean separation of routes, models, and middleware

---

# 🛠 Tech Stack

## Backend
Node.js  
Express.js  

## Database
MongoDB Atlas  
Mongoose ODM  

## Authentication
JWT (JSON Web Token)  
bcryptjs  

## Tools
Postman  
Git & GitHub  

--- 

# 📂 Project Structure

backend
│
├── models
│   ├── User.js
│   ├── Product.js
│   └── Order.js
│
├── routes
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── config
│   └── db.js
│
├── middleware
│   └── authMiddleware.js
│
├── server.js
├── package.json
└── .env

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/SadhvikaNallathigala/CodeAlpha_EcommerceStore.git

---

### 2️⃣ Navigate to backend

cd CodeAlpha_EcommerceStore/backend

---

### 3️⃣ Install dependencies

npm install

---

### 4️⃣ Create environment variables

Create a `.env` file

MONGO_URI=your_mongodb_connection_string  
PORT=5000  
JWT_SECRET=secret123  

---

### 5️⃣ Start the server

npx nodemon server.js

Server will run on:

http://localhost:5000

---

# 🔗 API Endpoints

## User APIs

POST /api/users/register → Register new user  
POST /api/users/login → Login user  

---

## Product APIs

POST /api/products → Add new product  
GET /api/products → Get all products  
PUT /api/products/:id → Update product  
DELETE /api/products/:id → Delete product  

---

## Order APIs

POST /api/orders → Place order  
GET /api/orders → Get all orders  

---

# 🗄 Database Schema

## Users

name  
email  
password  

---

## Products

name  
price  
description  
category  

---

## Orders

user  
products  
totalAmount  

---

# 📸 Example Workflow

1️⃣ User registers an account  
2️⃣ User logs into the system  
3️⃣ Admin adds products  
4️⃣ Users browse product list  
5️⃣ User places an order  

---

# 📈 Future Improvements

- Payment gateway integration
- Shopping cart system
- Product search and filtering
- Admin dashboard
- Frontend using React.js

---

# 👩‍💻 Author

**Sadhvika Nallathigala**

Full Stack Developer | MERN Stack Enthusiast

GitHub  
https://github.com/SadhvikaNallathigala

---

# 📜 License

This project was developed for educational and internship purposes.
