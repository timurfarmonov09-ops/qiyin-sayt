# Restaurant App - Loyiha Strukturasi

```
restaurant-app/
│
├── backend/                          # Backend (Node.js + Express)
│   ├── models/                       # MongoDB models
│   │   ├── User.js                   # Admin user model
│   │   ├── Food.js                   # Ovqatlar model
│   │   ├── Drink.js                  # Ichimliklar model
│   │   └── Order.js                  # Buyurtmalar model
│   │
│   ├── routes/                       # API routes
│   │   ├── auth.js                   # Authentication routes
│   │   ├── foods.js                  # Ovqatlar CRUD
│   │   ├── drinks.js                 # Ichimliklar CRUD
│   │   └── orders.js                 # Buyurtmalar CRUD
│   │
│   ├── middleware/                   # Middleware functions
│   │   └── auth.js                   # JWT authentication middleware
│   │
│   ├── server.js                     # Main server file
│   ├── package.json                  # Backend dependencies
│   ├── .env                          # Environment variables
│   └── .gitignore                    # Git ignore file
│
├── frontend/                         # Frontend (React)
│   ├── public/
│   │   └── index.html                # HTML template
│   │
│   ├── src/
│   │   ├── components/               # Reusable components
│   │   │   ├── Navbar.js             # Navigation bar
│   │   │   └── Navbar.css
│   │   │
│   │   ├── pages/                    # Page components
│   │   │   ├── Home.js               # Bosh sahifa
│   │   │   ├── Home.css
│   │   │   ├── Foods.js              # Ovqatlar sahifasi
│   │   │   ├── Foods.css
│   │   │   ├── Drinks.js             # Ichimliklar sahifasi
│   │   │   ├── Drinks.css
│   │   │   ├── About.js              # Biz haqimizda
│   │   │   ├── About.css
│   │   │   ├── Cart.js               # Savat sahifasi
│   │   │   ├── Cart.css
│   │   │   └── admin/                # Admin pages
│   │   │       ├── AdminLogin.js     # Admin login
│   │   │       ├── AdminLogin.css
│   │   │       ├── AdminDashboard.js # Admin dashboard
│   │   │       └── AdminDashboard.css
│   │   │
│   │   ├── App.js                    # Main App component
│   │   ├── App.css                   # Global styles
│   │   ├── index.js                  # React entry point
│   │   └── index.css                 # Base CSS
│   │
│   ├── package.json                  # Frontend dependencies
│   └── .gitignore
│
├── README.md                         # Asosiy hujjat
├── FEATURES.md                       # Xususiyatlar ro'yxati
├── SETUP.md                          # O'rnatish qo'llanmasi
├── DEPLOYMENT.md                     # Deploy qo'llanmasi
├── PROJECT_STRUCTURE.md              # Bu fayl
├── package.json                      # Root package.json
├── START.bat                         # Windows uchun ishga tushirish
└── .gitignore                        # Git ignore

```

## Fayl va Papkalar Tushuntirish

### Backend

#### Models (Ma'lumotlar bazasi modellari)
- **User.js**: Admin foydalanuvchi ma'lumotlari (email, password, role)
- **Food.js**: Ovqat ma'lumotlari (name, description, price, category, image)
- **Drink.js**: Ichimlik ma'lumotlari (name, price, type, image)
- **Order.js**: Buyurtma ma'lumotlari (customer info, items, total, status)

#### Routes (API yo'nalishlari)
- **auth.js**: Login va admin yaratish
- **foods.js**: Ovqatlarni CRUD (Create, Read, Update, Delete)
- **drinks.js**: Ichimliklarni CRUD
- **orders.js**: Buyurtmalarni boshqarish

#### Middleware
- **auth.js**: JWT token tekshirish va admin huquqlarini tasdiqlash

#### Asosiy fayllar
- **server.js**: Express server, MongoDB ulanish, routes sozlash
- **.env**: Muhim sozlamalar (PORT, MONGODB_URI, JWT_SECRET)

### Frontend

#### Components (Qayta ishlatiluvchi komponentlar)
- **Navbar**: Navigatsiya paneli, responsive menu, cart badge

