#!/bin/bash

echo "===================================="
echo " 🚀 Youkyouk Installation Started "
echo "===================================="

# Check Node.js
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js v18+ before continuing."
    exit 1
fi

# Check npm
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install npm before continuing."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "⚡ Building the project..."
npm run build

# Run database migrations
echo "🗄️ Running database migrations..."
npm run migrate

# Done
echo "===================================="
echo " ✅ Installation Completed Successfully! "
echo " Run: npm run dev  (to start development server)"
echo " Run: npm run start (to start production server)"
echo "===================================="
