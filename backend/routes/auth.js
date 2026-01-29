const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// In-memory admin (MongoDB bo'lmasa)
const memoryAdmin = {
  email: 'admin@restaurant.uz',
  password: '$2a$10$8K1p/a0dL3LZzqQqhL9lqe7qGxqQqhL9lqe7qGxqQqhL9lqe7qGxq', // admin123
  role: 'admin'
};

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const mongoose = require('mongoose');
    
    // MongoDB ulanmagan bo'lsa, memory dan tekshirish
    if (mongoose.connection.readyState !== 1) {
      if (email === memoryAdmin.email && password === 'admin123') {
        const token = jwt.sign({ id: 'admin', role: 'admin' }, process.env.JWT_SECRET || 'secret-key', { expiresIn: '7d' });
        console.log('Memory admin login:', email);
        return res.json({ 
          token, 
          user: { id: 'admin', email: memoryAdmin.email, role: memoryAdmin.role } 
        });
      }
      return res.status(400).json({ message: 'Email yoki parol noto\'g\'ri' });
    }
    
    const user = await User.findOne({ email }).maxTimeMS(2000);
    
    if (!user) return res.status(400).json({ message: 'Foydalanuvchi topilmadi' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Parol noto\'g\'ri' });
    
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret-key', { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Login xatosi:', error.message);
    // Xato bo'lsa ham memory admin bilan tekshirish
    const { email, password } = req.body;
    if (email === memoryAdmin.email && password === 'admin123') {
      const token = jwt.sign({ id: 'admin', role: 'admin' }, process.env.JWT_SECRET || 'secret-key', { expiresIn: '7d' });
      return res.json({ 
        token, 
        user: { id: 'admin', email: memoryAdmin.email, role: memoryAdmin.role } 
      });
    }
    res.status(500).json({ message: 'Server xatosi' });
  }
});

// Create admin (faqat birinchi marta)
router.post('/create-admin', async (req, res) => {
  try {
    const mongoose = require('mongoose');
    
    // MongoDB ulanmagan bo'lsa
    if (mongoose.connection.readyState !== 1) {
      return res.json({ 
        message: 'Admin allaqachon mavjud (memory)',
        admin: { email: memoryAdmin.email, password: 'admin123' }
      });
    }
    
    const existingAdmin = await User.findOne({ role: 'admin' }).maxTimeMS(2000);
    if (existingAdmin) return res.status(400).json({ message: 'Admin allaqachon mavjud' });
    
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = new User({ email: 'admin@restaurant.uz', password: hashedPassword, role: 'admin' });
    await admin.save();
    res.json({ message: 'Admin yaratildi' });
  } catch (error) {
    console.error('Admin yaratish xatosi:', error.message);
    res.json({ 
      message: 'Admin allaqachon mavjud (memory)',
      admin: { email: memoryAdmin.email, password: 'admin123' }
    });
  }
});

module.exports = router;
