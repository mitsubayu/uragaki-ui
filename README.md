# uragaki-ui

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

### 4. セットアップ

```tsx
// スタイルのインポート（必須）
import "@yu-izumoto/uragaki-ui/styles.css";

// ThemeProvider でアプリをラップ（ダークモード対応）
import { ThemeProvider } from "@yu-izumoto/uragaki-ui";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      {/* アプリの中身 */}
    </ThemeProvider>
  );
}
```

### ピア依存関係

```
react >= 18, react-dom >= 18, tailwindcss >= 4, roughjs ^4.6.0
class-variance-authority ^0.7.0, clsx ^2.0.0, tailwind-merge ^3.0.0
radix-ui ^1.0.0, lucide-react >= 0.300.0 (optional)
```

## 使い方

すべてのコンポーネントは `@yu-izumoto/uragaki-ui` からインポートします。
shadcn/ui と同じAPIに `Uragaki` プレフィックスを付けた名前です。

### Button

```tsx
import { UragakiButton } from "@yu-izumoto/uragaki-ui";

<UragakiButton variant="default">Primary</UragakiButton>
<UragakiButton variant="destructive">Delete</UragakiButton>
<UragakiButton variant="outline">Outline</UragakiButton>
<UragakiButton variant="secondary">Secondary</UragakiButton>
<UragakiButton variant="ghost">Ghost</UragakiButton>
<UragakiButton variant="link">Link</UragakiButton>
<UragakiButton size="sm">Small</UragakiButton>
<UragakiButton size="lg">Large</UragakiButton>
<UragakiButton size="icon"><Icon /></UragakiButton>
```

**Props:** variant (`"default"` | `"destructive"` | `"outline"` | `"secondary"` | `"ghost"` | `"link"`), size (`"default"` | `"sm"` | `"lg"` | `"icon"`), asChild, roughness (default: 2.6), seed

### Input

```tsx
import { UragakiInput } from "@yu-izumoto/uragaki-ui";

<UragakiInput placeholder="名前" />
<UragakiInput borderStyle="box" placeholder="ボックス型" />
<UragakiInput type="password" placeholder="パスワード" />
```

**Props:** borderStyle (`"underline"` | `"box"`, default: `"underline"`), roughness, seed, + 標準 input 属性すべて

### Textarea

```tsx
import { UragakiTextarea } from "@yu-izumoto/uragaki-ui";

<UragakiTextarea placeholder="メッセージを入力..." rows={4} />
```

**Props:** roughness, seed, + 標準 textarea 属性すべて

### Card

```tsx
import {
  UragakiCard, UragakiCardHeader, UragakiCardTitle,
  UragakiCardDescription, UragakiCardContent, UragakiCardFooter
} from "@yu-izumoto/uragaki-ui";

<UragakiCard>
  <UragakiCardHeader>
    <UragakiCardTitle>タイトル</UragakiCardTitle>
    <UragakiCardDescription>説明文</UragakiCardDescription>
  </UragakiCardHeader>
  <UragakiCardContent>
    <p>カード内容</p>
  </UragakiCardContent>
  <UragakiCardFooter>
    <UragakiButton>アクション</UragakiButton>
  </UragakiCardFooter>
</UragakiCard>
```

**サブコンポーネント:** UragakiCardHeader, UragakiCardTitle, UragakiCardDescription, UragakiCardContent, UragakiCardFooter, UragakiCardAction

### Badge

```tsx
import { UragakiBadge } from "@yu-izumoto/uragaki-ui";

<UragakiBadge>Default</UragakiBadge>
<UragakiBadge variant="destructive">Error</UragakiBadge>
<UragakiBadge variant="secondary">Info</UragakiBadge>
<UragakiBadge variant="outline">Outline</UragakiBadge>
```

**Props:** variant (`"default"` | `"destructive"` | `"secondary"` | `"outline"`), roughness, seed

### Alert

