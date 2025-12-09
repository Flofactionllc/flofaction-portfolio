# FloFaction - AI Integration & Deployment Guide

## Overview

This guide covers the complete setup and deployment of the FloFaction portfolio website with integrated AI capabilities, Firebase backend, and OpenAI chat services.

## 🚀 Features

- **Admin Dashboard**: Comprehensive metrics and client management
- **AI Chat Interface**: OpenAI GPT-4 powered customer service bot
- **Firebase Integration**: Real-time database and authentication
- **Service Pages**: Dynamic styling for all business services
- **Email Notifications**: Nodemailer for contact forms and alerts
- **Vercel Deployment**: Optimized for production deployment

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account
- OpenAI API key
- Vercel account (for deployment)

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/Flofactionllc/flofaction-portfolio.git
cd flofaction-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

Then update `.env.local` with your actual API keys:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# OpenAI
OPENAI_API_KEY=your_openai_api_key
```

## 🔧 Integration Details

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (Email/Password)
5. Get your config and add to `.env.local`

**Firestore Collections:**
- `clients` - Client data and projects
- `messages` - Chat history
- `analytics` - Dashboard metrics

### OpenAI Integration

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create API key
3. Add to `.env.local`

**Usage:**
- AI Chat component uses GPT-4 Turbo Preview
- Supports embeddings via text-embedding-3-small

### Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

## 📁 Project Structure

```
src/
├── app/
│   ├── [services]/          # Dynamic service pages
│   ├── api/                 # API routes
│   └── page.tsx             # Home page
├── components/
│   ├── AdminDashboard.tsx   # Analytics dashboard
│   ├── AIChat.tsx           # Chat interface
│   └── ...                  # Other components
├── lib/
│   ├── firebase.ts          # Firebase config
│   ├── openai.ts            # OpenAI client
│   └── ...                  # Utilities
└── styles/
    ├── service-pages.css    # Service styling
    └── ...                  # Global styles
```

## 🏃 Running Locally

```bash
npm run dev
# Server runs at http://localhost:3000
```

Access:
- Home: http://localhost:3000
- Admin Dashboard: /admin
- Chat: /chat
- Services: /[service-name]

## 🧪 Testing

```bash
npm run lint
npm run build
```

## 📊 Database Schema

### Firestore Collections

**clients**
```json
{
  "id": "client_id",
  "name": "Company Name",
  "service": "AI Solutions",
  "status": "active",
  "revenue": 5000,
  "date": "2025-01-01"
}
```

**messages**
```json
{
  "id": "msg_id",
  "userId": "user_id",
  "role": "user",
  "content": "Message text",
  "timestamp": "2025-01-01T12:00:00Z"
}
```

## 🔒 Security

- Never commit `.env.local` to git
- Firebase rules restrict Firestore access
- OpenAI API key is server-side only
- All sensitive data in environment variables

## 🎨 Styling

The project uses:
- Tailwind CSS for responsive design
- Custom CSS in `service-pages.css`
- Gradient backgrounds and animations

## 📞 Support

For integration questions:
- Check `.env.example` for required variables
- Review `src/lib/` for API configurations
- See component files for usage examples

## 📝 License

Proprietary - FloFaction LLC

---

**Last Updated:** December 2025
