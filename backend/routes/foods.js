const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const auth = require('../middleware/auth');
const { sampleFoods } = require('../seedData');

// Get all foods
router.get('/', async (req, res) => {
  try {
    // MongoDB ulanishini tekshirish
    const mongoose = require('mongoose');
    if (mongoose.connection.readyState !== 1) {
      console.log('MongoDB ulanmagan, sample data qaytarilmoqda');
      return res.json(sampleFoods);
    }
    
    const foods = await Food.find().sort({ createdAt: -1 }).maxTimeMS(2000);
    
    if (!foods || foods.length === 0) {
      console.log('MongoDB dan ma\'lumot yo\'q, sample data qaytarilmoqda');
      return res.json(sampleFoods);
    }
    
    res.json(foods);
  } catch (error) {
    console.error('Foods API xatosi:', error.message);
    // Har qanday xato bo'lsa sample data qaytaramiz
    res.json(sampleFoods);
  }
});

// Create food (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    console.error('Food yaratish xatosi:', error.message);
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
});

// Update food (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(food);
  } catch (error) {
    console.error('Food yangilash xatosi:', error.message);
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
});

// Delete food (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ovqat o\'chirildi' });
  } catch (error) {
    console.error('Food o\'chirish xatosi:', error.message);
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
});

module.exports = router;
