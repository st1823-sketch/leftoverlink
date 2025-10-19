@echo off
echo 🚀 LeftoverLink Deployment Script
echo =================================

REM Check if git is initialized
if not exist ".git" (
    echo ❌ Git repository not found. Initializing...
    git init
    git add .
    git commit -m "Initial commit: LeftoverLink food sharing app"
)

REM Build the application
echo 📦 Building application...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
) else (
    echo ❌ Build failed. Please check the errors above.
    pause
    exit /b 1
)

REM Check deployment readiness
echo 🔍 Checking deployment readiness...

REM Check environment files
if exist "server\.env" (
    echo ✅ Server environment file found
) else (
    echo ⚠️  Server environment file not found. Creating default...
    echo MONGODB_URI=mongodb://localhost:27017/leftoverlink > server\.env
    echo PORT=5000 >> server\.env
)

if exist "client\.env" (
    echo ✅ Client environment file found
) else (
    echo ⚠️  Client environment file not found. Creating default...
    echo VITE_API_URL=http://localhost:5000 > client\.env
)

echo.
echo 🎉 Your LeftoverLink app is ready for deployment!
echo.
echo 📋 Next Steps:
echo 1. Push to GitHub: git push origin main
echo 2. Deploy to Railway: https://railway.app
echo 3. Or deploy to Render: https://render.com
echo 4. Or deploy to Vercel: https://vercel.com
echo.
echo 📖 See DEPLOYMENT.md for detailed instructions
echo.
echo 🌐 Your app will be live and ready to help reduce food waste!
pause