#### Pages (Sahifalar)
- **Home**: Hero banner, features, CTA
- **Foods**: Ovqatlar ro'yxati, kategoriya filter, cart qo'shish
- **Drinks**: Ichimliklar ro'yxati, tur filter
- **About**: Restaurant tarixi, qadriyatlar, jamoa
- **Cart**: Savat, buyurtma formasi, checkout
- **Admin/Login**: Admin kirish sahifasi
- **Admin/Dashboard**: Admin panel (CRUD operatsiyalar)

#### Asosiy fayllar
- **App.js**: Routing, cart state management
- **index.js**: React render
- **App.css**: Global styles, animations, buttons
- **index.css**: CSS variables, base styles

### Root fayllar

- **README.md**: Loyiha haqida umumiy ma'lumot
- **FEATURES.md**: Barcha xususiyatlar batafsil
- **SETUP.md**: Qadamma-qadam o'rnatish
- **DEPLOYMENT.md**: Production ga chiqarish
- **package.json**: Root scripts (install-all, dev)
- **START.bat**: Windows uchun avtomatik ishga tushirish

## Texnologiyalar

### Backend Stack
- Node.js - JavaScript runtime
- Express.js - Web framework
- MongoDB - NoSQL database
- Mongoose - MongoDB ODM
- JWT - Authentication
- bcryptjs - Password hashing
- CORS - Cross-origin requests

### Frontend Stack
- React 18 - UI library
- React Router v6 - Routing
- Axios - HTTP client
- CSS3 - Styling (Flexbox, Grid, Animations)

## API Endpoints

### Public Endpoints
```
GET    /api/foods              - Barcha ovqatlar
GET    /api/drinks             - Barcha ichimliklar
POST   /api/orders             - Yangi buyurtma
POST   /api/auth/login         - Admin login
```

### Protected Endpoints (Admin only)
```
POST   /api/foods              - Ovqat qo'shish
PUT    /api/foods/:id          - Ovqat yangilash
DELETE /api/foods/:id          - Ovqat o'chirish
POST   /api/drinks             - Ichimlik qo'shish
PUT    /api/drinks/:id         - Ichimlik yangilash
DELETE /api/drinks/:id         - Ichimlik o'chirish
GET    /api/orders             - Barcha buyurtmalar
PUT    /api/orders/:id         - Status yangilash
```

## State Management

### App.js (Global State)
- **cart**: Savat ma'lumotlari (array)
- **addToCart**: Mahsulot qo'shish funksiyasi
- **removeFromCart**: Mahsulot o'chirish funksiyasi
- **updateQuantity**: Miqdor o'zgartirish funksiyasi
- **clearCart**: Savatni tozalash funksiyasi

### Local State (Component level)
- **foods/drinks**: API dan kelgan ma'lumotlar
- **selectedCategory/Type**: Filter state
- **loading**: Yuklash holati
- **error**: Xato xabarlari
- **formData**: Form ma'lumotlari

## Styling Architecture

### CSS Variables (index.css)
```css
--primary: #d4af37    (Oltin)
--secondary: #1a1a1a  (Qora)
--accent: #8b7355     (Jigarrang)
--light: #f8f9fa      (Och)
--dark: #212529       (To'q)
```

### Animations (App.css)
- fadeIn: Opacity va translateY
- slideIn: Opacity va translateX
- scaleIn: Opacity va scale

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Security Features

1. **JWT Authentication**: Token-based auth
2. **Password Hashing**: bcryptjs bilan
3. **Protected Routes**: Middleware orqali
4. **CORS**: Faqat ruxsat berilgan originlar
5. **Input Validation**: Required fields
6. **Error Handling**: Try-catch blocks

## Performance Optimizations

1. **Lazy Loading**: Images on demand
2. **Efficient Rendering**: React hooks
3. **CSS Animations**: GPU-accelerated
4. **API Caching**: MongoDB indexing
5. **Code Splitting**: React Router

## Future Enhancements

- [ ] Image upload funksiyasi
- [ ] Payment gateway integratsiyasi
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Real-time order tracking
- [ ] Customer reviews
- [ ] Loyalty program
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA (Progressive Web App)
