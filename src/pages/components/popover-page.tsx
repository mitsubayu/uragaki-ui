import {
  UragakiPopover,
  UragakiPopoverTrigger,
  UragakiPopoverContent,
  UragakiButton,
  UragakiInput,
  UragakiLabel,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function PopoverPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ポップオーバー (Popover)
        </h1>
        <p className="text-muted-foreground">
          rough.js のボーダーを使った手書き風のフローティングコンテンツです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiPopover>
  <UragakiPopoverTrigger asChild>
    <UragakiButton variant="outline">ポップオーバーを開く</UragakiButton>
  </UragakiPopoverTrigger>
  <UragakiPopoverContent>
    <div className="grid gap-4">
      <h4 className="font-semibold">設定</h4>
      <p className="text-sm text-muted-foreground">
        ここにフォームやコンテンツを配置できます。
      </p>
    </div>
  </UragakiPopoverContent>
</UragakiPopover>`}
      >
        <UragakiPopover>
          <UragakiPopoverTrigger asChild>
            <UragakiButton variant="outline">ポップオーバーを開く</UragakiButton>
          </UragakiPopoverTrigger>
          <UragakiPopoverContent>
            <div className="grid gap-4">
              <h4 className="font-[var(--font-uragaki-heading)] font-semibold">設定</h4>
              <div className="grid gap-2">
                <UragakiLabel htmlFor="width">幅</UragakiLabel>
                <UragakiInput id="width" placeholder="100px" />
              </div>
            </div>
          </UragakiPopoverContent>
        </UragakiPopover>
      </ComponentPreview>
    </div>
  );
}
