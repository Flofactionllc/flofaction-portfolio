#!/bin/bash

# FloFaction Website Deployment Script
echo "🚀 Starting FloFaction Website Deployment..."

# Set environment variables
export NODE_ENV=production
export NEXT_PUBLIC_SITE_URL=https://flofaction.com

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Create deployment package
    echo "📦 Creating deployment package..."
    tar -czf flofaction-deployment.tar.gz out/ package.json package-lock.json
    
    echo "🎉 Deployment package created: flofaction-deployment.tar.gz"
    echo "📋 Next steps:"
    echo "   1. Upload flofaction-deployment.tar.gz to your hosting provider"
    echo "   2. Extract the files"
    echo "   3. Configure your web server to serve the 'out' directory"
    echo "   4. Set up custom domain: flofaction.com"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi