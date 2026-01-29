# Contributing to Restaurant App

Loyihaga hissa qo'shganingiz uchun rahmat! 🎉

## Qanday hissa qo'shish mumkin?

### 1. Bug Report (Xato haqida xabar berish)

Agar xato topsangiz:
1. [Issues](https://github.com/yourusername/restaurant-app/issues) bo'limida mavjudligini tekshiring
2. Yangi issue oching
3. Quyidagi ma'lumotlarni kiriting:
   - Xato tavsifi
   - Qayta takrorlash qadamlari
   - Kutilgan natija
   - Haqiqiy natija
   - Screenshots (agar mavjud bo'lsa)
   - Browser va OS ma'lumotlari

### 2. Feature Request (Yangi xususiyat taklifi)

Yangi xususiyat taklif qilish uchun:
1. Issue oching "Feature Request" template bilan
2. Xususiyatni batafsil tasvirlab bering
3. Nima uchun kerakligini tushuntiring
4. Misol yoki mockup qo'shing (ixtiyoriy)

### 3. Code Contribution (Kod yozish)

#### Boshlash

1. **Fork qiling:**
```bash
# GitHub da Fork tugmasini bosing
```

2. **Clone qiling:**
```bash
git clone https://github.com/your-username/restaurant-app.git
cd restaurant-app
```

3. **Branch yarating:**
```bash
git checkout -b feature/amazing-feature
# yoki
git checkout -b fix/bug-fix
```

4. **Dependencies o'rnating:**
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

#### Development

1. **Kod yozing:**
   - Clean code yozing
   - Comments qo'shing
   - Best practices ga rioya qiling

2. **Test qiling:**
   - Barcha funksiyalarni test qiling
   - Responsive test qiling
   - Browser compatibility test qiling

3. **Commit qiling:**
```bash
git add .
git commit -m "feat: add amazing feature"
```

#### Commit Message Format

```
type(scope): subject

body (ixtiyoriy)

footer (ixtiyoriy)
```

**Types:**
- `feat`: Yangi xususiyat
- `fix`: Bug fix
- `docs`: Hujjatlar
- `style`: Formatting, semicolons, va h.k.
- `refactor`: Code refactoring
- `test`: Tests qo'shish
- `chore`: Build, dependencies, va h.k.

**Misol:**
```bash
git commit -m "feat(foods): add search functionality"
git commit -m "fix(cart): fix quantity update bug"
git commit -m "docs(readme): update installation steps"
```

#### Pull Request

1. **Push qiling:**
```bash
git push origin feature/amazing-feature
```

2. **Pull Request oching:**
   - GitHub da "New Pull Request" tugmasini bosing
   - O'zgarishlarni tasvirlab bering
   - Screenshots qo'shing (agar UI o'zgargan bo'lsa)
   - Related issues ni link qiling

3. **Review kutish:**
   - Maintainer review qiladi
   - O'zgarishlar so'ralishi mumkin
   - Approve bo'lgandan keyin merge qilinadi

## Code Style Guide

### JavaScript/React

```javascript
// ✅ Good
const MyComponent = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  const handleClick = () => {
    // Handler logic
  };
  
  return (
    <div className="my-component">
      {/* JSX */}
    </div>
  );
};

// ❌ Bad
function MyComponent(props) {
  var state = props.state;
  return <div>{state}</div>
}
```

### CSS

```css
/* ✅ Good */
.my-component {
  display: flex;
  align-items: center;
  padding: 20px;
  background: var(--primary);
  transition: all 0.3s ease;
}

.my-component:hover {
  transform: translateY(-5px);
}

/* ❌ Bad */
.myComponent {
  display:flex;
  padding:20px;
}
```

### Node.js/Express

```javascript
// ✅ Good
router.get('/', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server xatosi' });
  }
});

// ❌ Bad
router.get('/', (req, res) => {
  Model.find().then(data => {
    res.json(data);
  });
});
```

## Project Structure

Yangi fayllar qo'shayotganda:

```
frontend/src/
├── components/       # Reusable components
├── pages/           # Page components
├── utils/           # Utility functions
├── hooks/           # Custom hooks
└── context/         # Context providers

backend/
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Middleware functions
├── controllers/     # Route controllers
└── utils/           # Utility functions
```

## Testing

### Manual Testing
```bash
# Backend test
cd backend
npm start

# Frontend test
cd frontend
npm start
```

### Automated Testing (Future)
```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e
```

## Documentation

Yangi xususiyat qo'shsangiz:
1. README.md ni yangilang
2. FEATURES.md ga qo'shing
3. Code comments yozing
4. API documentation yangilang

## Review Process

1. **Code Review:**
   - Code quality
   - Best practices
   - Performance
   - Security

2. **Testing:**
   - Functionality
   - Responsive
   - Browser compatibility

3. **Documentation:**
   - README updated
   - Comments added
   - API docs updated

## Community Guidelines

### Do's ✅
- Respectful bo'ling
- Constructive feedback bering
- Help others
- Follow code style
- Write tests
- Document changes

### Don'ts ❌
- Rude yoki offensive bo'lmang
- Spam qilmang
- Breaking changes qilmang (major version bo'lmasa)
- Sensitive data commit qilmang
- Large files commit qilmang

## Getting Help

Yordam kerakmi?
- 📖 [Documentation](README.md)
- 💬 [Discussions](https://github.com/yourusername/restaurant-app/discussions)
- 🐛 [Issues](https://github.com/yourusername/restaurant-app/issues)
- 📧 Email: your.email@example.com

## Recognition

Barcha contributors [CONTRIBUTORS.md](CONTRIBUTORS.md) da qayd etiladi.

## License

Hissa qo'shish orqali siz kodingiz [MIT License](LICENSE) ostida bo'lishiga rozi bo'lasiz.

---

**Rahmat!** Sizning hissangiz loyihani yaxshilashga yordam beradi. 🙏
