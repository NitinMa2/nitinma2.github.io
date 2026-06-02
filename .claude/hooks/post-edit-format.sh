#!/bin/bash
# Post-edit auto-formatter
# Runs Prettier on any file Claude writes or edits.
# Triggered by PostToolUse hook in .claude/settings.json

set -euo pipefail

# Read JSON payload from stdin
INPUT=$(cat)

# Extract the file path from tool_input
FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    path = d.get('tool_input', {}).get('file_path', '') or d.get('tool_input', {}).get('path', '')
    print(path)
except Exception:
    print('')
" 2>/dev/null)

if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Only format supported file types
case "$FILE_PATH" in
  *.js|*.ts|*.jsx|*.tsx|*.astro|*.css|*.html|*.json|*.md|*.mdx)
    ;;
  *)
    exit 0
    ;;
esac

# Run prettier if available (npx fallback)
if command -v prettier &>/dev/null; then
  prettier --write "$FILE_PATH" 2>/dev/null || true
elif [ -f "node_modules/.bin/prettier" ]; then
  node_modules/.bin/prettier --write "$FILE_PATH" 2>/dev/null || true
else
  npx --yes prettier --write "$FILE_PATH" 2>/dev/null || true
fi
