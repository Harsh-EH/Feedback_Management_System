const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');

// Load env variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://feedback-management-system-two.vercel.app'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};


app.use(cors(corsOptions));

// Middleware to parse JSON body
app.use(express.json());

// Mount routes
app.use('/api/feedback', feedbackRoutes);
app.use('/api/auth', authRoutes);

// Health check route (for Render browser test)
app.get('/', (req, res) => {
  res.send('✅ Feedback Management API is running!');
});

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
