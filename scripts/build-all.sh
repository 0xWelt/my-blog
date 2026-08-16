#!/bin/bash
# Build all language versions of the blog and merge them into a single static output.
# Output layout (matches the URL scheme used by language-switcher.js on blog.0xwelt.com):
#   public-all/        <- zh (config root: /)
#   public-all/en/     <- en (config root: /en/)
#   public-all/ja/     <- ja (config root: /ja/)
#   ... etc
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

LANGS="zh en ja ko ar fr de it"
OUT="$PROJECT_ROOT/public-all"
HEXO="$PROJECT_ROOT/node_modules/.bin/hexo"

echo "==> Cleaning previous output: $OUT"
rm -rf "$OUT"
mkdir -p "$OUT"

for lang in $LANGS; do
  echo "==> Building [$lang]"
  "$SCRIPT_DIR/hexo-with-symlinks.sh" "$lang" > /dev/null
  "$HEXO" clean > /dev/null
  "$HEXO" generate
  if [ "$lang" = "zh" ]; then
    cp -a public/. "$OUT/"
  else
    mkdir -p "$OUT/$lang"
    cp -a public/. "$OUT/$lang/"
  fi
done

echo "==> Restoring default (ar) symlinks"
"$SCRIPT_DIR/hexo-with-symlinks.sh" ar > /dev/null
rm -rf public

echo "==> Done. Merged output at: $OUT ($(find "$OUT" -type f | wc -l) files)"
