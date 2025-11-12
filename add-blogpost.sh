#!/bin/bash

# Add Blog Post Script
# Usage: ./add-blogpost.sh <markdown-filename> <slug> <tags>
# Example: ./add-blogpost.sh "אירועים לכל עת - לוגיסטיקה.md" "event-organization-logistics" "hosting,tips,thoughts"

# Configuration
OBSIDIAN_PATH="$HOME/Documents/Obsidian Vault/Writing/Prod"
BLOG_PATH="$HOME/Code/web-fork/content/blog"

# Check arguments
if [ "$#" -lt 3 ]; then
    echo "Usage: $0 <markdown-filename> <slug> <tags>"
    echo "Example: $0 'אירועים לכל עת - לוגיסטיקה.md' 'event-organization-logistics' 'hosting,tips,thoughts'"
    exit 1
fi

FILENAME="$1"
SLUG="$2"
TAGS="$3"
SOURCE_FILE="$OBSIDIAN_PATH/$FILENAME"

# Check if source file exists
if [ ! -f "$SOURCE_FILE" ]; then
    echo "Error: Source file not found: $SOURCE_FILE"
    exit 1
fi

# Get current date
CURRENT_DATE=$(date +%Y-%m-%d)

echo "Creating blog post structure for: $SLUG"
echo "Source: $SOURCE_FILE"
echo "Date: $CURRENT_DATE"
echo "Tags: $TAGS"
echo ""

# Create directories
mkdir -p "$BLOG_PATH/$SLUG"
mkdir -p "$BLOG_PATH/${SLUG}-en"

# Read the source content (skip frontmatter if it exists)
CONTENT=$(cat "$SOURCE_FILE")

# Prompt for Hebrew details
read -p "Enter Hebrew title: " HE_TITLE
read -p "Enter Hebrew description: " HE_DESC

# Create Hebrew version
cat > "$BLOG_PATH/$SLUG/index.md" << EOF
---
title: "$HE_TITLE"
date: '$CURRENT_DATE'
description: '$HE_DESC'
direction: rtl
language: 'he'
tags: [$TAGS]
---

$CONTENT
EOF

echo "✓ Created Hebrew version: $BLOG_PATH/$SLUG/index.md"

# Prompt for English translation
echo ""
echo "Now creating English version..."
read -p "Enter English title: " EN_TITLE
read -p "Enter English description: " EN_DESC
echo ""
echo "Opening Claude Code to translate the content..."
echo "Please paste the English translation when ready:"
read -p "Press enter to open editor, then paste English content..."

# Use a temporary file for English content
TEMP_EN_FILE=$(mktemp)
${EDITOR:-nano} "$TEMP_EN_FILE"
EN_CONTENT=$(cat "$TEMP_EN_FILE")
rm "$TEMP_EN_FILE"

# Create English version
cat > "$BLOG_PATH/${SLUG}-en/index.md" << EOF
---
title: "$EN_TITLE"
date: '$CURRENT_DATE'
description: '$EN_DESC'
direction: ltr
language: 'en'
tags: [$TAGS]
---

$EN_CONTENT
EOF

echo "✓ Created English version: $BLOG_PATH/${SLUG}-en/index.md"
echo ""
echo "Blog post created successfully!"
echo ""
echo "Next steps:"
echo "1. Restart Gatsby development server: npm run develop"
echo "2. Commit changes: git add . && git commit -m 'Add blog post: $HE_TITLE'"
