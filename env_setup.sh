#!/bin/bash

# 🌐 Environment Setup Script for Eisel
# Use this to populate .env files for backend and frontend before deployment

# BACKEND ENV (Render)
echo "Setting up backend environment..."
cat <<EOT > backend/.env
JWT_SECRET=$(openssl rand -hex 16)
STRIPE_SECRET_KEY=sk_test_your_test_key_here
FRONTEND_URL=https://eisel.vercel.app
DATABASE_URL=postgresql://username:password@hostname:5432/eisel
EOT

# FRONTEND ENV (Vercel)
echo "Setting up frontend environment..."
cat <<EOT > frontend/.env.local
NEXT_PUBLIC_API_URL=https://eisel-backend.onrender.com
EOT

# Confirm setup
echo "✅ .env files generated in backend/ and frontend/"
echo "👉 Customize credentials before deploying."
echo "💡 Use ".env" for Render and ".env.local" for Vercel."
