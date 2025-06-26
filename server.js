require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/sensor-data', require('./routes/sensorData'));
// app.use('/api/alerts', require('./routes/alerts'));
// app.use('/api/device', require('./routes/device'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});