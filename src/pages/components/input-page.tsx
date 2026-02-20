import { UragakiInput } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          入力フィールド (Input)
        </h1>
        <p className="text-muted-foreground">
          アンダーラインまたはボックスボーダーの手書き風テキスト入力フィールドです。
        </p>
      </div>

      <ComponentPreview
        title="アンダーラインスタイル（デフォルト）"
        code={`<UragakiInput placeholder="Type something..." />`}
      >
        <UragakiInput placeholder="Type something..." className="max-w-xs" />
      </ComponentPreview>

      <ComponentPreview
        title="ボックススタイル"
        code={`<UragakiInput borderStyle="box" placeholder="Box style..." />`}
      >
        <UragakiInput borderStyle="box" placeholder="Box style..." className="max-w-xs" />
      </ComponentPreview>

      <ComponentPreview
        title="無効状態"
        code={`<UragakiInput disabled placeholder="Disabled..." />`}
      >
        <UragakiInput disabled placeholder="Disabled..." className="max-w-xs" />
      </ComponentPreview>
    </div>
  );
}
