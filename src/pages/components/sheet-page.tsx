import {
  UragakiSheet,
  UragakiSheetTrigger,
  UragakiSheetContent,
  UragakiSheetHeader,
  UragakiSheetTitle,
  UragakiSheetDescription,
  UragakiButton,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function SheetPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          シート (Sheet)
        </h1>
        <p className="text-muted-foreground">
          画面端からスライドして表示される手書き風パネルです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiSheet>
  <UragakiSheetTrigger asChild>
    <UragakiButton variant="outline">シートを開く</UragakiButton>
  </UragakiSheetTrigger>
  <UragakiSheetContent>
    <UragakiSheetHeader>
      <UragakiSheetTitle>シートのタイトル</UragakiSheetTitle>
      <UragakiSheetDescription>
        ここに説明文を入れます。
      </UragakiSheetDescription>
    </UragakiSheetHeader>
    <div className="p-4">
      <p>シートのコンテンツです。</p>
    </div>
  </UragakiSheetContent>
</UragakiSheet>`}
      >
        <UragakiSheet>
          <UragakiSheetTrigger asChild>
            <UragakiButton variant="outline">シートを開く</UragakiButton>
          </UragakiSheetTrigger>
          <UragakiSheetContent>
            <UragakiSheetHeader>
              <UragakiSheetTitle>シートのタイトル</UragakiSheetTitle>
              <UragakiSheetDescription>
                サイドパネルとして設定やナビゲーションを表示できます。
              </UragakiSheetDescription>
            </UragakiSheetHeader>
            <div className="p-4">
              <p className="text-sm">シートのコンテンツがここに表示されます。</p>
            </div>
          </UragakiSheetContent>
        </UragakiSheet>
      </ComponentPreview>
    </div>
  );
}
