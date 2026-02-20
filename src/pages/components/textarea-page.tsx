import { UragakiTextarea } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function TextareaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          テキストエリア (Textarea)
        </h1>
        <p className="text-muted-foreground">
          手書き風ボーダー付きの複数行テキスト入力です。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiTextarea placeholder="Write something..." />`}
      >
        <UragakiTextarea placeholder="Write something..." className="max-w-sm" />
      </ComponentPreview>
    </div>
  );
}
