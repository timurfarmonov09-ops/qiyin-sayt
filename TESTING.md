# 🧪 Testing Guide - Restaurant App

## Manual Testing Checklist

### 1. Backend API Testing

#### Auth Endpoints

**Create Admin:**
```bash
POST http://localhost:5000/api/auth/create-admin
```
Expected: `{ message: "Admin yaratildi" }`

**Admin Login:**
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@restaurant.uz",
  "password": "admin123"
}
```
Expected: `{ token: "...", user: {...} }`

#### Foods Endpoints

**Get All Foods:**
```bash
GET http://localhost:5000/api/foods
```
Expected: Array of foods

**Create Food (Admin):**
```bash
POST http://localhost:5000/api/foods
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "name": "Osh",
  "description": "An'anaviy o'zbek taomi",
  "price": 25000,
  "category": "Milliy taomlar",
  "image": "https://via.placeholder.com/300x200"
}
```

**Update Food (Admin):**
```bash
PUT http://localhost:5000/api/foods/FOOD_ID
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "price": 30000
}
```

**Delete Food (Admin):**
```bash
DELETE http://localhost:5000/api/foods/FOOD_ID
Authorization: Bearer YOUR_TOKEN
```

#### Drinks Endpoints

**Get All Drinks:**
```bash
GET http://localhost:5000/api/drinks
```

**Create Drink (Admin):**
```bash
POST http://localhost:5000/api/drinks
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "name": "Choy",
  "price": 5000,
  "type": "hot",
  "image": "https://via.placeholder.com/300x200"
}
```

#### Orders Endpoints

**Create Order:**
```bash
POST http://localhost:5000/api/orders
Content-Type: application/json

