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
} from "@/components/uragaki";

export function HomePage() {
  return (
    <div className="min-h-screen uragaki-paper">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="font-[var(--font-uragaki-heading)] text-6xl font-bold mb-4">
          Uragaki UI
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
                タブ、セレクト、ダイアログ、アラート
              </UragakiCardDescription>
            </UragakiCardHeader>
            <UragakiCardContent>
              <UragakiButton variant="outline" size="sm" asChild>
                <Link to="/docs">すべて見る</Link>
              </UragakiButton>
            </UragakiCardContent>
          </UragakiCard>
        </div>
      </div>
    </div>
  );
}
