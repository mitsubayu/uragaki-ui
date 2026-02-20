import {
  UragakiCommand,
  UragakiCommandInput,
  UragakiCommandList,
  UragakiCommandEmpty,
  UragakiCommandGroup,
  UragakiCommandItem,
  UragakiCommandSeparator,
  UragakiCommandShortcut,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function CommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          コマンド (Command)
        </h1>
        <p className="text-muted-foreground">
          コマンドパレット／検索コンポーネントです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiCommand className="w-[300px]">
  <UragakiCommandInput placeholder="検索..." />
  <UragakiCommandList>
    <UragakiCommandEmpty>見つかりません。</UragakiCommandEmpty>
    <UragakiCommandGroup heading="提案">
      <UragakiCommandItem>カレンダー</UragakiCommandItem>
      <UragakiCommandItem>検索</UragakiCommandItem>
    </UragakiCommandGroup>
  </UragakiCommandList>
</UragakiCommand>`}
      >
        <UragakiCommand className="w-[300px]">
          <UragakiCommandInput placeholder="検索..." />
          <UragakiCommandList>
            <UragakiCommandEmpty>見つかりません。</UragakiCommandEmpty>
            <UragakiCommandGroup heading="提案">
              <UragakiCommandItem>
                カレンダー
                <UragakiCommandShortcut>⌘K</UragakiCommandShortcut>
              </UragakiCommandItem>
              <UragakiCommandItem>検索</UragakiCommandItem>
              <UragakiCommandItem>設定</UragakiCommandItem>
            </UragakiCommandGroup>
            <UragakiCommandSeparator />
            <UragakiCommandGroup heading="設定">
              <UragakiCommandItem>プロフィール</UragakiCommandItem>
              <UragakiCommandItem>アカウント</UragakiCommandItem>
            </UragakiCommandGroup>
          </UragakiCommandList>
        </UragakiCommand>
      </ComponentPreview>
    </div>
  );
}
