# LeftoverLink - Share Food, Not Waste

A full-stack web application that connects people who have leftover food with those who need it, helping reduce food waste in communities.

## Features

- **Share Food**: Post your leftover food with details about quantity, location, and expiry time
- **Find Food**: Browse available food listings in your area
- **Real-time Updates**: See time remaining until food expires
- **Responsive Design**: Works on desktop and mobile devices
- **Beautiful UI**: Modern design with smooth animations

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Axios for API calls

### Backend
- Node.js with Express
- MongoDB with Mongoose
- CORS enabled for cross-origin requests

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```

3. Set up environment variables:
   - Copy `.env` files in both `server/` and `client/` directories
   - Update `MONGODB_URI` in `server/.env` with your MongoDB connection string
   - Update `VITE_API_URL` in `client/.env` if needed

4. Start the development servers:
   ```bash
   npm run dev
   ```

This will start both the backend server (port 5000) and frontend development server (port 3000).

### Manual Setup

If you prefer to run servers separately:

**Backend:**
```bash
cd server
npm install
npm run dev
```

**Frontend:**
```bash
cd client
npm install
npm run dev
```

## Project Structure

```
leftoverlink/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   └── ...
│   └── package.json
├── server/                 # Express backend
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   └── package.json
└── package.json            # Root package.json
```

## API Endpoints

- `GET /api/food` - Get all food listings
- `POST /api/food` - Create new food listing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
