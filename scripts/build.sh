#!/bin/bash

# Build wrapper script
# Usage: ./scripts/build.sh [lang] or npm run build -- [lang]
# lang: zh (default), en, or ja

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_ROOT"
LANG=${1:-zh}
"$SCRIPT_DIR/hexo-with-symlinks.sh" "$LANG" && hexo generate
