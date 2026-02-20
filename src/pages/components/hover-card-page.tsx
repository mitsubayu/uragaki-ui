import {
  UragakiHoverCard,
  UragakiHoverCardTrigger,
  UragakiHoverCardContent,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function HoverCardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ホバーカード (Hover Card)
        </h1>
        <p className="text-muted-foreground">
          ホバー時にポップアップ表示されるカードです。rough.js の手描きボーダー付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiHoverCard>
  <UragakiHoverCardTrigger>ホバーしてください</UragakiHoverCardTrigger>
  <UragakiHoverCardContent>
    <p>カードの内容</p>
  </UragakiHoverCardContent>
</UragakiHoverCard>`}
      >
        <UragakiHoverCard>
          <UragakiHoverCardTrigger asChild>
            <span className="underline cursor-pointer font-[var(--font-uragaki-body)]">
              @uragaki
            </span>
          </UragakiHoverCardTrigger>
          <UragakiHoverCardContent className="w-64">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold font-[var(--font-uragaki-heading)]">
                @uragaki
              </h4>
              <p className="text-sm text-muted-foreground">
                手描きスタイルのUIコンポーネントライブラリ。rough.js を使用。
              </p>
            </div>
          </UragakiHoverCardContent>
        </UragakiHoverCard>
      </ComponentPreview>
    </div>
  );
}
