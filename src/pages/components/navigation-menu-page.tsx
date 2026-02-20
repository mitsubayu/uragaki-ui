import {
  UragakiNavigationMenu,
  UragakiNavigationMenuList,
  UragakiNavigationMenuItem,
  UragakiNavigationMenuTrigger,
  UragakiNavigationMenuContent,
  UragakiNavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/uragaki";
import { ComponentPreview } from "@/components/docs/component-preview";

export function NavigationMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-[var(--font-uragaki-heading)] text-3xl font-bold mb-2">
          ナビゲーションメニュー (Navigation Menu)
        </h1>
        <p className="text-muted-foreground">
          トップナビゲーション用のメニューです。手描きフォント付き。
        </p>
      </div>

      <ComponentPreview
        title="基本"
        code={`<UragakiNavigationMenu>
  <UragakiNavigationMenuList>
    <UragakiNavigationMenuItem>
      <UragakiNavigationMenuTrigger>はじめに</UragakiNavigationMenuTrigger>
      <UragakiNavigationMenuContent>
        <div className="p-4 w-[300px]">...</div>
      </UragakiNavigationMenuContent>
    </UragakiNavigationMenuItem>
  </UragakiNavigationMenuList>
</UragakiNavigationMenu>`}
      >
        <UragakiNavigationMenu>
          <UragakiNavigationMenuList>
            <UragakiNavigationMenuItem>
              <UragakiNavigationMenuTrigger>はじめに</UragakiNavigationMenuTrigger>
              <UragakiNavigationMenuContent>
                <div className="p-4 w-[300px] space-y-2">
                  <h4 className="font-[var(--font-uragaki-heading)] font-semibold">
                    uragaki-ui
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    手描きスタイルのUIコンポーネントライブラリです。
                  </p>
                </div>
              </UragakiNavigationMenuContent>
            </UragakiNavigationMenuItem>
            <UragakiNavigationMenuItem>
              <UragakiNavigationMenuTrigger>コンポーネント</UragakiNavigationMenuTrigger>
              <UragakiNavigationMenuContent>
                <div className="p-4 w-[300px] space-y-2">
                  <p className="text-sm text-muted-foreground">
                    ボタン、カード、ダイアログなど多数のコンポーネントを提供しています。
                  </p>
                </div>
              </UragakiNavigationMenuContent>
            </UragakiNavigationMenuItem>
            <UragakiNavigationMenuItem>
              <UragakiNavigationMenuLink className={navigationMenuTriggerStyle()}>
                ドキュメント
              </UragakiNavigationMenuLink>
            </UragakiNavigationMenuItem>
          </UragakiNavigationMenuList>
        </UragakiNavigationMenu>
      </ComponentPreview>
    </div>
  );
}
