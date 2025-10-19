#!/bin/bash

# LeftoverLink Deployment Script
echo "🚀 LeftoverLink Deployment Script"
echo "================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Initializing..."
    git init
    git add .
    git commit -m "Initial commit: LeftoverLink food sharing app"
fi

# Build the application
echo "📦 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Check if we're ready for deployment
echo "🔍 Checking deployment readiness..."

# Check if environment files exist
if [ -f "server/.env" ]; then
    echo "✅ Server environment file found"
else
    echo "⚠️  Server environment file not found. Creating default..."
    echo "MONGODB_URI=mongodb://localhost:27017/leftoverlink" > server/.env
    echo "PORT=5000" >> server/.env
fi

if [ -f "client/.env" ]; then
    echo "✅ Client environment file found"
else
    echo "⚠️  Client environment file not found. Creating default..."
    echo "VITE_API_URL=http://localhost:5000" > client/.env
fi

echo ""
echo "🎉 Your LeftoverLink app is ready for deployment!"
echo ""
echo "📋 Next Steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Deploy to Railway: https://railway.app"
echo "3. Or deploy to Render: https://render.com"
echo "4. Or deploy to Vercel: https://vercel.com"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
echo ""
echo "🌐 Your app will be live and ready to help reduce food waste!"
