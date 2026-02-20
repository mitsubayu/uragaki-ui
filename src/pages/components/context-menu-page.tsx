import {
  UragakiContextMenu,
  UragakiContextMenuTrigger,
  UragakiContextMenuContent,
  UragakiContextMenuItem,
  UragakiContextMenuSeparator,
  UragakiContextMenuLabel,
  UragakiContextMenuShortcut,
  UragakiContextMenuSub,
  UragakiContextMenuSubTrigger,
  UragakiContextMenuSubContent,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function ContextMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          コンテキストメニュー (Context Menu)
        </h1>
        <p className="text-muted-foreground">
          右クリックで表示されるメニューです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiContextMenu>
  <UragakiContextMenuTrigger>右クリック</UragakiContextMenuTrigger>
  <UragakiContextMenuContent>
    <UragakiContextMenuItem>戻る</UragakiContextMenuItem>
    <UragakiContextMenuItem>進む</UragakiContextMenuItem>
    <UragakiContextMenuSeparator />
    <UragakiContextMenuItem>再読み込み</UragakiContextMenuItem>
  </UragakiContextMenuContent>
</UragakiContextMenu>`}
      >
        <UragakiContextMenu>
          <UragakiContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center border border-dashed border-foreground/20 text-sm">
            右クリックで開く
          </UragakiContextMenuTrigger>
          <UragakiContextMenuContent className="w-48">
            <UragakiContextMenuLabel>操作</UragakiContextMenuLabel>
            <UragakiContextMenuSeparator />
            <UragakiContextMenuItem>
              戻る <UragakiContextMenuShortcut>⌘[</UragakiContextMenuShortcut>
            </UragakiContextMenuItem>
            <UragakiContextMenuItem>
              進む <UragakiContextMenuShortcut>⌘]</UragakiContextMenuShortcut>
            </UragakiContextMenuItem>
            <UragakiContextMenuSeparator />
            <UragakiContextMenuSub>
              <UragakiContextMenuSubTrigger>その他</UragakiContextMenuSubTrigger>
              <UragakiContextMenuSubContent className="w-48">
                <UragakiContextMenuItem>ページを保存</UragakiContextMenuItem>
                <UragakiContextMenuItem>印刷</UragakiContextMenuItem>
              </UragakiContextMenuSubContent>
            </UragakiContextMenuSub>
          </UragakiContextMenuContent>
        </UragakiContextMenu>
      </ComponentPreview>
    </div>
  );
}
