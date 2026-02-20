# Uragaki-UI

PoC開発専用のペーパープロトタイピングライクUI

shadcn/ui と rough.js をベースにした手書き風UIコンポーネントライブラリです。
プロトタイピング、ワイヤーフレーム作成、遊び心のあるアプリケーションに最適なスケッチスタイルのコンポーネントを提供します。

## インストール（利用者向け）

### 1. GHE で `read:packages` 権限の Personal Access Token を取得

### 2. `~/.npmrc` に以下を記述

```
//npm.github.kddi.com/:_authToken=<取得したトークン>
@yu-izumoto:registry=https://npm.github.kddi.com
```

### 3. インストール

```bash
npm install @yu-izumoto/uragaki-ui
```

### 4. 使い方

```tsx
import { UragakiButton, UragakiCard, UragakiInput } from "@yu-izumoto/uragaki-ui";
import "@yu-izumoto/uragaki-ui/styles.css";

function App() {
  return (
    <UragakiCard>
      <UragakiInput placeholder="名前を入力" />
      <UragakiButton>送信</UragakiButton>
    </UragakiCard>
  );
}
```

## 開発者向け

### 事前準備

```
//npm.github.kddi.com/:_authToken=<トークン（write:packages 権限）>
@yu-izumoto:registry=https://npm.github.kddi.com
```

```bash
pnpm install
```

### コマンド一覧

```bash
pnpm dev              # 開発サーバー起動
pnpm storybook        # Storybook 起動（コンポーネントカタログ）
pnpm build:lib        # ライブラリビルド
pnpm deploy:pages     # ドキュメントサイト + Storybook を GitHub Pages にデプロイ
pnpm publish:npm <version>  # GHE npm Packages にパッケージを公開
```

### パッケージ公開

```bash
pnpm publish:npm patch   # 0.1.0 -> 0.1.1
pnpm publish:npm minor   # 0.1.0 -> 0.2.0
pnpm publish:npm 1.0.0   # 明示的にバージョン指定
```

## 特徴

- rough.js の SVG レンダリングによる手書き風ボーダー
- 手書き風フォント（Architects Daughter、Patrick Hand、Caveat）
- グリッドパターン付きの紙テクスチャ背景
- shadcn/ui（Radix UI）ベースの完全なアクセシビリティ対応
- Tailwind CSS v4 によるスタイリング
- ダークモード対応
- 安定したシード値レンダリングで描画のちらつきを防止

## コンポーネント一覧

| カテゴリ | コンポーネント |
|---------|--------------|
| 入力 | Button, Input, Textarea, Checkbox, Radio Group, Select, Slider, Switch, Toggle, Toggle Group, Input OTP, Calendar, Form |
| 表示 | Card, Badge, Alert, Avatar, Skeleton, Progress, Separator, Aspect Ratio, Chart |
| ナビゲーション | Tabs, Breadcrumb, Pagination, Navigation Menu, Menubar, Sidebar, Command |
| オーバーレイ | Dialog, Alert Dialog, Sheet, Drawer, Popover, Tooltip, Hover Card, Context Menu, Dropdown Menu, Sonner |
| レイアウト | Accordion, Collapsible, Carousel, Resizable, Scroll Area, Table |

## 技術スタック

- React + TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui (Radix UI)
- rough.js
- Storybook

## ライセンス

MIT
