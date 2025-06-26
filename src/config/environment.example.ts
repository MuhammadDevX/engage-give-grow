
// Copy this file to environment.ts and add your actual configuration
export const config = {
  // Backend API URL
  apiUrl: process.env.NODE_ENV === 'production' 
    ? 'https://your-backend-domain.com/api' 
    : 'http://localhost:3001/api',
  
  // MongoDB connection (for reference, actual connection handled by backend)
  mongodbUri: 'mongodb+srv://username:password@cluster.mongodb.net/hopeforward?retryWrites=true&w=majority',
  
  // Frontend environment variables needed:
  authSecret: 'your-jwt-secret-key',
  
  emailService: {
    apiKey: 'your-email-service-api-key',
    fromEmail: 'noreply@hopeforward.org'
  }
};

// Environment variables needed in .env file:
// VITE_API_URL=http://localhost:3001/api (for frontend)
// 
// Backend .env file should contain:
// MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hopeforward
// JWT_SECRET=your-jwt-secret
// FRONTEND_URL=http://localhost:5173
// PORT=3001
// ADMIN_EMAIL=admin@hopeforward.org
// ADMIN_PASSWORD=admin123
