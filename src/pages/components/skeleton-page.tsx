import { UragakiSkeleton } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function SkeletonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          スケルトン (Skeleton)
        </h1>
        <p className="text-muted-foreground">
          rough.js のボーダーを使った手書き風のローディングプレースホルダーです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        description="コンテンツの読み込み中に表示するスケルトンです。"
        code={`<UragakiSkeleton className="h-4 w-[250px]" />
<UragakiSkeleton className="h-4 w-[200px]" />
<UragakiSkeleton className="h-4 w-[150px]" />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <UragakiSkeleton className="h-4 w-[250px]" />
          <UragakiSkeleton className="h-4 w-[200px]" />
          <UragakiSkeleton className="h-4 w-[150px]" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="カードスケルトン"
        description="カードレイアウトのスケルトンです。"
        code={`<div className="flex items-center gap-4">
  <UragakiSkeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <UragakiSkeleton className="h-4 w-[200px]" />
    <UragakiSkeleton className="h-4 w-[150px]" />
  </div>
</div>`}
      >
        <div className="flex items-center gap-4">
          <UragakiSkeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <UragakiSkeleton className="h-4 w-[200px]" />
            <UragakiSkeleton className="h-4 w-[150px]" />
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
}
