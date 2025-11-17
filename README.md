# ShowMax Events - AV Rental Website

A modern, enterprise-level website for an Audio/Visual rental company in Vancouver, built with Next.js, TypeScript, and a comprehensive tech stack.

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **CMS**: Sanity (marketing content, equipment, portfolio, blog)
- **Database/Auth**: Supabase (transactional data, authentication)
- **API Integration**: Flex Rental Solutions API (inventory management)
- **Email**: Resend
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Hosting**: Vercel

## Features

### Public Features
- 🏠 Modern homepage with hero section and feature showcase
- 📦 Equipment catalog with live availability from Flex API
- 🎨 Portfolio showcase (Sanity CMS)
- 📧 Contact form with inquiry system
- 📱 Fully responsive design
- 🔍 SEO optimized with metadata, sitemap, and OpenGraph tags

### Client Portal
- 🔐 Secure authentication (Supabase Auth)
- 📋 View and manage rental inquiries
- 💾 Save equipment quotes
- 👤 Profile management
- 📊 Inquiry history and status tracking

### Admin Dashboard
- 👨‍💼 Manage rental inquiries
- 👥 Client management
- 📈 Dashboard statistics
- 🔄 Update inquiry status (pending → reviewing → quoted → booked/declined)

### Security Features
- ✅ SSL/HTTPS (Vercel)
- ✅ DDoS protection (Vercel)
- ✅ SQL injection prevention (Supabase RLS)
- ✅ Rate limiting
- ✅ CORS configuration
- ✅ Input validation (Zod)
- ✅ Content Security Policy headers
- ✅ Secure session management

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Sanity account
- Flex Rental Solutions API credentials
- Resend API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd showmaxevents
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token

# Flex Rental Solutions API
FLEX_API_KEY=your_flex_api_key
FLEX_API_URL=https://api.flexrentalsolutions.com

# Resend Email Service
RESEND_API_KEY=your_resend_api_key

# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Admin Configuration
ADMIN_EMAIL=admin@example.com
```

4. Set up Supabase database:

Run the SQL schema file to create tables and RLS policies:
```bash
# Copy the contents of lib/supabase/schema.sql
# Paste and run in Supabase SQL Editor
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setting Up Sanity Studio

1. Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio)

2. Sign in with your Sanity account

3. Start adding content:
   - Equipment items
   - Portfolio projects
   - Blog posts
   - Site settings

## Project Structure

```
/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth routes (login, signup)
│   ├── (marketing)/              # Marketing pages
│   ├── admin/                    # Admin dashboard
│   ├── api/                      # API routes
│   ├── dashboard/                # Client dashboard
│   ├── equipment/                # Equipment catalog
│   ├── portfolio/                # Portfolio showcase
│   └── studio/                   # Sanity Studio
├── components/                   # React components
│   ├── auth/                     # Auth components
│   ├── common/                   # Common components
│   ├── equipment/                # Equipment components
│   ├── forms/                    # Form components
│   ├── layout/                   # Layout components
│   ├── portfolio/                # Portfolio components
│   └── ui/                       # Shadcn UI components
├── lib/                          # Library code
│   ├── email/                    # Email service
│   ├── flex/                     # Flex API client
│   ├── sanity/                   # Sanity client
│   ├── store/                    # Zustand stores
│   ├── supabase/                 # Supabase clients
│   ├── types/                    # TypeScript types
│   └── utils/                    # Utility functions
├── sanity/                       # Sanity CMS
│   ├── schemas/                  # Content schemas
│   └── sanity.config.ts          # Sanity configuration
├── middleware.ts                 # Next.js middleware
├── next.config.ts                # Next.js configuration
└── tailwind.config.js            # Tailwind configuration
```

## Database Schema

### Users Table
- Extends Supabase auth.users
- Fields: id, email, full_name, company_name, phone, role (client/admin)

### Inquiries Table
- Rental equipment requests
- Fields: id, user_id, event details, equipment_requested, status, timestamps
- Status: pending → reviewing → quoted → booked/declined

### Saved Quotes Table
- User-saved equipment lists
- Fields: id, user_id, name, equipment_items, notes, timestamps

### Equipment Favorites Table
- User favorite equipment
- Fields: id, user_id, equipment_slug, timestamp

## API Routes

### Public Routes
- `POST /api/inquiries` - Create new inquiry
- `POST /api/availability` - Check equipment availability

### Authenticated Routes
- `GET /api/inquiries` - Get user inquiries
- `GET /api/quotes` - Get saved quotes
- `POST /api/quotes` - Save new quote
- `DELETE /api/quotes?id=` - Delete quote

### Admin Routes
- `PATCH /api/inquiries/[id]` - Update inquiry status
- `GET /api/admin/stats` - Get dashboard statistics

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import project in Vercel:
   - Connect your GitHub repository
   - Framework Preset: Next.js
   - Root Directory: ./

3. Add environment variables in Vercel dashboard

4. Deploy!

### Post-Deployment Checklist

- [ ] Verify all environment variables are set
- [ ] Test authentication flow
- [ ] Test inquiry submission
- [ ] Verify email notifications work
- [ ] Test Flex API integration
- [ ] Check Sanity Studio access (/studio)
- [ ] Verify SSL certificate
- [ ] Test rate limiting
- [ ] Check admin dashboard
- [ ] Test responsive design on mobile
- [ ] Verify SEO metadata and sitemap
- [ ] Set up custom domain (if applicable)

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **API Keys**: Rotate keys regularly
3. **Database**: RLS policies protect user data
4. **Authentication**: Secure session management via Supabase
5. **Rate Limiting**: Protects against abuse
6. **Input Validation**: All inputs validated with Zod
7. **CORS**: Configured to allow only trusted origins

## Development

### Running Locally
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Support

For issues or questions:
- Email: contact@showmaxevents.com
- Phone: (604) 555-0123

## License

Proprietary - All rights reserved by ShowMax Events

---

Built with ❤️ using Next.js and modern web technologies.
