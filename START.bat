@echo off
echo ========================================
echo Restaurant Web Application
echo ========================================
echo.

echo MongoDB ishga tushirilmoqda...
start mongod
timeout /t 3

echo.
echo Backend ishga tushirilmoqda...
cd backend
start cmd /k "npm install && npm start"
cd ..

timeout /t 5

echo.
echo Frontend ishga tushirilmoqda...
cd frontend
start cmd /k "npm install && npm start"
cd ..

echo.
echo ========================================
echo Loyiha ishga tushdi!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo Admin: http://localhost:3000/admin/login
echo ========================================
pause
