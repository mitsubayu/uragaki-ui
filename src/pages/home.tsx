import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UragakiButton,
  UragakiCard,
  UragakiCardHeader,
  UragakiCardTitle,
  UragakiCardDescription,
  UragakiCardContent,
  UragakiInput,
  UragakiBadge,
  UragakiCheckbox,
  UragakiTabs,
  UragakiTabsList,
  UragakiTabsTrigger,
  UragakiTabsContent,
  UragakiSwitch,
  UragakiSlider,
  UragakiProgress,
  UragakiTextarea,
  UragakiSelect,
  UragakiSelectTrigger,
  UragakiSelectContent,
  UragakiSelectItem,
  UragakiSelectValue,
  UragakiAlert,
  UragakiAlertTitle,
  UragakiAlertDescription,
  UragakiAccordion,
  UragakiAccordionItem,
  UragakiAccordionTrigger,
  UragakiAccordionContent,
  UragakiRadioGroup,
  UragakiRadioGroupItem,
  UragakiAvatar,
  UragakiAvatarFallback,
  UragakiSkeleton,
  UragakiToggle,
  UragakiSeparator,
  UragakiTooltipProvider,
  UragakiTooltip,
  UragakiTooltipTrigger,
  UragakiTooltipContent,
  UragakiLabel,
} from "@/components/uragaki";

