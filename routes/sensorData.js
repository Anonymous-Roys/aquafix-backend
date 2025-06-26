const express = require('express');
const router = express.Router();
const SensorData = require('../models/SensorData');

// Get latest sensor data
router.get('/', async (req, res) => {
  try {
    const data = await SensorData.findOne().sort({ timestamp: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new sensor data
router.post('/', async (req, res) => {
  const { pH, ammonia, turbidity, temperature, dissolvedOxygen } = req.body;
  
  const newData = new SensorData({
    pH,
    ammonia,
    turbidity,
    temperature,
    dissolvedOxygen
  });

  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
