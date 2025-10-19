# 🚀 LeftoverLink Deployment Guide

## ✅ Project Status
- ✅ **Application Built**: Full-stack React + Node.js application
- ✅ **Dependencies Installed**: All packages installed and configured
- ✅ **Production Build**: Client built and optimized
- ✅ **Server Configuration**: Express server configured to serve static files
- ✅ **Database Setup**: MongoDB connection configured
- ✅ **Git Repository**: Initialized and committed

## 🌐 Deployment Options

### Option 1: Railway (Recommended - Easiest)

**Railway is the simplest option for full-stack deployment:**

1. **Sign up**: Go to [railway.app](https://railway.app) and sign up with GitHub
2. **Deploy**: Click "New Project" → "Deploy from GitHub repo"
3. **Connect**: Select your `leftoverlink` repository
4. **Environment Variables**: Add these in Railway dashboard:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/leftoverlink
   PORT=5000
   ```
5. **Deploy**: Railway automatically detects the Node.js app and deploys it

**Your app will be live at**: `https://your-app-name.railway.app`

### Option 2: Render (Free Tier Available)

1. **Sign up**: Go to [render.com](https://render.com)
2. **New Web Service**: Connect your GitHub repository
3. **Build Settings**:
   - Build Command: `npm run install-all && npm run build`
   - Start Command: `cd server && npm start`
4. **Environment Variables**:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
5. **Deploy**: Render will build and deploy automatically

### Option 3: Vercel + Railway (Separate Frontend/Backend)

**Deploy Frontend to Vercel:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set build command: `cd client && npm run build`
4. Set output directory: `client/dist`

**Deploy Backend to Railway:**
1. Follow Railway steps above
2. Update frontend environment variable:
   ```
   VITE_API_URL=https://your-railway-app.railway.app
   ```

## 🗄️ Database Setup

### MongoDB Atlas (Cloud Database)

1. **Create Account**: Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. **Create Cluster**: Choose free tier (M0)
3. **Database User**: 
   - Username: `leftoverlink`
   - Password: `your_secure_password`
4. **Network Access**: Add `0.0.0.0/0` (allow all IPs)
5. **Connection String**: Copy and use in your deployment

### Local MongoDB (Development)

For local development, install MongoDB locally or use Docker:

```bash
# Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## 🔧 Environment Variables

### Server (.env)
```env
MONGODB_URI=mongodb://localhost:27017/leftoverlink
PORT=5000
```

### Client (.env)
```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Quick Deploy Commands

### Test Locally
```bash
# Install dependencies
npm run install-all

# Start development servers
npm run dev

# Build for production
npm run build

# Start production server
cd server && npm start
```

### Deploy to Railway
```bash
# Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# Then follow Railway setup above
```

## 📱 Application Features

- **Share Food**: Post leftover food with details
- **Find Food**: Browse available food listings
- **Real-time Updates**: See time remaining until expiry
- **Responsive Design**: Works on all devices
- **Modern UI**: Beautiful animations with Framer Motion

## 🔗 API Endpoints

- `GET /api/food` - Get all food listings
- `POST /api/food` - Create new food listing

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Deployment**: Railway/Render/Vercel

## 📞 Support

If you encounter any issues:

1. Check the deployment logs in your hosting platform
2. Verify environment variables are set correctly
3. Ensure MongoDB connection string is valid
4. Check that all dependencies are installed

## 🎉 Success!

Once deployed, your LeftoverLink app will be live and ready to help reduce food waste in your community!

**Next Steps:**
- Share your app with friends and family
- Add more features like user authentication
- Implement real-time notifications
- Add push notifications for mobile users
