# Deployment Guide for LeftoverLink

## Option 1: Railway (Recommended)

1. **Sign up for Railway**: Go to [railway.app](https://railway.app) and sign up with GitHub
2. **Create new project**: Click "New Project" → "Deploy from GitHub repo"
3. **Connect repository**: Select your LeftoverLink repository
4. **Set environment variables**:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: Will be automatically set by Railway
5. **Deploy**: Railway will automatically build and deploy your app

## Option 2: Render

1. **Sign up for Render**: Go to [render.com](https://render.com) and sign up
2. **Create new Web Service**: Connect your GitHub repository
3. **Configure build settings**:
   - Build Command: `npm run install-all && npm run build`
   - Start Command: `cd server && npm start`
4. **Set environment variables**:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
5. **Deploy**: Render will build and deploy automatically

## Option 3: Heroku

1. **Install Heroku CLI**: Download from [heroku.com](https://heroku.com)
2. **Login**: `heroku login`
3. **Create app**: `heroku create leftoverlink-app`
4. **Set environment variables**:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   ```
5. **Deploy**: `git push heroku main`

## MongoDB Atlas Setup

1. **Create account**: Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. **Create cluster**: Choose free tier
3. **Create database user**: Username: `leftoverlink`, Password: `leftoverlink123`
4. **Whitelist IP**: Add `0.0.0.0/0` for all IPs (or your deployment service IPs)
5. **Get connection string**: Copy the connection string and update `MONGODB_URI`

## Environment Variables

### Server (.env)
```
MONGODB_URI=mongodb+srv://leftoverlink:leftoverlink123@cluster0.mongodb.net/leftoverlink?retryWrites=true&w=majority
PORT=5000
```

### Client (.env)
```
VITE_API_URL=https://your-deployed-backend-url.com
```

## Testing Locally

1. **Install dependencies**: `npm run install-all`
2. **Start development**: `npm run dev`
3. **Access app**: Open http://localhost:3000

## Production Build

1. **Build client**: `cd client && npm run build`
2. **Start server**: `cd server && npm start`
3. **Access app**: Open http://localhost:5000
