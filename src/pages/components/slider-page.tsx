import { UragakiSlider } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function SliderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          スライダー (Slider)
        </h1>
        <p className="text-muted-foreground">
          手書き風スタイルのレンジスライダーです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiSlider defaultValue={[50]} max={100} step={1} />`}
      >
        <UragakiSlider defaultValue={[50]} max={100} step={1} className="w-full max-w-sm" />
      </ComponentPreview>

      <ComponentPreview
        title="範囲選択"
        description="2つのハンドルで範囲を選択できます。"
        code={`<UragakiSlider defaultValue={[25, 75]} max={100} step={1} />`}
      >
        <UragakiSlider defaultValue={[25, 75]} max={100} step={1} className="w-full max-w-sm" />
      </ComponentPreview>
    </div>
  );
}
