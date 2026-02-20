import { useState } from "react";
import {
  UragakiCollapsible,
  UragakiCollapsibleTrigger,
  UragakiCollapsibleContent,
} from "@/components/uragaki";
import { UragakiButton } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function CollapsiblePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          コラプシブル (Collapsible)
        </h1>
        <p className="text-muted-foreground">
          開閉可能なコンテンツセクションです。rough.js の手描きボーダー付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiCollapsible>
  <UragakiCollapsibleTrigger asChild>
    <UragakiButton variant="outline">トグル</UragakiButton>
  </UragakiCollapsibleTrigger>
  <UragakiCollapsibleContent>
    <p>折りたたみコンテンツ</p>
  </UragakiCollapsibleContent>
</UragakiCollapsible>`}
      >
        <CollapsibleDemo />
      </ComponentPreview>
    </div>
  );
}

function CollapsibleDemo() {
  const [open, setOpen] = useState(false);
  return (
    <UragakiCollapsible open={open} onOpenChange={setOpen} className="w-[300px]">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">詳細を表示</span>
        <UragakiCollapsibleTrigger asChild>
          <UragakiButton variant="ghost" size="sm">
            {open ? "閉じる" : "開く"}
          </UragakiButton>
        </UragakiCollapsibleTrigger>
      </div>
      <UragakiCollapsibleContent>
        <div className="mt-2 space-y-2 text-sm">
          <p>これは折りたたみコンテンツです。</p>
          <p>開閉ボタンでトグルできます。</p>
        </div>
      </UragakiCollapsibleContent>
    </UragakiCollapsible>
  );
}
