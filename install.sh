#!/bin/bash

# Youkyouk Auto Installer Script
# Run: chmod +x install.sh && ./install.sh

echo "==================================="
echo " Youkyouk Automatic Installation"
echo "==================================="

# 1. Check Node.js
if ! command -v node &> /dev/null
then
    echo "❌ Node.js not found! Please install Node.js >= 18"
    exit 1
fi

# 2. Check npm
if ! command -v npm &> /dev/null
then
    echo "❌ npm not found! Please install npm >= 9"
    exit 1
fi

# 3. Check PostgreSQL
if ! command -v psql &> /dev/null
then
    echo "❌ PostgreSQL not found! Please install PostgreSQL >= 14"
    exit 1
fi

echo "✅ All requirements met."

# 4. Install frontend dependencies
echo "Installing frontend dependencies..."
cd apps/web || exit
npm install
cd ../../ || exit
echo "✅ Dependencies installed."

# 5. Setup PostgreSQL database automatically
DB_NAME="youkyouk_db"
DB_USER="postgres"
echo "Creating database '$DB_NAME' if not exists..."
export PGPASSWORD=$PGPASSWORD
createdb -U $DB_USER $DB_NAME 2>/dev/null || echo "Database already exists."
echo "✅ Database setup completed."

# 6. Build frontend
echo "Building frontend..."
cd apps/web || exit
npm run build
cd ../../ || exit
echo "✅ Frontend build completed."

# 7. License setup
LICENSE_FILE="apps/web/public/license.txt"
if [ ! -f "$LICENSE_FILE" ]; then
    echo "Please enter your Youkyouk license key:"
    read LICENSE_KEY
    mkdir -p $(dirname "$LICENSE_FILE")
    echo $LICENSE_KEY > $LICENSE_FILE
    echo "✅ License key saved to $LICENSE_FILE"
else
    echo "License file already exists. Skipping..."
fi

# 8. Finish
echo "==================================="
echo " Youkyouk Installation Completed!"
echo "Run the project: cd apps/web && npm run dev"
echo "==================================="
