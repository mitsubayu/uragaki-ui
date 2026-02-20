#!/usr/bin/env bash
set -euo pipefail

REMOTE="origin"
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

VERSION="${1:-}"
if [ -z "$VERSION" ]; then
  echo "Usage: $0 <version>"
  echo ""
  echo "  version: patch | minor | major | premajor | preminor | prepatch | prerelease | x.y.z"
  echo ""
  echo "Examples:"
  echo "  $0 patch        # 0.1.0 -> 0.1.1"
  echo "  $0 minor        # 0.1.0 -> 0.2.0"
  echo "  $0 1.0.0        # set explicitly to 1.0.0"
  exit 1
fi

# ── Pre-flight checks ─────────────────────────────────
echo "==> Checking for clean working tree..."
if [ -n "$(git status --porcelain)" ]; then
  echo "ERROR: Working tree is not clean. Commit or stash changes first."
  exit 1
fi

echo "==> Checking GHE npm auth..."
if ! npm whoami --registry=https://npm.github.kddi.com >/dev/null 2>&1; then
  echo "ERROR: GHE npm registry に認証できません。"
  echo ""
  echo "~/.npmrc に以下を追加してください:"
  echo "  //npm.github.kddi.com/:_authToken=<GHE Personal Access Token>"
  echo ""
  echo "トークンには write:packages 権限が必要です。"
  exit 1
fi

echo "==> Running type check..."
npx tsc --noEmit

echo "==> Bumping version to '$VERSION'..."
npm version "$VERSION" -m "release: v%s"

echo "==> Building library..."
pnpm run build:lib

echo "==> Publishing to GHE npm Packages..."
npm publish

echo "==> Pushing version commit and tag..."
git push "$REMOTE" main --follow-tags

NEW_VERSION="$(node -p "require('./package.json').version")"
echo "==> Published @yu-izumoto/uragaki-ui@$NEW_VERSION successfully!"
