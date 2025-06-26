const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  pH: { type: Number, required: true },
  ammonia: { type: Number, required: true },
  turbidity: { type: Number, required: true },
  temperature: { type: Number, required: true },
  dissolvedOxygen: { type: Number },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SensorData', sensorDataSchema);