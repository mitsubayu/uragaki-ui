import { UragakiSeparator } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function SeparatorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          セパレーター (Separator)
        </h1>
        <p className="text-muted-foreground">
          rough.js で描画される手書き風の区切り線です。
        </p>
      </div>

      <ComponentPreview
        title="水平"
        code={`<UragakiSeparator />`}
      >
        <div className="w-full max-w-md space-y-2">
          <p className="text-sm">セクション 1</p>
          <UragakiSeparator />
          <p className="text-sm">セクション 2</p>
          <UragakiSeparator />
          <p className="text-sm">セクション 3</p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="垂直"
        code={`<UragakiSeparator orientation="vertical" />`}
      >
        <div className="flex items-center gap-4 h-8">
          <span className="text-sm">左</span>
          <UragakiSeparator orientation="vertical" />
          <span className="text-sm">中央</span>
          <UragakiSeparator orientation="vertical" />
          <span className="text-sm">右</span>
        </div>
      </ComponentPreview>
    </div>
  );
}
