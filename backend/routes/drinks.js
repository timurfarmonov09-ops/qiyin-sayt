const express = require('express');
const router = express.Router();
const Drink = require('../models/Drink');
const auth = require('../middleware/auth');
const { sampleDrinks } = require('../seedData');

// Get all drinks
router.get('/', async (req, res) => {
  try {
    // MongoDB ulanishini tekshirish
    const mongoose = require('mongoose');
    if (mongoose.connection.readyState !== 1) {
      console.log('MongoDB ulanmagan, sample data qaytarilmoqda');
      return res.json(sampleDrinks);
    }
    
    const drinks = await Drink.find().sort({ createdAt: -1 }).maxTimeMS(2000);
    
    if (!drinks || drinks.length === 0) {
      console.log('MongoDB dan ma\'lumot yo\'q, sample data qaytarilmoqda');
      return res.json(sampleDrinks);
    }
    
    res.json(drinks);
  } catch (error) {
    console.error('Drinks API xatosi:', error.message);
    // Har qanday xato bo'lsa sample data qaytaramiz
    res.json(sampleDrinks);
  }
});

// Create drink (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const drink = new Drink(req.body);
    await drink.save();
    res.status(201).json(drink);
  } catch (error) {
    console.error('Drink yaratish xatosi:', error.message);
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
});

// Update drink (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const drink = await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(drink);
  } catch (error) {
    console.error('Drink yangilash xatosi:', error.message);
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
});

// Delete drink (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Drink.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ichimlik o\'chirildi' });
  } catch (error) {
    console.error('Drink o\'chirish xatosi:', error.message);
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
});

module.exports = router;
