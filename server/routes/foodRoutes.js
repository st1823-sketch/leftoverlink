const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const multer = require('multer');
const path = require('path');

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// GET all food listings
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

// GET single food listing
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food listing not found' });
    }
    res.json(food);
  } catch (error) {
    console.error('Error fetching food listing:', error);
    res.status(500).json({ 
      message: 'Error fetching food listing', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// POST new food listing with image upload
router.post('/', upload.array('images', 5), async (req, res) => {
  try {
    const { name, description, quantity, expiry, location, contact, phone } = req.body;
    
    // Validation
    if (!name || !quantity || !expiry || !location || !contact) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    // Handle uploaded images
    const imageUrls = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        imageUrls.push(`/uploads/${file.filename}`);
      });
    }

    const food = new Food({
      name,
      description,
      quantity,
      expiry: new Date(expiry),
      location,
      contact,
      phone,
      images: imageUrls,
      status: 'available'
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

// PUT update food listing
router.put('/:id', async (req, res) => {
  try {
    const { name, description, quantity, expiry, location, contact, phone, status } = req.body;
    
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food listing not found' });
    }

    food.name = name || food.name;
    food.description = description || food.description;
    food.quantity = quantity || food.quantity;
    food.expiry = expiry ? new Date(expiry) : food.expiry;
    food.location = location || food.location;
    food.contact = contact || food.contact;
    food.phone = phone || food.phone;
    food.status = status || food.status;

    const updatedFood = await food.save();
    res.json(updatedFood);
  } catch (error) {
    console.error('Error updating food listing:', error);
    res.status(500).json({ 
      message: 'Error updating food listing', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// DELETE food listing
router.delete('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food listing not found' });
    }

    await Food.findByIdAndDelete(req.params.id);
    res.json({ message: 'Food listing deleted successfully' });
  } catch (error) {
    console.error('Error deleting food listing:', error);
    res.status(500).json({ 
      message: 'Error deleting food listing', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;