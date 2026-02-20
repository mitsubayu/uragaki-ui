import {
  UragakiTooltipProvider,
  UragakiTooltip,
  UragakiTooltipTrigger,
  UragakiTooltipContent,
  UragakiButton,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function TooltipPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ツールチップ (Tooltip)
        </h1>
        <p className="text-muted-foreground">
          手書き風スタイルのホバーツールチップです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiTooltipProvider>
  <UragakiTooltip>
    <UragakiTooltipTrigger asChild>
      <UragakiButton variant="outline">ホバーしてね</UragakiButton>
    </UragakiTooltipTrigger>
    <UragakiTooltipContent>
      <p>ツールチップの内容です</p>
    </UragakiTooltipContent>
  </UragakiTooltip>
</UragakiTooltipProvider>`}
      >
        <UragakiTooltipProvider>
          <UragakiTooltip>
            <UragakiTooltipTrigger asChild>
              <UragakiButton variant="outline">ホバーしてね</UragakiButton>
            </UragakiTooltipTrigger>
            <UragakiTooltipContent>
              <p>ツールチップの内容です</p>
            </UragakiTooltipContent>
          </UragakiTooltip>
        </UragakiTooltipProvider>
      </ComponentPreview>
    </div>
  );
}
