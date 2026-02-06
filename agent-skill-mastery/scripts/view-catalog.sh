#!/bin/bash
# Premium Catalog Viewer
# Parses a markdown table file and displays it with premium formatting.

MD_FILE="$1"

if [ ! -f "$MD_FILE" ]; then
    echo "❌ Error: File not found: $MD_FILE"
    exit 1
fi

# Use awk for robust parsing and formatting
awk '
BEGIN {
    # Define Colors
    BLUE = "\033[1;34m"
    CYAN = "\033[0;36m"
    GREEN = "\033[1;32m"
    YELLOW = "\033[1;33m"
    GRAY = "\033[0;90m"
    BOLD = "\033[1m"
    RESET = "\033[0m"

    print ""
    print BLUE "════════════════════════════════════════════════════════" RESET
    print BOLD " 🗂️  SOVEREIGN SKILL CATALOG (LIBRARY INDEX)" RESET
    print BLUE "════════════════════════════════════════════════════════" RESET
    print ""
    
    # Print Header
    printf "%-35s %-40s %-15s\n", GRAY "CATEGORY", "SKILL ID", "STATUS" RESET
    print GRAY "----------------------------------- ---------------------------------------- ----------" RESET
    
    current_cat = ""
}

# Skip process for lines that dont start with |
!/^\|/ { next }

# Skip separator lines (containing dashes/colons)
/^\|[ \t]*[:\-] / { next }

# Skip Header line
/Category.*Skill ID/ { next }

{
    # Extract fields (pipe delimited)
    # $1 is empty (before first pipe), $2 is Category, $3 is Skill, $4 is Status
    
    split($0, fields, "|")
    
    # Clean whitespace and markdown ticks
    cat = fields[2]
    sub(/^[ \t]+/, "", cat); sub(/[ \t]+$/, "", cat);
    # Remove ** bold markers if present
    gsub(/\*\*/, "", cat);
    
    skill = fields[3]
    sub(/^[ \t]+/, "", skill); sub(/[ \t]+$/, "", skill); 
    gsub(/`/, "", skill); # Remove backticks
    
    status = fields[4]
    sub(/^[ \t]+/, "", status); sub(/[ \t]+$/, "", status);

    # Category Logic (Merged Cells)
    if (cat != "") {
        current_cat = cat
        display_cat = YELLOW current_cat RESET
    } else {
        display_cat = "" 
    }
    
    # Status Logic
    if (status == "Active") {
        disp_status = GREEN "● Active" RESET
    } else {
        disp_status = GRAY "○ " status RESET
    }
    
    # Print formatted row
    # Use length checks to ensure alignment if color codes mess it up? 
    # printf counts color codes in length, so we print color separate from padding if needed.
    # But for simplicity, direct printf usually works ok if width is generous.
    
    # To fix alignment with colors, we print key without color code to determine padding, but that is complex in awk.
    # simpler approach: Just print consistent structure.
    
    if (cat != "") {
        # Print a spacer before new categories (except the first one)
        # if (NR > 10) print "" 
    }

    # Print
    # We construct the visual string.
    # Note: awk printf width includes invisible chars. 
    # Workaround: Print the columns with manual spacing or use a focused approach.
    
    # Approach: 
    # Cat: 35 chars
    # Skill: 40 chars
    # Status: rest
    
    # We will output raw text via printf to handle alignment, then inject color.
    # Actually, simpler:
    
    if (cat != "") {
         printf "%s%-35s%s", YELLOW, current_cat, RESET
    } else {
         printf "%-35s", ""
    }
    
    printf "%s%-40s%s", CYAN, skill, RESET
    printf "%s\n", disp_status

}

END {
    print ""
    print BLUE "════════════════════════════════════════════════════════" RESET
    print GRAY "Use " BOLD "/skills load [profile]" RESET GRAY " to activate a specific set." RESET
    print ""
}
' "$MD_FILE"
