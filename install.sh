#!/bin/bash
echo "Starting Youkyouk setup..."

# 1. Install Ruby gems
bundle install

# 2. Install Node modules
npm install

# 3. Setup database
rails db:create
rails db:migrate
rails db:seed

# 4. Create initial admin
rails runner "Admin.create!(email: 'admin@youkyouk.com', password: 'ChangeMe123!', role: 'super_admin')"

echo "Youkyouk installation completed!"
