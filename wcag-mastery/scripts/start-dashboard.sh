#!/bin/bash
# Description: Starts the WCAG Mastery Dashboard (Next.js) on custom port

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_DIR="$SCRIPT_DIR/../app"
PORT=8811

# Check if node_modules exists
if [ ! -d "$APP_DIR/node_modules" ]; then
    echo "Installing dependencies..."
    cd "$APP_DIR" && npm install
else
    cd "$APP_DIR"
fi

echo "Starting WCAG Dashboard on http://localhost:$PORT..."
# Explicitly use webpack to avoid Turbopack conflicts with our custom config
npm run dev -- --webpack -p $PORT
