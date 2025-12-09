# FloFaction - Live Production Deployment Guide

## 🚀 LIVE SYSTEM SETUP - Ready for Client Use

This guide covers deploying FloFaction as a fully functional live system where:
- **Public Users**: Can view services, read content (limited access)
- **Registered Clients**: Full access to dashboard, AI chat, analytics
- **Admin Users**: Complete system management and monitoring

## 📋 Pre-Deployment Checklist

- [ ] Vercel account created and connected to GitHub
- [ ] Firebase project setup with Firestore and Auth enabled
- [ ] OpenAI API key obtained
- [ ] JWT_SECRET environment variable configured
- [ ] Domain name configured (optional but recommended)
- [ ] Email service (SendGrid/SMTP) configured
- [ ] Database backups configured

## 🔐 Environment Variables - PRODUCTION

**Critical**: NEVER commit these to git. Set in Vercel dashboard only.

```env
# Firebase Production
NEXT_PUBLIC_FIREBASE_API_KEY=your_prod_firebase_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_prod_domain.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_prod_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_prod_bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_prod_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_prod_app_id

# OpenAI Production
OPENAI_API_KEY=sk-your_production_key

# Security & JWT
JWT_SECRET=your-very-secure-random-string-min-32-chars
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Email Configuration
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
FROM_EMAIL=noreply@your-domain.com

# Analytics & Monitoring
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
NODE_ENV=production
```

## 📱 Access Levels & Routes

### PUBLIC ROUTES (No Login Required)
- `/` - Home page
- `/services` - Service listing
- `/pricing` - Pricing page
- `/about` - Company info
- `/contact` - Contact form
- `/signup` - Account creation
- `/login` - User login

### AUTHENTICATED ROUTES (Login Required)
- `/dashboard` - Client dashboard with personalized data
- `/profile` - User profile management
- `/chat` - AI chat interface
- `/analytics` - Usage analytics
- `/settings` - User settings

### ADMIN ROUTES (Admin Only)
- `/admin` - Admin dashboard with all metrics
- `/admin/users` - User management
- `/admin/billing` - Billing & invoices
- `/admin/reports` - System reports

## 🔌 Deployment Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for production deployment"
git push origin master
```

### Step 2: Import Project in Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Select "Import Git Repository"
3. Choose "Flofactionllc/flofaction-portfolio"
4. Configure project:
   - Framework: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`

### Step 3: Configure Environment Variables
1. In Vercel dashboard: Settings > Environment Variables
2. Add all variables from the section above
3. Set them for Production environment only

### Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete (5-10 minutes)
3. Get your production URL
4. Test all routes

## 🧪 Post-Deployment Testing

### Test Public Access
```bash
curl https://your-domain.com/
curl https://your-domain.com/api/auth/signup
```

### Test Authentication Flow
1. Create account via `/signup`
2. Login via `/login`
3. Access `/dashboard` (should work)
4. Try access `/admin` (should redirect)

### Test AI Chat
1. Login as user
2. Navigate to `/chat`
3. Send test message to AI
4. Verify response appears

## 📊 Monitoring & Maintenance

### Real-time Monitoring
- Vercel Analytics: Monitor build times, deploy status
- Firebase Console: Monitor database usage, auth events
- OpenAI Dashboard: Track API usage and costs

### Daily Tasks
- Check error logs in Vercel
- Monitor Firebase quota
- Review user signups
- Check AI chat performance

### Weekly Tasks
- Backup Firestore database
- Review analytics reports
- Check API costs
- Monitor user feedback

## 🚨 Troubleshooting

### Build Fails
- Check build logs in Vercel
- Verify all environment variables set
- Ensure Node version matches vercel.json

### Users Can't Login
- Check Firebase Auth enabled
- Verify JWT_SECRET is set
- Check auth middleware logs

### AI Chat Not Working
- Verify OpenAI API key is valid
- Check OpenAI account has credits
- Review API usage in OpenAI dashboard

### Database Errors
- Verify Firestore rules allow read/write
- Check Firebase quota
- Review database structure in Firebase Console

## 🔄 Continuous Deployment

Vercel automatically redeploys on:
- Push to `master` branch
- Merges to `master` branch

To disable auto-deploy: Project Settings > Git > Auto-Deploy: Off

## 📞 Support

For production issues:
1. Check Vercel status page
2. Review Firebase service status
3. Check OpenAI system status
4. Contact support with error logs

---

**Status**: This system is production-ready and can handle real client traffic.
**Last Updated**: December 2025
