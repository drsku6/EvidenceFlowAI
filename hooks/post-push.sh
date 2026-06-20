#!/bin/bash
# EvidenceFlowAI — post-push sync hook
# Appends a sync entry to SKU_AI_OS/memory/sync-queue.md after every git push

REPO="EvidenceFlowAI"
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")
DATE=$(date "+%Y-%m-%d %H:%M")
RECENT_COMMITS=$(git log --oneline -5 2>/dev/null || echo "unavailable")
CHANGED_FILES=$(git diff HEAD~1..HEAD --name-only 2>/dev/null || echo "initial push or unavailable")

SKU_AIOS_SYNC="/Users/sku/drsku6/SKU_AI_OS/memory/sync-queue.md"

if [ ! -f "$SKU_AIOS_SYNC" ]; then
  echo "⚠️  SKU_AI_OS sync-queue.md not found at $SKU_AIOS_SYNC — skipping sync."
  exit 0
fi

cat >> "$SKU_AIOS_SYNC" << EOF

---
## [$DATE] $REPO → $BRANCH

**Recent commits:**
$RECENT_COMMITS

**Changed files:**
$CHANGED_FILES

EOF

echo "✅ SKU_AI_OS sync-queue updated for $REPO."