```tsx
import { UragakiAlert, UragakiAlertTitle, UragakiAlertDescription } from "@yu-izumoto/uragaki-ui";

<UragakiAlert>
  <UragakiAlertTitle>お知らせ</UragakiAlertTitle>
  <UragakiAlertDescription>内容はここに。</UragakiAlertDescription>
</UragakiAlert>

<UragakiAlert variant="destructive">
  <UragakiAlertTitle>エラー</UragakiAlertTitle>
  <UragakiAlertDescription>問題が発生しました。</UragakiAlertDescription>
</UragakiAlert>
```

**Props:** variant (`"default"` | `"destructive"`), roughness, seed

### Checkbox

```tsx
import { UragakiCheckbox } from "@yu-izumoto/uragaki-ui";
import { UragakiLabel } from "@yu-izumoto/uragaki-ui";

<div className="flex items-center gap-2">
  <UragakiCheckbox id="terms" />
  <UragakiLabel htmlFor="terms">利用規約に同意する</UragakiLabel>
</div>
```

### RadioGroup

```tsx
import { UragakiRadioGroup, UragakiRadioGroupItem } from "@yu-izumoto/uragaki-ui";
import { UragakiLabel } from "@yu-izumoto/uragaki-ui";

<UragakiRadioGroup defaultValue="opt1">
  <div className="flex items-center gap-2">
    <UragakiRadioGroupItem value="opt1" id="opt1" />
    <UragakiLabel htmlFor="opt1">選択肢1</UragakiLabel>
  </div>
  <div className="flex items-center gap-2">
    <UragakiRadioGroupItem value="opt2" id="opt2" />
    <UragakiLabel htmlFor="opt2">選択肢2</UragakiLabel>
  </div>
</UragakiRadioGroup>
```

### Select

```tsx
import {
  UragakiSelect, UragakiSelectTrigger, UragakiSelectContent,
  UragakiSelectItem, UragakiSelectValue
} from "@yu-izumoto/uragaki-ui";

<UragakiSelect>
  <UragakiSelectTrigger className="w-[200px]">
    <UragakiSelectValue placeholder="選択..." />
  </UragakiSelectTrigger>
  <UragakiSelectContent>
    <UragakiSelectItem value="apple">りんご</UragakiSelectItem>
    <UragakiSelectItem value="banana">バナナ</UragakiSelectItem>
    <UragakiSelectItem value="cherry">さくらんぼ</UragakiSelectItem>
  </UragakiSelectContent>
</UragakiSelect>
```

**サブコンポーネント:** UragakiSelectTrigger, UragakiSelectContent, UragakiSelectItem, UragakiSelectValue, UragakiSelectGroup, UragakiSelectLabel

### Switch

```tsx
import { UragakiSwitch } from "@yu-izumoto/uragaki-ui";

<div className="flex items-center gap-2">
  <UragakiSwitch id="notifications" />
  <UragakiLabel htmlFor="notifications">通知</UragakiLabel>
</div>
```

### Tabs

```tsx
import { UragakiTabs, UragakiTabsList, UragakiTabsTrigger, UragakiTabsContent } from "@yu-izumoto/uragaki-ui";

<UragakiTabs defaultValue="tab1">
  <UragakiTabsList>
    <UragakiTabsTrigger value="tab1">タブ1</UragakiTabsTrigger>
    <UragakiTabsTrigger value="tab2">タブ2</UragakiTabsTrigger>
  </UragakiTabsList>
  <UragakiTabsContent value="tab1">タブ1の内容</UragakiTabsContent>
  <UragakiTabsContent value="tab2">タブ2の内容</UragakiTabsContent>
</UragakiTabs>
```

### Accordion

```tsx
import { UragakiAccordion, UragakiAccordionItem, UragakiAccordionTrigger, UragakiAccordionContent } from "@yu-izumoto/uragaki-ui";

<UragakiAccordion type="single" collapsible>
  <UragakiAccordionItem value="item-1">
    <UragakiAccordionTrigger>セクション1</UragakiAccordionTrigger>
    <UragakiAccordionContent>内容1</UragakiAccordionContent>
  </UragakiAccordionItem>
  <UragakiAccordionItem value="item-2">
    <UragakiAccordionTrigger>セクション2</UragakiAccordionTrigger>
    <UragakiAccordionContent>内容2</UragakiAccordionContent>
  </UragakiAccordionItem>
</UragakiAccordion>
```

