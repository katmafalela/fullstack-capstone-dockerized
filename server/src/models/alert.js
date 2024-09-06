const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['crime', 'power cut', 'water cut', 'donation drive', 'street light outage'] 
  },
  severity: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  location: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true }); 


alertSchema.methods.toString = function() {
  return `${this.title} (${this.category}) - ${this.description} at ${this.location} on ${this.timestamp.toLocaleString()}`;
};

const Alert = mongoose.model('Alert', alertSchema);

console.log(alert.toString());
