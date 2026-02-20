import { UragakiProgress } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          プログレス (Progress)
        </h1>
        <p className="text-muted-foreground">
          rough.js のボーダーを使った手書き風プログレスバーです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        description="さまざまな進行度のプログレスバーです。"
        code={`<UragakiProgress value={25} />
<UragakiProgress value={50} />
<UragakiProgress value={75} />`}
      >
        <div className="w-full max-w-md space-y-4">
          <UragakiProgress value={25} />
          <UragakiProgress value={50} />
          <UragakiProgress value={75} />
        </div>
      </ComponentPreview>
    </div>
  );
}