**Props:** type (`"single"` | `"multiple"`), collapsible (boolean), roughness, seed

### Dialog

```tsx
import {
  UragakiDialog, UragakiDialogTrigger, UragakiDialogContent,
  UragakiDialogHeader, UragakiDialogFooter, UragakiDialogTitle,
  UragakiDialogDescription, UragakiButton
} from "@yu-izumoto/uragaki-ui";

<UragakiDialog>
  <UragakiDialogTrigger asChild>
    <UragakiButton variant="outline">ダイアログを開く</UragakiButton>
  </UragakiDialogTrigger>
  <UragakiDialogContent>
    <UragakiDialogHeader>
      <UragakiDialogTitle>タイトル</UragakiDialogTitle>
      <UragakiDialogDescription>説明文</UragakiDialogDescription>
    </UragakiDialogHeader>
    <UragakiDialogFooter>
      <UragakiButton>保存</UragakiButton>
    </UragakiDialogFooter>
  </UragakiDialogContent>
</UragakiDialog>
```

### AlertDialog

```tsx
import {
  UragakiAlertDialog, UragakiAlertDialogTrigger, UragakiAlertDialogContent,
  UragakiAlertDialogHeader, UragakiAlertDialogFooter, UragakiAlertDialogTitle,
  UragakiAlertDialogDescription, UragakiAlertDialogAction, UragakiAlertDialogCancel
} from "@yu-izumoto/uragaki-ui";

<UragakiAlertDialog>
  <UragakiAlertDialogTrigger asChild>
    <UragakiButton variant="destructive">削除</UragakiButton>
  </UragakiAlertDialogTrigger>
  <UragakiAlertDialogContent>
    <UragakiAlertDialogHeader>
      <UragakiAlertDialogTitle>本当に削除しますか？</UragakiAlertDialogTitle>
      <UragakiAlertDialogDescription>この操作は取り消せません。</UragakiAlertDialogDescription>
    </UragakiAlertDialogHeader>
    <UragakiAlertDialogFooter>
      <UragakiAlertDialogCancel>キャンセル</UragakiAlertDialogCancel>
      <UragakiAlertDialogAction>削除</UragakiAlertDialogAction>
    </UragakiAlertDialogFooter>
  </UragakiAlertDialogContent>
</UragakiAlertDialog>
```

### Sheet

```tsx
import {
  UragakiSheet, UragakiSheetTrigger, UragakiSheetContent,
  UragakiSheetHeader, UragakiSheetTitle, UragakiSheetDescription
} from "@yu-izumoto/uragaki-ui";

<UragakiSheet>
  <UragakiSheetTrigger asChild>
    <UragakiButton variant="outline">パネルを開く</UragakiButton>
  </UragakiSheetTrigger>
  <UragakiSheetContent>
    <UragakiSheetHeader>
      <UragakiSheetTitle>設定</UragakiSheetTitle>
      <UragakiSheetDescription>設定を管理します。</UragakiSheetDescription>
    </UragakiSheetHeader>
    <div className="py-4">内容</div>
  </UragakiSheetContent>
</UragakiSheet>
```

### Drawer

```tsx
import {
  UragakiDrawer, UragakiDrawerTrigger, UragakiDrawerContent,
  UragakiDrawerHeader, UragakiDrawerTitle, UragakiDrawerDescription,
  UragakiDrawerFooter, UragakiDrawerClose
} from "@yu-izumoto/uragaki-ui";

<UragakiDrawer>
  <UragakiDrawerTrigger asChild>
    <UragakiButton variant="outline">ドロワーを開く</UragakiButton>
  </UragakiDrawerTrigger>
  <UragakiDrawerContent>
    <UragakiDrawerHeader>
      <UragakiDrawerTitle>メニュー</UragakiDrawerTitle>
      <UragakiDrawerDescription>オプションを選択</UragakiDrawerDescription>
    </UragakiDrawerHeader>
    <div className="p-4">内容</div>
    <UragakiDrawerFooter>
      <UragakiDrawerClose asChild>
        <UragakiButton variant="outline">閉じる</UragakiButton>
      </UragakiDrawerClose>
    </UragakiDrawerFooter>
  </UragakiDrawerContent>
</UragakiDrawer>
```

