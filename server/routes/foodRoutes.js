const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// GET /api/food - Get all food listings
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find().sort({ timestamp: -1 });
    res.json(foods);
  } catch (error) {
    console.error('Error fetching food listings:', error);
    res.status(500).json({ 
      message: 'Error fetching food listings', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// POST /api/food - Create new food listing
router.post('/', async (req, res) => {
  try {
    const { name, quantity, expiry, location, contact } = req.body;
    
    // Validation
    if (!name || !quantity || !expiry || !location || !contact) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const food = new Food({
      name,
      quantity,
      expiry: new Date(expiry),
      location,
      contact
    });

    const savedFood = await food.save();
    res.status(201).json(savedFood);
  } catch (error) {
    console.error('Error creating food listing:', error);
    res.status(500).json({ 
      message: 'Error creating food listing', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;
