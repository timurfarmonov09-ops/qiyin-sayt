#!/bin/bash

echo "========================================"
echo "Restaurant Web Application"
echo "========================================"
echo ""

echo "MongoDB ishga tushirilmoqda..."
# MongoDB ni background da ishga tushirish
mongod --fork --logpath /var/log/mongodb.log

echo ""
echo "Backend ishga tushirilmoqda..."
cd backend
npm install
npm start &
BACKEND_PID=$!
cd ..

sleep 5

echo ""
echo "Frontend ishga tushirilmoqda..."
cd frontend
npm install
npm start &
FRONTEND_PID=$!
cd ..

echo ""
echo "========================================"
echo "Loyiha ishga tushdi!"
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:3000"
echo "Admin: http://localhost:3000/admin/login"
echo "========================================"
echo ""
echo "To'xtatish uchun Ctrl+C bosing"

# Wait for processes
wait $BACKEND_PID $FRONTEND_PID
