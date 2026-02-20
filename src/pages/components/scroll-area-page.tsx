import { UragakiScrollArea } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function ScrollAreaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          スクロールエリア (Scroll Area)
        </h1>
        <p className="text-muted-foreground">
          カスタムスクロールバー付きのスクロール可能なエリアです。rough.js の手描きボーダー付き。
        </p>
      </div>

      <ComponentPreview
        title="縦スクロール"
        code={`<UragakiScrollArea className="h-[200px] w-[300px]">
  <div className="p-4">
    {items.map(item => <div key={item}>{item}</div>)}
  </div>
</UragakiScrollArea>`}
      >
        <UragakiScrollArea className="h-[200px] w-[300px]">
          <div className="p-4 space-y-2">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="text-sm">
                アイテム {i + 1}
              </div>
            ))}
          </div>
        </UragakiScrollArea>
      </ComponentPreview>
    </div>
  );
}
