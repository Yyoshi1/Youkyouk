
#!/bin/bash
echo "Starting Youkyouk installation..."

# Backend (Rails)
cd backend/core
echo "Installing Ruby gems..."
bundle install
echo "Installing JS packages..."
yarn install || npm install
echo "Database setup..."
rails db:create db:migrate db:seed
cd ../../

# WebApp (Next.js)
cd frontend/WebApp
echo "Installing WebApp dependencies..."
npm install
cd ../..

# MobileApp (Vue.js + Quasar/Capacitor)
cd frontend/MobileApp
echo "Installing MobileApp dependencies..."
npm install
quasar mode add capacitor
cd ../../

echo "Youkyouk installation completed!"
