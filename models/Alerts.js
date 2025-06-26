const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  message: { type: String, required: true },
  severity: { type: String, enum: ['critical', 'warning', 'normal'], required: true },
  timestamp: { type: Date, default: Date.now },
  resolved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Alert', alertSchema);