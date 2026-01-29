# Restaurant Web Application - Xususiyatlar

## 🎨 Dizayn

### Premium UI/UX
- Zamonaviy va professional dizayn
- Silliq animatsiyalar (fade-in, slide-in, scale-in)
- Premium rang palitrasi (oltin, qora, jigarrang)
- Hover effektlari va transitions
- Box shadows va gradient backgrounds

### Responsive Design
- ✅ Mobil qurilmalar (320px+)
- ✅ Planshetlar (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)
- Hamburger menu mobil uchun
- Grid layout avtomatik moslashuvchan

## 🏠 Asosiy Sahifa (Home)

- Hero banner katta va ta'sirli
- Restaurant nomi va slogan
- Gradient background
- "Buyurtma berish" va "Biz haqimizda" tugmalari
- Xususiyatlar bo'limi (4 ta card)
- Call-to-action bo'limi

## 🍽️ Ovqatlar Bo'limi

- Kategoriyalarga bo'lingan (Milliy taomlar, Fast food, Salatlar, va h.k.)
- Har bir ovqatda:
  - Yuqori sifatli rasm
  - Nomi
  - Qisqa tavsifi
  - Narxi
  - Kategoriya badge
  - "Savatga qo'shish" tugmasi (hover da ko'rinadi)
- Filter funksiyasi (kategoriya bo'yicha)
- Grid layout responsive

## 🥤 Ichimliklar Bo'limi

- Alohida sahifa
- Issiq va sovuq ichimliklarga ajratilgan
- Har bir ichimlikda:
  - Rasm
  - Nomi
  - Narxi
  - Turi (issiq/sovuq) badge
  - "Qo'shish" tugmasi
- Filter funksiyasi (tur bo'yicha)

## 📖 Biz Haqimizda

- Storytelling uslubida yozilgan
- Restaurant ochilish tarixi
- Maqsad va viziya
- Qadriyatlar (4 ta card):
  - Sifat
  - Samimiylik
  - Innovatsiya
  - Ishonch
- Jamoa haqida ma'lumot
- Ikki tomonlama layout (matn + rasm)

## 🛒 Savat (Cart)

- Real-time yangilanadi
- Navbar da badge bilan soni ko'rsatiladi
- Har bir mahsulot uchun:
  - Rasm
  - Nomi
  - Narxi
  - Miqdor (+ va - tugmalari)
  - Jami narx
  - O'chirish tugmasi
- Buyurtma formasi:
  - Ism (majburiy)
  - Telefon (majburiy)
  - Manzil (ixtiyoriy)
  - Izoh (ixtiyoriy)
- Jami summa ko'rsatiladi
- "Buyurtma berish" tugmasi
- Muvaffaqiyatli buyurtma xabari

## 👨‍💼 Admin Panel

### Login
- Xavfsiz authentication (JWT)
- Email va parol
- Error handling
- Default admin: admin@restaurant.uz / admin123

### Dashboard
- 3 ta tab:
  1. Ovqatlar
  2. Ichimliklar
  3. Buyurtmalar

### Ovqatlar Boshqaruvi
- Barcha ovqatlarni ko'rish (grid)
- Yangi ovqat qo'shish
- Ovqatni tahrirlash
- Ovqatni o'chirish
- Modal window bilan CRUD operatsiyalar

### Ichimliklar Boshqaruvi
- Barcha ichimliklarni ko'rish
- Yangi ichimlik qo'shish
- Ichimlikni tahrirlash
- Ichimlikni o'chirish
- Tur tanlash (issiq/sovuq)

### Buyurtmalar Boshqaruvi
- Barcha buyurtmalarni ko'rish
- Buyurtma tafsilotlari:
  - Mijoz ismi va telefoni
  - Manzil
  - Buyurtma mahsulotlari
  - Jami summa
  - Status
- Status o'zgartirish:
  - Kutilmoqda (pending)
  - Tasdiqlandi (confirmed)
  - Tayyorlanmoqda (preparing)
  - Yetkazildi (delivered)
  - Bekor qilindi (cancelled)
- Rang kodlari status uchun

## 🔧 Texnik Xususiyatlar

### Frontend
- React 18 (hooks)
- React Router v6 (navigation)
- Axios (API calls)
- CSS3 (animations, flexbox, grid)
- Local Storage (admin token)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- bcryptjs (password hashing)
- CORS enabled
- RESTful API

### API Endpoints

#### Auth
- POST /api/auth/login - Admin login
- POST /api/auth/create-admin - Admin yaratish

#### Foods
- GET /api/foods - Barcha ovqatlar
- POST /api/foods - Yangi ovqat (admin)
- PUT /api/foods/:id - Ovqatni yangilash (admin)
- DELETE /api/foods/:id - Ovqatni o'chirish (admin)

#### Drinks
- GET /api/drinks - Barcha ichimliklar
- POST /api/drinks - Yangi ichimlik (admin)
- PUT /api/drinks/:id - Ichimlikni yangilash (admin)
- DELETE /api/drinks/:id - Ichimlikni o'chirish (admin)

#### Orders
- GET /api/orders - Barcha buyurtmalar (admin)
- POST /api/orders - Yangi buyurtma
- PUT /api/orders/:id - Status yangilash (admin)

## 🔒 Xavfsizlik

- JWT token authentication
- Password hashing (bcryptjs)
- Protected admin routes
- CORS sozlamalari
- Input validation
- Error handling

## 🚀 Performance

- Lazy loading images
- Optimized CSS animations
- Efficient state management
- Minimal re-renders
- Fast API responses

## 📱 Mobile Optimization

- Touch-friendly buttons
- Responsive images
- Mobile navigation menu
- Optimized font sizes
- Proper spacing

## 🎯 Real Biznes Uchun Tayyor

- Production-ready kod
- Scalable architecture
- Easy to maintain
- Documentation
- Error handling
- User-friendly interface
- Professional design
