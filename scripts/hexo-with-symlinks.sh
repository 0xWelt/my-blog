#!/bin/bash

# Hexo symlink management script
# Usage: ./scripts/hexo-with-symlinks.sh [lang|cleanup]
# lang: zh (default), en, or ja - creates symlinks for the specified language
# cleanup: removes all symlinks
# This script only manages symlinks, does not run hexo commands

set -e  # Exit on error

# Ensure we're in the project root directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

ACTION=${1:-zh}  # Default to zh if not specified

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

if [ "${ACTION}" = "cleanup" ]; then
    # Cleanup mode: remove all symlinks
    echo -e "${YELLOW}Cleaning up symlinks...${NC}"
    [ -L "_config.yml" ] && rm -f "_config.yml"
    [ -L "_config.butterfly.yml" ] && rm -f "_config.butterfly.yml"
    [ -L "source/_posts" ] && rm -f "source/_posts"
    echo -e "${GREEN}Symlinks cleaned up.${NC}"
    exit 0
fi

# Create symlinks mode
LANG=${ACTION}
echo -e "${GREEN}Setting up symlinks for language: ${LANG}${NC}"

# Step 1: Cleanup existing symlinks
echo -e "${GREEN}Step 1: Cleaning up existing symlinks...${NC}"
[ -L "_config.yml" ] && rm -f "_config.yml"
[ -L "_config.butterfly.yml" ] && rm -f "_config.butterfly.yml"
[ -L "source/_posts" ] && rm -f "source/_posts"

# Check if source directory exists, create if not
[ ! -d "source" ] && mkdir -p "source"

# Handle source/_posts: warn if directory
if [ -d "source/_posts" ] && [ ! -L "source/_posts" ]; then
    echo -e "${YELLOW}Warning: source/_posts exists as a directory. It will be replaced with a symlink.${NC}"
    rm -rf "source/_posts"
fi

# Step 2: Create symlinks
echo -e "${GREEN}Step 2: Creating symlinks...${NC}"
ln -s "configs/_config.${LANG}.yml" "_config.yml"
ln -s "configs/_config.butterfly.${LANG}.yml" "_config.butterfly.yml"
ln -s "../posts/posts-${LANG}" "source/_posts"

echo -e "${GREEN}Symlinks created:${NC}"
echo "  _config.yml -> configs/_config.${LANG}.yml"
echo "  _config.butterfly.yml -> configs/_config.butterfly.${LANG}.yml"
echo "  source/_posts -> posts/posts-${LANG}"
