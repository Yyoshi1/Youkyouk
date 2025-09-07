#!/bin/bash

# Youkyouk Installer Script
# Make sure to run: chmod +x install.sh

echo "==================================="
echo " Youkyouk Installation Started"
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

# 4. Install dependencies
echo "Installing frontend dependencies..."
cd apps/web || exit
npm install
cd ../../ || exit

# 5. Setup database
echo "Setting up PostgreSQL database..."
read -p "Enter PostgreSQL username: " PGUSER
read -sp "Enter PostgreSQL password: " PGPASS
echo ""
read -p "Enter database name (will be created if not exists): " PGDB

export PGPASSWORD=$PGPASS
createdb -U $PGUSER $PGDB 2>/dev/null || echo "Database already exists."

echo "✅ Database setup completed."

# 6. Build frontend
echo "Building frontend..."
cd apps/web || exit
npm run build
cd ../../ || exit
echo "✅ Frontend build completed."

# 7. License setup
echo "Setting up license verification..."
LICENSE_FILE="apps/web/public/license.txt"
if [ ! -f "$LICENSE_FILE" ]; then
    read -p "Enter your Youkyouk license key: " LICENSE_KEY
    echo $LICENSE_KEY > $LICENSE_FILE
    echo "✅ License key saved."
fi

# 8. Final message
echo "==================================="
echo " Youkyouk Installation Completed!"
echo "To start the project, run: npm run dev in apps/web"
echo "==================================="
