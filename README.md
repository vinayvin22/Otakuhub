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
