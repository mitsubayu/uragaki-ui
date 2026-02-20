export function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          インストール
        </h1>
        <p className="text-muted-foreground">
          プロジェクトに uragaki-ui を導入する手順を説明します。
        </p>
      </div>

      {/* Step 1 */}
      <div className="space-y-4">
        <h2 className="font-[var(--font-uragaki-heading)] text-xl font-bold">
          1. Personal Access Token の取得
        </h2>
        <p className="text-sm text-foreground/80">
          GHE で{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-xs">
            read:packages
          </code>{" "}
          権限がついた Personal Access Token を取得してください。
        </p>
      </div>

      {/* Step 2 */}
      <div className="space-y-4">
        <h2 className="font-[var(--font-uragaki-heading)] text-xl font-bold">
          2. ~/.npmrc の設定
        </h2>
        <p className="text-sm text-foreground/80">
          <code className="bg-muted px-1 py-0.5 rounded text-xs">
            ~/.npmrc
          </code>{" "}
          に以下を追記します。
        </p>
        <pre className="bg-muted/50 p-4 rounded text-sm overflow-x-auto">
          <code>{`//npm.github.kddi.com/:_authToken=<取得したトークン>
@yu-izumoto:registry=https://npm.github.kddi.com`}</code>
        </pre>
      </div>

      {/* Step 3 */}
      <div className="space-y-4">
        <h2 className="font-[var(--font-uragaki-heading)] text-xl font-bold">
          3. パッケージのインストール
        </h2>
        <pre className="bg-muted/50 p-4 rounded text-sm overflow-x-auto">
          <code>npm install @yu-izumoto/uragaki-ui</code>
        </pre>
      </div>

      {/* Step 4 */}
      <div className="space-y-4">
        <h2 className="font-[var(--font-uragaki-heading)] text-xl font-bold">
          4. 使い方
        </h2>
        <p className="text-sm text-foreground/80">
          コンポーネントとスタイルシートをインポートして使用します。
        </p>
        <pre className="bg-muted/50 p-4 rounded text-sm overflow-x-auto">
          <code>{`import { UragakiButton, UragakiCard, UragakiInput } from "@yu-izumoto/uragaki-ui";
import "@yu-izumoto/uragaki-ui/styles.css";

function App() {
  return (
    <UragakiCard>
      <UragakiInput placeholder="名前を入力" />
      <UragakiButton>送信</UragakiButton>
    </UragakiCard>
  );
}`}</code>
        </pre>
      </div>

      {/* Peer Dependencies */}
      <div className="space-y-4">
        <h2 className="font-[var(--font-uragaki-heading)] text-xl font-bold">
          必要な依存パッケージ
        </h2>
        <p className="text-sm text-foreground/80">
          以下の peerDependencies が必要です。プロジェクトにインストールされていない場合は追加してください。
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-muted/50 p-2 rounded">
            <code>react</code> &gt;= 18
          </div>
          <div className="bg-muted/50 p-2 rounded">
            <code>react-dom</code> &gt;= 18
          </div>
          <div className="bg-muted/50 p-2 rounded">
            <code>tailwindcss</code> &gt;= 4
          </div>
          <div className="bg-muted/50 p-2 rounded">
            <code>roughjs</code> ^4.6.0
          </div>
          <div className="bg-muted/50 p-2 rounded">
            <code>class-variance-authority</code> ^0.7.0
          </div>
          <div className="bg-muted/50 p-2 rounded">
            <code>clsx</code> ^2.0.0
          </div>
          <div className="bg-muted/50 p-2 rounded">
            <code>tailwind-merge</code> ^3.0.0
          </div>
          <div className="bg-muted/50 p-2 rounded">
            <code>radix-ui</code> ^1.0.0
          </div>
        </div>
      </div>
    </div>
  );
}
