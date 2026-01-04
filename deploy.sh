#!/bin/bash
set -e

echo "Deploying OWERA Portfolio..."

# Load NVM/Node environment (fix for non-interactive shell)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# If nvm isn't used, try loading .bashrc directly
# source ~/.bashrc

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# 1. Pull latest changes
echo "Pulling latest changes from git..."
git pull origin main

# 2. Install dependencies
echo "Installing dependencies..."
npm ci

# 3. Build the project
echo "Building the project..."
npm run build

# 4. Manage PM2 process
APP_NAME="owera-portfolio"

if pm2 list | grep -q "$APP_NAME"; then
    echo "App '$APP_NAME' is running. Restarting..."
    pm2 restart "$APP_NAME"
else
    echo "App '$APP_NAME' is not running. Starting..."
    # Serve the 'dist' directory on port 5001 as a SPA
    # Assumes pm2 is installed globally
    pm2 serve dist 5001 --name "$APP_NAME" --spa
fi

echo "Deployment complete!"
