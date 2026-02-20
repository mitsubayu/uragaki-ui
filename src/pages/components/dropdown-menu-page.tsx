import {
  UragakiDropdownMenu,
  UragakiDropdownMenuTrigger,
  UragakiDropdownMenuContent,
  UragakiDropdownMenuItem,
  UragakiDropdownMenuLabel,
  UragakiDropdownMenuSeparator,
  UragakiButton,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function DropdownMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ドロップダウンメニュー (Dropdown Menu)
        </h1>
        <p className="text-muted-foreground">
          手書き風スタイルのドロップダウンメニューです。
        </p>
      </div>

      <ComponentPreview
        title="デフォルト"
        code={`<UragakiDropdownMenu>
  <UragakiDropdownMenuTrigger asChild>
    <UragakiButton variant="outline">メニューを開く</UragakiButton>
  </UragakiDropdownMenuTrigger>
  <UragakiDropdownMenuContent>
    <UragakiDropdownMenuLabel>アカウント</UragakiDropdownMenuLabel>
    <UragakiDropdownMenuSeparator />
    <UragakiDropdownMenuItem>プロフィール</UragakiDropdownMenuItem>
    <UragakiDropdownMenuItem>設定</UragakiDropdownMenuItem>
    <UragakiDropdownMenuSeparator />
    <UragakiDropdownMenuItem>ログアウト</UragakiDropdownMenuItem>
  </UragakiDropdownMenuContent>
</UragakiDropdownMenu>`}
      >
        <UragakiDropdownMenu>
          <UragakiDropdownMenuTrigger asChild>
            <UragakiButton variant="outline">メニューを開く</UragakiButton>
          </UragakiDropdownMenuTrigger>
          <UragakiDropdownMenuContent>
            <UragakiDropdownMenuLabel>アカウント</UragakiDropdownMenuLabel>
            <UragakiDropdownMenuSeparator />
            <UragakiDropdownMenuItem>プロフィール</UragakiDropdownMenuItem>
            <UragakiDropdownMenuItem>設定</UragakiDropdownMenuItem>
            <UragakiDropdownMenuSeparator />
            <UragakiDropdownMenuItem>ログアウト</UragakiDropdownMenuItem>
          </UragakiDropdownMenuContent>
        </UragakiDropdownMenu>
      </ComponentPreview>
    </div>
  );
}
