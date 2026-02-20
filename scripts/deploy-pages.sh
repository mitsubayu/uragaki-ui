#!/usr/bin/env bash
set -euo pipefail

PAGES_BRANCH="pages"
REMOTE="origin"
BUILD_DIR="dist"
REPO_ROOT="$(git rev-parse --show-toplevel)"

cd "$REPO_ROOT"

# ── Build ──────────────────────────────────────────────
echo "==> Building docs site..."
npx vite build

echo "==> Building Storybook..."
pnpm build-storybook -o "$BUILD_DIR/storybook"

# GitHub Pages が _prefix ファイルを無視しないようにする
touch "$BUILD_DIR/.nojekyll"

# ── Deploy (git worktree) ──────────────────────────────
SOURCE_COMMIT="$(git rev-parse --short HEAD)"
DEPLOY_MSG="deploy: docs from ${SOURCE_COMMIT} ($(date -u '+%Y-%m-%d %H:%M:%S UTC'))"

WORKTREE_DIR="$(mktemp -d)"
trap 'git worktree remove --force "$WORKTREE_DIR" 2>/dev/null; rm -rf "$WORKTREE_DIR"' EXIT

if git ls-remote --exit-code "$REMOTE" "$PAGES_BRANCH" >/dev/null 2>&1; then
  git fetch "$REMOTE" "$PAGES_BRANCH"
  git worktree add "$WORKTREE_DIR" "$REMOTE/$PAGES_BRANCH"
  cd "$WORKTREE_DIR"
  git checkout -B "$PAGES_BRANCH" "$REMOTE/$PAGES_BRANCH"
else
  git worktree add --detach "$WORKTREE_DIR"
  cd "$WORKTREE_DIR"
  git checkout --orphan "$PAGES_BRANCH"
  git rm -rf . 2>/dev/null || true
fi

# 既存ファイルを削除してビルド成果物をコピー
git rm -rf . 2>/dev/null || true
cp -a "$REPO_ROOT/$BUILD_DIR/." .

git add -A
if git diff --cached --quiet; then
  echo "==> No changes to deploy. Skipping."
else
  git commit -m "$DEPLOY_MSG"
  git push "$REMOTE" "$PAGES_BRANCH"
  echo "==> Deployed successfully to '$PAGES_BRANCH' branch!"
fi
