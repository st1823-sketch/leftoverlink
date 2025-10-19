const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  quantity: {
    type: String,
    required: true,
    trim: true
  },
  expiry: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  contact: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  images: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['available', 'claimed', 'expired'],
    default: 'available'
  },
  coordinates: {
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    }
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Index for better query performance
foodSchema.index({ location: 'text', name: 'text', description: 'text' });
foodSchema.index({ coordinates: '2dsphere' });
foodSchema.index({ expiry: 1 });
foodSchema.index({ status: 1 });

module.exports = mongoose.model('Food', foodSchema);