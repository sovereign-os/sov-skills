#!/bin/bash
# Sync Skills
# Pulls the latest changes from the Sovereign Skills repository.

SOV_SKILLS="$HOME/.sov-agent/skills"

echo -e "\n\033[1;34m🔄 Syncing Sovereign Skills Library...\033[0m"
cd "$SOV_SKILLS" || exit

if [ -d ".git" ]; then
    git pull origin main
    echo -e "\n\033[1;32m✅ Sync Complete.\033[0m"
else
    echo -e "\n\033[1;31m❌ Error: Not a git repository.\033[0m"
fi
