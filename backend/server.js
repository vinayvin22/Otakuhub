const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/articles', require('./routes/articleRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));

// Standard route for testing
app.get('/', (req, res) => {
  res.send('Otakuhub API is running...');
});

const PORT = process.env.PORT || 5000;

// Only listen if not in a serverless environment (like Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
