import {
  UragakiAccordion,
  UragakiAccordionItem,
  UragakiAccordionTrigger,
  UragakiAccordionContent,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function AccordionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          アコーディオン (Accordion)
        </h1>
        <p className="text-muted-foreground">
          手書き風ボーダーの折りたたみ可能なコンテンツセクションです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiAccordion type="single" collapsible>
  <UragakiAccordionItem value="item-1">
    <UragakiAccordionTrigger>セクション 1</UragakiAccordionTrigger>
    <UragakiAccordionContent>
      セクション 1 のコンテンツです。
    </UragakiAccordionContent>
  </UragakiAccordionItem>
  <UragakiAccordionItem value="item-2">
    <UragakiAccordionTrigger>セクション 2</UragakiAccordionTrigger>
    <UragakiAccordionContent>
      セクション 2 のコンテンツです。
    </UragakiAccordionContent>
  </UragakiAccordionItem>
  <UragakiAccordionItem value="item-3">
    <UragakiAccordionTrigger>セクション 3</UragakiAccordionTrigger>
    <UragakiAccordionContent>
      セクション 3 のコンテンツです。
    </UragakiAccordionContent>
  </UragakiAccordionItem>
</UragakiAccordion>`}
      >
        <UragakiAccordion type="single" collapsible className="w-full">
          <UragakiAccordionItem value="item-1">
            <UragakiAccordionTrigger>セクション 1</UragakiAccordionTrigger>
            <UragakiAccordionContent>
              セクション 1 のコンテンツです。ここにテキストや他のコンポーネントを配置できます。
            </UragakiAccordionContent>
          </UragakiAccordionItem>
          <UragakiAccordionItem value="item-2">
            <UragakiAccordionTrigger>セクション 2</UragakiAccordionTrigger>
            <UragakiAccordionContent>
              セクション 2 のコンテンツです。アコーディオンを使って情報を整理できます。
            </UragakiAccordionContent>
          </UragakiAccordionItem>
          <UragakiAccordionItem value="item-3">
            <UragakiAccordionTrigger>セクション 3</UragakiAccordionTrigger>
            <UragakiAccordionContent>
              セクション 3 のコンテンツです。FAQやドキュメントの表示に最適です。
            </UragakiAccordionContent>
          </UragakiAccordionItem>
        </UragakiAccordion>
      </ComponentPreview>
    </div>
  );
}
