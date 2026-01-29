# 🍽️ Premium Restaurant Web Application

[![GitHub](https://img.shields.io/badge/GitHub-qiyin--sayt-blue?logo=github)](https://github.com/timurfarmonov09-ops/qiyin-sayt)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)

Zamonaviy va professional darajadagi restaurant web application. To'liq funksional buyurtma tizimi va admin panel bilan.

## 🌟 Asosiy Xususiyatlar

### Mijoz Uchun:
- ✅ **24 ta ovqat** - 7 kategoriyada (Milliy taomlar, Fast food, Salatlar, va boshqalar)
- ✅ **18 ta ichimlik** - Issiq va sovuq ichimliklar
- ✅ **Savat tizimi** - Oson buyurtma berish
- ✅ **Buyurtma formasi** - Ism, telefon, manzil, izoh
- ✅ **Professional dizayn** - Premium UI/UX
- ✅ **To'liq responsive** - Mobil, planshet, desktop

### Admin Uchun:
- ✅ **Xavfsiz login** - JWT autentifikatsiya
- ✅ **Buyurtmalarni ko'rish** - To'liq mijoz ma'lumotlari
- ✅ **Status boshqaruvi** - 5 xil status
- ✅ **CRUD operatsiyalar** - Ovqat va ichimliklar boshqaruvi
- ✅ **Real-time yangilanish** - Darhol ko'rinadi

## 🚀 Tezkor Boshlash

### 1. Repository ni Clone Qiling
```bash
git clone https://github.com/timurfarmonov09-ops/qiyin-sayt.git
cd qiyin-sayt
```

### 2. Ishga Tushiring

#### Windows:
```bash
START.bat
```

#### Linux/Mac:
```bash
chmod +x start.sh
./start.sh
```

### 3. Saytni Oching
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000
- **Admin Panel:** http://localhost:3000/admin/login

## 🔐 Admin Login

```
Email: admin@restaurant.uz
Parol: admin123
```

## 📋 Buyurtma Berish

1. http://localhost:3000 ga o'ting
2. Ovqat yoki ichimlik tanlang
3. "Savatchaga qo'shish" tugmasini bosing
4. Savat ikonkasiga bosing
5. Ma'lumotlarni kiriting va buyurtma bering

## 👨‍💼 Admin Panel

1. Bosh sahifada "Admin Panelga Kirish" tugmasini bosing
2. Login qiling (yuqoridagi ma'lumotlar bilan)
3. "Buyurtmalar" tabiga o'ting
4. Barcha buyurtmalarni ko'ring va statusni o'zgartiring

## 🛠️ Texnologiyalar

### Frontend:
- React 18
- React Router DOM
- Axios
- Font Awesome 6.4.0
- CSS3 (Animations, Gradients)

### Backend:
- Node.js
- Express.js
- MongoDB (ixtiyoriy - in-memory fallback)
- JWT Authentication
- Bcrypt.js

## 📁 Loyiha Strukturasi

```
qiyin-sayt/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # JWT auth
│   ├── seedData.js      # Sample data (24 foods + 18 drinks)
│   └── server.js        # Express server
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/  # Navbar
│       └── pages/       # Home, Foods, Drinks, Cart, Admin
├── START.bat            # Windows start script
├── start.sh             # Linux/Mac start script
└── README.md
```

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Tezkor boshlash qo'llanmasi
- **[ADMIN_KIRISH_QOLLANMA.md](ADMIN_KIRISH_QOLLANMA.md)** - Admin panel qo'llanmasi
- **[TEST_ORDER_SYSTEM.md](TEST_ORDER_SYSTEM.md)** - Buyurtma tizimi test
- **[SETUP.md](SETUP.md)** - Batafsil o'rnatish
- **[FEATURES.md](FEATURES.md)** - Barcha xususiyatlar
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy qilish

## 🎨 Screenshots

### Bosh Sahifa
- Hero banner
- Ovqatlar preview (6 ta)
- Ichimliklar preview (6 ta)
- Admin kirish bo'limi

### Ovqatlar Sahifasi
- 24 ta ovqat
- 7 kategoriya
- Professional rasmlar
- Savatchaga qo'shish

### Admin Panel
- Buyurtmalarni ko'rish
- Mijoz ma'lumotlari
- Status boshqaruvi
- CRUD operatsiyalar

## 🔧 O'rnatish (Manual)

### Backend:
```bash
cd backend
npm install
node server.js
```

### Frontend:
```bash
cd frontend
npm install
npm start
```

## 🌐 API Endpoints

```
GET    /api/foods           # Barcha ovqatlar
GET    /api/drinks          # Barcha ichimliklar
POST   /api/orders          # Buyurtma yaratish
GET    /api/orders          # Buyurtmalarni olish (admin)
PUT    /api/orders/:id      # Status yangilash (admin)
POST   /api/auth/login      # Admin login
```

## 💾 Ma'lumotlar

### MongoDB Mavjud Bo'lsa:
- Database da saqlanadi
- Doimiy saqlash

### MongoDB Yo'q Bo'lsa:
- In-memory storage
- Sample data (24 foods + 18 drinks)
- Test uchun yetarli

## 🎯 Xususiyatlar

### Dizayn:
- ✅ Professional gradient backgrounds
- ✅ Font Awesome ikonkalar
- ✅ Smooth animations
- ✅ Hover effects
- ✅ Responsive dizayn

### Funksionallik:
- ✅ Buyurtma tizimi
- ✅ Savat boshqaruvi
- ✅ Admin panel
- ✅ Status boshqaruvi
- ✅ CRUD operatsiyalar

### Xavfsizlik:
- ✅ JWT autentifikatsiya
- ✅ Bcrypt password hashing
- ✅ CORS sozlangan
- ✅ Admin-only routes

## 📱 Responsive

- ✅ **Desktop** (1200px+) - To'liq funksional
- ✅ **Tablet** (768px - 1199px) - Moslashtirilgan
- ✅ **Mobil** (< 768px) - To'liq responsive

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for the list of contributors.

## 📞 Support

Agar savollar yoki muammolar bo'lsa:
- GitHub Issues: [Create an issue](https://github.com/timurfarmonov09-ops/qiyin-sayt/issues)
- Documentation: [Docs folder](/)

## 🎉 Acknowledgments

- Font Awesome for icons
- Unsplash for images
- React community
- Node.js community

---

**Made with ❤️ for restaurants**

**Repository:** https://github.com/timurfarmonov09-ops/qiyin-sayt

**Status:** ✅ Production Ready
