import { UragakiToggle } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

export function TogglePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          トグル (Toggle)
        </h1>
        <p className="text-muted-foreground">
          rough.js のボーダーを使った手書き風トグルボタンです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiToggle aria-label="太字">
  <BoldIcon className="size-4" />
</UragakiToggle>`}
      >
        <div className="flex gap-2">
          <UragakiToggle aria-label="太字">
            <BoldIcon className="size-4" />
          </UragakiToggle>
          <UragakiToggle aria-label="斜体">
            <ItalicIcon className="size-4" />
          </UragakiToggle>
          <UragakiToggle aria-label="下線">
            <UnderlineIcon className="size-4" />
          </UragakiToggle>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="テキスト付き"
        code={`<UragakiToggle>テキスト</UragakiToggle>`}
      >
        <UragakiToggle>テキスト</UragakiToggle>
      </ComponentPreview>
    </div>
  );
}
