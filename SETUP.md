# Restaurant Web Application - O'rnatish va Ishga Tushirish

## 1. Talablar

- Node.js (v14 yoki yuqori)
- MongoDB (v4.4 yoki yuqori)
- npm yoki yarn

## 2. MongoDB o'rnatish

### Windows:
1. MongoDB Community Server yuklab oling: https://www.mongodb.com/try/download/community
2. O'rnating va MongoDB Compass ham o'rnatiladi
3. MongoDB servisini ishga tushiring

### macOS (Homebrew):
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu):
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

## 3. Backend o'rnatish

```bash
cd backend
npm install
```

### Admin yaratish (birinchi marta):
Backend ishga tushgandan keyin, Postman yoki browser orqali:
```
POST http://localhost:5000/api/auth/create-admin
```

### Backend ishga tushirish:
```bash
npm start
```

Backend http://localhost:5000 da ishga tushadi.

## 4. Frontend o'rnatish

```bash
cd frontend
npm install
```

### Frontend ishga tushirish:
```bash
npm start
```

Frontend http://localhost:3000 da ochiladi.

## 5. Admin Panel

- URL: http://localhost:3000/admin/login
- Email: admin@restaurant.uz
- Parol: admin123

## 6. Test ma'lumotlar qo'shish

Admin panel orqali:
1. Login qiling
2. "Ovqatlar" bo'limiga o'ting
3. "+ Yangi ovqat" tugmasini bosing
4. Ma'lumotlarni kiriting va saqlang

Misol ovqat:
- Nomi: Osh
- Tavsif: An'anaviy o'zbek taomi, go'sht va sabzavotlar bilan
- Narxi: 25000
- Kategoriya: Milliy taomlar
- Rasm: https://via.placeholder.com/300x200

## 7. Production uchun tayyorlash

### Frontend build:
```bash
cd frontend
npm run build
```

### Backend production mode:
```bash
cd backend
NODE_ENV=production npm start
```

### .env faylini production uchun sozlash:
```
PORT=5000
MONGODB_URI=mongodb://your-production-db-url
JWT_SECRET=your-very-secure-secret-key
NODE_ENV=production
```

## 8. Hosting

### Backend (Node.js):
- Heroku
- DigitalOcean
- AWS EC2
- Vercel

### Frontend (React):
- Vercel
- Netlify
- GitHub Pages

### Database (MongoDB):
- MongoDB Atlas (bepul tier mavjud)
- mLab

## 9. Muammolarni hal qilish

### MongoDB ulanmayapti:
- MongoDB servisi ishga tushganligini tekshiring
- .env faylidagi MONGODB_URI to'g'riligini tekshiring

### CORS xatosi:
- Backend server.js da cors() sozlamalari to'g'riligini tekshiring

### Admin login ishlamayapti:
- Avval /api/auth/create-admin endpoint orqali admin yarating

## 10. Qo'shimcha sozlamalar

### Rasm yuklash (ixtiyoriy):
Backend da multer allaqachon o'rnatilgan. Rasm yuklash funksiyasini qo'shish uchun:

```javascript
// backend/routes/upload.js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), (req, res) => {
  res.json({ url: `/uploads/${req.file.filename}` });
});
```

## Yordam

Muammolar yuzaga kelsa:
1. Node.js va MongoDB versiyalarini tekshiring
2. npm install qayta ishga tushiring
3. node_modules papkasini o'chirib, qayta o'rnating
4. .env fayli to'g'ri sozlanganligini tekshiring
