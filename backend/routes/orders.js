const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth');

// In-memory orders storage (MongoDB bo'lmasa)
let memoryOrders = [];

// Create order
router.post('/', async (req, res) => {
  try {
    const mongoose = require('mongoose');
    
    // MongoDB ulanmagan bo'lsa, memory da saqlash
    if (mongoose.connection.readyState !== 1) {
      const newOrder = {
        _id: Date.now().toString(),
        ...req.body,
        createdAt: new Date(),
        status: 'pending'
      };
      memoryOrders.unshift(newOrder);
      console.log('Buyurtma memory ga saqlandi:', newOrder.customerName);
      return res.status(201).json(newOrder);
    }
    
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error('Order yaratish xatosi:', error.message);
    // Xato bo'lsa ham memory ga saqlash
    const newOrder = {
      _id: Date.now().toString(),
      ...req.body,
      createdAt: new Date(),
      status: 'pending'
    };
    memoryOrders.unshift(newOrder);
    res.status(201).json(newOrder);
  }
});

// Get all orders (admin only)
router.get('/', auth, async (req, res) => {
  try {
    const mongoose = require('mongoose');
    
    // MongoDB ulanmagan bo'lsa, memory dan qaytarish
    if (mongoose.connection.readyState !== 1) {
      console.log('Memory dan buyurtmalar qaytarilmoqda:', memoryOrders.length);
      return res.json(memoryOrders);
    }
    
    const orders = await Order.find().sort({ createdAt: -1 }).maxTimeMS(2000);
    res.json(orders);
  } catch (error) {
    console.error('Orders olish xatosi:', error.message);
    // Xato bo'lsa memory dan qaytarish
    res.json(memoryOrders);
  }
});

// Update order status (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const mongoose = require('mongoose');
    
    // MongoDB ulanmagan bo'lsa, memory da yangilash
    if (mongoose.connection.readyState !== 1) {
      const orderIndex = memoryOrders.findIndex(o => o._id === req.params.id);
      if (orderIndex !== -1) {
        memoryOrders[orderIndex].status = req.body.status;
        console.log('Buyurtma statusi yangilandi:', req.params.id, req.body.status);
        return res.json(memoryOrders[orderIndex]);
      }
      return res.status(404).json({ message: 'Buyurtma topilmadi' });
    }
    
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(order);
  } catch (error) {
    console.error('Order yangilash xatosi:', error.message);
    res.status(500).json({ message: 'Server xatosi', error: error.message });
  }
});

module.exports = router;
