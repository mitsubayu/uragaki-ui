import { UragakiButton } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ボタン (Button)
        </h1>
        <p className="text-muted-foreground">
          rough.js のボーダーを使った手書き風スタイルのボタンです。
        </p>
      </div>

      <ComponentPreview
        title="バリアント"
        description="利用可能なすべてのボタンバリアントです。"
        code={`<UragakiButton>Default</UragakiButton>
<UragakiButton variant="outline">Outline</UragakiButton>
<UragakiButton variant="secondary">Secondary</UragakiButton>
<UragakiButton variant="destructive">Destructive</UragakiButton>
<UragakiButton variant="ghost">Ghost</UragakiButton>
<UragakiButton variant="link">Link</UragakiButton>`}
      >
        <UragakiButton>Default</UragakiButton>
        <UragakiButton variant="outline">Outline</UragakiButton>
        <UragakiButton variant="secondary">Secondary</UragakiButton>
        <UragakiButton variant="destructive">Destructive</UragakiButton>
        <UragakiButton variant="ghost">Ghost</UragakiButton>
        <UragakiButton variant="link">Link</UragakiButton>
      </ComponentPreview>

      <ComponentPreview
        title="サイズ"
        description="さまざまなボタンサイズです。"
        code={`<UragakiButton size="xs">Extra Small</UragakiButton>
<UragakiButton size="sm">Small</UragakiButton>
<UragakiButton>Default</UragakiButton>
<UragakiButton size="lg">Large</UragakiButton>`}
      >
        <UragakiButton size="xs">Extra Small</UragakiButton>
        <UragakiButton size="sm">Small</UragakiButton>
        <UragakiButton>Default</UragakiButton>
        <UragakiButton size="lg">Large</UragakiButton>
      </ComponentPreview>

      <ComponentPreview
        title="ラフネス"
        description="手書き風の強度を調整できます。"
        code={`<UragakiButton roughness={0.5}>Smooth</UragakiButton>
<UragakiButton roughness={1.5}>Normal</UragakiButton>
<UragakiButton roughness={3}>Rough</UragakiButton>`}
      >
        <UragakiButton roughness={0.5}>Smooth</UragakiButton>
        <UragakiButton roughness={1.5}>Normal</UragakiButton>
        <UragakiButton roughness={3}>Rough</UragakiButton>
      </ComponentPreview>

      <ComponentPreview
        title="無効状態"
        code={`<UragakiButton disabled>Disabled</UragakiButton>`}
      >
        <UragakiButton disabled>Disabled</UragakiButton>
      </ComponentPreview>
    </div>
  );
}
