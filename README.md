# 🍽️ Premium Restaurant Web Application

Zamonaviy va professional restaurant web application - to'liq responsive, premium dizayn va real biznes uchun tayyor loyiha.

![Restaurant App](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)

## ✨ Asosiy Xususiyatlar

### 🎨 Premium Dizayn
- ✅ Zamonaviy va professional UI/UX
- ✅ Silliq animatsiyalar (fade-in, slide-in, scale-in)
- ✅ Premium rang palitrasi (oltin, qora, jigarrang)
- ✅ To'liq responsive (mobil, planshet, desktop)
- ✅ Hover effektlari va transitions

### 🏠 Foydalanuvchi Qismi
- ✅ Hero banner va call-to-action
- ✅ Ovqatlar bo'limi (kategoriyalarga bo'lingan)
- ✅ Ichimliklar bo'limi (issiq/sovuq)
- ✅ Biz haqimizda (storytelling uslubida)
- ✅ Savat funksiyasi
- ✅ Buyurtma berish tizimi

### 👨‍💼 Admin Panel
- ✅ Xavfsiz login (JWT authentication)
- ✅ Ovqatlar CRUD (qo'shish, tahrirlash, o'chirish)
- ✅ Ichimliklar CRUD
- ✅ Buyurtmalarni ko'rish va boshqarish
- ✅ Status yangilash (pending, confirmed, preparing, delivered, cancelled)

## 🚀 Tezkor Ishga Tushirish

### Windows uchun (Avtomatik):
```bash
START.bat
```

### Manual (Barcha platformalar):

1. **MongoDB ishga tushiring**
2. **Backend:**
```bash
cd backend
npm install
npm start
```

3. **Frontend:**
```bash
cd frontend
npm install
npm start
```

4. **Admin yaratish:**
```bash
# Postman yoki browser orqali:
POST http://localhost:5000/api/auth/create-admin
```

## 🔐 Admin Panel

- **URL:** http://localhost:3000/admin/login
- **Email:** admin@restaurant.uz
- **Parol:** admin123

## 📁 Loyiha Strukturasi

```
restaurant-app/
├── backend/          # Node.js + Express API
│   ├── models/       # MongoDB models
│   ├── routes/       # API endpoints
│   └── middleware/   # Auth middleware
├── frontend/         # React application
│   ├── components/   # Reusable components
│   └── pages/        # Page components
└── docs/             # Hujjatlar
```

## 🛠️ Texnologiyalar

### Frontend
- **React 18** - UI library
- **React Router v6** - Navigation
- **Axios** - HTTP client
- **CSS3** - Styling (Flexbox, Grid, Animations)

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📚 Hujjatlar

- [FEATURES.md](FEATURES.md) - Barcha xususiyatlar batafsil
- [SETUP.md](SETUP.md) - Qadamma-qadam o'rnatish qo'llanmasi
- [DEPLOYMENT.md](DEPLOYMENT.md) - Production ga chiqarish
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Loyiha strukturasi

## 🌐 API Endpoints

### Public
- `GET /api/foods` - Barcha ovqatlar
- `GET /api/drinks` - Barcha ichimliklar
- `POST /api/orders` - Yangi buyurtma
- `POST /api/auth/login` - Admin login

### Protected (Admin only)
- `POST /api/foods` - Ovqat qo'shish
- `PUT /api/foods/:id` - Ovqat yangilash
- `DELETE /api/foods/:id` - Ovqat o'chirish
- `GET /api/orders` - Barcha buyurtmalar
- `PUT /api/orders/:id` - Status yangilash

## 🎯 Real Biznes Uchun Tayyor

- ✅ Production-ready kod
- ✅ Scalable architecture
- ✅ Security best practices
- ✅ Error handling
- ✅ Responsive design
- ✅ Professional UI/UX
- ✅ Easy to maintain
- ✅ Well documented

## 🔒 Xavfsizlik

- JWT token authentication
- Password hashing (bcryptjs)
- Protected admin routes
- CORS sozlamalari
- Input validation
- Error handling

## 📱 Responsive Design

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)

## 🚀 Deployment

### Heroku (Backend)
```bash
heroku create your-restaurant-api
heroku config:set MONGODB_URI="your-uri"
git push heroku master
```

### Vercel (Frontend)
```bash
vercel --prod
```

Batafsil: [DEPLOYMENT.md](DEPLOYMENT.md)

## 🤝 Contributing

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. Commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request oching

## 📝 License

MIT License - [LICENSE](LICENSE) faylini ko'ring

## 👨‍💻 Muallif

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Minnatdorchilik

- React jamoasiga
- MongoDB jamoasiga
- Express.js jamoasiga
- Open source community

## 📞 Yordam

Muammolar yuzaga kelsa:
1. [Issues](https://github.com/yourusername/restaurant-app/issues) bo'limida qidiring
2. Yangi issue oching
3. [SETUP.md](SETUP.md) ni qayta o'qing

---

⭐ Agar loyiha yoqsa, star bering!
