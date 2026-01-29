# 🍃 MongoDB O'rnatish va Ishga Tushirish

## Windows uchun MongoDB O'rnatish

### 1-usul: MongoDB Community Server (Tavsiya etiladi)

#### O'rnatish:
1. **Yuklab olish:**
   - https://www.mongodb.com/try/download/community ga o'ting
   - Windows versiyasini tanlang
   - MSI installer yuklab oling

2. **O'rnatish:**
   - Yuklab olingan `.msi` faylni ishga tushiring
   - "Complete" installation tanlang
   - "Install MongoDB as a Service" ni belgilang
   - "Install MongoDB Compass" ni belgilang (GUI tool)

3. **Tekshirish:**
```cmd
mongod --version
```

#### Ishga Tushirish:

**Avtomatik (Service sifatida):**
MongoDB service sifatida o'rnatilgan bo'lsa, avtomatik ishga tushadi.

**Manual:**
```cmd
# MongoDB data papkasini yarating
mkdir C:\data\db

# MongoDB ni ishga tushiring
mongod
```

**Yoki Windows Service orqali:**
```cmd
# Service ni ishga tushirish
net start MongoDB

# Service ni to'xtatish
net stop MongoDB
```

### 2-usul: MongoDB Compass (GUI)

Agar MongoDB Compass o'rnatilgan bo'lsa:
1. MongoDB Compass ni oching
2. "New Connection" tugmasini bosing
3. Connection string: `mongodb://localhost:27017`
4. "Connect" tugmasini bosing

### 3-usul: Docker (Advanced)

```bash
# MongoDB Docker container
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Tekshirish
docker ps
```

## MongoDB Ishga Tushganligini Tekshirish

### 1. Command Line orqali:
```cmd
# MongoDB shell ga kirish
mongosh

# Yoki eski versiya uchun
mongo
```

### 2. Backend orqali:
Backend serveringiz ishga tushganda console da ko'rish kerak:
```
Server running on port 5000
MongoDB connected
```

Agar xato bo'lsa:
```
MongoDB connection error: connect ECONNREFUSED
```

## Muammolarni Hal Qilish

### Muammo 1: "mongod" komanda topilmadi

**Yechim:**
1. MongoDB PATH ga qo'shilganligini tekshiring
2. Yoki to'liq path bilan ishga tushiring:
```cmd
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
```

### Muammo 2: "Data directory not found"

**Yechim:**
```cmd
# Data papkasini yarating
mkdir C:\data\db

# Yoki custom path bilan ishga tushiring
mongod --dbpath "C:\Users\YourName\mongodb-data"
```

### Muammo 3: Port 27017 band

**Yechim:**
```cmd
# Boshqa portda ishga tushiring
mongod --port 27018

# Backend .env faylida yangilang:
# MONGODB_URI=mongodb://localhost:27018/restaurant
```

### Muammo 4: Service ishlamayapti

**Yechim:**
```cmd
# Service statusini tekshiring
sc query MongoDB

# Service ni qayta ishga tushiring
net stop MongoDB
net start MongoDB
```

## MongoDB Compass (GUI Tool)

### O'rnatish:
1. https://www.mongodb.com/try/download/compass
2. Windows versiyasini yuklab oling
3. O'rnating

### Ishlatish:
1. MongoDB Compass ni oching
2. Connection: `mongodb://localhost:27017`
3. Connect qiling
4. "restaurant" database ni ko'rasiz (backend ishga tushgandan keyin)

## Alternative: MongoDB Atlas (Cloud)

Agar local MongoDB o'rnatishni xohlamasangiz:

1. **Account yarating:**
   - https://www.mongodb.com/cloud/atlas
   - Free tier tanlang

2. **Cluster yarating:**
   - "Create Cluster" tugmasini bosing
   - Free tier (M0) tanlang
   - Region tanlang (eng yaqinini)

3. **Database User yarating:**
   - Database Access bo'limiga o'ting
   - "Add New Database User"
   - Username va password kiriting

4. **Network Access:**
   - Network Access bo'limiga o'ting
   - "Add IP Address"
   - "Allow Access from Anywhere" (0.0.0.0/0)

5. **Connection String:**
   - Clusters bo'limida "Connect" tugmasini bosing
   - "Connect your application" tanlang
   - Connection string ni nusxalang:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/restaurant
   ```

6. **Backend .env faylini yangilang:**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/restaurant
   ```

## Loyihani Ishga Tushirish

### 1. MongoDB ishga tushiring:
```cmd
# Service sifatida
net start MongoDB

# Yoki manual
mongod
```

### 2. Backend ishga tushiring:
```cmd
cd backend
npm start
```

Ko'rishingiz kerak:
```
Server running on port 5000
MongoDB connected
```

### 3. Frontend ishga tushiring:
```cmd
cd frontend
npm start
```

### 4. Admin yarating:
Postman yoki browser orqali:
```
POST http://localhost:5000/api/auth/create-admin
```

### 5. Brauzerda oching:
- Frontend: http://localhost:3000
- Admin: http://localhost:3000/admin/login

## Tezkor Ishga Tushirish (Windows)

### Variant 1: Alohida terminallar

**Terminal 1 - MongoDB:**
```cmd
mongod
```

**Terminal 2 - Backend:**
```cmd
cd backend
npm start
```

**Terminal 3 - Frontend:**
```cmd
cd frontend
npm start
```

### Variant 2: START.bat (Avtomatik)

`START.bat` faylini ishga tushiring - u avtomatik ravishda barcha kerakli narsalarni ishga tushiradi.

## MongoDB Compass da Ma'lumotlarni Ko'rish

1. MongoDB Compass ni oching
2. `mongodb://localhost:27017` ga ulanish
3. "restaurant" database ni tanlang
4. Collections:
   - users (adminlar)
   - foods (ovqatlar)
   - drinks (ichimliklar)
   - orders (buyurtmalar)

## Foydali Komandalar

### MongoDB Shell (mongosh):
```javascript
// Database tanlash
use restaurant

// Collections ko'rish
show collections

// Barcha ovqatlarni ko'rish
db.foods.find()

// Barcha buyurtmalarni ko'rish
db.orders.find()

// Admin yaratish (manual)
db.users.insertOne({
  email: "admin@restaurant.uz",
  password: "$2a$10$...", // hashed password
  role: "admin"
})

// Ma'lumotlarni o'chirish
db.foods.deleteMany({})
db.drinks.deleteMany({})
db.orders.deleteMany({})
```

## Xavfsizlik

### Production uchun:
1. **Authentication yoqing:**
```cmd
mongod --auth
```

2. **Admin user yarating:**
```javascript
use admin
db.createUser({
  user: "admin",
  pwd: "secure_password",
  roles: ["root"]
})
```

3. **Connection string yangilang:**
```
mongodb://admin:secure_password@localhost:27017/restaurant?authSource=admin
```

## Backup

### Ma'lumotlarni saqlash:
```cmd
# Backup
mongodump --db restaurant --out C:\backup

# Restore
mongorestore --db restaurant C:\backup\restaurant
```

## Yordam

Agar muammolar bo'lsa:
- MongoDB Documentation: https://docs.mongodb.com
- Community Forums: https://www.mongodb.com/community/forums
- Stack Overflow: https://stackoverflow.com/questions/tagged/mongodb

---

**Eslatma:** MongoDB ishga tushgandan keyin backend avtomatik ulanadi va "MongoDB connected" xabarini ko'rsatadi.
