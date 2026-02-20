import {
  UragakiMenubar,
  UragakiMenubarMenu,
  UragakiMenubarTrigger,
  UragakiMenubarContent,
  UragakiMenubarItem,
  UragakiMenubarSeparator,
  UragakiMenubarShortcut,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function MenubarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          メニューバー (Menubar)
        </h1>
        <p className="text-muted-foreground">
          デスクトップ風のメニューバーです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiMenubar>
  <UragakiMenubarMenu>
    <UragakiMenubarTrigger>ファイル</UragakiMenubarTrigger>
    <UragakiMenubarContent>
      <UragakiMenubarItem>新規作成</UragakiMenubarItem>
      <UragakiMenubarItem>開く</UragakiMenubarItem>
      <UragakiMenubarSeparator />
      <UragakiMenubarItem>保存</UragakiMenubarItem>
    </UragakiMenubarContent>
  </UragakiMenubarMenu>
</UragakiMenubar>`}
      >
        <UragakiMenubar>
          <UragakiMenubarMenu>
            <UragakiMenubarTrigger>ファイル</UragakiMenubarTrigger>
            <UragakiMenubarContent>
              <UragakiMenubarItem>
                新規作成 <UragakiMenubarShortcut>⌘N</UragakiMenubarShortcut>
              </UragakiMenubarItem>
              <UragakiMenubarItem>
                開く <UragakiMenubarShortcut>⌘O</UragakiMenubarShortcut>
              </UragakiMenubarItem>
              <UragakiMenubarSeparator />
              <UragakiMenubarItem>
                保存 <UragakiMenubarShortcut>⌘S</UragakiMenubarShortcut>
              </UragakiMenubarItem>
            </UragakiMenubarContent>
          </UragakiMenubarMenu>
          <UragakiMenubarMenu>
            <UragakiMenubarTrigger>編集</UragakiMenubarTrigger>
            <UragakiMenubarContent>
              <UragakiMenubarItem>
                元に戻す <UragakiMenubarShortcut>⌘Z</UragakiMenubarShortcut>
              </UragakiMenubarItem>
              <UragakiMenubarItem>
                やり直す <UragakiMenubarShortcut>⇧⌘Z</UragakiMenubarShortcut>
              </UragakiMenubarItem>
              <UragakiMenubarSeparator />
              <UragakiMenubarItem>
                コピー <UragakiMenubarShortcut>⌘C</UragakiMenubarShortcut>
              </UragakiMenubarItem>
              <UragakiMenubarItem>
                ペースト <UragakiMenubarShortcut>⌘V</UragakiMenubarShortcut>
              </UragakiMenubarItem>
            </UragakiMenubarContent>
          </UragakiMenubarMenu>
          <UragakiMenubarMenu>
            <UragakiMenubarTrigger>表示</UragakiMenubarTrigger>
            <UragakiMenubarContent>
              <UragakiMenubarItem>ズームイン</UragakiMenubarItem>
              <UragakiMenubarItem>ズームアウト</UragakiMenubarItem>
            </UragakiMenubarContent>
          </UragakiMenubarMenu>
        </UragakiMenubar>
      </ComponentPreview>
    </div>
  );
}
