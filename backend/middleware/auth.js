const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Ruxsat yo\'q' });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') return res.status(403).json({ message: 'Admin huquqi kerak' });
    
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token noto\'g\'ri' });
  }
};
