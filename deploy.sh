#!/usr/bin/env bash
set -euo pipefail

echo "📦 Installing dependencies..."
npm install

echo "🏗️  Building the site..."
npm run build

echo "🚀 Deploying to Vercel (production)..."
npx vercel --prod