### Popover

```tsx
import { UragakiPopover, UragakiPopoverTrigger, UragakiPopoverContent } from "@yu-izumoto/uragaki-ui";

<UragakiPopover>
  <UragakiPopoverTrigger asChild>
    <UragakiButton variant="outline">情報</UragakiButton>
  </UragakiPopoverTrigger>
  <UragakiPopoverContent className="w-80">
    <p>ポップオーバーの内容</p>
  </UragakiPopoverContent>
</UragakiPopover>
```

### Tooltip

```tsx
import { UragakiTooltipProvider, UragakiTooltip, UragakiTooltipTrigger, UragakiTooltipContent } from "@yu-izumoto/uragaki-ui";

<UragakiTooltipProvider>
  <UragakiTooltip>
    <UragakiTooltipTrigger asChild>
      <UragakiButton variant="outline">ホバー</UragakiButton>
    </UragakiTooltipTrigger>
    <UragakiTooltipContent>
      <p>ツールチップ</p>
    </UragakiTooltipContent>
  </UragakiTooltip>
</UragakiTooltipProvider>
```

### DropdownMenu

```tsx
import {
  UragakiDropdownMenu, UragakiDropdownMenuTrigger, UragakiDropdownMenuContent,
  UragakiDropdownMenuItem, UragakiDropdownMenuLabel, UragakiDropdownMenuSeparator
} from "@yu-izumoto/uragaki-ui";

<UragakiDropdownMenu>
  <UragakiDropdownMenuTrigger asChild>
    <UragakiButton variant="outline">メニュー</UragakiButton>
  </UragakiDropdownMenuTrigger>
  <UragakiDropdownMenuContent>
    <UragakiDropdownMenuLabel>操作</UragakiDropdownMenuLabel>
    <UragakiDropdownMenuSeparator />
    <UragakiDropdownMenuItem>編集</UragakiDropdownMenuItem>
    <UragakiDropdownMenuItem>複製</UragakiDropdownMenuItem>
    <UragakiDropdownMenuSeparator />
    <UragakiDropdownMenuItem>削除</UragakiDropdownMenuItem>
  </UragakiDropdownMenuContent>
</UragakiDropdownMenu>
```

### Table

```tsx
import {
  UragakiTable, UragakiTableHeader, UragakiTableBody,
  UragakiTableRow, UragakiTableHead, UragakiTableCell
} from "@yu-izumoto/uragaki-ui";

<UragakiTable>
  <UragakiTableHeader>
    <UragakiTableRow>
      <UragakiTableHead>名前</UragakiTableHead>
      <UragakiTableHead>メール</UragakiTableHead>
    </UragakiTableRow>
  </UragakiTableHeader>
  <UragakiTableBody>
    <UragakiTableRow>
      <UragakiTableCell>太郎</UragakiTableCell>
      <UragakiTableCell>taro@example.com</UragakiTableCell>
    </UragakiTableRow>
  </UragakiTableBody>
</UragakiTable>
```

### Form (react-hook-form + zod)

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  UragakiForm, UragakiFormField, UragakiFormItem,
  UragakiFormLabel, UragakiFormControl, UragakiFormMessage,
  UragakiInput, UragakiButton
} from "@yu-izumoto/uragaki-ui";

const schema = z.object({ name: z.string().min(1) });

function MyForm() {
  const form = useForm({ resolver: zodResolver(schema) });
  return (
    <UragakiForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <UragakiFormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <UragakiFormItem>
              <UragakiFormLabel>名前</UragakiFormLabel>
              <UragakiFormControl>
                <UragakiInput {...field} />
              </UragakiFormControl>
              <UragakiFormMessage />
            </UragakiFormItem>
          )}
        />
        <UragakiButton type="submit">送信</UragakiButton>
      </form>
    </UragakiForm>
  );
}
```

### Sonner (トースト通知)

```tsx
import { UragakiSonner } from "@yu-izumoto/uragaki-ui";
import { toast } from "sonner";

