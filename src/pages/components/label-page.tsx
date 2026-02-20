import { UragakiLabel, UragakiInput, UragakiCheckbox } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function LabelPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ラベル (Label)
        </h1>
        <p className="text-muted-foreground">
          フォーム要素に関連付ける手書き風のラベルです。
        </p>
      </div>

      <ComponentPreview
        title="入力フィールドとの組み合わせ"
        code={`<div className="grid gap-2">
  <UragakiLabel htmlFor="email">メールアドレス</UragakiLabel>
  <UragakiInput id="email" placeholder="you@example.com" />
</div>`}
      >
        <div className="grid gap-2 w-full max-w-xs">
          <UragakiLabel htmlFor="email">メールアドレス</UragakiLabel>
          <UragakiInput id="email" placeholder="you@example.com" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="チェックボックスとの組み合わせ"
        code={`<div className="flex items-center gap-2">
  <UragakiCheckbox id="terms" />
  <UragakiLabel htmlFor="terms">利用規約に同意する</UragakiLabel>
</div>`}
      >
        <div className="flex items-center gap-2">
          <UragakiCheckbox id="terms" />
          <UragakiLabel htmlFor="terms">利用規約に同意する</UragakiLabel>
        </div>
      </ComponentPreview>
    </div>
  );
}
