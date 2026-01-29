# 🏠 Home Sahifasi - Ovqatlar va Ichimliklar Bo'limlari

## ✨ Yangi Xususiyatlar

### 1. Ovqatlar Bo'limi
- ✅ Home sahifasida ovqatlar ko'rsatiladi (6 ta)
- ✅ Professional card dizayni
- ✅ Hover effektlari
- ✅ "Buyurtma berish" tugmasi
- ✅ Narx va kategoriya ko'rsatiladi
- ✅ "Barchasini ko'rish" tugmasi

### 2. Ichimliklar Bo'limi
- ✅ Home sahifasida ichimliklar ko'rsatiladi (6 ta)
- ✅ Issiq/Sovuq badge
- ✅ Professional card dizayni
- ✅ Hover effektlari
- ✅ "Buyurtma berish" tugmasi
- ✅ "Barchasini ko'rish" tugmasi

### 3. Professional Dizayn
- ✅ Gradient overlays
- ✅ Smooth animations
- ✅ Responsive grid layout
- ✅ Icon integration
- ✅ Box shadows
- ✅ Hover transformations

## 🎨 Dizayn Elementlari

### Card Struktura
```
┌─────────────────────────┐
│   Rasm (280px height)   │
│   + Hover overlay       │
│   + Buyurtma tugmasi    │
├─────────────────────────┤
│   Nomi (h3)             │
│   Tavsif (2 qator)      │
│   ─────────────────     │
│   💰 Narx | Kategoriya  │
└─────────────────────────┘
```

### Ranglar
- **Card background:** White
- **Overlay:** Linear gradient (black)
- **Price:** var(--primary) - #d4af37
- **Category badge:** var(--light) - #f8f9fa
- **Hover shadow:** rgba(0,0,0,0.2)

### Animatsiyalar
- **Card hover:** translateY(-10px)
- **Image hover:** scale(1.15)
- **Overlay:** opacity 0 → 1
- **Button hover:** translateY(-2px)
- **Staggered animation:** 0.1s delay per card

## 📊 Komponentlar

### Home.js
```jsx
// State
const [foods, setFoods] = useState([]);
const [drinks, setDrinks] = useState([]);

// API calls
fetchFoods() // Faqat 6 ta
fetchDrinks() // Faqat 6 ta

// Sections
- Hero
- Ovqatlar (home-foods)
- Ichimliklar (home-drinks)
- Features
- CTA
```

### CSS Classes
```css
.home-foods          // Ovqatlar section
.home-drinks         // Ichimliklar section
.section-header      // Header + "Barchasini ko'rish"
.view-all-btn        // "Barchasini ko'rish" tugmasi
.home-items-grid     // Grid layout
.home-item-card      // Card container
.home-item-image     // Rasm container
.home-item-overlay   // Hover overlay
.home-item-info      // Ma'lumotlar
.home-item-footer    // Narx + kategoriya
.drink-badge         // Issiq/Sovuq badge
.empty-section       // Bo'sh holat
```

## 🔧 Texnik Detaillar

### Grid Layout
```css
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
gap: 30px;
```

### Responsive
- **Desktop:** 3 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column

### Image Optimization
- **Height:** 280px
- **Object-fit:** cover
- **Transition:** transform 0.5s

### Button Styles
```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
```

## 📱 Responsive Breakpoints

### Mobile (< 768px)
- Section header: flex-direction column
- Grid: 1 column
- Image height: 240px
- Font sizes: smaller

### Tablet (768px - 1024px)
- Grid: 2 columns
- Normal spacing

### Desktop (> 1024px)
- Grid: 3 columns
- Full features

## 🎯 Xususiyatlar

### Ovqatlar Card
1. **Rasm** - 280px height, hover scale
2. **Overlay** - Gradient, hover opacity
3. **Tugma** - "Buyurtma berish" icon bilan
4. **Nomi** - 22px, bold
5. **Tavsif** - 2 qator, ellipsis
6. **Narx** - 24px, primary color, icon
7. **Kategoriya** - Badge, rounded

### Ichimliklar Card
1. **Rasm** - 280px height, hover scale
2. **Badge** - Issiq/Sovuq, top-right
3. **Overlay** - Gradient, hover opacity
4. **Tugma** - "Buyurtma berish" icon bilan
5. **Nomi** - 22px, bold
6. **Narx** - 24px, primary color, icon

### Bo'sh Holat
- Icon: 80px, opacity 0.5
- Matn: "Hozircha ... qo'shilmagan"
- Hint: "Admin panel orqali qo'shing"
- Border: 2px dashed

## 🚀 Ishlatish

### API Integration
```javascript
// Ovqatlar
const response = await axios.get('http://localhost:5000/api/foods');
setFoods(response.data.slice(0, 6));

// Ichimliklar
const response = await axios.get('http://localhost:5000/api/drinks');
setDrinks(response.data.slice(0, 6));
```

### Navigation
```jsx
// Barchasini ko'rish
<Link to="/foods">Barchasini ko'rish</Link>
<Link to="/drinks">Barchasini ko'rish</Link>

// Buyurtma berish
<Link to="/foods" className="btn btn-primary">
  <i className="fas fa-shopping-cart"></i> Buyurtma berish
</Link>
```

## 💡 Best Practices

### Performance
- ✅ Faqat 6 ta element yuklanadi
- ✅ Lazy loading images
- ✅ Optimized animations
- ✅ Efficient re-renders

### UX
- ✅ Clear call-to-action
- ✅ Visual feedback (hover)
- ✅ Loading states
- ✅ Empty states
- ✅ Responsive design

### Accessibility
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ ARIA labels

## 🎨 Customization

### Rang o'zgartirish
```css
/* Home.css */
.home-item-price {
  color: var(--primary); /* O'zgartiring */
}
```

### Grid columns
```css
.home-items-grid {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  /* minmax qiymatini o'zgartiring */
}
```

### Ko'rsatiladigan elementlar soni
```javascript
// Home.js
setFoods(response.data.slice(0, 6)); // 6 ni o'zgartiring
```

## 📊 Statistika

### Yangi Kod
- **JavaScript:** ~100 qator
- **CSS:** ~250 qator
- **Components:** 2 ta section
- **API calls:** 2 ta
- **Animations:** 5 ta

### Fayllar
- ✅ Home.js - yangilandi
- ✅ Home.css - yangilandi
- ✅ Foods.js - button icon
- ✅ Drinks.js - button icon
- ✅ Cart.js - button icons
- ✅ App.css - button styles

## 🔮 Kelajak Yaxshilanishlar

- [ ] Infinite scroll
- [ ] Filter by category
- [ ] Search functionality
- [ ] Favorites
- [ ] Quick view modal
- [ ] Add to cart from home
- [ ] Skeleton loaders
- [ ] Image lazy loading
- [ ] Pagination
- [ ] Sort options

## 📚 Qo'shimcha

### Icons
- `fa-burger` - Ovqatlar
- `fa-mug-hot` - Ichimliklar
- `fa-shopping-cart` - Buyurtma
- `fa-tag` - Narx
- `fa-fire` - Issiq
- `fa-snowflake` - Sovuq
- `fa-arrow-right` - Barchasini ko'rish

### Links
- [Font Awesome](https://fontawesome.com)
- [React Documentation](https://react.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

**Versiya:** 1.2.0  
**Sana:** 2024-01-29  
**Status:** ✅ Tayyor
