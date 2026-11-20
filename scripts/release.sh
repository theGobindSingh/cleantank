#!/usr/bin/env bash
# Release staging to production: copy the staging database onto production, then point master at origin/staging.
# Run only when the user asks. Needs the Neon CLI signed in (~/.config/neonctl/credentials.json).
# Production's old data is kept as the Neon branch prod-backup-<UTC time>; staging is left as it is.
set -euo pipefail

NEON_PROJECT=square-shadow-62993952   # Neon project "cleantank"
PROD_BRANCH=production
STAGING_BRANCH=staging

cd "$(git rev-parse --show-toplevel)"
git fetch -q origin master staging
if ! git merge-base --is-ancestor origin/master origin/staging; then
  echo "origin/master has commits staging lacks. Merge master into staging first." >&2
  exit 1
fi
if [ "$(git rev-parse origin/master)" = "$(git rev-parse origin/staging)" ]; then
  echo "Nothing to release: master already matches staging."
else
  echo "Releasing to production:"
  git log --oneline origin/master..origin/staging
fi
read -r -p "Copy the staging database onto production and deploy? [y/N] " answer
[ "$answer" = "y" ] || { echo "Stopped."; exit 1; }

backup="prod-backup-$(date -u +%Y-%m-%dT%H-%M)"
neon branches restore "$PROD_BRANCH" "$STAGING_BRANCH" \
  --project-id "$NEON_PROJECT" --preserve-under-name "$backup"
echo "Production database now matches staging. Old production data: Neon branch $backup."

git push origin origin/staging:refs/heads/master
git branch -f master origin/staging 2>/dev/null || true
echo "Pushed. Vercel is building https://www.cleantankservices.com"
