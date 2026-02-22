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

echo "==> Running type check..."
npx tsc --noEmit

echo "==> Bumping version to '$VERSION'..."
npm version "$VERSION" -m "release: v%s"

echo "==> Pushing version commit and tag..."
git push "$REMOTE" main --follow-tags

NEW_VERSION="$(node -p "require('./package.json').version")"
echo ""
echo "==> Tag v$NEW_VERSION pushed! GitHub Actions will build and publish with provenance."
echo "    https://github.com/mitsubayu/uragaki-ui/actions/workflows/publish.yml"
