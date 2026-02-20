import { UragakiBadge } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function BadgePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          バッジ (Badge)
        </h1>
        <p className="text-muted-foreground">
          rough.js の楕円形ボーダーを使ったスケッチスタイルのバッジです。
        </p>
      </div>

      <ComponentPreview
        title="バリアント"
        code={`<UragakiBadge>Default</UragakiBadge>
<UragakiBadge variant="secondary">Secondary</UragakiBadge>
<UragakiBadge variant="outline">Outline</UragakiBadge>
<UragakiBadge variant="destructive">Destructive</UragakiBadge>`}
      >
        <UragakiBadge>Default</UragakiBadge>
        <UragakiBadge variant="secondary">Secondary</UragakiBadge>
        <UragakiBadge variant="outline">Outline</UragakiBadge>
        <UragakiBadge variant="destructive">Destructive</UragakiBadge>
      </ComponentPreview>
    </div>
  );
}
