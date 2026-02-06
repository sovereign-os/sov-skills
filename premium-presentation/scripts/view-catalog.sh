#!/bin/bash
# Premium Catalog Viewer
# Parses a markdown table file and displays it with premium formatting.

MD_FILE="$1"

if [ ! -f "$MD_FILE" ]; then
    echo "❌ Error: File not found: $MD_FILE"
    exit 1
fi

# Colors
BLUE="\033[1;34m"
CYAN="\033[0;36m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
RESET="\033[0m"
BOLD="\033[1m"
GRAY="\033[0;90m"

echo -e "\n${BLUE}════════════════════════════════════════════════════════${RESET}"
echo -e "${BOLD} 🗂️  SOVEREIGN SKILL CATALOG (LIBRARY INDEX)${RESET}"
echo -e "${BLUE}════════════════════════════════════════════════════════${RESET}\n"

# Header
printf "${GRAY}%-20s %-35s %-10s${RESET}\n" "CATEGORY" "SKILL ID" "STATUS"
echo -e "${GRAY}-------------------- ----------------------------------- ----------${RESET}"

# Parse and Format
current_category=""

while IFS= read -r line; do
    # Skip non-table lines
    if [[ ! "$line" =~ ^\| ]]; then continue; fi
    # Skip separator lines
    if [[ "$line" =~ ^\|[\ \-]+\| ]]; then continue; fi
    # Skip header line
    if [[ "$line" =~ "Category" ]]; then continue; fi

    # Extract columns (using awk for reliability)
    cat_raw=$(echo "$line" | awk -F'|' '{print $2}' | xargs)
    skill_raw=$(echo "$line" | awk -F'|' '{print $3}' | sed 's/`//g' | xargs)
    status_raw=$(echo "$line" | awk -F'|' '{print $4}' | xargs)

    # Handle merged cells (empty category means continuation)
    if [ -n "$cat_raw" ]; then
        current_category="$cat_raw"
        display_cat="${YELLOW}$current_category${RESET}"
    else
        display_cat=""
    fi
    
    # Status Icon
    if [[ "$status_raw" == "Active" ]]; then
        status_icon="${GREEN}● Active${RESET}"
    else
        status_icon="${GRAY}○ $status_raw${RESET}"
    fi

    printf "%-30s %-35s %-20s\n" "$display_cat" "${CYAN}$skill_raw${RESET}" "$status_icon"

done < "$MD_FILE"

echo -e "\n${BLUE}════════════════════════════════════════════════════════${RESET}"
echo -e "${GRAY}Use '/skills load [profile]' to activate a specific set.${RESET}\n"