// レイアウトに配置
<UragakiSonner />

// トリガー
toast("イベントを作成しました");
toast.success("成功！");
toast.error("エラーが発生しました");
```

### Avatar

```tsx
import { UragakiAvatar, UragakiAvatarImage, UragakiAvatarFallback } from "@yu-izumoto/uragaki-ui";

<UragakiAvatar>
  <UragakiAvatarImage src="/avatar.jpg" alt="ユーザー" />
  <UragakiAvatarFallback>YI</UragakiAvatarFallback>
</UragakiAvatar>
```

### Progress

```tsx
import { UragakiProgress } from "@yu-izumoto/uragaki-ui";

<UragakiProgress value={60} />
```

### Separator

```tsx
import { UragakiSeparator } from "@yu-izumoto/uragaki-ui";

<UragakiSeparator />
<UragakiSeparator orientation="vertical" className="h-8" />
```

**Props:** orientation (`"horizontal"` | `"vertical"`, default: `"horizontal"`)

### Skeleton

```tsx
import { UragakiSkeleton } from "@yu-izumoto/uragaki-ui";

<UragakiSkeleton className="h-4 w-[250px]" />
<UragakiSkeleton className="h-12 w-12 rounded-full" />
```

### Calendar

```tsx
import { UragakiCalendar } from "@yu-izumoto/uragaki-ui";

const [date, setDate] = useState<Date | undefined>();
<UragakiCalendar mode="single" selected={date} onSelect={setDate} />
```

### Breadcrumb

```tsx
import {
  UragakiBreadcrumb, UragakiBreadcrumbList, UragakiBreadcrumbItem,
  UragakiBreadcrumbLink, UragakiBreadcrumbSeparator, UragakiBreadcrumbPage
} from "@yu-izumoto/uragaki-ui";

<UragakiBreadcrumb>
  <UragakiBreadcrumbList>
    <UragakiBreadcrumbItem>
      <UragakiBreadcrumbLink href="/">ホーム</UragakiBreadcrumbLink>
    </UragakiBreadcrumbItem>
    <UragakiBreadcrumbSeparator />
    <UragakiBreadcrumbItem>
      <UragakiBreadcrumbPage>現在のページ</UragakiBreadcrumbPage>
    </UragakiBreadcrumbItem>
  </UragakiBreadcrumbList>
</UragakiBreadcrumb>
```

### Carousel

```tsx
import { UragakiCarousel, UragakiCarouselContent, UragakiCarouselItem, UragakiCarouselPrevious, UragakiCarouselNext } from "@yu-izumoto/uragaki-ui";

<UragakiCarousel>
  <UragakiCarouselContent>
    <UragakiCarouselItem>スライド1</UragakiCarouselItem>
    <UragakiCarouselItem>スライド2</UragakiCarouselItem>
  </UragakiCarouselContent>
  <UragakiCarouselPrevious />
  <UragakiCarouselNext />
</UragakiCarousel>
```

### Command

```tsx
import {
  UragakiCommand, UragakiCommandInput, UragakiCommandList,
  UragakiCommandEmpty, UragakiCommandGroup, UragakiCommandItem
} from "@yu-izumoto/uragaki-ui";

<UragakiCommand>
  <UragakiCommandInput placeholder="検索..." />
  <UragakiCommandList>
    <UragakiCommandEmpty>結果なし</UragakiCommandEmpty>
    <UragakiCommandGroup heading="操作">
      <UragakiCommandItem>新規作成</UragakiCommandItem>
      <UragakiCommandItem>設定を開く</UragakiCommandItem>
    </UragakiCommandGroup>
  </UragakiCommandList>
</UragakiCommand>
```

### Pagination

```tsx
import {
  UragakiPagination, UragakiPaginationContent, UragakiPaginationItem,
  UragakiPaginationLink, UragakiPaginationPrevious, UragakiPaginationNext
} from "@yu-izumoto/uragaki-ui";