{
  "customerName": "Test User",
  "customerPhone": "+998901234567",
  "address": "Toshkent",
  "items": [
    {
      "itemId": "FOOD_ID",
      "name": "Osh",
      "price": 25000,
      "quantity": 2,
      "type": "food"
    }
  ],
  "totalAmount": 50000
}
```

**Get All Orders (Admin):**
```bash
GET http://localhost:5000/api/orders
Authorization: Bearer YOUR_TOKEN
```

**Update Order Status (Admin):**
```bash
PUT http://localhost:5000/api/orders/ORDER_ID
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "status": "confirmed"
}
```

### 2. Frontend Testing

#### Home Page
- [ ] Hero banner ko'rinadi
- [ ] Restaurant nomi va slogan to'g'ri
- [ ] "Buyurtma berish" tugmasi ishlaydi
- [ ] "Biz haqimizda" tugmasi ishlaydi
- [ ] Features cards ko'rinadi (4 ta)
- [ ] CTA section ko'rinadi
- [ ] Animatsiyalar silliq ishlaydi

#### Navbar
- [ ] Logo ko'rinadi
- [ ] Barcha linklar ishlaydi
- [ ] Cart badge soni to'g'ri
- [ ] Mobilda hamburger menu ishlaydi
- [ ] Sticky navigation ishlaydi

#### Foods Page
- [ ] Barcha ovqatlar yuklanadi
- [ ] Kategoriya filter ishlaydi
- [ ] Hover effektlari ishlaydi
- [ ] "Savatga qo'shish" tugmasi ishlaydi
- [ ] Responsive grid ishlaydi
- [ ] Loading state ko'rinadi

#### Drinks Page
- [ ] Barcha ichimliklar yuklanadi
- [ ] Tur filter ishlaydi (issiq/sovuq)
- [ ] Badge to'g'ri ko'rinadi
- [ ] "Qo'shish" tugmasi ishlaydi
- [ ] Responsive grid ishlaydi

#### About Page
- [ ] Storytelling matn to'g'ri
- [ ] Qadriyatlar cards ko'rinadi (4 ta)
- [ ] Layout responsive
- [ ] Animatsiyalar ishlaydi
- [ ] Rasmlar placeholder ko'rinadi

#### Cart Page
- [ ] Savat mahsulotlari ko'rinadi
- [ ] Miqdor o'zgartirish ishlaydi (+ va -)
- [ ] O'chirish tugmasi ishlaydi
- [ ] Jami summa to'g'ri hisoblanadi
- [ ] Form validation ishlaydi
- [ ] Buyurtma yuborish ishlaydi
- [ ] Success message ko'rinadi
- [ ] Bo'sh savat holati to'g'ri

#### Admin Login
- [ ] Login form ko'rinadi
- [ ] Email va parol validation
- [ ] Login ishlaydi
- [ ] Error message ko'rinadi
- [ ] Redirect to dashboard
- [ ] Token localStorage ga saqlanadi

#### Admin Dashboard
- [ ] 3 ta tab ko'rinadi
- [ ] Logout tugmasi ishlaydi
- [ ] Token tekshiriladi

**Foods Tab:**
- [ ] Barcha ovqatlar ko'rinadi
- [ ] "+ Yangi ovqat" tugmasi ishlaydi
- [ ] Modal ochiladi
- [ ] Ovqat qo'shish ishlaydi
- [ ] Tahrirlash ishlaydi
- [ ] O'chirish ishlaydi (confirmation bilan)
- [ ] Ma'lumotlar yangilanadi

**Drinks Tab:**
- [ ] Barcha ichimliklar ko'rinadi
- [ ] "+ Yangi ichimlik" tugmasi ishlaydi
- [ ] Modal ochiladi
- [ ] Ichimlik qo'shish ishlaydi
- [ ] Tahrirlash ishlaydi
- [ ] O'chirish ishlaydi

**Orders Tab:**
- [ ] Barcha buyurtmalar ko'rinadi
- [ ] Buyurtma tafsilotlari to'g'ri
- [ ] Status dropdown ishlaydi
- [ ] Status o'zgartirish ishlaydi
- [ ] Rang kodlari to'g'ri

### 3. Responsive Testing

#### Mobile (320px - 767px)
- [ ] Navbar hamburger menu
- [ ] Hero banner responsive
- [ ] Foods grid 1 column
- [ ] Drinks grid 1 column
- [ ] Cart layout vertical
- [ ] Admin panel responsive
- [ ] Forms responsive
- [ ] Buttons touch-friendly

#### Tablet (768px - 1023px)
- [ ] Navbar horizontal
- [ ] Foods grid 2 columns
- [ ] Drinks grid 2 columns
- [ ] Cart layout 2 columns
- [ ] Admin panel 2 columns

#### Desktop (1024px+)
- [ ] Full layout
- [ ] Foods grid 3+ columns
- [ ] Drinks grid 3+ columns
- [ ] Cart layout 2 columns
- [ ] Admin panel full width

### 4. Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 5. Performance Testing

#### Page Load Times
- [ ] Home page < 2s
- [ ] Foods page < 2s
- [ ] Drinks page < 2s
- [ ] Admin dashboard < 2s

#### API Response Times
- [ ] GET requests < 500ms
- [ ] POST requests < 1s
- [ ] PUT requests < 1s
- [ ] DELETE requests < 500ms

### 6. Security Testing

- [ ] Admin routes protected
- [ ] JWT token required
- [ ] Password hashed
- [ ] CORS configured
- [ ] Input validation
- [ ] XSS prevention
- [ ] SQL injection prevention

### 7. Error Handling

- [ ] Network errors handled
- [ ] 404 errors handled
- [ ] 500 errors handled
- [ ] Form validation errors
- [ ] Empty states shown
- [ ] Loading states shown

### 8. User Flow Testing

**Customer Flow:**
1. [ ] Saytga kirish
2. [ ] Ovqatlarni ko'rish
3. [ ] Ovqat tanlash va savatga qo'shish
4. [ ] Ichimlik tanlash va savatga qo'shish
5. [ ] Savatni ko'rish
6. [ ] Buyurtma ma'lumotlarini to'ldirish
7. [ ] Buyurtma berish
8. [ ] Success message ko'rish

**Admin Flow:**
1. [ ] Admin login
2. [ ] Dashboard ko'rish
3. [ ] Yangi ovqat qo'shish
4. [ ] Ovqatni tahrirlash
5. [ ] Yangi ichimlik qo'shish
6. [ ] Buyurtmalarni ko'rish
7. [ ] Buyurtma statusini o'zgartirish
8. [ ] Logout

## Automated Testing (Future)

### Unit Tests
```javascript
// Example: Food model test
describe('Food Model', () => {
  it('should create a food item', async () => {
    const food = new Food({
      name: 'Test Food',
      description: 'Test Description',
      price: 10000,
      category: 'Test'
    });
    const savedFood = await food.save();
    expect(savedFood.name).toBe('Test Food');
  });
});
```

### Integration Tests
```javascript
// Example: API endpoint test
describe('POST /api/foods', () => {
  it('should create a new food (admin)', async () => {
    const res = await request(app)
      .post('/api/foods')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        name: 'Test Food',
        description: 'Test',
        price: 10000,
        category: 'Test'
      });
    expect(res.status).toBe(201);
  });
});
```

### E2E Tests (Cypress)
```javascript
// Example: User flow test
describe('Customer Order Flow', () => {
  it('should complete an order', () => {
    cy.visit('/');
    cy.contains('Buyurtma berish').click();
    cy.get('.food-card').first().find('button').click();
    cy.get('.cart-link').click();
    cy.get('input[name="customerName"]').type('Test User');
    cy.get('input[name="customerPhone"]').type('+998901234567');
    cy.get('button[type="submit"]').click();
    cy.contains('Buyurtma qabul qilindi!').should('be.visible');
  });
});
```

## Test Data

### Sample Foods
```json
[
  {
    "name": "Osh",
    "description": "An'anaviy o'zbek taomi",
    "price": 25000,
    "category": "Milliy taomlar",
    "image": "https://via.placeholder.com/300x200"
  },
  {
    "name": "Lag'mon",
    "description": "Qo'l tortmasi va go'sht",
    "price": 22000,
    "category": "Milliy taomlar",
    "image": "https://via.placeholder.com/300x200"
  },
  {
    "name": "Burger",
    "description": "Klassik burger",
    "price": 18000,
    "category": "Fast food",
    "image": "https://via.placeholder.com/300x200"
  }
]
```

### Sample Drinks
```json
[
  {
    "name": "Choy",
    "price": 5000,
    "type": "hot",
    "image": "https://via.placeholder.com/300x200"
  },
  {
    "name": "Kofe",
    "price": 8000,
    "type": "hot",
    "image": "https://via.placeholder.com/300x200"
  },
  {
    "name": "Cola",
    "price": 7000,
    "type": "cold",
    "image": "https://via.placeholder.com/300x200"
  }
]
```

## Bug Reporting Template

```markdown
**Bug Title:** [Qisqa tavsif]

**Severity:** [Critical / High / Medium / Low]

**Steps to Reproduce:**
1. 
2. 
3. 

**Expected Result:**
[Nima bo'lishi kerak edi]

**Actual Result:**
[Nima bo'ldi]

**Screenshots:**
[Agar mavjud bo'lsa]

**Environment:**
- Browser: 
- OS: 
- Screen size: 
```

## Testing Tools

- **Postman** - API testing
- **Chrome DevTools** - Frontend debugging
- **MongoDB Compass** - Database inspection
- **React DevTools** - Component inspection
- **Lighthouse** - Performance testing

---

**Testing muhim!** Har bir feature test qilinishi kerak. 🧪
