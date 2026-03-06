<<<<<<< HEAD
# Otakkuhub - Full-stack Anime Articles Web Application

Otakkuhub is a premium web application for anime enthusiasts to read articles, like their favorite content, and engage with the community.

## Tech Stack
- **Frontend**: React.js (Vite), Axios, Lucide-React
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Authentication**: JWT, Bcrypt.js

## Features
- **User Auth**: Secured signup and login with hashed passwords.
- **Article System**: Dynamic grid of anime articles with 4 cards per row.
- **Interactions**: Like articles (requires login).
- **Responsive Design**: Premium dark-themed UI with glassmorphism.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB running locally (default: `mongodb://localhost:27017/otakkuhub`)

### Backend Setup
1. CD into `backend`
2. Run `npm install`
3. Seed the database with sample anime articles:
   ```bash
   npm run seed
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. CD into `frontend`
2. Run `npm install`
3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/articles` - Fetch all articles
- `POST /api/articles/:id/like` - Like/Unlike an article
=======
# OTAKUHUB

OTAKUHUB is a full-stack anime web application where users can explore, like, and review anime articles organized by categories.

## 📁 Project Structure

```
otakkuhub/
├── frontend/     # React.js frontend
├── backend/      # Node.js + MongoDB backend
└── README.md
```

## 🚀 Features

- User signup/login with JWT authentication
- Anime articles display by category (4 per row)
- Like, comment, and review functionality
- Responsive design with background image
- Real image support for anime articles
- MongoDB used to store users, articles, categories

## 🛠️ Tech Stack

- Frontend: React, HTML, CSS
- Backend: Node.js, Express.js, MongoDB
- Tools: Axios, JWT, Nodemon, Mongoose

## ⚙️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/otakuhub.git
   cd otakuhub
   ```

2. Install dependencies:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Start the development servers:

   - Frontend (React):
     ```bash
     cd frontend
     npm start
     ```

   - Backend (Node + MongoDB):
     ```bash
     cd backend
     nodemon node server.js
     ```

## 🙌 Acknowledgments

Built as a passion project by a BE (CSE) student exploring the world of full-stack web development and anime fandom.
>>>>>>> ba4c7bbf8e6937ca57e177b24abf839e0406b928
