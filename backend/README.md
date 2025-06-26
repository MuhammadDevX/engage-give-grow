
# HopeForward Backend API

A complete Express.js backend for the HopeForward non-profit website with MongoDB integration.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Configuration**
   - Copy `.env.example` to `.env`
   - Update the MongoDB URI with your MongoDB Atlas connection string
   - Set other environment variables as needed

3. **Create Admin User**
   ```bash
   npm run setup
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run setup` - Create initial admin user

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register new user
- `GET /api/auth/me` - Get current user

### Programs
- `GET /api/programs` - Get all programs
- `POST /api/programs` - Create program (Admin)
- `PUT /api/programs/:id` - Update program (Admin)
- `DELETE /api/programs/:id` - Delete program (Admin)

### Donations
- `GET /api/donations` - Get donations (Admin)
- `POST /api/donations` - Create donation
- `GET /api/donations/stats` - Get donation statistics

### Contacts
- `GET /api/contacts` - Get contacts (Admin)
- `POST /api/contacts` - Submit contact form
- `PUT /api/contacts/:id` - Update contact (Admin)

### Newsletter
- `GET /api/newsletter` - Get subscribers (Admin)
- `POST /api/newsletter` - Subscribe to newsletter
- `DELETE /api/newsletter/:email` - Unsubscribe

### Impact
- `GET /api/impact` - Get impact records
- `POST /api/impact` - Create impact record (Admin)
- `GET /api/impact/stats` - Get impact statistics

### Content
- `GET /api/content` - Get content (news, events, blogs)
- `POST /api/content` - Create content (Admin)
- `PUT /api/content/:id` - Update content (Admin)

### Partners
- `GET /api/partners` - Get partners
- `POST /api/partners` - Create partner (Admin)
- `PUT /api/partners/:id` - Update partner (Admin)

### Users
- `GET /api/users` - Get users (Admin)
- `POST /api/users` - Create user (Admin)
- `PUT /api/users/:id` - Update user (Admin)

### Settings
- `GET /api/settings` - Get settings
- `PUT /api/settings/:key` - Update setting (Admin)

## Database Models

- **User**: Admin users, volunteers, donors
- **Program**: Organization programs and projects
- **Donation**: Donation records and tracking
- **Impact**: Impact statistics and stories
- **Content**: News, events, blog posts
- **Contact**: Contact form submissions
- **Newsletter**: Email subscribers
- **Partner**: Partner organizations
- **Settings**: Site configuration

## Security Features

- JWT authentication
- Role-based access control
- Password hashing with bcrypt
- Rate limiting
- CORS configuration
- Input validation
- Helmet security headers