<UragakiPagination>
  <UragakiPaginationContent>
    <UragakiPaginationItem><UragakiPaginationPrevious href="#" /></UragakiPaginationItem>
    <UragakiPaginationItem><UragakiPaginationLink href="#" isActive>1</UragakiPaginationLink></UragakiPaginationItem>
    <UragakiPaginationItem><UragakiPaginationLink href="#">2</UragakiPaginationLink></UragakiPaginationItem>
    <UragakiPaginationItem><UragakiPaginationNext href="#" /></UragakiPaginationItem>
  </UragakiPaginationContent>
</UragakiPagination>
```

## 共通Props

rough.js を使うコンポーネントは以下の共通プロパティを受け取ります:

| Prop | 型 | デフォルト | 説明 |
|------|------|---------|-------------|
| roughness | number | 2.6 | 線のラフさ（大きいほど手書き風が強い） |
| seed | number | 自動 | 描画の乱数シード（固定するとレンダリングが安定） |

## UragakiBorder

任意のコンテンツに手書き風ボーダーを付与するコアラッパーです。

```tsx
import { UragakiBorder } from "@yu-izumoto/uragaki-ui";

<UragakiBorder shape="rectangle" roughness={2.6} seed={42} fill="#f0f0f0">
  <p>手書き風ボーダー付きコンテンツ</p>
</UragakiBorder>
```

| Prop | 型 | デフォルト | 説明 |
|------|------|---------|-------------|
| shape | `"rectangle"` \| `"ellipse"` | `"rectangle"` | ボーダーの形状 |
| roughness | number | 2.6 | 線のラフさ |
| bowing | number | 1.8 | 線のたわみ |
| strokeWidth | number | 2 | 線の太さ |
| stroke | string | `"currentColor"` | 線の色 |
| fill | string | - | 塗りつぶし色 |
| fillStyle | string | `"hachure"` | 塗りスタイル |
| seed | number | 自動 | 乱数シード |
| padding | number | 0 | 内側余白 |
| block | boolean | false | `display: block` にするか |

## ThemeProvider / useTheme

ダークモード切り替えを管理します。

```tsx
import { ThemeProvider, useTheme } from "@yu-izumoto/uragaki-ui";

// プロバイダー
<ThemeProvider defaultTheme="system" storageKey="uragaki-ui-theme">
  {children}
</ThemeProvider>

// フック
const { theme, setTheme, resolvedTheme } = useTheme();
setTheme("dark"); // "light" | "dark" | "system"
```

## CSSクラス

| クラス | 説明 |
|------|------|
| `uragaki-paper` | 紙テクスチャ背景（24pxグリッドパターン） |
| `uragaki-hover` | ホバー時にぐらぐら揺れるアニメーション |
| `uragaki-no-border` | ボーダーを非表示 |

## コンポーネント一覧

| カテゴリ | コンポーネント |
|---------|--------------|
| 入力 | Button, Input, Textarea, Checkbox, Radio Group, Select, Slider, Switch, Toggle, Toggle Group, Input OTP, Calendar, Form, Label |
| 表示 | Card, Badge, Alert, Avatar, Skeleton, Progress, Separator, Aspect Ratio, Chart |
| ナビゲーション | Tabs, Breadcrumb, Pagination, Navigation Menu, Menubar, Sidebar, Command, Carousel |
| オーバーレイ | Dialog, Alert Dialog, Sheet, Drawer, Popover, Tooltip, Hover Card, Context Menu, Dropdown Menu, Sonner |
| レイアウト | Accordion, Collapsible, Resizable, Scroll Area, Table |
| ユーティリティ | ThemeProvider, useTheme, UragakiBorder |

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
- 手書き風フォント（Sketchflow Print、Yusei Magic、Hachi Maru Pop）
- グリッドパターン付きの紙テクスチャ背景
- shadcn/ui（Radix UI）ベースの完全なアクセシビリティ対応
- Tailwind CSS v4 によるスタイリング
- ダークモード対応
- 安定したシード値レンダリングで描画のちらつきを防止

## 技術スタック

- React 19 + TypeScript 5.8
- Vite + tsup
- Tailwind CSS v4
- shadcn/ui (Radix UI)
- rough.js
- Storybook 8

## ライセンス

MIT
