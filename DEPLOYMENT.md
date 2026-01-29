# Restaurant App - Deployment Guide

## MongoDB Atlas (Database)

1. https://www.mongodb.com/cloud/atlas ga o'ting
2. Bepul account yarating
3. Cluster yarating (FREE tier)
4. Database User yarating
5. Network Access da IP whitelist qo'shing (0.0.0.0/0 - barcha IP lar)
6. Connection string oling:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/restaurant
   ```

## Backend Deployment (Heroku)

### 1. Heroku CLI o'rnating
```bash
npm install -g heroku
```

### 2. Login qiling
```bash
heroku login
```

### 3. Backend papkasida:
```bash
cd backend
git init
heroku create your-restaurant-api
```

### 4. Environment variables sozlang:
```bash
heroku config:set MONGODB_URI="your-mongodb-atlas-uri"
heroku config:set JWT_SECRET="your-secret-key"
heroku config:set NODE_ENV=production
```

### 5. Deploy qiling:
```bash
git add .
git commit -m "Initial deploy"
git push heroku master
```

### 6. Admin yarating:
```bash
heroku run node -e "require('./routes/auth').createAdmin()"
```

## Frontend Deployment (Vercel)

### 1. Vercel CLI o'rnating
```bash
npm install -g vercel
```

### 2. Frontend papkasida:
```bash
cd frontend
```

### 3. API URL ni yangilang
`src/App.js` va boshqa fayllarda:
```javascript
// O'rniga: http://localhost:5000
// Yozing: https://your-restaurant-api.herokuapp.com
```

### 4. Deploy qiling:
```bash
vercel
```

### 5. Production deploy:
```bash
vercel --prod
```

## Alternative: DigitalOcean

### Backend + Frontend birgalikda:

1. Droplet yarating (Ubuntu 20.04)
2. SSH orqali ulanish
3. Node.js o'rnating:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. MongoDB o'rnating yoki Atlas ishlatish
5. Nginx o'rnating:
```bash
sudo apt install nginx
```

6. PM2 o'rnating:
```bash
sudo npm install -g pm2
```

7. Loyihani clone qiling:
```bash
git clone your-repo-url
cd restaurant-app
```

8. Backend ishga tushiring:
```bash
cd backend
npm install
pm2 start server.js --name restaurant-api
```

9. Frontend build qiling:
```bash
cd ../frontend
npm install
npm run build
```

10. Nginx sozlang:
```bash
sudo nano /etc/nginx/sites-available/restaurant
```

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /path/to/frontend/build;
        try_files $uri /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

11. Nginx restart:
```bash
sudo ln -s /etc/nginx/sites-available/restaurant /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## SSL Certificate (HTTPS)

### Let's Encrypt bilan:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Environment Variables

### Production .env:
```
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/restaurant
JWT_SECRET=very-secure-random-string-here
NODE_ENV=production
```

## Monitoring

### PM2 monitoring:
```bash
pm2 monit
pm2 logs restaurant-api
```

### Auto-restart on reboot:
```bash
pm2 startup
pm2 save
```

## Backup

### MongoDB backup:
```bash
mongodump --uri="your-mongodb-uri" --out=/backup/$(date +%Y%m%d)
```

## Domain sozlash

1. Domain sotib oling (Namecheap, GoDaddy, va h.k.)
2. DNS sozlamalarida A record qo'shing:
   - Type: A
   - Host: @
   - Value: Your-Server-IP
   - TTL: Automatic

3. www subdomain uchun:
   - Type: CNAME
   - Host: www
   - Value: your-domain.com

## Performance Optimization

### Frontend:
- Image optimization (WebP format)
- Code splitting
- Lazy loading
- Caching

### Backend:
- Database indexing
- Response caching
- Compression middleware
- Rate limiting

## Security Checklist

- ✅ HTTPS enabled
- ✅ Environment variables secure
- ✅ CORS properly configured
- ✅ Rate limiting enabled
- ✅ Input validation
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ Regular backups
- ✅ MongoDB authentication
- ✅ Strong JWT secret

## Post-Deployment

1. Test barcha funksiyalar
2. Admin panel test qiling
3. Buyurtma berish test qiling
4. Mobile responsive test qiling
5. Performance test (Google PageSpeed)
6. Security scan (OWASP ZAP)

## Maintenance

- Har hafta backup oling
- Har oyda dependencies yangilang
- Logs monitoring qiling
- Performance monitoring
- User feedback yig'ing
