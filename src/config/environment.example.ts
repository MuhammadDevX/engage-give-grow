
// Copy this file to environment.ts and add your actual MongoDB URI
export const config = {
  mongodbUri: 'mongodb+srv://username:password@cluster.mongodb.net/hopeforward?retryWrites=true&w=majority',
  apiUrl: process.env.NODE_ENV === 'production' ? 'https://yourapi.com/api' : 'http://localhost:3001/api',
  authSecret: 'your-jwt-secret-key',
  emailService: {
    apiKey: 'your-email-service-api-key',
    fromEmail: 'noreply@hopeforward.org'
  }
};

// Environment variables needed:
// VITE_MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hopeforward
// VITE_API_URL=http://localhost:3001/api
// VITE_AUTH_SECRET=your-jwt-secret
