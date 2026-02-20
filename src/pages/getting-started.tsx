export function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          イントロダクション
        </h1>
        <p className="text-muted-foreground">
          Uragaki UI は、shadcn/ui と rough.js をベースにした手書き風UIコンポーネントライブラリです。
          プロトタイピング、ワイヤーフレーム作成、遊び心のあるアプリケーションに最適なスケッチスタイルのコンポーネントを提供します。
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-[var(--font-uragaki-heading)] text-xl font-bold">
          特徴
        </h2>
        <ul className="space-y-2 text-sm list-disc list-inside text-foreground/80">
          <li>rough.js の SVG レンダリングによる手書き風ボーダー</li>
          <li>手書き風フォント（Architects Daughter、Patrick Hand、Caveat）</li>
          <li>グリッドパターン付きの紙テクスチャ背景</li>
          <li>shadcn/ui（Radix UI）ベースの完全なアクセシビリティ対応</li>
          <li>Tailwind CSS v4 によるスタイリング</li>
          <li>ダークモード対応</li>
          <li>安定したシード値レンダリングで描画のちらつきを防止</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="font-[var(--font-uragaki-heading)] text-xl font-bold">
          アーキテクチャ
        </h2>
        <p className="text-sm text-foreground/80">
          各 Uragaki コンポーネントは、対応する shadcn/ui コンポーネントを
          <code className="bg-muted px-1 py-0.5 rounded text-xs mx-1">UragakiBorder</code>
          オーバーレイでラップしています。UragakiBorder は rough.js を使って手書き風の SVG シェイプを
          <code className="bg-muted px-1 py-0.5 rounded text-xs mx-1">pointer-events: none</code>
          の絶対配置オーバーレイとして描画し、元のコンポーネントの操作性を完全に維持します。
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-[var(--font-uragaki-heading)] text-xl font-bold">
          技術スタック
        </h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-muted/50 p-2 rounded">React + TypeScript</div>
          <div className="bg-muted/50 p-2 rounded">Vite</div>
          <div className="bg-muted/50 p-2 rounded">Tailwind CSS v4</div>
          <div className="bg-muted/50 p-2 rounded">shadcn/ui (Radix UI)</div>
          <div className="bg-muted/50 p-2 rounded">rough.js</div>
          <div className="bg-muted/50 p-2 rounded">Google Fonts</div>
        </div>
      </div>
    </div>
  );
}