export function HomePage() {
  const [progress, setProgress] = useState(65);
  const [sliderValue, setSliderValue] = useState([40]);

  return (
    <div className="min-h-screen uragaki-paper">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="font-[var(--font-uragaki-heading)] text-6xl font-bold mb-4">
          uragaki-ui
        </h1>
        <p className="font-[var(--font-uragaki-accent)] text-2xl text-muted-foreground mb-8">
          shadcn/ui + rough.js で作る手書き風UIコンポーネント
        </p>
        <div className="flex justify-center gap-4">
          <UragakiButton asChild>
            <Link to="/docs">はじめる</Link>
          </UragakiButton>
          <UragakiButton variant="outline" asChild>
            <Link to="/docs/installation">インストール方法</Link>
          </UragakiButton>
          <UragakiButton variant="outline" asChild>
            <Link to="/docs/components/button">コンポーネント一覧</Link>
          </UragakiButton>
          <UragakiButton variant="outline" asChild>
            <a href={`${import.meta.env.BASE_URL}storybook/`}>Storybook</a>
          </UragakiButton>
        </div>
      </div>

      {/* Why Sketchy UI */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="font-[var(--font-uragaki-heading)] text-3xl font-bold text-center mb-10">
          なぜ手書き風？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>1. 本質に集中できる</UragakiCardTitle>
            </UragakiCardHeader>
            <UragakiCardContent>
              <p className="text-sm text-muted-foreground">
                プロトタイプが綺麗すぎると、色やフォントなど見た目の細部にフィードバックが集中してしまいます。手書き風にすることで、画面遷移や機能の流れといった本質的な部分に議論を向けられます。
              </p>
            </UragakiCardContent>
          </UragakiCard>
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>2. 未完成を伝える</UragakiCardTitle>
            </UragakiCardHeader>
            <UragakiCardContent>
              <p className="text-sm text-muted-foreground">
                ラフなビジュアルが「これはまだドラフトです」というシグナルになります。関係者がより率直に、大きな方向転換も含めたフィードバックを出しやすくなります。
              </p>
            </UragakiCardContent>
          </UragakiCard>
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>3. 変更をためらわない</UragakiCardTitle>
            </UragakiCardHeader>
            <UragakiCardContent>
              <p className="text-sm text-muted-foreground">
                完成度の高いデザインは「壊すのがもったいない」という心理を生みます。スケッチ風であれば、大胆な変更提案も気軽にでき、より自由な議論が可能になります。
              </p>
            </UragakiCardContent>
          </UragakiCard>
        </div>
      </div>

      {/* Component Showcase */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="font-[var(--font-uragaki-heading)] text-3xl font-bold text-center mb-12">
          コンポーネント
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buttons */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>ボタン</UragakiCardTitle>
              <UragakiCardDescription>
                手書き風のボタンスタイル
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="flex flex-wrap gap-2">
                <UragakiButton size="sm">送信</UragakiButton>
                <UragakiButton size="sm" variant="outline">
                  キャンセル
                </UragakiButton>
                <UragakiButton size="sm" variant="destructive">
                  削除
                </UragakiButton>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Input */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>入力フィールド</UragakiCardTitle>
              <UragakiCardDescription>
                スケッチ風テキスト入力
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="space-y-3">
                <UragakiInput placeholder="お名前を入力..." />
                <UragakiInput placeholder="メールアドレス..." borderStyle="box" />
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Badge */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>バッジ</UragakiCardTitle>
              <UragakiCardDescription>
                スケッチ風ステータスバッジ
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="flex flex-wrap gap-2">
                <UragakiBadge>新着</UragakiBadge>
                <UragakiBadge variant="secondary">下書き</UragakiBadge>
                <UragakiBadge variant="outline">レビュー中</UragakiBadge>
                <UragakiBadge variant="destructive">エラー</UragakiBadge>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Checkbox */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>チェックボックス</UragakiCardTitle>
              <UragakiCardDescription>
                手書き風チェックマーク
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <UragakiCheckbox defaultChecked />
                  <span className="text-sm">ログイン状態を保持する</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <UragakiCheckbox />
                  <span className="text-sm">利用規約に同意する</span>
                </label>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Tabs */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>タブ</UragakiCardTitle>
              <UragakiCardDescription>
                コンテンツの切り替え表示
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <UragakiTabs defaultValue="tab1">
                <UragakiTabsList>
                  <UragakiTabsTrigger value="tab1">概要</UragakiTabsTrigger>
                  <UragakiTabsTrigger value="tab2">詳細</UragakiTabsTrigger>
                </UragakiTabsList>
                <UragakiTabsContent value="tab1">
                  <p className="text-sm text-muted-foreground pt-2">
                    タブで情報を整理
                  </p>
                </UragakiTabsContent>
                <UragakiTabsContent value="tab2">
                  <p className="text-sm text-muted-foreground pt-2">
                    手書き風のタブUIです
                  </p>
                </UragakiTabsContent>
              </UragakiTabs>
            </UragakiCardContent>
          </UragakiCard>

          {/* Switch */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>スイッチ</UragakiCardTitle>
              <UragakiCardDescription>
                ON/OFFトグルスイッチ
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <UragakiLabel className="text-sm">通知を有効にする</UragakiLabel>
                  <UragakiSwitch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <UragakiLabel className="text-sm">ダークモード</UragakiLabel>
                  <UragakiSwitch />
                </div>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Slider */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>スライダー</UragakiCardTitle>
              <UragakiCardDescription>
                値の範囲選択
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="space-y-4">
                <UragakiSlider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                />
                <p className="text-sm text-muted-foreground text-center">
                  値: {sliderValue[0]}
                </p>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Progress */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>プログレスバー</UragakiCardTitle>
              <UragakiCardDescription>
                進捗の表示
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="space-y-3">
                <UragakiProgress value={progress} />
                <div className="flex justify-between">
                  <p className="text-sm text-muted-foreground">{progress}% 完了</p>
                  <div className="flex gap-1">
                    <UragakiButton
                      size="sm"
                      variant="outline"
                      onClick={() => setProgress(Math.max(0, progress - 10))}
                    >
                      -
                    </UragakiButton>
                    <UragakiButton
                      size="sm"
                      variant="outline"
                      onClick={() => setProgress(Math.min(100, progress + 10))}
                    >
                      +
                    </UragakiButton>
                  </div>
                </div>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Textarea */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>テキストエリア</UragakiCardTitle>
              <UragakiCardDescription>
                複数行テキスト入力
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <UragakiTextarea
                placeholder="ここにメッセージを入力..."
                rows={3}
              />
            </UragakiCardContent>
          </UragakiCard>

          {/* Select */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>セレクト</UragakiCardTitle>
              <UragakiCardDescription>
                ドロップダウン選択
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <UragakiSelect>
                <UragakiSelectTrigger className="w-full">
                  <UragakiSelectValue placeholder="フレームワークを選択" />
                </UragakiSelectTrigger>
                <UragakiSelectContent>
                  <UragakiSelectItem value="react">React</UragakiSelectItem>
                  <UragakiSelectItem value="vue">Vue</UragakiSelectItem>
                  <UragakiSelectItem value="svelte">Svelte</UragakiSelectItem>
                  <UragakiSelectItem value="angular">Angular</UragakiSelectItem>
                </UragakiSelectContent>
              </UragakiSelect>
            </UragakiCardContent>
          </UragakiCard>

          {/* Alert */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>アラート</UragakiCardTitle>
              <UragakiCardDescription>
                通知・警告メッセージ
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="space-y-3">
                <UragakiAlert>
                  <UragakiAlertTitle>お知らせ</UragakiAlertTitle>
                  <UragakiAlertDescription>
                    新しい機能が追加されました。
                  </UragakiAlertDescription>
                </UragakiAlert>
                <UragakiAlert variant="destructive">
                  <UragakiAlertTitle>エラー</UragakiAlertTitle>
                  <UragakiAlertDescription>
                    問題が発生しました。
                  </UragakiAlertDescription>
                </UragakiAlert>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Accordion */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>アコーディオン</UragakiCardTitle>
              <UragakiCardDescription>
                折りたたみコンテンツ
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <UragakiAccordion type="single" collapsible>
                <UragakiAccordionItem value="item-1">
                  <UragakiAccordionTrigger>手書き風とは？</UragakiAccordionTrigger>
                  <UragakiAccordionContent>
                    rough.jsで描画したスケッチ風のUIです。
                  </UragakiAccordionContent>
                </UragakiAccordionItem>
                <UragakiAccordionItem value="item-2">
                  <UragakiAccordionTrigger>カスタマイズ可能？</UragakiAccordionTrigger>
                  <UragakiAccordionContent>
                    roughnessやseedで調整できます。
                  </UragakiAccordionContent>
                </UragakiAccordionItem>
              </UragakiAccordion>
            </UragakiCardContent>
          </UragakiCard>

          {/* Radio Group */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>ラジオグループ</UragakiCardTitle>
              <UragakiCardDescription>
                単一選択のオプション
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <UragakiRadioGroup defaultValue="option-1">
                <div className="flex items-center gap-2">
                  <UragakiRadioGroupItem value="option-1" id="r1" />
                  <UragakiLabel htmlFor="r1" className="text-sm">小さい</UragakiLabel>
                </div>
                <div className="flex items-center gap-2">
                  <UragakiRadioGroupItem value="option-2" id="r2" />
                  <UragakiLabel htmlFor="r2" className="text-sm">普通</UragakiLabel>
                </div>
                <div className="flex items-center gap-2">
                  <UragakiRadioGroupItem value="option-3" id="r3" />
                  <UragakiLabel htmlFor="r3" className="text-sm">大きい</UragakiLabel>
                </div>
              </UragakiRadioGroup>
            </UragakiCardContent>
          </UragakiCard>

          {/* Avatar */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>アバター</UragakiCardTitle>
              <UragakiCardDescription>
                ユーザーアイコン表示
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="flex gap-3 items-center">
                <UragakiAvatar>
                  <UragakiAvatarFallback>田</UragakiAvatarFallback>
                </UragakiAvatar>
                <UragakiAvatar>
                  <UragakiAvatarFallback>鈴</UragakiAvatarFallback>
                </UragakiAvatar>
                <UragakiAvatar>
                  <UragakiAvatarFallback>佐</UragakiAvatarFallback>
                </UragakiAvatar>
                <UragakiAvatar>
                  <UragakiAvatarFallback>山</UragakiAvatarFallback>
                </UragakiAvatar>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Skeleton */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>スケルトン</UragakiCardTitle>
              <UragakiCardDescription>
                ローディングプレースホルダ
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="space-y-3">
                <UragakiSkeleton className="h-4 w-3/4" />
                <UragakiSkeleton className="h-4 w-1/2" />
                <UragakiSkeleton className="h-4 w-5/6" />
                <div className="flex items-center gap-3 pt-2">
                  <UragakiSkeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <UragakiSkeleton className="h-3 w-1/3" />
                    <UragakiSkeleton className="h-3 w-1/2" />
                  </div>
                </div>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Toggle */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>トグル</UragakiCardTitle>
              <UragakiCardDescription>
                押してON/OFF切り替え
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="flex flex-wrap gap-2">
                <UragakiToggle aria-label="太字">
                  <span className="font-bold">B</span>
                </UragakiToggle>
                <UragakiToggle aria-label="斜体">
                  <span className="italic">I</span>
                </UragakiToggle>
                <UragakiToggle aria-label="下線">
                  <span className="underline">U</span>
                </UragakiToggle>
                <UragakiToggle aria-label="取り消し線">
                  <span className="line-through">S</span>
                </UragakiToggle>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Separator */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>セパレーター</UragakiCardTitle>
              <UragakiCardDescription>
                コンテンツの区切り線
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <div className="space-y-2">
                <p className="text-sm">セクション 1</p>
                <UragakiSeparator />
                <p className="text-sm">セクション 2</p>
                <UragakiSeparator />
                <p className="text-sm">セクション 3</p>
              </div>
            </UragakiCardContent>
          </UragakiCard>

          {/* Tooltip */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>ツールチップ</UragakiCardTitle>
              <UragakiCardDescription>
                ホバーで情報表示
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <UragakiTooltipProvider>
                <div className="flex gap-2">
                  <UragakiTooltip>
                    <UragakiTooltipTrigger asChild>
                      <UragakiButton size="sm" variant="outline">
                        ホバーしてね
                      </UragakiButton>
                    </UragakiTooltipTrigger>
                    <UragakiTooltipContent>
                      <p>手書き風ツールチップ！</p>
                    </UragakiTooltipContent>
                  </UragakiTooltip>
                  <UragakiTooltip>
                    <UragakiTooltipTrigger asChild>
                      <UragakiButton size="sm" variant="outline">
                        こっちも
                      </UragakiButton>
                    </UragakiTooltipTrigger>
                    <UragakiTooltipContent>
                      <p>rough.jsで描画中 ✏️</p>
                    </UragakiTooltipContent>
                  </UragakiTooltip>
                </div>
              </UragakiTooltipProvider>
            </UragakiCardContent>
          </UragakiCard>

          {/* Card */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>カード</UragakiCardTitle>
              <UragakiCardDescription>
                紙のようなコンテナ
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <p className="text-sm text-muted-foreground">
                カードはrough.jsを使って手書き風のボーダーを描画します。紙に鉛筆で描いたような雰囲気です。
              </p>
            </UragakiCardContent>
          </UragakiCard>

          {/* More */}
          <UragakiCard>
            <UragakiCardHeader>
              <UragakiCardTitle>その他にも...</UragakiCardTitle>
              <UragakiCardDescription>
                ダイアログ、ドロワー、カレンダーなど
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <p className="text-sm text-muted-foreground mb-3">
                50種類以上のコンポーネントを手書き風に
              </p>
              <UragakiButton variant="outline" size="sm" asChild>
                <Link to="/docs">すべて見る →</Link>
              </UragakiButton>
            </UragakiCardContent>
          </UragakiCard>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 pb-12 text-center">
        <UragakiSeparator className="mb-8" />
        <p className="text-sm text-muted-foreground">
          With great respect to Microsoft SketchFlow, which pioneered sketchy UI for prototyping.
        </p>
      </footer>
    </div>
  );
}
