import {
  UragakiDrawer,
  UragakiDrawerTrigger,
  UragakiDrawerContent,
  UragakiDrawerHeader,
  UragakiDrawerFooter,
  UragakiDrawerTitle,
  UragakiDrawerDescription,
  UragakiDrawerClose,
} from "@/components/uragaki";
import { UragakiButton } from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function DrawerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ドロワー (Drawer)
        </h1>
        <p className="text-muted-foreground">
          モバイルフレンドリーなボトムドロワーです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiDrawer>
  <UragakiDrawerTrigger asChild>
    <UragakiButton variant="outline">ドロワーを開く</UragakiButton>
  </UragakiDrawerTrigger>
  <UragakiDrawerContent>
    <UragakiDrawerHeader>
      <UragakiDrawerTitle>タイトル</UragakiDrawerTitle>
      <UragakiDrawerDescription>説明文</UragakiDrawerDescription>
    </UragakiDrawerHeader>
    <UragakiDrawerFooter>
      <UragakiDrawerClose asChild>
        <UragakiButton variant="outline">閉じる</UragakiButton>
      </UragakiDrawerClose>
    </UragakiDrawerFooter>
  </UragakiDrawerContent>
</UragakiDrawer>`}
      >
        <UragakiDrawer>
          <UragakiDrawerTrigger asChild>
            <UragakiButton variant="outline">ドロワーを開く</UragakiButton>
          </UragakiDrawerTrigger>
          <UragakiDrawerContent>
            <UragakiDrawerHeader>
              <UragakiDrawerTitle>設定</UragakiDrawerTitle>
              <UragakiDrawerDescription>
                アプリの設定を変更できます。
              </UragakiDrawerDescription>
            </UragakiDrawerHeader>
            <div className="p-4">
              <p className="text-sm text-muted-foreground font-[var(--font-uragaki-body)]">
                ここにコンテンツが入ります。
              </p>
            </div>
            <UragakiDrawerFooter>
              <UragakiDrawerClose asChild>
                <UragakiButton variant="outline">閉じる</UragakiButton>
              </UragakiDrawerClose>
            </UragakiDrawerFooter>
          </UragakiDrawerContent>
        </UragakiDrawer>
      </ComponentPreview>
    </div>
  );
}
